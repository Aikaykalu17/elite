import GalleryGrid from "@/components/gallery/GalleryGrid";
import PageHeader from "@/components/ui/PageHeader";
import media from "@/data/media";

export const metadata = {
  title: "Gallery",
  description: "Photos and videos from training, match days and events.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader title="Gallery" intro="Moments that define us." />
      <section aria-label="Photos and videos">
        <div className="page-wrap">
          <GalleryGrid media={media} />
        </div>
      </section>
    </>
  );
}
