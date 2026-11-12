"use client";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

/** Turns media items (photos and YouTube videos) into lightbox slides. */
export function toSlides(items) {
  return items.map((item) =>
    item.mediaType === "video"
      ? { type: "video-slide", videoId: item.videoId, title: item.alt }
      : { src: item.src, alt: item.alt },
  );
}

export default function MediaLightbox({ slides, index, onClose }) {
  return (
    <Lightbox
      slides={slides}
      open={index >= 0}
      index={index}
      close={onClose}
      render={{
        slide: ({ slide, rect }) => {
          if (slide.type !== "video-slide") return undefined;
          // Fit a 16:9 player inside the available slide area.
          const width = Math.min(rect.width, (rect.height * 16) / 9);
          return (
            <iframe
              width={width}
              height={(width * 9) / 16}
              src={`https://www.youtube-nocookie.com/embed/${slide.videoId}`}
              title={slide.title ? `Video: ${slide.title}` : "Video"}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          );
        },
      }}
    />
  );
}
