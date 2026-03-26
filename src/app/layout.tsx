import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Glow to the Bone | Clean & Natural Tallow Skincare",
    template: "%s | Glow to the Bone",
  },
  description:
    "Nurture your skin with clean, science-backed tallow formulas designed to hydrate, restore, and radiate confidence from within. Handmade in the UK with 100% natural ingredients.",
  keywords: [
    "tallow skincare",
    "natural skincare",
    "grass-fed tallow",
    "clean beauty",
    "whipped tallow",
    "eczema relief",
    "psoriasis skincare",
    "handmade UK skincare",
  ],
  openGraph: {
    title: "Glow to the Bone | Clean & Natural Tallow Skincare",
    description:
      "Nurture your skin with clean, science-backed tallow formulas. Handmade in the UK.",
    type: "website",
    locale: "en_GB",
    siteName: "Glow to the Bone",
  },
  twitter: {
    card: "summary_large_image",
    title: "Glow to the Bone | Clean & Natural Tallow Skincare",
    description:
      "Nurture your skin with clean, science-backed tallow formulas. Handmade in the UK.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-text font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
