import Footer from "@/app/components/Footer";
import HeaderWrapper from "@/app/components/HeadWrapper";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export default function SiteLayout({ children }) {
  return (
    <div
      className={`${manrope.variable} h-full antialiased flex-col w-full items-center`}
    >
      <a href="#main-content" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      {children}
      <Footer />
    </div>
  );
}
