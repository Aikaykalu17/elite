import Image from "next/image";
import {
  Brain,
  Clock,
  Compass,
  Dumbbell,
  HeartHandshake,
  Target,
} from "lucide-react";

import { ButtonLink } from "@/components/ui/Button";
import PageHeader from "@/components/ui/PageHeader";
import { getNextTrial, nextTrial } from "@/data/trial";
import { formatLongDate, formatTime } from "@/lib/dates";

// Hourly regeneration keeps the "next trial" block current.
export const revalidate = 3600;

export const metadata = {
  title: "Programs and training",
  description:
    "Age groups, monthly trial details and the training focus at Elite Football Club All Stars.",
};

const ageGroups = [
  { name: "U-13", stage: "Junior" },
  { name: "U-15", stage: "Youth" },
  { name: "U-17", stage: "Youth" },
  { name: "U-20", stage: "Senior" },
  { name: "Senior", stage: "Senior" },
];

const focus = [
  {
    Icon: Target,
    title: "Technical skills",
    text: "Ball control, passing, shooting and more.",
  },
  {
    Icon: HeartHandshake,
    title: "Emotional intelligence",
    text: "Understanding the game and making smart decisions.",
  },
  {
    Icon: Dumbbell,
    title: "Physical development",
    text: "Speed, strength, agility and endurance.",
  },
  {
    Icon: Brain,
    title: "Mental toughness",
    text: "Confidence, focus and resilience.",
  },
  {
    Icon: Compass,
    title: "Character and values",
    text: "Discipline, respect, teamwork and leadership.",
  },
];

export default function ProgramsPage() {
  const trial = getNextTrial();

  return (
    <>
      <PageHeader
        title="Programs and training"
        intro="Structured programs for every level."
      />

      <section aria-labelledby="ages-title" className="pb-20 md:pb-28">
        <div className="page-wrap">
          <h2 id="ages-title" className="font-display text-h2 text-fg">
            Age groups
          </h2>
          <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 md:gap-4">
            {ageGroups.map(({ name, stage }) => (
              <li
                key={name}
                className="rounded-2xl border border-line bg-surface p-5"
              >
                <p className="font-display text-4xl leading-none font-bold text-fg">
                  {name}
                </p>
                <p className="mt-2 text-muted">{stage}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="trial-title" className="pb-20 md:pb-28">
        <div className="page-wrap grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <h2 id="trial-title" className="font-display text-h2 text-fg">
              Trials and tryouts
            </h2>
            <p className="mt-5 text-lg text-muted">
              Trials are held every month. Check below for the next date.
            </p>
            <dl className="mt-7 grid gap-3">
              <div className="flex items-center gap-3">
                <Clock className="size-5 shrink-0 text-fg" aria-hidden="true" />
                <dt className="text-muted">Time</dt>
                <dd className="font-semibold text-fg">
                  <time dateTime={nextTrial.time}>
                    {formatTime(nextTrial.time)}
                  </time>
                </dd>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="size-5 shrink-0 text-fg" aria-hidden="true" />
                <dt className="text-muted">Duration</dt>
                <dd className="font-semibold text-fg">
                  <time dateTime="PT2H">2 hours</time>
                </dd>
              </div>
            </dl>
          </div>

          <article
            aria-labelledby="next-trial-title"
            className="overflow-hidden rounded-[1.75rem] border border-line bg-surface lg:col-span-7"
          >
            <div className="relative aspect-[16/7] bg-surface-2">
              <Image
                src="/images/outdoorFootball.webp"
                alt="The outdoor pitch at Turf Arena, where trials are held."
                fill
                sizes="(min-width: 1024px) 40rem, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-7 sm:p-9">
              <h3
                id="next-trial-title"
                className="font-display text-h2 leading-none text-fg"
              >
                {trial ? "Next trial" : "Next trial date to be announced"}
              </h3>
              {trial ? (
                <dl className="mt-6 grid gap-4 sm:grid-cols-[auto_1fr] sm:gap-x-8">
                  <dt className="text-muted">Date</dt>
                  <dd className="font-semibold text-fg">
                    <time dateTime={trial.date}>
                      {formatLongDate(trial.date)}
                    </time>
                  </dd>
                  <dt className="text-muted">Time</dt>
                  <dd className="font-semibold text-fg">
                    <time dateTime={trial.time}>{formatTime(trial.time)}</time>
                  </dd>
                  <dt className="text-muted">Venue</dt>
                  <dd className="font-semibold text-fg">
                    {trial.venue}, {trial.area}
                  </dd>
                  <dt className="text-muted">What to bring</dt>
                  <dd className="font-semibold text-fg">
                    {trial.bring.join(", ")}
                  </dd>
                </dl>
              ) : (
                <p className="mt-4 text-lg text-muted">
                  You can apply now and we will contact you once the date is
                  confirmed.
                </p>
              )}
              <ButtonLink href="/form" className="mt-8">
                Apply for a trial
              </ButtonLink>
            </div>
          </article>
        </div>
      </section>

      <section aria-labelledby="focus-title">
        <div className="page-wrap">
          <h2 id="focus-title" className="font-display text-h2 text-fg">
            Training focus
          </h2>
          <ul className="mt-8 grid gap-x-12 md:grid-cols-2">
            {focus.map(({ Icon, title, text }) => (
              <li
                key={title}
                className="flex gap-4 border-t border-line py-6"
              >
                <Icon
                  className="mt-1 size-7 shrink-0 text-fg"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-display text-h3 text-fg">{title}</h3>
                  <p className="mt-1 text-muted">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
