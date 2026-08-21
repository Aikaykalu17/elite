import { Manrope } from "next/font/google";

import "./globals.css";
import HeaderWrapper from "./components/HeadWrapper";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata = {
  title: "Elite Football Academy",
  description:
    "Elite Football Club All Stars is a football academy in Abuja, Nigeria, discovering, developing and nurturing young talents into world-class footballers.",
  openGraph: {
    title: "Elite Football Academy",
    description:
      "Elite Football Club All Stars is a football academy in Abuja, Nigeria, discovering, developing and nurturing young talents into world-class footballers.",
    url: "https://your-deployed-url.vercel.app",
    siteName: "Elite Football Academy",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Elite Football Club All Stars",
      },
    ],
    locale: "en_US",
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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col w-full items-center">
        <HeaderWrapper />

        <main id="main-content" className="w-full ">
          {children}
        </main>
      </body>
    </html>
  );
}
