import Image from "next/image";

import { ButtonLink } from "@/components/ui/Button";
import { formatDayMonth, formatTime } from "@/lib/dates";

export default function Hero({ trial }) {
  return (
    <section aria-labelledby="hero-title" className="pt-28 pb-16 sm:pt-32 lg:pb-24">
      <div className="page-wrap grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <h1
            id="hero-title"
            className="rise font-display text-display text-fg"
          >
            Building champions on and off the pitch
          </h1>
          <p
            className="rise mt-6 max-w-xl text-lg text-muted sm:text-xl"
            style={{ "--delay": "120ms" }}
          >
            Developing talents, building character and raising champions at
            Elite Football Club All Stars in Abuja.
          </p>
          <div
            className="rise mt-9 flex flex-wrap gap-3"
            style={{ "--delay": "240ms" }}
          >
            <ButtonLink href="/form" size="lg">
              Apply for a trial
            </ButtonLink>
            <ButtonLink href="/about-us" variant="outline" size="lg">
              About the academy
            </ButtonLink>
          </div>
        </div>

        <div
          className="rise relative mx-auto w-full max-w-md pb-8 lg:col-span-5 lg:max-w-none"
          style={{ "--delay": "200ms" }}
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-surface-2">
            <Image
              src="/images/osidark.webp"
              alt="An Elite FC player in the club's blue kit strikes the ball in a floodlit stadium."
              fill
              priority
              sizes="(min-width: 1024px) 40vw, (min-width: 448px) 28rem, 100vw"
              className="object-cover object-[58%_35%]"
            />
          </div>

          <div className="absolute inset-x-4 bottom-0 rounded-2xl border border-line bg-surface p-4 shadow-[0_18px_40px_-18px_rgb(2_8_20/0.45)] sm:inset-x-6 sm:p-5">
            <p className="font-display text-xl leading-tight font-bold text-fg">
              {trial ? "Next trial" : "Next trial date coming soon"}
            </p>
            {trial ? (
              <p className="mt-1 text-sm text-muted">
                <time dateTime={`${trial.date}T${trial.time}`}>
                  {formatDayMonth(trial.date)}, {formatTime(trial.time)}
                </time>
                <br />
                {trial.venue}, {trial.area}
              </p>
            ) : (
              <p className="mt-1 text-sm text-muted">
                Apply now and we will contact you when it is confirmed.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
