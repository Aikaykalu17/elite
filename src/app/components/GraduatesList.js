"use client";

import { useState } from "react";
import Image from "next/image";
import { players } from "@/data/players";

function GraduatesList() {
  const [activeFilter, setActiveFilter] = useState("All Players");

  function handleFilter(category) {
    setActiveFilter(category);
  }

  const filteredPlayers =
    activeFilter === "All Players"
      ? players
      : players.filter((player) => player.category === activeFilter);

  function getButtonStyle(category) {
    return activeFilter === category
      ? "h-8 w-32 font-semibold text-black text-center bg-[#F5B800] text-xs items-center justify-center gap-2 rounded text-xs"
      : "h-8 w-32 bg-[#061426] text-white font-semibold border border-black text-black rounded text-xs";
  }

  return (
    <section id="players" className="w-full pt-4">
      <div className="flex flex-col gap-4 w-[90%] mx-auto pb-4 pt-4 border-t border-slate-200 ">
        <label htmlFor="player-filter" className="sr-only">
          Filter players by category
        </label>

        <div className="grid grid-cols-2  gap-4 border border-slate-400 w-full p-4 rounded-lg ">
          <button
            type="button"
            onClick={() => handleFilter("All Players")}
            className={getButtonStyle("All Players")}
          >
            All Players
          </button>
          <div className="hidden h-auto w-px bg-slate-400"></div>
          <button
            type="button"
            onClick={() => handleFilter("Currently Pro")}
            className={getButtonStyle("Currently Pro")}
          >
            Currently Pro
          </button>
          <div className="hidden h-auto w-px bg-slate-400"></div>
          <button
            type="button"
            onClick={() => handleFilter("In Academy")}
            className={getButtonStyle("In Academy")}
          >
            In Academy
          </button>
          <div className="hidden h-auto w-px bg-slate-400"></div>
        </div>
        <div className="md:grid md:grid-cols-3 flex flex-col gap-8 md:gap-4">
          {filteredPlayers.map((player) => (
            <div
              key={player.id}
              className="flex flex-col-reverse lg:flex lg:flex-col border border-slate-400 p-4 gap-2 rounded-lg"
            >
              <div>
                <p className="text-stone-500 font-bold text-sm">
                  <span className="font-bold text-black ">Player Name:</span>{" "}
                  {player.name}
                </p>
                <p className="text-stone-500 font-medium text-sm">
                  <span className="font-bold text-black ">About Player:</span>{" "}
                  {player.description}
                </p>
                <p className="text-stone-500 text-sm">
                  <span className="font-bold text-black ">Career Stage:</span>{" "}
                  {player.category}
                </p>
                {player.league ? (
                  <p className="text-stone-500 text-sm">
                    <span className="font-bold text-black ">League:</span>{" "}
                    {player.league}{" "}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <Image
                src={player.image}
                height={100}
                width={100}
                alt={
                  player.title ? `${player.title} preview` : "Player portrait"
                }
                className="lg:w-3/6 rounded-xl"
                loading="lazy"
              />{" "}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GraduatesList;
