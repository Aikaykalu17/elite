"use client";

import Hero from "@/app/components/Hero";
import Stats from "@/app/components/Stats";
import AboutPreview from "@/app/components/AboutPreview";
import FeaturedGraduates from "@/app/components/FeaturedGraduates";
import UpcomingTrial from "@/app/components/UpcomingTrial";
import CTABanner from "@/app/components/CTABanner";

import Reveal from "@/app/components/Reveal";

export default function Home() {
  return (
    <>
      <Reveal>
        <Hero />
      </Reveal>

      <Reveal>
        <Stats />
      </Reveal>
      <Reveal>
        <AboutPreview />
      </Reveal>
      <Reveal>
        <FeaturedGraduates />
      </Reveal>
      <Reveal>
        <UpcomingTrial />
      </Reveal>
      <Reveal>
        <CTABanner />
      </Reveal>
    </>
  );
}
