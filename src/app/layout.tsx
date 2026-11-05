import type { Metadata, Viewport } from "next";
import { Archivo, Figtree } from "next/font/google";

import { MotionLayer } from "@/components/motion/MotionLayer";
import { KEYWORDS, SITE } from "@/content/site";

import "./globals.css";
import "@/styles/primitives.css";
import "@/styles/motion.css";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
});

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-figtree",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.title} | ${SITE.name}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: KEYWORDS,
  applicationName: SITE.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: "en_US",
    url: "/",
    title: `${SITE.title} | ${SITE.name}`,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.title} | ${SITE.name}`,
    description: SITE.description,
  },
  robots: { index: true, follow: true },
  category: "marketing",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f4f5" },
    { media: "(prefers-color-scheme: dark)", color: "#100d11" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${archivo.variable} ${figtree.variable}`}>
      <body>
        <div className="site">{children}</div>
        <MotionLayer />
      </body>
    </html>
  );
}
