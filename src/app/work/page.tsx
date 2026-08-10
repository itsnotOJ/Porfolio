import type { Metadata } from "next";
import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MarqueeTicker } from "@/components/ui/MarqueeTicker";
import { WorkGallery } from "@/components/work/WorkGallery";

export const metadata: Metadata = {
  title: "Selected Works — Mercy Onyilo",
  description:
    "Explore digital product design, mobile app interfaces, SaaS dashboards, and illustration projects by Mercy Onyilo.",
};

export default function WorkPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-black antialiased">
      {/* Global Navigation */}
      <Navbar />

      <main id="main-content" tabIndex={-1} className="flex-1 w-full pt-12 md:pt-16 outline-none">
        {/* Page Header */}
        <section aria-label="Selected works header" className="mx-auto max-w-7xl px-5 sm:px-10 lg:px-16">
          <SectionHeading
            asTag="h1"
            badge="Portfolio"
            title="Selected Works"
            subtitle="A comprehensive showcase of digital product design, web applications, design systems, and custom illustration projects."
          />
        </section>

        {/* Work Gallery with Interactive Category Filters & Case Study Modals */}
        <WorkGallery />

        {/* Marquee Banner */}
        <MarqueeTicker className="my-12" />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}

