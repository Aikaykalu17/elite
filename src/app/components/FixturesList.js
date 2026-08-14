"use client";
import { useState } from "react";

function FixturesList({ fixtures }) {
  const [showAll, setShowAll] = useState(false);
  const visibleFixtures = showAll ? fixtures : fixtures.slice(0, 3);

  return (
    <>
      <div className="flex flex-col items-center gap-2 border border-slate-300 rounded-sm pb-2">
        <ul className="list-none flex flex-col gap-1 w-full">
          {visibleFixtures.map((fixture) => (
            <li
  key={fixture.id}
  className="grid grid-cols-[3rem_1fr_3rem_3rem] items-center gap-2 p-2 border border-slate-300 rounded"
>
  <p className="text-xs">
    <time dateTime={fixture.date}>{fixture.displayDate}</time>
  </p>
  <div className="flex flex-col gap-0.5">
    <p className="text-[0.71875rem]">vs {fixture.opponent}</p>
    <p className="text-[0.71875rem]">{fixture.venue}</p>
  </div>
  {fixture.venueType === "H" ? (
    <span className="text-[0.71875rem]">Home</span>
  ) : (
    <span className="text-[0.71875rem]">Away</span>
  )}
  <p className="text-xs">
    <time dateTime={fixture.time}>{fixture.displayTime}</time>
  </p>
</li>
          ))}
        </ul>
        {fixtures.length > 3 && (
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="h-8 bg-[#061426] text-[#F5B800] w-48 text-xs rounded-sm self-center"
          >
            {showAll ? "Show less fixtures" : "View more fixtures"}
          </button>
        )}
      </div>
    </>
  );
}

export default FixturesList;
