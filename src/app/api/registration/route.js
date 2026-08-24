import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const data = await request.json();

  console.log("Resend API Key:", process.env.RESEND_API_KEY);
  try {
    await resend.emails.send({
      from: "Elite FC Trial Applications <onboarding@resend.dev>",
      to: "kaluamoguaikay17@gmail.com",
      subject: "Trial Application",
      html: `
        <p><strong>Full Name:</strong> ${data.fullName}</p>
        <p><strong>Date of Birth:</strong> ${data.dob}</p>
        <p><strong>Position:</strong> ${data.position}</p>
        <p><strong>State:</strong> ${data.state}</p>
        <p><strong>Phone Number:</strong> ${data.phoneNumber}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Message:</strong> ${data.message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}
