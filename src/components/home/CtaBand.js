import { ButtonLink } from "@/components/ui/Button";

export default function CtaBand() {
  return (
    <section aria-labelledby="cta-title">
      <div
        data-tone="dark"
        className="page-wrap flex flex-col gap-8 rounded-[2rem] px-7 py-12 sm:px-12 md:flex-row md:items-center md:justify-between md:gap-12 md:py-14"
      >
        <div className="max-w-xl">
          <h2 id="cta-title" className="font-display text-h2 text-fg">
            Ready to start your journey?
          </h2>
          <p className="mt-3 text-lg text-muted">
            Join Elite Football Club All Stars today and take the first step
            towards your dream.
          </p>
        </div>
        <ButtonLink href="/form" size="lg" className="self-start md:self-auto">
          Apply for a trial
        </ButtonLink>
      </div>
    </section>
  );
}
