"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PrimaryButton, SecondaryButton } from "@/components/ui/Button";

const heroIllustrations = [
  {
    src: "/images/hero/Hero-illustration-1.png",
    alt: "Character illustration of a designer crafting digital products",
  },
  {
    src: "/images/hero/Hero-illustration-2.png",
    alt: "Vector graphics showcasing interface design elements",
  },
  {
    src: "/images/hero/Hero-illustration-3.png",
    alt: "Minimalist digital artwork with bold creative typography",
  },
  {
    src: "/images/hero/Hero-illustration-4.png",
    alt: "Bespoke product illustration for web applications",
  },
];

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      aria-label="Hero section"
      className="relative w-full py-8 md:py-16 lg:py-24"
    >
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center justify-between gap-12 px-5 sm:px-10 lg:flex-row lg:px-16">
        {/* Left Column: 2x2 Illustration Grid (On desktop left, on tablet/mobile top) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full lg:w-1/2"
        >
          <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-xl mx-auto lg:max-w-none justify-items-center">
            {heroIllustrations.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
                className="relative w-full max-w-[275.12px] aspect-[275.12/389.75] overflow-hidden bg-black/5 shadow-md rounded-[8px] border border-black/10"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  priority={index < 2}
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 275px"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Hero Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="flex w-full flex-col items-center text-center lg:w-1/2 lg:items-start lg:text-left"
        >
          {/* Availability Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-black/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#5B5757]">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            Available for work
          </div>

          {/* Name */}
          <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl lg:text-7xl leading-[1.05]">
            Mercy Onyilo
          </h1>

          {/* Title */}
          <p className="mt-2 text-base font-normal text-[#5B5757]">
            Product Designer &amp; Illustrator
          </p>

          {/* Tagline */}
          <p className="mt-4 max-w-xl text-base text-black/80 sm:text-lg lg:text-xl leading-relaxed">
            From idea to interface, I focus on creating clean and structured
            experiences that feel simple to use.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex w-full max-w-xl flex-wrap items-center justify-center gap-4 lg:justify-start">
            <PrimaryButton href="/work" size="lg" className="w-full sm:w-auto">
              View Selected Works
            </PrimaryButton>
            <SecondaryButton href="/contact" size="lg" className="w-full sm:w-auto">
              Get in Touch
            </SecondaryButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

Hero.displayName = "Hero";
