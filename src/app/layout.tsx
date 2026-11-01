import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import type { ReactElement } from "react";
import { site, themeColors } from "@/data/site";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
});

const themeScript = `(function(){try{var t=localStorage.getItem("theme");var dark=t!=="light";document.documentElement.classList.toggle("dark",dark);var meta=document.querySelector('meta[name="theme-color"]');if(meta)meta.setAttribute("content",dark?"${themeColors.dark}":"${themeColors.light}");}catch(e){}})();`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "James O'Sullivan, full-stack TypeScript developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: themeColors.dark,
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">): ReactElement {
  return (
    <html lang="en" className={`${geist.variable} dark h-full antialiased`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-full flex-col">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-card focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
