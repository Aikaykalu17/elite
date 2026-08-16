"use client";

import CountUp from "@/app/components/CountUp";
import { FaMedal, FaTrophy, FaUsers } from "react-icons/fa";
import { HiOutlineAcademicCap } from "react-icons/hi2";

function Stats() {
  return (
    <section className="w-full flex justify-center items-center h-full">
      <div className="grid grid-cols-2 gap-4  w-[90%] py-8">
        <div className="flex items-center gap-2">
          <FaMedal size={40} color="#F5B800" title="Medal icon" />

          <div className="flex flex-col">
            <span className="text-sm font-bold text-white">
              <CountUp end={8} />
            </span>
            <span className="text-sm text-white">TEAM RANKINGS</span>
          </div>
        </div>

        {/* repeat for graduates, trophies, players */}
        <div className="flex items-center gap-2">
          <HiOutlineAcademicCap
            size={40}
            color="#F5B800"
            title="Graduates Icon"
          />
          <div className="flex flex-col">
            <span className="text-sm font-bold text-white">
              <CountUp end={120} />
            </span>
            <span className="text-xs text-white">GRADUATES</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <FaTrophy size={40} color="#F5B800" title="Trophy Icon" />
          <div className="flex flex-col">
            <span className="text-sm font-bold text-white">
              <CountUp end={25} />
            </span>
            <span className="text-xs text-white">TROPHIES WON</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <FaUsers size={40} color="#F5B800" title="User Icon" />
          <div className="flex flex-col">
            <span className="text-sm font-bold text-white">
              <CountUp end={100} />
            </span>
            <span className="text-xs text-white">ACTIVE PLAYERS</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
