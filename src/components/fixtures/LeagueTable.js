"use client";

import { useState } from "react";

const INITIAL = 5;
const OUR_TEAM = "Elite FC";

export default function LeagueTable({ table }) {
  const [showAll, setShowAll] = useState(false);
  const rows = showAll ? table : table.slice(0, INITIAL);

  return (
    <div>
      {/* Scrolls sideways on very narrow screens; focusable so keyboard users can scroll it. */}
      <div
        role="region"
        aria-label="League table"
        tabIndex={0}
        className="overflow-x-auto rounded-2xl border border-line bg-surface"
      >
        <table className="w-full min-w-[26rem] border-collapse text-left tabular-nums">
          <caption className="sr-only">League table</caption>
          <thead>
            <tr className="border-b border-line text-sm text-muted">
              <th scope="col" className="w-14 px-4 py-3 font-semibold">
                Pos
              </th>
              <th scope="col" className="px-2 py-3 font-semibold">
                Team
              </th>
              {["P", "W", "D", "L"].map((h) => (
                <th
                  key={h}
                  scope="col"
                  className="w-11 px-2 py-3 text-center font-semibold"
                >
                  {h}
                </th>
              ))}
              <th scope="col" className="w-16 px-4 py-3 text-right font-semibold">
                Pts
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((team) => {
              const ours = team.team === OUR_TEAM;
              return (
                <tr
                  key={team.id}
                  className={`border-b border-line last:border-b-0 ${
                    ours ? "bg-accent/20 font-bold text-fg" : "text-fg"
                  }`}
                >
                  <td className="px-4 py-3">{team.position}</td>
                  <th scope="row" className={`px-2 py-3 ${ours ? "font-bold" : "font-normal"}`}>
                    {team.team}
                  </th>
                  <td className="px-2 py-3 text-center">{team.played}</td>
                  <td className="px-2 py-3 text-center">{team.wins}</td>
                  <td className="px-2 py-3 text-center">{team.draws}</td>
                  <td className="px-2 py-3 text-center">{team.losses}</td>
                  <td className="px-4 py-3 text-right font-bold">
                    {team.points}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {table.length > INITIAL ? (
        <button
          type="button"
          onClick={() => setShowAll((v) => !v)}
          aria-expanded={showAll}
          className="mt-5 min-h-11 rounded-full border border-field px-5 font-semibold text-fg transition-colors hover:bg-fg/10"
        >
          {showAll ? "Show top five" : "Show full table"}
        </button>
      ) : null}
    </div>
  );
}
