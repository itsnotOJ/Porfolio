"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
} from "lucide-react";
import { CaseStudyData } from "@/data/caseStudies";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export interface IllustrationItem {
  id: string;
  title: string;
  category: string;
  src: string;
  alt: string;
}

const illustrationGallery: IllustrationItem[] = [
  {
    id: "queen-idia",
    title: "Queen Idia",
    category: "Character & Culture",
    src: "/images/illustrations/Queen-Idia.png",
    alt: "Queen Idia Digital Character Artwork",
  },
  {
    id: "artists-voyage",
    title: "Artist's Voyage",
    category: "Editorial Scene",
    src: "/images/illustrations/Artists-voyage.png",
    alt: "Artist's Voyage Illustration",
  },
  {
    id: "night-time",
    title: "Night Time Serenade",
    category: "Atmospheric Scene",
    src: "/images/illustrations/Night-time.png",
    alt: "Night time illustration",
  },
  {
    id: "archi-shelf",
    title: "Architectural Shelf",
    category: "Spatial & Object",
    src: "/images/illustrations/Archi-shelf.png",
    alt: "Architectural shelf digital artwork",
  },
  {
    id: "drink",
    title: "Refreshment",
    category: "Still Life & Vector",
    src: "/images/illustrations/Drink.png",
    alt: "Drink illustration",
  },
  {
    id: "hero-1",
    title: "Creative Exploration I",
    category: "Hero Banner Art",
    src: "/images/hero/Hero-illustration-1.png",
    alt: "Creative Exploration 1",
  },
  {
    id: "hero-2",
    title: "Creative Exploration II",
    category: "Hero Banner Art",
    src: "/images/hero/Hero-illustration-2.png",
    alt: "Creative Exploration 2",
  },
  {
    id: "hero-3",
    title: "Creative Exploration III",
    category: "Hero Banner Art",
    src: "/images/hero/Hero-illustration-3.png",
    alt: "Creative Exploration 3",
  },
  {
    id: "hero-4",
    title: "Creative Exploration IV",
    category: "Hero Banner Art",
    src: "/images/hero/Hero-illustration-4.png",
    alt: "Creative Exploration 4",
  },
];

interface IllustrationLayoutProps {
  data: CaseStudyData;
}

