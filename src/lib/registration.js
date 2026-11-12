// Shared by the application form (client) and the API route (server), so both
// enforce exactly the same rules.

import { todayInLagos } from "./dates";

export const MIN_AGE = 7;
export const MAX_AGE = 25;

export const positionGroups = [
  {
    label: "Goalkeeper",
    options: [{ value: "GK", label: "Goalkeeper" }],
  },
  {
    label: "Defender",
    options: [
      { value: "Defender/CB", label: "Centre back (CB)" },
      { value: "Defender/RB", label: "Right back (RB)" },
      { value: "Defender/LB", label: "Left back (LB)" },
    ],
  },
  {
    label: "Midfielder",
    options: [
      { value: "Midfielder/DMF", label: "Defensive midfielder (DMF)" },
      { value: "Midfielder/CMF", label: "Central midfielder (CMF)" },
      { value: "Midfielder/AMF", label: "Attacking midfielder (AMF)" },
    ],
  },
  {
    label: "Winger",
    options: [
      { value: "Winger/RW", label: "Right winger (RW)" },
      { value: "Winger/LW", label: "Left winger (LW)" },
    ],
  },
  {
    label: "Striker",
    options: [
      { value: "Striker/SS", label: "Second striker (SS)" },
      { value: "Striker/CF", label: "Centre forward (CF)" },
    ],
  },
];

export const nigeriaStates = [
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "FCT (Abuja)",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
];

const positionValues = new Set(
  positionGroups.flatMap((g) => g.options.map((o) => o.value)),
);

/** Whole years between a YYYY-MM-DD birth date and a YYYY-MM-DD "today". */
export function calculateAge(dob, today = todayInLagos()) {
  const [by, bm, bd] = dob.split("-").map(Number);
  const [ty, tm, td] = today.split("-").map(Number);
  let age = ty - by;
  if (tm < bm || (tm === bm && td < bd)) age--;
  return age;
}

function isRealDate(iso) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(iso)) return false;
  const [y, m, d] = iso.split("-").map(Number);
  const date = new Date(Date.UTC(y, m - 1, d));
  return (
    date.getUTCFullYear() === y &&
    date.getUTCMonth() === m - 1 &&
    date.getUTCDate() === d
  );
}

const clean = (v) => (typeof v === "string" ? v.trim() : "");

/**
 * Validates an application. Returns { ok, errors, values }.
 * `errors` maps field name -> message, `values` holds the trimmed input.
 */
export function validateApplication(input, today = todayInLagos()) {
  const values = {
    fullName: clean(input?.fullName),
    phoneNumber: clean(input?.phoneNumber),
    email: clean(input?.email),
    dob: clean(input?.dob),
    position: clean(input?.position),
    state: clean(input?.state),
    message: clean(input?.message),
  };
  const errors = {};

  if (!values.fullName) errors.fullName = "Enter the player's full name.";
  else if (values.fullName.length > 120)
    errors.fullName = "Use 120 characters or fewer.";

  if (!values.phoneNumber) errors.phoneNumber = "Enter a phone number.";
  else if (!/^[+()\d\s-]{7,20}$/.test(values.phoneNumber))
    errors.phoneNumber =
      "Enter a valid phone number, for example +234 810 000 0000.";

  if (!values.email) errors.email = "Enter an email address.";
  else if (
    values.email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)
  )
    errors.email = "Enter a valid email address, for example name@example.com.";

  if (!values.dob) errors.dob = "Enter the player's date of birth.";
  else if (!isRealDate(values.dob) || values.dob > today)
    errors.dob = "Enter a valid date of birth.";
  else {
    const age = calculateAge(values.dob, today);
    if (age < MIN_AGE || age > MAX_AGE)
      errors.dob = `Applicants must be between ${MIN_AGE} and ${MAX_AGE} years old.`;
  }

  if (!values.position) errors.position = "Choose a position.";
  else if (!positionValues.has(values.position))
    errors.position = "Choose a position from the list.";

  if (!values.state) errors.state = "Choose a state.";
  else if (!nigeriaStates.includes(values.state))
    errors.state = "Choose a state from the list.";

  if (values.message.length > 2000)
    errors.message = "Use 2,000 characters or fewer.";

  return { ok: Object.keys(errors).length === 0, errors, values };
}

export function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
