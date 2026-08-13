"use client";

import Hero from "./components/Hero";
import Stats from "./components/Stats";
import AboutPreview from "./components/AboutPreview";
import FeaturedGraduates from "./components/FeaturedGraduates";
import UpcomingTrial from "./components/UpcomingTrial";
import CTABanner from "./components/CTABanner";

import Footer from "@/app/components/Footer";

import HeaderWrapper from "./components/HeadWrapper";

export default function Home() {
  return (
    <>
      <Hero />
      <HeaderWrapper />
      <Stats />
      <AboutPreview />
      <FeaturedGraduates />
      <UpcomingTrial />
      <CTABanner />
      <Footer />
    </>
  );
}
