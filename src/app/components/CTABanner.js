function CTABanner() {
  return (
    <section className="h-full w-full flex justify-center bg-[#0D2038]">
      <div className="w-[90%] mx-auto flex flex-col items-center py-6 gap-4">
        <h1 className="text-[#F5B800] text-2xl">
          READY TO START <br /> YOUR JOURNEY?
        </h1>
        <p className="text-white text-center text-xs">
          Join Elite Stars Football Club All Stars today <br /> and take the
          first step towards your <br /> dream.
        </p>
        <button className="bg-[#F5B800] text-black font-semibold h-10 w-28 text-xs rounded-md">
          ENROL NOW
        </button>
      </div>
    </section>
  );
}

export default CTABanner;
