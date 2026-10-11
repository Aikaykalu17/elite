import Footer from "@/app/components/Footer";

export default function SiteLayout({ children }) {
  return (
    <>
      <main id="main-content" className="w-full flex flex-col flex-1">
        {children}
      </main>
      <Footer />
    </>
  );
}
