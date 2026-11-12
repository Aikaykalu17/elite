"use client";

import Image from "next/image";
import { useState } from "react";
import { Play } from "lucide-react";

import MediaLightbox, { toSlides } from "@/components/ui/MediaLightbox";

const INITIAL = 12;

const tabs = [
  { type: "image", label: "Photos" },
  { type: "video", label: "Videos" },
];

export default function GalleryGrid({ media }) {
  const [type, setType] = useState("image");
  const [showAll, setShowAll] = useState(false);
  const [index, setIndex] = useState(-1);

  const ofType = media.filter((item) => item.mediaType === type);
  const visible = showAll ? ofType : ofType.slice(0, INITIAL);

  function selectType(next) {
    setType(next);
    setShowAll(false);
  }

  return (
    <div>
      <div role="group" aria-label="Media type" className="flex gap-2">
        {tabs.map(({ type: t, label }) => {
          const pressed = t === type;
          return (
            <button
              key={t}
              type="button"
              aria-pressed={pressed}
              onClick={() => selectType(t)}
              className={`min-h-11 rounded-full border px-6 font-semibold transition-colors ${
                pressed
                  ? "border-accent bg-accent text-on-accent"
                  : "border-field text-fg hover:bg-fg/10"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      <ul
        id="gallery-grid"
        className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4"
      >
        {visible.map((item, i) => (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => setIndex(i)}
              aria-label={
                item.mediaType === "video"
                  ? `Play video: ${item.alt}`
                  : `View larger: ${item.alt}`
              }
              className="group relative block aspect-[4/3] w-full overflow-hidden rounded-2xl bg-surface-2"
            >
              <Image
                src={item.mediaType === "video" ? item.thumbnail : item.src}
                alt=""
                fill
                sizes="(min-width: 1024px) 17rem, (min-width: 768px) 30vw, 50vw"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
              {item.mediaType === "video" ? (
                <span className="absolute inset-0 grid place-items-center">
                  <span className="grid size-14 place-items-center rounded-full bg-band/90 text-white">
                    <Play className="size-6 translate-x-0.5" aria-hidden="true" />
                  </span>
                </span>
              ) : null}
            </button>
          </li>
        ))}
      </ul>

      {ofType.length > INITIAL ? (
        <button
          type="button"
          onClick={() => setShowAll((v) => !v)}
          aria-expanded={showAll}
          aria-controls="gallery-grid"
          className="mt-8 min-h-11 rounded-full border border-field px-6 font-semibold text-fg transition-colors hover:bg-fg/10"
        >
          {showAll ? `Show fewer ${type}s` : `Show all ${ofType.length} ${type}s`}
        </button>
      ) : null}

      <MediaLightbox
        slides={toSlides(visible)}
        index={index}
        onClose={() => setIndex(-1)}
      />
    </div>
  );
}
