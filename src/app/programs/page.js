import {
  Baby,
  UserRound,
  Activity,
  ShieldCheck,
  Trophy,
  Clock,
  Target,
  HeartHandshake,
  Dumbbell,
  Brain,
  Compass,
} from "lucide-react";

import Image from "next/image";

function Page() {
  const month = new Date().toLocaleDateString("en-US", { month: "long" });
  const year = new Date().getFullYear();

  return (
    <section className="w-full mt-20">
      <div className="flex flex-col gap-4">
        <div className="bg-[#061426] flex flex-col items-center justify-center gap-4 py-4">
          <h1 className="text-white font-bold">PROGRAMS AND TRAINING</h1>
          <p className="text-white font-bold text-center text-xs">
            Structured programs for every level
          </p>
        </div>
        <div className="rounded-tl-sm rounded-tr-sm bg-white py-6">
          <div className="w-[90%] mx-auto flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="text-[#061426] font-bold">AGE GROUPS</h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                <div className="flex flex-col items-center gap-2 border border-slate-300 p-4 w-full rounded-lg">
                  <span className="text-[#061426] font-bold">U-13</span>
                  <Baby size={35} color="#061426" aria-hidden="true" />
                  <span className="text-[#061426] text-xs font-bold">
                    JUNIOR
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2 border border-slate-300 p-4 w-full rounded-lg">
                  <span className="text-[#061426] font-bold">U-15</span>
                  <UserRound size={35} color="#061426" aria-hidden="true" />
                  <span className="text-[#061426] text-xs font-bold">
                    YOUTH
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2 border border-slate-300 p-4 w-full rounded-lg">
                  <span className="text-[#061426] font-bold">U-17</span>
                  <Activity size={35} color="#061426" aria-hidden="true" />
                  <span className="text-[#061426] text-xs font-bold">
                    YOUTH
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2 border border-slate-300 p-4 w-full rounded-lg">
                  <span className="text-[#061426] font-bold">U-20</span>
                  <ShieldCheck size={35} color="#061426" aria-hidden="true" />
                  <span className="text-[#061426] text-xs font-bold">
                    Senior
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2 border border-slate-300 p-4 w-full rounded-lg">
                  <span className="text-[#061426] font-bold">Senior</span>
                  <Trophy size={35} color="#061426" aria-hidden="true" />
                  <span className="text-[#061426] text-xs font-bold">
                    Senior
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h2 className="text-[#061426] font-bold">TRIAL/TRYOUT INFO</h2>
                <div>
                  <p className="text-[#0D2038] text-xs">
                    Trials are held every month.
                  </p>
                  <p className="text-[#0D2038] text-xs">
                    See below for upcoming dates.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Clock size={20} color="#F5B800" aria-hidden="true" />
                    <p className="text-xs">
                      <strong>Time:</strong>{" "}
                      <time
                        dateTime="08:00"
                        className="text-[#061426] font-bold"
                      >
                        8:00 AM
                      </time>
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={20} color="#F5B800" aria-hidden="true" />
                    <p className="text-xs">
                      <strong>Duration:</strong>{" "}
                      <time
                        dateTime="PT2H"
                        className="text-[#061426] font-bold"
                      >
                        2 hours
                      </time>
                    </p>
                  </div>
                </div>

                <article
                  aria-label="Next trial details"
                  className="border border-slate-300 p-2 rounded flex flex-col md:flex-row gap-4 md:max-w-2xl"
                >
                  <div className="relative w-full h-40 md:w-56 md:h-auto flex-shrink-0">
                    <Image
                      src="/images/outdoorFootball.webp"
                      alt="Turf Arena, the venue for the next trial"
                      fill
                      sizes="(max-width: 768px) 100vw, 224px"
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col gap-2 p-2">
                    <p className="text-[#F5B800] font-bold">NEXT TRIAL</p>
                    <p>
                      <strong className="text-xs">Time:</strong>{" "}
                      <time
                        dateTime="08:00"
                        className="text-[#0D2038] font-bold text-xs"
                      >
                        8:00 AM
                      </time>
                    </p>
                    <p className="text-xs">
                      <strong>Date:</strong>{" "}
                      <time dateTime="2026-08-30">
                        Saturday, 30th {month}, {year}
                      </time>
                    </p>
                    <p className="text-xs">
                      <strong>Venue:</strong> Turf Arena, Abuja
                    </p>
                    <p className="text-xs">
                      <strong className="text-xs">What to bring:</strong> Boots,
                      Shin guards, Water, Towel
                    </p>
                  </div>
                </article>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-[#061426] font-bold">TRAINING FOCUS</h2>

              <div className="grid md:grid-cols-2 gap-x-8">
                <div className="flex gap-4 border-b border-b-slate-200 pb-2 pt-2">
                  <Target color="#F5B800" size={30} aria-hidden="true" />
                  <div className="flex flex-col gap-2">
                    <p className="text-[#061426] font-bold">Technical Skills</p>
                    <p className="text-[#0D2038] text-xs">
                      Ball control, passing, shooting and more.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 border-b border-b-slate-200 pb-2 pt-2">
                  <HeartHandshake
                    color="#F5B800"
                    size={30}
                    aria-hidden="true"
                  />
                  <div className="flex flex-col gap-2">
                    <p className="text-[#061426] font-bold">
                      Emotional Intelligence
                    </p>
                    <p className="text-[#0D2038] text-xs">
                      Understanding the game, making smart decisions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 border-b border-b-slate-200 pb-2 pt-2">
                  <Dumbbell color="#F5B800" size={30} aria-hidden="true" />
                  <div className="flex flex-col gap-2">
                    <p className="text-[#061426] font-bold">
                      Physical Development
                    </p>
                    <p className="text-[#0D2038] text-xs">
                      Speed, strength, agility, and endurance.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 border-b border-b-slate-200 pb-2 pt-2">
                  <Brain color="#F5B800" size={30} aria-hidden="true" />
                  <div className="flex flex-col gap-2">
                    <p className="text-[#061426] font-bold">Mental Toughness</p>
                    <p className="text-[#0D2038] text-xs">
                      Confidence, focus, and resilience
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 border-b border-b-slate-200 pb-2 pt-2">
                  <Compass color="#F5B800" size={30} aria-hidden="true" />
                  <div className="flex flex-col gap-2">
                    <p className="text-[#061426] font-bold">
                      Character & Values
                    </p>
                    <p className="text-[#0D2038] text-xs">
                      Discipline, respect, teamwork, leadership.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;
