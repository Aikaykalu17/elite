import Image from "next/image";
import { BadgeCheck, ShieldCheck, Star, Users } from "lucide-react";

import PageHeader from "@/components/ui/PageHeader";

export const metadata = {
  title: "About us",
  description:
    "Our story, mission, vision and values, and the facilities where Elite Football Club All Stars train.",
};

const values = [
  { label: "Discipline", Icon: ShieldCheck },
  { label: "Teamwork", Icon: Users },
  { label: "Integrity", Icon: BadgeCheck },
  { label: "Excellence", Icon: Star },
];

const facilities = [
  {
    src: "/images/indoorFootball.webp",
    caption: "Indoor training hall",
    alt: "Indoor training facility of Elite FC, with a full-size pitch under a high roof.",
  },
  {
    src: "/images/outdoorFootball.webp",
    caption: "Outdoor pitch",
    alt: "Outdoor training facility of Elite FC, with a grass pitch and training cones.",
  },
  {
    src: "/images/exteriorView.webp",
    caption: "Academy building",
    alt: "Exterior view of the Elite FC training facility and academy building.",
  },
  {
    src: "/images/modernIndoor.webp",
    caption: "Modern indoor facility",
    alt: "Modern indoor training facility of Elite FC.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About us"
        intro="Raising disciplined, skilled and confident young footballers who excel on and off the pitch."
      />

      <section aria-labelledby="story-title" className="pb-20 md:pb-28">
        <div className="page-wrap grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <div>
            <h2 id="story-title" className="font-display text-h2 text-fg">
              Our story
            </h2>
            <p className="mt-5 max-w-lg text-lg text-muted">
              Elite Football Club All Stars was founded in 2018 with a vision to
              raise disciplined, skilled and confident young footballers who
              will excel both on and off the pitch. We believe in hard work,
              integrity, teamwork and continuous growth.
            </p>
          </div>
          <div className="relative aspect-16/10 overflow-hidden rounded-[1.75rem] bg-surface-2">
            <Image
              src="/images/eliteTrainingEntrance.webp"
              alt="The entrance gate of the Elite FC All Stars training facility."
              fill
              priority
              sizes="(min-width: 768px) 36rem, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section aria-label="Mission and vision" className="pb-20 md:pb-28">
        <div className="page-wrap grid gap-5 md:grid-cols-2 md:gap-6">
          <div className="rounded-[1.75rem] border border-line bg-surface p-7 sm:p-9">
            <h2 className="font-display text-h3 text-fg">Our mission</h2>
            <p className="mt-3 text-lg text-muted">
              To discover and develop young talents into world-class footballers
              and leaders.
            </p>
          </div>
          <div className="rounded-[1.75rem] border border-line bg-surface p-7 sm:p-9">
            <h2 className="font-display text-h3 text-fg">Our vision</h2>
            <p className="mt-3 text-lg text-muted">
              To be one of the top football academies in Africa, producing
              champions for the world.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="values-title" className="pb-20 md:pb-28">
        <div className="page-wrap">
          <h2 id="values-title" className="font-display text-h2 text-fg">
            Our values
          </h2>
          <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4 md:gap-x-6">
            {values.map(({ label, Icon }) => (
              <li key={label} className="border-t-2 border-accent pt-5">
                <Icon className="size-7 text-fg" aria-hidden="true" />
                <p className="mt-3 font-display text-h3 font-bold text-fg">
                  {label}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="facilities-title">
        <div className="page-wrap">
          <h2 id="facilities-title" className="font-display text-h2 text-fg">
            Our facilities
          </h2>
          <ul className="mt-8 grid gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-6">
            {facilities.map(({ src, alt, caption }) => (
              <li key={src}>
                <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-surface-2">
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="(min-width: 1024px) 17rem, (min-width: 640px) 45vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <p className="mt-3 font-semibold text-fg">{caption}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
