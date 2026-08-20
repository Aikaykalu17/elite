"use client";

import { useState } from "react";
import Image from "next/image";
import { players } from "@/data/players";
import Reveal from "./Reveal";

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
      ? "px-4 py-2 font-semibold text-black text-center bg-[#F5B800] text-xs items-center justify-center gap-2 rounded text-xs cursor-pointer"
      : "px-4 py-2 bg-[#061426] text-white font-semibold border border-black text-black rounded text-xs cursor-pointer";
  }

  return (
    <div id="players" className="w-full pt-4">
      <div className="flex flex-col gap-4 w-[90%] mx-auto pb-4 pt-4 border-t border-slate-200 ">
        <label htmlFor="player-filter" className="sr-only">
          Filter players by category
        </label>

        <div className="grid grid-cols-2 gap-4 border border-slate-400 w-full p-4 rounded-lg md:flex md:flex-row md:w-max">
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
        <div className="md:grid md:grid-cols-3 flex flex-col gap-8 md:gap-4 landscape:grid landscape:grid-cols-2">
          {filteredPlayers.map((player) => (
            <Reveal key={player.id}>
              <div
                key={player.id}
                className="md:flex md:flex-col-reverse flex flex-col-reverse border border-slate-400 p-4 gap-2 rounded-lg "
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
                <div className="relative w-full aspect-square mx-auto">
                  <Image
                    src={player.image}
                    alt={
                      player.title
                        ? `${player.title} preview`
                        : "Player portrait"
                    }
                    fill
                    sizes="(max-width: 768px) 100vw, 200px"
                    // sizes="128px"
                    className="rounded-lg object-cover object-top"
                    loading="lazy"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div>
          <div
            className="h-125 relative overflow-hidden  bg-center bg-no-repeat bg-cover px-4 pt-16 flex flex-col gap-4 rounded"
            style={{
              backgroundImage: "url('/images/ebuka.webp')",
              backgroundPosition: "center top",
              backgroundSize: "cover",
            }}
          >
            <div className="absolute inset-0 bg-linear-to-t from-slate-900/10 via-slate-900/40 to-slate-900/20" />
            <h2 className="text-[#F5B800] font-bold text-xl z-50">
              SUCCESS STORY
            </h2>
            <div className="z-50">
              <p className="text-white font-bold text-xl">
                OKORONKWO CHUKWUEBUKA
              </p>
              <p className="text-[#F5B800] font-bold text-xl">
                From Elite to Europe
              </p>
            </div>
            <p className="text-sm font-bold z-50 text-white">
              Joined Elite at the age of 17. His hardwork and dedication earned
              him moves to FC Van <br className="hidden md:block" />
              and West Armenia, both in Armenia and later to FC Rashvan in
              Tajikistan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GraduatesList;
