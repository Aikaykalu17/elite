"use client";

import Image from "next/image";
import { useState } from "react";
import { Play } from "lucide-react";

import MediaLightbox, { toSlides } from "@/components/ui/MediaLightbox";

const INITIAL = 6;
const EXCERPT_WORDS = 24;

function Story({ id, text }) {
  const [open, setOpen] = useState(false);
  const words = text.split(" ");
  const canExpand = words.length > EXCERPT_WORDS;
  const shown =
    open || !canExpand ? text : `${words.slice(0, EXCERPT_WORDS).join(" ")}\u2026`;

  return (
    <>
      <p id={`story-${id}`} className="mt-3 text-muted">
        {shown}
      </p>
      {canExpand ? (
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={`story-${id}`}
          className="mt-2 inline-flex min-h-11 items-center font-semibold text-fg underline decoration-accent decoration-2 underline-offset-8 transition-colors hover:text-accent-ink"
        >
          {open ? "Show less" : "Read more"}
        </button>
      ) : null}
    </>
  );
}

export default function NewsList({ news }) {
  const [showAll, setShowAll] = useState(false);
  const [index, setIndex] = useState(-1);
  const visible = showAll ? news : news.slice(0, INITIAL);

  return (
    <div>
      <ul
        id="news-list"
        className="grid items-start gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
      >
        {visible.map((item, i) => (
          <li key={item.id}>
            <article>
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-label={
                  item.mediaType === "video"
                    ? `Play video: ${item.title}`
                    : `View larger image: ${item.title}`
                }
                className="group relative block aspect-[4/3] w-full overflow-hidden rounded-2xl bg-surface-2"
              >
                <Image
                  src={item.mediaType === "video" ? item.thumbnail : item.src}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 22rem, (min-width: 640px) 45vw, 100vw"
                  className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                />
                {item.mediaType === "video" ? (
                  <span className="absolute inset-0 grid place-items-center">
                    <span className="grid size-14 place-items-center rounded-full bg-band/90 text-white">
                      <Play className="size-6 translate-x-0.5" aria-hidden="true" />
                    </span>
                  </span>
                ) : null}
              </button>
              <p className="mt-4 text-sm text-muted">
                <time dateTime={item.isoDate ?? undefined}>{item.date}</time>
              </p>
              <h2 className="mt-1 font-display text-h3 text-fg">{item.title}</h2>
              <Story id={item.id} text={item.story} />
            </article>
          </li>
        ))}
      </ul>

      {news.length > INITIAL ? (
        <button
          type="button"
          onClick={() => setShowAll((v) => !v)}
          aria-expanded={showAll}
          aria-controls="news-list"
          className="mt-12 min-h-11 rounded-full border border-field px-6 font-semibold text-fg transition-colors hover:bg-fg/10"
        >
          {showAll ? "Show fewer stories" : `Show all ${news.length} stories`}
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
