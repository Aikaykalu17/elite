"use client";

import { useRef, useState } from "react";
import { CheckCircle, ChevronDown, LoaderCircle } from "lucide-react";

import { Button, ButtonLink } from "@/components/ui/Button";
import {
  MAX_AGE,
  MIN_AGE,
  nigeriaStates,
  positionGroups,
  validateApplication,
} from "@/lib/registration";
import { todayInLagos } from "@/lib/dates";

const fieldClass =
  "block min-h-12 w-full rounded-xl border border-field bg-surface px-4 text-base text-fg placeholder:text-muted aria-[invalid=true]:border-bad aria-[invalid=true]:border-2 disabled:opacity-60";

function Field({ id, label, optional, error, hint, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block font-semibold text-fg">
        {label}
        {optional ? (
          <span className="font-normal text-muted"> (optional)</span>
        ) : null}
      </label>
      {hint ? (
        <p id={`${id}-hint`} className="mb-1.5 text-sm text-muted">
          {hint}
        </p>
      ) : null}
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-sm font-semibold text-bad">
          {error}
        </p>
      ) : null}
    </div>
  );
}

// Links a field to its hint and/or error text for screen readers.
function describedBy(id, { hint = false, error = false }) {
  const ids = [hint && `${id}-hint`, error && `${id}-error`].filter(Boolean);
  return ids.length ? ids.join(" ") : undefined;
}

export default function RegistrationForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const formRef = useRef(null);
  const successRef = useRef(null);

  async function handleSubmit(event) {
    event.preventDefault();
    if (status === "sending") return;

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const { ok, errors: found } = validateApplication(data);

    setServerError("");
    setErrors(found);

    if (!ok) {
      // Move focus to the first field with a problem.
      const firstInvalid = Object.keys(found)[0];
      formRef.current?.elements[firstInvalid]?.focus();
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch("/api/registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        if (result.errors) {
          setErrors(result.errors);
          setStatus("idle");
          return;
        }
        throw new Error(result.error || "Request failed");
      }

      setStatus("success");
      // Move focus to the confirmation so screen reader users hear it.
      requestAnimationFrame(() => successRef.current?.focus());
    } catch (error) {
      setServerError(
        error instanceof Error && error.message !== "Request failed"
          ? error.message
          : "Something went wrong. Please check your connection and try again.",
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        role="status"
        className="rounded-[1.75rem] border border-line bg-surface p-7 outline-none sm:p-9"
      >
        <CheckCircle className="size-10 text-ok" aria-hidden="true" />
        <h2 className="mt-4 font-display text-h2 text-fg">
          Application received
        </h2>
        <p className="mt-3 text-lg text-muted">
          We&rsquo;ll reach out via the email you provided if you&rsquo;re
          selected for a trial. Please avoid submitting multiple applications.
          Duplicate entries may lead to automatic disqualification.
        </p>
        <ButtonLink href="/" variant="outline" className="mt-7">
          Back to home
        </ButtonLink>
      </div>
    );
  }

  const sending = status === "sending";
  const hasErrors = Object.keys(errors).length > 0;
  const today = todayInLagos();

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      aria-labelledby="form-title"
      className="rounded-[1.75rem] border border-line bg-surface p-6 sm:p-9"
    >
      <h2 id="form-title" className="font-display text-h2 text-fg">
        Trial application
      </h2>
      <p className="mt-2 text-muted">
        All fields are required unless marked optional.
      </p>

      {/* Honeypot: hidden from people, tempting to bots. Real users never fill it. */}
      <div aria-hidden="true" className="absolute -left-[9999px]">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <Field id="fullName" label="Full name" error={errors.fullName}>
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            aria-invalid={errors.fullName ? "true" : undefined}
            aria-describedby={describedBy("fullName", { error: !!errors.fullName })}
            disabled={sending}
            className={fieldClass}
          />
        </Field>

        <Field id="phoneNumber" label="Phone number" error={errors.phoneNumber}>
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            aria-invalid={errors.phoneNumber ? "true" : undefined}
            aria-describedby={describedBy("phoneNumber", { error: !!errors.phoneNumber })}
            disabled={sending}
            className={fieldClass}
          />
        </Field>

        <Field id="email" label="Email address" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            aria-invalid={errors.email ? "true" : undefined}
            aria-describedby={describedBy("email", { error: !!errors.email })}
            disabled={sending}
            className={fieldClass}
          />
        </Field>

        <Field
          id="dob"
          label="Date of birth"
          error={errors.dob}
          hint={`Applicants must be ${MIN_AGE} to ${MAX_AGE} years old.`}
        >
          <input
            id="dob"
            name="dob"
            type="date"
            max={today}
            autoComplete="bday"
            aria-invalid={errors.dob ? "true" : undefined}
            aria-describedby={describedBy("dob", { hint: true, error: !!errors.dob })}
            disabled={sending}
            className={fieldClass}
          />
        </Field>

        <Field id="position" label="Position" error={errors.position}>
          <div className="relative">
            <select
              id="position"
              name="position"
              defaultValue=""
              aria-invalid={errors.position ? "true" : undefined}
              aria-describedby={describedBy("position", { error: !!errors.position })}
              disabled={sending}
              className={`${fieldClass} appearance-none pr-11`}
            >
              <option value="" disabled>
                Select a position
              </option>
              {positionGroups.map((group) => (
                <optgroup key={group.label} label={group.label}>
                  {group.options.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute top-1/2 right-4 size-5 -translate-y-1/2 text-fg"
              aria-hidden="true"
            />
          </div>
        </Field>

        <Field id="state" label="State" error={errors.state}>
          <div className="relative">
            <select
              id="state"
              name="state"
              defaultValue=""
              autoComplete="address-level1"
              aria-invalid={errors.state ? "true" : undefined}
              aria-describedby={describedBy("state", { error: !!errors.state })}
              disabled={sending}
              className={`${fieldClass} appearance-none pr-11`}
            >
              <option value="" disabled>
                Select a state
              </option>
              {nigeriaStates.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute top-1/2 right-4 size-5 -translate-y-1/2 text-fg"
              aria-hidden="true"
            />
          </div>
        </Field>

        <div className="sm:col-span-2">
          <Field
            id="message"
            label="Tell us about yourself"
            optional
            error={errors.message}
            hint="Preferred foot, height, weight, years of experience, previous club or academy, other positions you play, and anything else we should know."
          >
            <textarea
              id="message"
              name="message"
              rows={5}
              aria-invalid={errors.message ? "true" : undefined}
              aria-describedby={describedBy("message", { hint: true, error: !!errors.message })}
              disabled={sending}
              className={`${fieldClass} resize-y py-3`}
            />
          </Field>
        </div>
      </div>

      <div aria-live="polite" className="mt-6">
        {hasErrors ? (
          <p role="alert" className="font-semibold text-bad">
            Please fix the highlighted fields and submit again.
          </p>
        ) : null}
        {serverError ? (
          <p role="alert" className="font-semibold text-bad">
            {serverError}
          </p>
        ) : null}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
        <Button type="submit" size="lg" disabled={sending}>
          {sending ? (
            <>
              <LoaderCircle className="size-5 animate-spin" aria-hidden="true" />
              Sending&hellip;
            </>
          ) : (
            "Submit application"
          )}
        </Button>
        <p className="max-w-sm text-sm text-muted">
          Your details are emailed to our team so we can review your
          application and contact you.
        </p>
      </div>
    </form>
  );
}
