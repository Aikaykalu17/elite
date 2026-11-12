"use client";

import { useState } from "react";

const INITIAL = 5;

// The letter is always shown, so the outcome never depends on colour alone.
const outcomes = {
  W: { label: "Win", style: "border-ok text-ok" },
  D: { label: "Draw", style: "border-warn text-warn" },
  L: { label: "Loss", style: "border-bad text-bad" },
};

export default function ResultList({ results }) {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? results : results.slice(0, INITIAL);

  return (
    <div>
      <ul id="result-rows" className="border-t border-line">
        {visible.map((result) => {
          const outcome = outcomes[result.result];
          return (
            <li
              key={result.id}
              className="grid grid-cols-[5.25rem_1fr_auto] items-center gap-x-4 border-b border-line py-4"
            >
              <time
                dateTime={result.date}
                className="font-display text-[1.375rem] leading-none font-bold whitespace-nowrap text-fg"
              >
                {result.displayDate}
              </time>
              <p className="text-fg">
                {result.homeTeam}{" "}
                <span className="font-semibold tabular-nums">
                  {result.homeScore}&ndash;{result.awayScore}
                </span>{" "}
                {result.opponent}
              </p>
              <span
                className={`grid size-9 place-items-center rounded-full border-2 text-sm font-bold ${outcome.style}`}
              >
                <span aria-hidden="true">{result.result}</span>
                <span className="sr-only">{outcome.label}</span>
              </span>
            </li>
          );
        })}
      </ul>
      {results.length > INITIAL ? (
        <button
          type="button"
          onClick={() => setShowAll((v) => !v)}
          aria-expanded={showAll}
          aria-controls="result-rows"
          className="mt-5 min-h-11 rounded-full border border-field px-5 font-semibold text-fg transition-colors hover:bg-fg/10"
        >
          {showAll ? "Show fewer results" : `Show all ${results.length} results`}
        </button>
      ) : null}
    </div>
  );
}
