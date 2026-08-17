"use client";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

function MediaList({ media }) {
  const [activeFilter, setActiveFilter] = useState("image");
  const [showAll, setShowAll] = useState(false);
  const [index, setIndex] = useState(-1);

  function handleFilter(category) {
    setActiveFilter(category);
    setShowAll(false);
  }

  const filteredMediaFiles = media.filter(
    (item) => item.mediaType === activeFilter,
  );

  const visibleMediaFiles = showAll
    ? filteredMediaFiles
    : filteredMediaFiles.slice(0, 8);

  const slides = visibleMediaFiles.map((item) =>
    item.mediaType === "video"
      ? { type: "video-slide", videoId: item.videoId }
      : { src: item.src },
  );

  function getButtonStyle(category) {
    return activeFilter === category
      ? "px-12 py-2 text-[#061426] bg-[#F5B800] text-xs rounded-sm"
      : "px-12 py-2 text-white bg-[#061426] text-xs rounded-sm border border-[#F5B800]";
  }

  return (
    <div className="flex flex-col items-center gap-4 pb-6 border border-[#F5B800] rounded-sm">
      <div className="flex justify-between gap-2 border border-[#F5B800] p-2 rounded w-full ">
        <button
          onClick={() => handleFilter("image")}
          className={getButtonStyle("image")}
        >
          PHOTOS
        </button>
        <div className="h-auto w-px bg-[#F5B800]"></div>
        <button
          onClick={() => handleFilter("video")}
          className={getButtonStyle("video")}
        >
          VIDEOS
        </button>
      </div>

      <div className="grid grid-cols-2 gap-1">
        {visibleMediaFiles.map((item, i) => (
          <Image
            key={item.id}
            src={item.mediaType === "video" ? item.thumbnail : item.src}
            alt={item.alt}
            width={1402}
            height={1122}
            sizes="(max-width: 768px) 50vw, 300px"
            onClick={() => setIndex(i)}
            className="rounded-lg object-cover cursor-pointer fade-in"
            style={{ animationDelay: `${i * 100}ms` }}
          />
        ))}
      </div>

      {filteredMediaFiles.length > 4 && (
        <button
          onClick={() => setShowAll((prev) => !prev)}
          className="px-6 py-2 text-[#061426] bg-[#F5B800] text-xs rounded-sm"
          type="button"
          aria-label="Show More"
        >
          {showAll
            ? `Show less ${activeFilter}s`
            : `View more ${activeFilter}s`}
        </button>
      )}

      <Lightbox
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        render={{
          slide: ({ slide }) =>
            slide.type === "video-slide" ? (
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${slide.videoId}`}
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : undefined,
        }}
      />
    </div>
  );
}

export default MediaList;
