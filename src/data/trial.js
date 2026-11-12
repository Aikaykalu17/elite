import { todayInLagos } from "@/lib/dates";

// The next open trial. This is the ONE place to update when a new trial date
// is set: the home page, programs page and hero all read from here.
// Once the date has passed, the site automatically switches to
// "date to be announced" until this is updated.
export const nextTrial = {
  date: "2026-11-28", // YYYY-MM-DD
  time: "08:00", // 24-hour HH:MM
  venue: "Turf Arena",
  area: "Wuse, Abuja",
  ageRange: "Open to ages 7\u201325. Limited slots available.",
  bring: ["Boots", "Shin guards", "Water", "Towel"],
};

export function getNextTrial(today = todayInLagos()) {
  return nextTrial.date >= today ? nextTrial : null;
}
