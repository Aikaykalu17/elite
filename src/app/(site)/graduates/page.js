import GraduatesList from "../../components/GraduatesList";

function Page() {
  return (
    <section className="w-full mt-20">
      <div className="flex flex-col items-center justify-center gap-4 py-4">
        <h1 className="text-white font-bold">OUR GRADUATES</h1>
        <p className="text-white font-bold text-center text-xs">
          Our Pride. Our Future.
        </p>
      </div>
      <div className="bg-white rounded-l-md rounded-r-md">
        <GraduatesList />
      </div>
    </section>
  );
}

export default Page;
