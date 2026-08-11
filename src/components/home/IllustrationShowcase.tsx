"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TagGroup } from "@/components/ui/Tag";

interface Artwork {
  id: string;
  title: string;
  category: string;
  src: string;
  alt: string;
  tags: string[];
}

const artworks: Artwork[] = [
  {
    id: "artwork-1",
    title: "Queen Idia",
    category: "Digital Illustration",
    src: "/images/illustrations/Queen-Idia.png",
    alt: "Digital illustration of Queen Idia character artwork",
    tags: ["Character", "Digital Art"],
  },
  {
    id: "artwork-2",
    title: "Night Exploration",
    category: "Visual Storytelling",
    src: "/images/illustrations/Night-time.png",
    alt: "Digital illustration artwork of a night-time landscape",
    tags: ["Branding", "Creative"],
  },
  {
    id: "artwork-3",
    title: "Summer Refreshment",
    category: "Concept Art",
    src: "/images/illustrations/Drink.png",
    alt: "Conceptual digital illustration of a stylized drink",
    tags: ["Minimal", "Concept"],
  },
  {
    id: "artwork-4",
    title: "Artist's Voyage",
    category: "Visual Storytelling",
    src: "/images/illustrations/Artists-voyage.png",
    alt: "Digital illustration artwork depicting an artist's voyage",
    tags: ["Editorial", "Visuals"],
  },
  {
    id: "artwork-6",
    title: "Architectural Shelf",
    category: "Spatial Illustration",
    src: "/images/illustrations/Archi-shelf.png",
    alt: "Architectural shelf interior design illustration",
    tags: ["Interior", "Design"],
  },
];

export const IllustrationShowcase: React.FC = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedArtwork) {
        setSelectedArtwork(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedArtwork]);

  return (
    <section
      id="illustrations"
      aria-label="Illustration showcase"
      className="w-full py-12 md:py-20 bg-black/2"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-10 lg:px-16 flex flex-col gap-10">
        <SectionHeading
          badge="Illustrations"
          title="Digital Artwork &amp; Visuals"
          subtitle="Combining product thinking with creative digital illustration to give brands and interfaces a distinctive personality."
        />

        {/* 4-column Artwork Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {artworks.map((art, index) => (
            <motion.button
              type="button"
              key={art.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col text-left overflow-hidden rounded-2xl border border-black/10 bg-white shadow-xs transition-all duration-300 hover:shadow-lg cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
              onClick={() => setSelectedArtwork(art)}
              aria-label={`View enlarged preview of ${art.title}`}
              aria-haspopup="dialog"
            >
              {/* Image Frame */}
              <div className="relative aspect-[275.12/389.75] w-full overflow-hidden bg-black/5">
                <Image
                  src={art.src}
                  alt={art.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Expand Overlay Button */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-md">
                    <Maximize2 className="h-5 w-5" aria-hidden="true" />
                  </div>
                </div>
              </div>

              {/* Caption Card */}
              <div className="flex flex-col p-4 gap-2 w-full">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#5B5757]">
                  {art.category}
                </span>
                <h3 className="text-base font-bold text-black group-hover:text-black/80">
                  {art.title}
                </h3>
                <TagGroup tags={art.tags} variant="light" className="mt-1" />
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Accessible Lightbox Modal */}
      <AnimatePresence>
        {selectedArtwork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedArtwork(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label="Artwork lightbox preview"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-black/10">
                <div>
                  <h3 className="text-xl font-bold text-black">
                    {selectedArtwork.title}
                  </h3>
                  <span className="text-xs text-[#5B5757]">
                    {selectedArtwork.category}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedArtwork(null)}
                  aria-label="Close artwork preview"
                  className="p-2 rounded-full hover:bg-black/5 text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black cursor-pointer"
                >
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Modal Image */}
              <div className="relative aspect-4/3 w-full bg-black/5 overflow-hidden">
                <Image
                  src={selectedArtwork.src}
                  alt={selectedArtwork.alt}
                  fill
                  className="object-contain p-4"
                />
              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:p-6 bg-[#F9F9F9] flex flex-wrap items-center justify-between gap-4">
                <TagGroup tags={selectedArtwork.tags} variant="dark" />
                <span className="text-xs font-medium text-[#5B5757]">
                  © Mercy Onyilo Illustration
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

IllustrationShowcase.displayName = "IllustrationShowcase";
