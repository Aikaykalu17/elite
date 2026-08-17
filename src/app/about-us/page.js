import Image from "next/image";

import { ShieldCheck, Users, BadgeCheck, Star } from "lucide-react";

function page() {
  return (
    <section className="w-full h-full mt-20">
      <div
        className="w-full text-white h-40 flex justify-center"
        style={{
          backgroundImage: "url('/images/playersBackingCameraNaija.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-white font-bold pt-8 text-xl">ABOUT US</h1>
      </div>
      <div className=" bg-white h-full">
        <div className="w-[90%] mx-auto flex flex-col pt-6 pb-8 gap-4">
          <div className="flex flex-col gap-4">
            <h2 className="text-[#061426] font-bold">OUR STORY</h2>
            <p className="text-gray-500 text-xs font-bold">
              Elite Football Club All Stars was founded in 2026 with a vision to
              raise disciplined, skilled and confident young footballers who
              will excel both on and off the pitch. We believe in hard work,
              integrity, teamwork, and continuous growth.
            </p>
            <Image
              src="/images/eliteTrainingEntrance.webp"
              width={500}
              height={500}
              alt="Entrance of Elite FC All Stars Football Academy"
              className="rounded-lg"
            />
            <div className="bg-slate-200 h-40 flex flex-col justify-evenly p-6 rounded-lg">
              <h3 className="font-bold text-[#061426]">OUR MISSION</h3>
              <p className="text-gray-500 text-xs font-bold">
                To discover and develop young talents into world-class
                footballers and leaders.
              </p>
            </div>
            <div className="bg-slate-200 h-40 flex flex-col justify-evenly p-6 rounded-lg">
              <h3 className="font-bold text-[#061426]">OUR VISION</h3>
              <p className="text-gray-500 text-xs font-bold">
                To be one of the top football academies in Africa.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-[#061426] text-center font-bold">OUR VALUES</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-200 rounded-lg p-4 flex flex-col gap-4">
                <ShieldCheck size={25} />
                <p className="text-[#061426] font-bold text-xs">DISCIPLINE</p>
              </div>
              <div className="bg-slate-200 rounded-lg p-4 flex flex-col gap-4">
                <Users size={25} />
                <p className="text-[#061426] font-bold text-xs">TEAMWORK</p>
              </div>
              <div className="bg-slate-200 rounded-lg p-4 flex flex-col gap-4">
                <BadgeCheck size={25} />
                <p className="text-[#061426] font-bold text-xs">INTEGRITY</p>
              </div>
              <div className="bg-slate-200 rounded-lg p-4 flex flex-col gap-4">
                <Star size={25} />
                <p className="text-[#061426] font-bold text-xs">EXCELLENCE</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-[#061426] text-center font-bold text-lg">
              OUR FACILITIES
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/images/indoorFootball.webp"
                alt="Indoor tranining facility of Elite FC"
                height={200}
                width={200}
                className="rounded-lg"
              />
              <Image
                src="/images/outdoorFootball.webp"
                alt="Outdoor tranining facility of Elite FC"
                height={200}
                width={200}
                className="rounded-lg"
              />
              <Image
                src="/images/exteriorView.webp"
                alt="Exterior view tranining facility of Elite FC"
                height={200}
                width={200}
                className="rounded-lg"
              />
              <Image
                src="/images/modernIndoor.webp"
                alt="Modern Indoor tranining facility of Elite FC"
                height={200}
                width={200}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
