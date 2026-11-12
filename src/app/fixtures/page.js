import FixtureList from "@/components/fixtures/FixtureList";
import LeagueTable from "@/components/fixtures/LeagueTable";
import ResultList from "@/components/fixtures/ResultList";
import PageHeader from "@/components/ui/PageHeader";
import fixtures from "@/data/fixtures";
import results from "@/data/results";
import table from "@/data/table";
import { todayInLagos } from "@/lib/dates";

// Hourly regeneration so finished matches drop out of "Upcoming fixtures".
export const revalidate = 3600;

export const metadata = {
  title: "Fixtures and results",
  description:
    "Upcoming fixtures, recent results and the league table for Elite Football Club All Stars.",
};

export default function FixturesPage() {
  const today = todayInLagos();
  const upcoming = fixtures
    .filter((fixture) => fixture.date >= today)
    .sort((a, b) => `${a.date}${a.time}`.localeCompare(`${b.date}${b.time}`));
  // Most recent first.
  const recent = [...results].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <PageHeader title="Fixtures and results" />
      <div className="page-wrap grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-12">
        <section aria-labelledby="fixtures-title">
          <h2 id="fixtures-title" className="font-display text-h2 text-fg">
            Upcoming fixtures
          </h2>
          <div className="mt-6">
            <FixtureList fixtures={upcoming} />
          </div>
        </section>

        <section aria-labelledby="results-title">
          <h2 id="results-title" className="font-display text-h2 text-fg">
            Recent results
          </h2>
          <div className="mt-6">
            <ResultList results={recent} />
          </div>
        </section>

        <section aria-labelledby="table-title" className="lg:col-span-2">
          <h2 id="table-title" className="font-display text-h2 text-fg">
            League table
          </h2>
          <div className="mt-6 max-w-3xl">
            <LeagueTable table={table} />
          </div>
        </section>
      </div>
    </>
  );
}
