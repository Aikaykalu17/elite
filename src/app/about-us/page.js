import Image from "next/image";

import { ShieldCheck, Users, BadgeCheck, Star } from "lucide-react";

function page() {
  return (
    <section className="w-full h-full mt-20">
      <div
        className="w-full text-white flex justify-center items-end pb-8 h-52 md:h-[35vh] lg:h-[45vh] bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/playersBackingCameraNaija.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-white font-bold pt-8 text-xl md:text-5xl">
          ABOUT US
        </h1>
      </div>
      <div className=" bg-white h-full">
        <div className="w-[90%] mx-auto flex flex-col pt-6 pb-8 gap-4 md:gap-8">
          <div className="flex flex-col gap-4 md:grid md:grid-cols-2 landscape:grid landscape:grid-cols-2">
            <div className="md:flex md:flex-col md:gap-8">
              <h2 className="text-[#061426] font-bold">OUR STORY</h2>
              <p className="text-gray-500 text-xs ">
                Elite Football Club All Stars was founded in 2026 with{" "}
                <br className="hidden lg:block" /> a vision to raise
                disciplined, skilled and confident{" "}
                <br className="hidden lg:block" /> young footballers who will
                excel both on and <br className="hidden lg:block" /> off the
                pitch. We believe in hard work, integrity, teamwork, and{" "}
                <br className="hidden lg:block" /> continuous growth.
              </p>
            </div>
            <Image
              src="/images/eliteTrainingEntrance.webp"
              width={500}
              height={500}
              alt="Entrance of Elite FC All Stars Football Academy"
              className="rounded-lg"
            />
            <div className="bg-slate-100 h-40 flex flex-col justify-evenly p-6 rounded-lg md:p-4 md:justify-items-normal md:px-8">
              <h3 className="font-bold text-[#061426]">OUR MISSION</h3>
              <p className="text-gray-500 text-xs font-bold">
                To discover and develop young talents{" "}
                <br className="hidden md:block" /> into world-class footballers
                and leaders.
              </p>
            </div>
            <div className="bg-slate-100 h-40 flex flex-col justify-evenly p-6 rounded-lg">
              <h3 className="font-bold text-[#061426]">OUR VISION</h3>
              <p className="text-gray-500 text-xs font-bold">
                To be one of the top football <br className="hidden md:block" />{" "}
                academies in Africa, producing champions for the world.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-[#061426] text-center font-bold">OUR VALUES</h3>
            <div className="grid grid-cols-2 gap-4 lg:flex lg:flex-row lg:w-full lg:justify-between">
              <div className="bg-slate-100 rounded-lg p-4 flex flex-col gap-4 md:w-full md:items-center">
                <ShieldCheck size={25} />
                <p className="text-[#061426] font-bold text-xs">DISCIPLINE</p>
              </div>
              <div className="bg-slate-100 rounded-lg p-4 flex flex-col gap-4 md:w-full md:items-center">
                <Users size={25} />
                <p className="text-[#061426] font-bold text-xs">TEAMWORK</p>
              </div>
              <div className="bg-slate-100 rounded-lg p-4 flex flex-col gap-4 md:w-full md:items-center">
                <BadgeCheck size={25} />
                <p className="text-[#061426] font-bold text-xs">INTEGRITY</p>
              </div>
              <div className="bg-slate-100 rounded-lg p-4 flex flex-col gap-4 md:w-full md:items-center">
                <Star size={25} />
                <p className="text-[#061426] font-bold text-xs">EXCELLENCE</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 ">
            <h3 className="text-[#061426] text-center font-bold text-lg">
              OUR FACILITIES
            </h3>
            <div className="grid grid-cols-2 gap-4  xl:flex xl:flex-row">
              <Image
                src="/images/indoorFootball.webp"
                alt="Indoor tranining facility of Elite FC"
                height={200}
                width={200}
                className="rounded-lg md:w-full landscape:w-full"
                style={{ height: "auto" }}
              />
              <Image
                src="/images/outdoorFootball.webp"
                alt="Outdoor tranining facility of Elite FC"
                height={200}
                width={200}
                className="rounded-lg md:w-full landscape:w-full"
                style={{ height: "auto" }}
              />
              <Image
                src="/images/exteriorView.webp"
                alt="Exterior view tranining facility of Elite FC"
                height={200}
                width={200}
                className="rounded-lg md:w-full landscape:w-full"
                style={{ height: "auto" }}
              />
              <Image
                src="/images/modernIndoor.webp"
                alt="Modern Indoor tranining facility of Elite FC"
                height={200}
                width={200}
                className="rounded-lg md:w-full landscape:w-full"
                style={{ height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
