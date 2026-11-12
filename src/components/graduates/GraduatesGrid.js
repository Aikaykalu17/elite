"use client";

import Image from "next/image";
import { useState } from "react";

const filters = ["All players", "Currently Pro", "In Academy"];

export default function GraduatesGrid({ players }) {
  const [active, setActive] = useState(filters[0]);

  const visible =
    active === filters[0]
      ? players
      : players.filter((player) => player.category === active);

  return (
    <div>
      <div
        role="group"
        aria-label="Filter players by career stage"
        className="flex flex-wrap gap-2"
      >
        {filters.map((filter) => {
          const pressed = filter === active;
          return (
            <button
              key={filter}
              type="button"
              aria-pressed={pressed}
              onClick={() => setActive(filter)}
              className={`min-h-11 rounded-full border px-5 font-semibold transition-colors ${
                pressed
                  ? "border-accent bg-accent text-on-accent"
                  : "border-field text-fg hover:bg-fg/10"
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>
      <p className="mt-4 text-muted" aria-live="polite">
        Showing {visible.length} {visible.length === 1 ? "player" : "players"}
      </p>

      <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {visible.map((player) => (
          <li
            key={player.id}
            className="flex flex-col overflow-hidden rounded-3xl border border-line bg-surface"
          >
            <div className="relative aspect-4/3 bg-surface-2">
              <Image
                src={player.image}
                alt={`Portrait of ${player.name}`}
                fill
                sizes="(min-width: 1024px) 22rem, (min-width: 640px) 45vw, 100vw"
                className="object-cover object-top"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h2 className="font-display text-h3 text-fg">{player.name}</h2>
              <p className="mt-1 text-sm font-semibold text-accent-ink">
                {player.category}
                {player.league ? `, ${player.league}` : ""}
              </p>
              <p className="mt-3 text-muted">{player.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
