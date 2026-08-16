import media from "@/data/media";
import MediaList from "../components/MediaList";

function page() {
  return (
    <section className="w-full mt-20 bg-[#061426]">
      <div className="flex flex-col gap-4 items-center w-[95%] mx-auto py-4">
        <h1 className="text-white font-bold">GALLERY</h1>
        <p className="text-white text-xs font-bold">Moments that define us.</p>
        <MediaList media={media} />
      </div>
    </section>
  );
}

export default page;
