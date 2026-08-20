"use client";

import Link from "next/link";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi2";
import featuredGraduates from "@/data/featuredGraduates";

function FeaturedGraduates() {
  const featured = featuredGraduates.slice(0, 4);

  return (
    <section aria-label="Player Profiles" className="w-full bg-white py-4">
      <div className="w-[90%] mx-auto flex flex-col gap-6">
        <div className="flex flex-row justify-between items-center">
          <h1 className="font-bold">OUR GRADUATES</h1>
          <Link
            href="/graduates"
            className="text-xs font-bold flex flex-row justify-between items-center"
          >
            VIEW ALL <HiArrowRight />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {featured.map((player) => (
            <article
              key={player.id}
              className="border border-slate-200 rounded-lg overflow-hidden"
            >
              <div className="relative w-full aspect-square">
                <Image
                  src={player.image}
                  alt={player.name}
                  fill
                  // sizes="(max-width: 768px) 45vw, 200px"
                  sizes="128px"
                  className="object-cover object-top"
                />
              </div>
              <div className="p-2 flex flex-col gap-1">
                <h2 className="text-xs">
                  <strong>Name:</strong> {player.name}
                </h2>
                <p className="text-xs">
                  <strong>Club:</strong> {player.club}
                </p>
                <p className="text-xs">
                  <strong>League:</strong> {player.league}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedGraduates;