export const IllustrationLayout: React.FC<IllustrationLayoutProps> = ({
  data,
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft")
        setSelectedIndex((prev) =>
          prev !== null ? (prev === 0 ? illustrationGallery.length - 1 : prev - 1) : null
        );
      if (e.key === "ArrowRight")
        setSelectedIndex((prev) =>
          prev !== null ? (prev === illustrationGallery.length - 1 ? 0 : prev + 1) : null
        );
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  const activeItem = selectedIndex !== null ? illustrationGallery[selectedIndex] : null;

  return (
    <div className="flex min-h-screen flex-col bg-white text-black antialiased">
      {/* Global Navigation */}
      <Navbar />

      <main id="main-content" tabIndex={-1} className="flex-1 w-full pt-8 md:pt-12 outline-none">
        {/* Header Banner */}
        <div className="mx-auto max-w-7xl px-5 sm:px-10 lg:px-16 flex flex-col gap-6">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#5B5757] hover:text-black transition-colors w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-full px-3 py-1 bg-black/5"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span>Back to Selected Works</span>
          </Link>

          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-black px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                {data.category}
              </span>
              <span className="text-xs font-semibold text-[#5B5757]">
                {data.year}
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-black leading-tight">
              {data.title}
            </h1>

            <p className="text-xl sm:text-2xl text-[#5B5757] font-normal leading-relaxed max-w-3xl">
              {data.tagline}
            </p>
          </div>

          {/* Quick Metadata Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-6 rounded-2xl bg-black/5 border border-black/10 my-2 text-sm">
            <div>
              <span className="block text-xs font-semibold uppercase text-[#5B5757] tracking-wider mb-1">
                Role
              </span>
              <span className="font-semibold text-black text-base">{data.role}</span>
            </div>
            <div>
              <span className="block text-xs font-semibold uppercase text-[#5B5757] tracking-wider mb-1">
                Timeline
              </span>
              <span className="font-semibold text-black text-base">{data.timeline}</span>
            </div>
            <div>
              <span className="block text-xs font-semibold uppercase text-[#5B5757] tracking-wider mb-1">
                Client
              </span>
              <span className="font-semibold text-black text-base">{data.client}</span>
            </div>
            <div>
              <span className="block text-xs font-semibold uppercase text-[#5B5757] tracking-wider mb-1">
                Tools
              </span>
              <span className="font-semibold text-black text-base">
                {data.tools.join(", ")}
              </span>
            </div>
          </div>
        </div>

        {/* High-Resolution Artwork Showcase Gallery */}
        <section aria-label="Illustration gallery" className="mx-auto max-w-7xl px-5 sm:px-10 lg:px-16 py-12">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {illustrationGallery.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                onClick={() => setSelectedIndex(index)}
                className="group relative cursor-pointer break-inside-avoid overflow-hidden rounded-2xl border border-black/10 bg-[#F9F9F9] shadow-xs hover:shadow-xl transition-all duration-300"
              >
                <div className="relative w-full overflow-hidden bg-black/5">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={800}
                    height={1000}
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="w-full h-auto object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  {/* Hover Overlay Icon */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="p-3 rounded-full bg-white/90 text-black shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <Maximize2 className="h-5 w-5" aria-hidden="true" />
                    </div>
                  </div>
                </div>

                {/* Bottom Caption Bar */}
                <div className="p-4 flex items-center justify-between bg-white border-t border-black/5">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-xs uppercase font-semibold text-[#5B5757]">
                      {item.category}
                    </span>
                    <h2 className="text-base font-bold text-black group-hover:text-black/80 transition-colors">
                      {item.title}
                    </h2>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Project Navigation Footer Bar */}
        <div className="mx-auto max-w-7xl px-5 sm:px-10 lg:px-16 pb-16">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-12 border-t border-black/10">
            <Link
              href={data.prevSlug.startsWith("/") ? data.prevSlug : `/work/${data.prevSlug}`}
              className="group flex items-center gap-3 p-4 rounded-2xl border border-black/10 hover:bg-black hover:text-white transition-all w-full sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
            >
              <ArrowLeft className="h-5 w-5 text-black group-hover:text-white transition-colors" aria-hidden="true" />
              <div className="flex flex-col">
                <span className="text-xs uppercase text-[#5B5757] group-hover:text-white/80 transition-colors">
                  Previous Project
                </span>
                <span className="font-bold text-base text-black group-hover:text-white transition-colors">
                  {data.prevTitle}
                </span>
              </div>
            </Link>

            <Link
              href={data.nextSlug.startsWith("/") ? data.nextSlug : `/work/${data.nextSlug}`}
              className="group flex items-center gap-3 p-4 rounded-2xl border border-black/10 hover:bg-black hover:text-white transition-all w-full sm:w-auto text-right focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
            >
              <div className="flex flex-col">
                <span className="text-xs uppercase text-[#5B5757] group-hover:text-white/80 transition-colors">
                  Next Project
                </span>
                <span className="font-bold text-base text-black group-hover:text-white transition-colors">
                  {data.nextTitle}
                </span>
              </div>
              <ArrowRight className="h-5 w-5 text-black group-hover:text-white transition-colors" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </main>

      {/* Full-Screen High-Res Lightbox Modal */}
      <AnimatePresence>
        {activeItem && selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label={activeItem.title}
          >
            {/* Modal Top Control Bar */}
            <div className="flex items-center justify-between text-white shrink-0 z-10 max-w-7xl mx-auto w-full">
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-wider text-white/70">
                  {activeItem.category} ({selectedIndex + 1} of {illustrationGallery.length})
                </span>
                <h3 className="text-lg sm:text-2xl font-bold">{activeItem.title}</h3>
              </div>
              <button
                onClick={() => setSelectedIndex(null)}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Close high-resolution view"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            {/* Main High-Res Image View */}
            <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="relative max-w-5xl max-h-full w-full h-full flex items-center justify-center p-2"
              >
                <Image
                  src={activeItem.src}
                  alt={activeItem.alt}
                  fill
                  priority
                  className="object-contain"
                />
              </motion.div>

              {/* Prev Navigation Arrow */}
              <button
                onClick={() =>
                  setSelectedIndex((prev) =>
                    prev !== null ? (prev === 0 ? illustrationGallery.length - 1 : prev - 1) : null
                  )
                }
                className="absolute left-2 sm:left-6 p-3 rounded-full bg-white/10 hover:bg-white text-white hover:text-black transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Previous illustration"
              >
                <ChevronLeft className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Next Navigation Arrow */}
              <button
                onClick={() =>
                  setSelectedIndex((prev) =>
                    prev !== null ? (prev === illustrationGallery.length - 1 ? 0 : prev + 1) : null
                  )
                }
                className="absolute right-2 sm:right-6 p-3 rounded-full bg-white/10 hover:bg-white text-white hover:text-black transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Next illustration"
              >
                <ChevronRight className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            {/* Footer Hint */}
            <div className="text-center text-xs text-white/60 shrink-0">
              Press Esc to close • Use left/right arrow keys to navigate
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

IllustrationLayout.displayName = "IllustrationLayout";
