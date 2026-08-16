import fixtures from "@/data/fixtures";
import results from "@/data/results";
import table from "@/data/table";

import FixturesList from "../components/FixturesList";
import ResultsList from "../components/ResultsList";
import TableList from "../components/TableList";

function page() {
  const year = new Date().getFullYear();
  return (
    <section className="w-full mt-20">
      <div className="flex flex-col ">
        <div className="bg-[#061426] h-20 flex flex-col items-center justify-center gap-4 py-4">
          <h1 className="text-white text-2xl font-bold">FIXTURES & RESULTS</h1>
        </div>
        <div className="bg-white w-full rounded-lg py-4">
          <div className="w-[90%] mx-auto">
            <div className="flex flex-col gap-4">
              <h2 className="text-[#061426] text-base font-bold">
                RECENT RESULTS
              </h2>
              <ResultsList results={results} />
              <h2 className="text-[#061426] text-base font-bold">
                UPCOMING FIXTURES
              </h2>
              <FixturesList fixtures={fixtures} />
              <h2 className="text-[#061426] text-base font-bold">
                LEAGUE TABLE
              </h2>
              <TableList table={table} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
