import CoachesList from "../../components/CoachesList";
import coaches from "@/data/coaches";

function Page() {
  return (
    <section className="w-full mt-20">
      <div className="bg-[#061426] h-40 flex flex-col items-center justify-center gap-4 py-4">
        <h1 className="text-white font-bold">OUR COACHES</h1>
        <p className="text-white font-bold text-center text-xs">
          Experiended. Passionate. <br /> Committed. Building the future.
        </p>
      </div>
      <div className="bg-white w-full h-full py-6">
        <div className="w-[90%] mx-auto flex flex-col gap-4">
          <CoachesList coaches={coaches} />
        </div>
      </div>
    </section>
  );
}

export default Page;
