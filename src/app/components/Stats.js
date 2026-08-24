"use client";

import CountUp from "@/app/components/CountUp";
import { FaMedal, FaTrophy, FaUsers } from "react-icons/fa";
import { HiOutlineAcademicCap } from "react-icons/hi2";

function Stats() {
  return (
    <section className="w-full flex justify-center items-center h-full bg-[#0D2038]">
      <div className="grid grid-cols-2 gap-6  w-[90%] py-8 md:flex md:justify-between">
        <div className="flex items-center gap-2">
          <FaMedal
            size={30}
            color="#F5B800"
            title="Medal icon"
            aria-hidden="true"
          />

          <div className="flex flex-col">
            <span className="text-sm font-bold text-white lg:text-base">
              <CountUp end={8} />
            </span>
            <span className="text-[0.71875rem] md:text-[0.625rem] text-white lg:text-base">
              SEASONS OF EXCELLENCE
            </span>
          </div>
        </div>

        <div className="h-auto bg-gray-600 w-px hidden xl:block"></div>

        <div className="flex items-center gap-2">
          <HiOutlineAcademicCap
            size={30}
            color="#F5B800"
            title="Graduates Icon"
            aria-hidden="true"
          />
          <div className="flex flex-col">
            <span className="text-sm font-bold text-white lg:text-base">
              <CountUp end={70} />
            </span>
            <span className="text-[0.71875rem] md:text-[0.625rem] text-white lg:text-base">
              TALENTS DEVELOPED
            </span>
          </div>
        </div>

        <div className="h-auto bg-gray-600 w-px hidden xl:block"></div>

        <div className="flex items-center gap-2">
          <FaTrophy
            size={30}
            color="#F5B800"
            title="Trophy Icon"
            aria-hidden="true"
          />
          <div className="flex flex-col">
            <span className="text-sm font-bold text-white lg:text-base">
              <CountUp end={25} />
            </span>
            <span className="text-[0.71875rem] md:text-[0.625rem] text-white lg:text-base">
              TITLES WON
            </span>
          </div>
        </div>

        <div className="h-auto bg-gray-600 w-px hidden xl:block"></div>

        <div className="flex items-center gap-2">
          <FaUsers
            size={30}
            color="#F5B800"
            title="User Icon"
            aria-hidden="true"
          />
          <div className="flex flex-col">
            <span className="text-sm font-bold text-white md:text-base">
              <CountUp end={100} />
            </span>
            <span className="text-[0.71875rem] md:text-[0.625rem] text-white md:text-base lg:text-base">
              RISING STARS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
