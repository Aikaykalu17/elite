import Image from "next/image";

import { ButtonLink } from "@/components/ui/Button";
import { formatLongDate, formatTime } from "@/lib/dates";

export default function TrialAndTestimonial({ trial }) {
  return (
    <section className="pb-20 md:pb-28">
      <div className="page-wrap grid gap-5 lg:grid-cols-2 lg:gap-6">
        <div
          aria-labelledby="trial-title"
          role="group"
          className="flex flex-col rounded-[1.75rem] border border-line bg-surface p-7 sm:p-9"
        >
          <h2 id="trial-title" className="font-display text-h2 text-fg">
            Upcoming trial
          </h2>

          {trial ? (
            <dl className="mt-7 grid gap-5 sm:grid-cols-[auto_1fr] sm:gap-x-8">
              <dt className="text-muted">Date</dt>
              <dd className="font-semibold text-fg">
                <time dateTime={trial.date}>{formatLongDate(trial.date)}</time>
              </dd>
              <dt className="text-muted">Time</dt>
              <dd className="font-semibold text-fg">
                <time dateTime={trial.time}>{formatTime(trial.time)}</time>
              </dd>
              <dt className="text-muted">Venue</dt>
              <dd className="font-semibold text-fg">
                {trial.venue}, {trial.area}
              </dd>
            </dl>
          ) : (
            <p className="mt-7 text-lg text-muted">
              The next trial date will be announced soon. You can apply now and
              we will contact you once it is confirmed.
            </p>
          )}

          <p className="mt-6 text-muted">
            Open to ages 7&ndash;25. Limited slots available.
          </p>
          <div className="mt-auto pt-8">
            <ButtonLink href="/form">Apply for a trial</ButtonLink>
          </div>
        </div>

        <div
          aria-labelledby="testimonial-title"
          role="group"
          className="flex flex-col rounded-[1.75rem] bg-surface-2 p-7 sm:p-9"
        >
          <h2 id="testimonial-title" className="font-display text-h2 text-fg">
            Parent testimonial
          </h2>
          <figure className="mt-7 flex flex-1 flex-col">
            <blockquote>
              <p className="font-display text-[1.75rem] leading-tight font-semibold text-fg sm:text-[2rem]">
                &ldquo;Elite Football Club All Stars didn&rsquo;t just improve
                my son&rsquo;s game; it shaped his character and
                discipline.&rdquo;
              </p>
            </blockquote>
            <figcaption className="mt-auto flex items-center gap-4 pt-8">
              <Image
                src="/images/flore.webp"
                alt=""
                width={720}
                height={438}
                sizes="64px"
                className="size-16 rounded-full object-cover object-top"
              />
              <span>
                <span className="block font-semibold text-fg">
                  Mrs. Florence
                </span>
                <span className="block text-sm text-muted">Parent</span>
              </span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
