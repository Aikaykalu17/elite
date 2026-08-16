import Image from "next/image";

function page() {
  return (
    <section className="w-full mt-20">
      <div className="bg-[#061426] h-40 flex flex-col items-center justify-center gap-4 py-4">
        <h1 className="text-white text-2xl font-bold">OUR COACHES</h1>
        <p className="text-white font-semibold text-center">
          Experiended. Passionate. <br /> Committed. Building the future.
        </p>
      </div>
      <div className="bg-white w-full h-full py-6">
        <div className="w-[90%] mx-auto flex flex-col gap-4">
          <h2 className="font-bold text-[#061426] text-2xl">LEADERSHIP</h2>
          <article className="flex bg-slate-200 p-6 gap-6 rounded-xl">
            <Image
              src="/images/eyeglassesPresident.webp"
              alt="Ukpai Okon"
              width={150}
              height={20}
              className="object-contain rounded-xl self-start"
            />
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="text-[#061426] font-bold">Ukpai Okon</h3>
                <p className="text-[#D99A00]">President / Founder</p>
              </div>

              <div>
                <p className="text-slate-500">
                  Former professional footballer with a passion for youth
                  development. Ukpai founded Elite FC All Stars to create
                  opportunities for young talents in Nigeria
                </p>
              </div>
            </div>
          </article>
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-[#061426] text-2xl">
              COACHING STAFF
            </h2>
            <div className="flex flex-col gap-4">
              <article className="flex bg-slate-200 p-6 gap-6 rounded-xl">
                <Image
                  src="/images/firstCoach.webp"
                  alt="Tunde Adewale"
                  width={150}
                  height={20}
                  className="object-contain rounded-xl"
                />
                <div className="flex flex-col gap-4">
                  <div>
                    <h3 className="text-[#061426] font-bold">Tunde Adewale</h3>
                  </div>

                  <div>
                    <p className="text-[#D99A00]">Head Coach</p>
                    <p className="text-slate-500">UEFA B License</p>
                  </div>
                </div>
              </article>
              <article className="flex bg-slate-200 p-6 gap-6 rounded-xl">
                <Image
                  src="/images/secondCoach.webp"
                  alt="Uzokwe Victor"
                  width={150}
                  height={20}
                  className="object-contain rounded-xl"
                />
                <div className="flex flex-col gap-4">
                  <div>
                    <h3 className="text-[#061426] font-bold">Uzokwe Victor</h3>
                  </div>

                  <div>
                    <p className="text-[#D99A00]">Assistant Coach</p>
                    <p className="text-slate-500">CAF B License</p>
                  </div>
                </div>
              </article>
              <article className="flex bg-slate-200 p-6 gap-6 rounded-xl">
                <Image
                  src="/images/thirdCoach.webp"
                  alt="Ndubuaku Casper"
                  width={150}
                  height={20}
                  className="object-contain rounded-xl"
                />
                <div className="flex flex-col gap-4">
                  <div>
                    <h3 className="text-[#061426] font-bold">Jubril Sanusi</h3>
                  </div>

                  <div>
                    <p className="text-[#D99A00]">Goalkeeping Coach</p>
                    <p className="text-slate-500">CAF C License</p>
                  </div>
                </div>
              </article>
              <article className="flex bg-slate-200 p-6 gap-6 rounded-xl">
                <Image
                  src="/images/fourthCoach.webp"
                  alt="Samuel Eke"
                  width={150}
                  height={20}
                  className="object-contain rounded-xl"
                />
                <div className="flex flex-col gap-4">
                  <div>
                    <h3 className="text-[#061426] font-bold">Dr. Samuel Eke</h3>
                  </div>

                  <div>
                    <p className="text-slate-500">Physiotherapist</p>
                  </div>
                </div>
              </article>
              <article className="flex bg-slate-200 p-6 gap-6 rounded-xl">
                <Image
                  src="/images/fifthCoach.webp"
                  alt="Yakubu Adamu"
                  width={150}
                  height={20}
                  className="object-contain rounded-xl"
                />
                <div className="flex flex-col gap-4">
                  <div>
                    <h3 className="text-[#061426] font-bold">Yakubu Adamu</h3>
                  </div>

                  <div>
                    <p className="text-slate-500">Team Manager</p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
