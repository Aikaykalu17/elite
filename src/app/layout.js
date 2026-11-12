import { Barlow_Condensed, Manrope } from "next/font/google";

import Footer from "@/components/layout/Footer";
import SiteHeader from "@/components/layout/SiteHeader";
import { site } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Elite Football Academy",
    template: "%s | Elite FC",
  },
  description: site.description,
  openGraph: {
    title: "Elite Football Academy",
    description: site.description,
    url: site.url,
    siteName: "Elite Football Academy",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Elite Football Club All Stars",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elite Football Academy",
    description:
      "Elite Football Club All Stars is a football academy in Abuja, Nigeria.",
    images: ["/og-image.png"],
  },
};

export const viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f6f9" },
    { media: "(prefers-color-scheme: dark)", color: "#061426" },
  ],
};

// Runs before first paint so the saved (or system) theme never flashes.
const themeScript = `(function(){var d=document.documentElement;try{var s=localStorage.getItem("theme");var m=matchMedia("(prefers-color-scheme: dark)");d.dataset.theme=(s?s==="dark":m.matches)?"dark":"light";m.addEventListener("change",function(e){if(!localStorage.getItem("theme"))d.dataset.theme=e.matches?"dark":"light"})}catch(e){d.dataset.theme="light"}})();`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${barlowCondensed.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-5 focus:py-3 focus:font-semibold focus:text-on-accent"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content" tabIndex={-1} className="flex-1 pb-20 md:pb-28">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
