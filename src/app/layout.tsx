import type { Metadata } from "next";
import { Comme, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const comme = Comme({
  subsets: ["latin"],
  variable: "--font-comme",
  display: "swap",
  preload: true,
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Mercy Onyilo — Product Designer & Illustrator",
  description:
    "Portfolio of Mercy Onyilo, Product Designer & Illustrator. Showcasing UI/UX projects, web applications, and digital illustrations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${comme.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-white text-black antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-black focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-white"
        >
          Skip to main content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
