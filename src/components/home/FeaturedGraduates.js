import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import featuredGraduates from "@/data/featuredGraduates";

export default function FeaturedGraduates() {
  const featured = featuredGraduates.slice(0, 4);

  return (
    <section aria-labelledby="graduates-title" className="pb-20 md:pb-28">
      <div className="page-wrap">
        <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-2">
          <h2 id="graduates-title" className="font-display text-h2 text-fg">
            Our graduates
          </h2>
          <Link
            href="/graduates"
            className="inline-flex min-h-11 items-center gap-2 font-semibold text-fg underline decoration-accent decoration-2 underline-offset-8 transition-colors hover:text-accent-ink"
          >
            View all graduates
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-x-4 gap-y-9 md:grid-cols-4 lg:gap-x-6">
          {featured.map((player) => (
            <li key={player.id}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-surface-2">
                <Image
                  src={player.image}
                  alt={player.name}
                  fill
                  sizes="(min-width: 1024px) 17rem, (min-width: 768px) 25vw, 50vw"
                  className="object-cover object-top"
                />
              </div>
              <h3 className="mt-4 font-display text-[1.375rem] leading-tight font-bold text-fg">
                {player.name}
              </h3>
              <p className="mt-1 text-sm text-fg">{player.club}</p>
              <p className="text-sm text-muted">{player.league}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
