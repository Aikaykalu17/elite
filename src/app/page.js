import AboutPreview from "@/components/home/AboutPreview";
import CtaBand from "@/components/home/CtaBand";
import FeaturedGraduates from "@/components/home/FeaturedGraduates";
import Hero from "@/components/home/Hero";
import StatsBand from "@/components/home/StatsBand";
import TrialAndTestimonial from "@/components/home/TrialAndTestimonial";
import { getNextTrial } from "@/data/trial";

// Regenerate hourly so the "next trial" panels switch to "date to be
// announced" on their own once the trial date has passed.
export const revalidate = 3600;

export const metadata = {
  title: { absolute: "Elite Football Academy | Abuja, Nigeria" },
};

export default function Home() {
  const trial = getNextTrial();

  return (
    <>
      <Hero trial={trial} />
      <StatsBand />
      <AboutPreview />
      <FeaturedGraduates />
      <TrialAndTestimonial trial={trial} />
      <CtaBand />
    </>
  );
}
