import Footer from "@/app/components/Footer";

export default function SiteLayout({ children }) {
  return (
    <>
      <div className="w-full flex-1">{children}</div>
      <Footer />
    </>
  );
}
