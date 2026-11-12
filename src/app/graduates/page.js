import GraduatesGrid from "@/components/graduates/GraduatesGrid";
import SuccessStory from "@/components/graduates/SuccessStory";
import PageHeader from "@/components/ui/PageHeader";
import { players } from "@/data/players";

export const metadata = {
  title: "Our graduates",
  description:
    "Players who came through Elite Football Club All Stars, and where they play now.",
};

export default function GraduatesPage() {
  return (
    <>
      <PageHeader title="Our graduates" intro="Our pride. Our future." />
      <section aria-label="Players" className="pb-20 md:pb-28">
        <div className="page-wrap">
          <GraduatesGrid players={players} />
        </div>
      </section>
      <SuccessStory />
    </>
  );
}
