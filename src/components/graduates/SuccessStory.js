import Image from "next/image";

export default function SuccessStory() {
  return (
    <section aria-labelledby="story-title">
      <div
        data-tone="dark"
        className="page-wrap grid items-center gap-8 overflow-hidden rounded-[2rem] md:grid-cols-5 md:gap-0"
      >
        <div className="relative aspect-[4/3] md:col-span-2 md:aspect-auto md:min-h-[26rem] md:h-full">
          <Image
            src="/images/ebuka.webp"
            alt="Okoronkwo Chukwuebuka in his club kit."
            fill
            sizes="(min-width: 768px) 28rem, 100vw"
            className="object-cover object-top"
          />
        </div>
        <div className="px-7 pb-10 sm:px-12 md:col-span-3 md:py-14">
          <h2 id="story-title" className="font-display text-h2 text-fg">
            From Elite to Europe
          </h2>
          <p className="mt-2 font-semibold text-accent-ink">
            Okoronkwo Chukwuebuka
          </p>
          <p className="mt-5 max-w-xl text-lg text-muted">
            Joined Elite at the age of 17. His hard work and dedication earned
            him moves to FC Van and West Armenia, both in Armenia, and later to
            FC Rashvan in Tajikistan.
          </p>
        </div>
      </div>
    </section>
  );
}
