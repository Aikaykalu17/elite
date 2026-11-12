"use client";

import { useState } from "react";

const INITIAL = 5;

export default function FixtureList({ fixtures }) {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? fixtures : fixtures.slice(0, INITIAL);

  if (fixtures.length === 0) {
    return (
      <p className="rounded-2xl border border-line bg-surface p-6 text-muted">
        No fixtures are scheduled right now. Check back soon.
      </p>
    );
  }

  return (
    <div>
      <ul id="fixture-rows" className="border-t border-line">
        {visible.map((fixture) => (
          <li
            key={fixture.id}
            className="grid grid-cols-[5.25rem_1fr_auto] items-center gap-x-4 border-b border-line py-4"
          >
            <time
              dateTime={fixture.date}
              className="font-display text-[1.375rem] leading-none font-bold whitespace-nowrap text-fg"
            >
              {fixture.displayDate}
            </time>
            <div>
              <p className="font-semibold text-fg">vs {fixture.opponent}</p>
              <p className="text-sm text-muted">{fixture.venue}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-fg">
                {fixture.venueType === "H" ? "Home" : "Away"}
              </p>
              <p className="text-sm text-muted">
                <time dateTime={fixture.time}>{fixture.displayTime}</time>
              </p>
            </div>
          </li>
        ))}
      </ul>
      {fixtures.length > INITIAL ? (
        <button
          type="button"
          onClick={() => setShowAll((v) => !v)}
          aria-expanded={showAll}
          aria-controls="fixture-rows"
          className="mt-5 min-h-11 rounded-full border border-field px-5 font-semibold text-fg transition-colors hover:bg-fg/10"
        >
          {showAll ? "Show fewer fixtures" : `Show all ${fixtures.length} fixtures`}
        </button>
      ) : null}
    </div>
  );
}
