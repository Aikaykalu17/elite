"use client";

import { useState } from "react";

function ResultsList({ results }) {
  const [showAll, setShowAll] = useState(false);
  const visibleResults = showAll ? results : results.slice(0, 3);

  const resultColors = {
    W: "text-green-500 text-xs font-extrabold",
    D: "text-amber-500 text-xs font-extrabold",
    L: "text-red-600 text-xs font-extrabold",
  };

  return (
    <>
      <div className="flex flex-col items-center gap-2 border border-slate-300 rounded-sm pb-2">
        <ul className="list-none flex flex-col gap-1 w-full">
          {visibleResults.map((result, i) => (
            <li
              key={result.id}
              className="grid grid-cols-[3rem_1fr_2rem] items-center gap-2 p-2 border border-slate-300 rounded fade-in"
              style={{ animationDelay: `${Math.min(i * 100, 800)}ms` }}
            >
              <p className="text-xs">
                <time dateTime={result.date}>{result.displayDate}</time>
              </p>
              <div className="flex flex-col gap-0.5">
                <p className="text-[0.71875rem]">
                  {result.homeTeam} {result.homeScore} vs {result.awayScore}{" "}
                  {result.opponent}
                </p>
              </div>
              <p className={resultColors[result.result]}>{result.result}</p>
            </li>
          ))}
        </ul>
        {results.length > 3 && (
          <button
            onClick={() => setShowAll((prev) => !prev)}
            type="button"
            aria-label="Show Table"
            className="bg-[#061426] text-[#F5B800] text-xs rounded-sm self-center px-6 py-2"
          >
            {showAll ? "Show less results" : "View more results"}
          </button>
        )}
      </div>
    </>
  );
}

export default ResultsList;
