// Deterministic date helpers. Names are spelled out on purpose rather than
// using toLocaleDateString(), whose output differs between Node and browsers
// and can cause hydration mismatches.

const WEEKDAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const MONTH_ABBR = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];

/** Today's date in Nigeria (WAT) as YYYY-MM-DD, whatever the server's timezone. */
export function todayInLagos(now = new Date()) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Africa/Lagos",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
}

/** "2026-11-28" -> "Saturday 28 November 2026" */
export function formatLongDate(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  const weekday = WEEKDAYS[new Date(Date.UTC(y, m - 1, d)).getUTCDay()];
  return `${weekday} ${d} ${MONTHS[m - 1]} ${y}`;
}

/** "2026-11-28" -> "28 November" */
export function formatDayMonth(iso) {
  const [, m, d] = iso.split("-").map(Number);
  return `${d} ${MONTHS[m - 1]}`;
}

/** "08:00" -> "8:00 AM", "16:30" -> "4:30 PM" */
export function formatTime(hhmm) {
  const [h, min] = hhmm.split(":").map(Number);
  const suffix = h >= 12 ? "PM" : "AM";
  const hour = h % 12 === 0 ? 12 : h % 12;
  return `${hour}:${String(min).padStart(2, "0")} ${suffix}`;
}

/** "Aug 26, 2026" -> "2026-08-26". Returns null if it can't be read. */
export function parseDisplayDate(text) {
  const match = /^([A-Za-z]{3})[a-z]*\.?\s+(\d{1,2}),\s*(\d{4})$/.exec(
    String(text).trim(),
  );
  if (!match) return null;
  const month = MONTH_ABBR.indexOf(match[1].toLowerCase());
  if (month === -1) return null;
  return `${match[3]}-${String(month + 1).padStart(2, "0")}-${match[2].padStart(2, "0")}`;
}
