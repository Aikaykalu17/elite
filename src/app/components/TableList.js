"use client";
import { useState } from "react";

function FixturesList({ table }) {
  const [showAll, setShowAll] = useState(false);
  const leagueTable = showAll ? table : table.slice(0, 5);

  return (
    <>
      <div className="flex flex-col items-center gap-2 border border-slate-300 rounded-sm pb-2">
        <table className="w-full border-collapse text-xs">
          <thead>
            <tr className="border-b border-slate-300">
              <th className="p-2 text-left">POS</th>
              <th className="p-2 text-left">TEAM</th>
              <th className="p-2 text-center">P</th>
              <th className="p-2 text-center">W</th>
              <th className="p-2 text-center">D</th>
              <th className="p-2 text-center">L</th>
              <th className="p-2 text-center">PTS</th>
            </tr>
          </thead>
          <tbody>
            {leagueTable.map((team) => (
              <tr key={team.id} className="border-b border-slate-100">
                {team.position === 1 ? (
                  <td className="p-2 text-[#F5B800] font-bold">
                    {team.position}
                  </td>
                ) : (
                  <td className="p-2">{team.position}</td>
                )}

                {team.position === 1 ? (
                  <td className="p-2 text-[#F5B800] font-bold">{team.team}</td>
                ) : (
                  <td className="p-2">{team.team}</td>
                )}

                <td className="p-2 text-center">{team.played}</td>
                <td className="p-2 text-center">{team.wins}</td>
                <td className="p-2 text-center">{team.draws}</td>
                <td className="p-2 text-center">{team.losses}</td>
                <td className="p-2 text-center">{team.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {table.length > 3 && (
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="h-8 bg-[#061426] text-[#F5B800] w-48 text-xs rounded-sm self-center"
          >
            {showAll ? "Show less table" : "View full table"}
          </button>
        )}
      </div>
    </>
  );
}

export default FixturesList;
