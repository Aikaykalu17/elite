import NewsList from "@/app/components/NewsList";
import news from "@/data/news";

function Page() {
  return (
    <section className="w-full mt-20">
      <div className="flex py-4 flex-col text-center">
        <h1 className="text-white font-bold">NEWS & UPDATES</h1>
        <p className="text-white font-bold items-center w-full">
          Latest news and announcements.
        </p>
      </div>

      <div className="bg-white w-full rounded-tl-lg rounded-tr-lg py-4">
        <div className="w-[90%] mx-auto ">
          <NewsList news={news} />
        </div>
      </div>
    </section>
  );
}

export default Page;
