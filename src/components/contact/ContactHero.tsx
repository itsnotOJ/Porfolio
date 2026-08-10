"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export const ContactHero: React.FC = () => {
  return (
    <section
      aria-label="Contact page hero"
      className="w-full pt-8 pb-12 md:pt-16 md:pb-16 bg-white text-black"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-10 lg:px-16 flex flex-col gap-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col gap-4 max-w-3xl"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-black/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#5B5757] w-fit">
            <Sparkles className="h-3.5 w-3.5 text-black" />
            <span>Get In Touch</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-black leading-[1.1]">
            Let&apos;s build something <br className="hidden sm:inline" />
            <span className="underline decoration-black/20 underline-offset-8">extraordinary</span> together.
          </h1>

          {/* Tagline / Subtitle */}
          <p className="text-lg sm:text-xl text-[#5B5757] font-normal leading-relaxed pt-2">
            Whether you are a recruiter looking to fill a UI/UX role, a founder bringing a fresh idea to market, or an agency needing refined digital illustrations — I&apos;d love to hear from you.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

ContactHero.displayName = "ContactHero";
