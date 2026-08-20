"use client";
import { motion } from "framer-motion";

import Hero from "./components/Hero";
import Stats from "./components/Stats";
import AboutPreview from "./components/AboutPreview";
import FeaturedGraduates from "./components/FeaturedGraduates";
import UpcomingTrial from "./components/UpcomingTrial";
import CTABanner from "./components/CTABanner";

import HeaderWrapper from "./components/HeadWrapper";
import Reveal from "./components/Reveal";

export default function Home() {
  return (
    <>
      <Reveal>
        <Hero />
      </Reveal>

      <HeaderWrapper />

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
