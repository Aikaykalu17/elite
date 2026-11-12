import { Resend } from "resend";

import { escapeHtml, validateApplication } from "@/lib/registration";

// Where applications are emailed. Set APPLICATIONS_TO_EMAIL in your hosting
// environment to change the recipient without touching code.
const DEFAULT_TO = "kaluamoguaikay17@gmail.com";
const DEFAULT_FROM = "Elite FC Trial Applications <onboarding@resend.dev>";

const row = (label, value) =>
  `<p><strong>${label}:</strong> ${escapeHtml(value || "Not provided").replace(/\n/g, "<br />")}</p>`;

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json(
      { success: false, error: "Invalid request." },
      { status: 400 },
    );
  }

  // Honeypot: real visitors never see or fill this field. Pretend it worked.
  if (typeof body?.company === "string" && body.company.trim() !== "") {
    return Response.json({ success: true });
  }

  // Never trust the browser: re-check everything on the server.
  const { ok, errors, values } = validateApplication(body);
  if (!ok) {
    return Response.json({ success: false, errors }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set; cannot send applications.");
    return Response.json(
      {
        success: false,
        error:
          "Applications are temporarily unavailable. Please try again later or contact us directly.",
      },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);
  // Strip line breaks so a name can never inject extra email headers.
  const subjectName = values.fullName.replace(/\s+/g, " ").slice(0, 80);

  const { error } = await resend.emails.send({
    from: process.env.APPLICATIONS_FROM_EMAIL || DEFAULT_FROM,
    to: process.env.APPLICATIONS_TO_EMAIL || DEFAULT_TO,
    replyTo: values.email,
    subject: `Trial application: ${subjectName}`,
    html: [
      row("Full name", values.fullName),
      row("Date of birth", values.dob),
      row("Position", values.position),
      row("State", values.state),
      row("Phone number", values.phoneNumber),
      row("Email", values.email),
      row("Message", values.message),
    ].join("\n"),
  });

  if (error) {
    // Log the reason server-side only; never expose provider details to visitors.
    console.error("Resend failed to send application:", error.message ?? error);
    return Response.json(
      { success: false, error: "We couldn't send your application. Please try again." },
      { status: 502 },
    );
  }

  return Response.json({ success: true });
}
