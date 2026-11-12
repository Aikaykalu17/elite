import NewsList from "@/components/news/NewsList";
import PageHeader from "@/components/ui/PageHeader";
import news from "@/data/news";
import { parseDisplayDate } from "@/lib/dates";

export const metadata = {
  title: "News and updates",
  description:
    "The latest signings, results and announcements from Elite Football Club All Stars.",
};

export default function NewsPage() {
  // Newest first, with a machine-readable date for <time>.
  const items = news
    .map((item) => ({ ...item, isoDate: parseDisplayDate(item.date) }))
    .sort((a, b) => (b.isoDate ?? "").localeCompare(a.isoDate ?? ""));

  return (
    <>
      <PageHeader
        title="News and updates"
        intro="The latest news and announcements."
      />
      <section aria-label="Latest stories">
        <div className="page-wrap">
          <NewsList news={items} />
        </div>
      </section>
    </>
  );
}
