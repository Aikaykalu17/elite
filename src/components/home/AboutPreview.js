import Image from "next/image";

import { ButtonLink } from "@/components/ui/Button";

export default function AboutPreview() {
  return (
    <section aria-labelledby="about-title" className="py-20 md:py-28">
      <div className="page-wrap grid items-center gap-10 md:grid-cols-2 md:gap-14">
        <div className="relative aspect-[3/2] overflow-hidden rounded-[1.75rem] bg-surface-2">
          <Image
            src="/images/newplayers.webp"
            alt="Six Elite FC players stand with their backs to the camera in matching blue and yellow kits, numbered 11, 6, 9, 14, 8 and 5."
            fill
            sizes="(min-width: 768px) 36rem, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <h2 id="about-title" className="font-display text-h2 text-fg">
            Elite Football Club All Stars
          </h2>
          <p className="mt-5 max-w-lg text-lg text-muted">
            We are a leading football academy in Nigeria, committed to
            discovering, nurturing and developing young talents for greatness
            on and off the pitch.
          </p>
          <ButtonLink href="/about-us" variant="outline" className="mt-8">
            About the academy
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
