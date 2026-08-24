"use client";
import { useState } from "react";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Reveal from "./Reveal";

import Image from "next/image";
import TextExpander from "./TextExpander";

function NewsList({ news }) {
  const [showAll, setShowAll] = useState(false);
  const [index, setIndex] = useState(-1);

  const visibleMediaFiles = showAll ? news : news.slice(0, 4);

  const slides = visibleMediaFiles.map((item) =>
    item.mediaType === "video"
      ? { type: "video-slide", videoId: item.videoId }
      : { src: item.src },
  );

  return (
    <div className="flex flex-col items-center w-full">
      <ul className="flex flex-col gap-4 md:grid md:grid-cols-3">
        {visibleMediaFiles.map((visibleMediaFile, i) => (
          <Reveal key={visibleMediaFile.id}>
            <li key={visibleMediaFile.id} className="flex flex-col gap-4 ">
              <Image
                src={
                  visibleMediaFile.mediaType === "video"
                    ? visibleMediaFile.thumbnail
                    : visibleMediaFile.src
                }
                alt={visibleMediaFile.alt}
                width={1402}
                height={1122}
                sizes="(max-width: 768px) 50vw, 300px"
                onClick={() => setIndex(i)}
                className="rounded-lg object-cover object-top cursor-pointer fade-in w-full"
                style={{ animationDelay: `${i * 100}ms`, height: "auto" }}
              />
              <div className="flex flex-col gap-2">
                <div>
                  <p className="text-[#061426] font-bold text-sm inline-block">
                    {visibleMediaFile.title}{" "}
                    <span className="text-[0.6875rem] fade-in">
                      <TextExpander>{visibleMediaFile.story}</TextExpander>
                    </span>
                  </p>
                </div>
                <span className="text-gray-600 font-bold text-xs">
                  {visibleMediaFile.date}
                </span>
              </div>
            </li>
          </Reveal>
        ))}
      </ul>

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

      {visibleMediaFiles.length > 2 && (
        <button
          onClick={() => setShowAll((prev) => !prev)}
          className="px-6 py-2 text-[#061426] bg-[#F5B800] text-xs rounded-sm  transition-all duration-300 ease-ou hover:bg-[#061426] hover:text-[#F5B800] cursor-pointer"
          type="button"
          aria-label="Show More"
        >
          {showAll ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
}

export default NewsList;
