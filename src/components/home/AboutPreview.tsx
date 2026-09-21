"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, animate } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TagGroup } from "@/components/ui/Tag";

const skills = [
  "UI/UX Design",
  "Product Strategy",
  "Design Systems",
  "Mobile App Design",
  "Web Applications",
  "Digital Illustration",
  "AI-assisted Development",
  "User Research",
];

const highlights = [
  { stat: "3+", label: "Years Experience" },
  { stat: "10+", label: "Projects Completed" },
  { stat: "98%", label: "Client Satisfaction" },
];

interface StatCounterProps {
  stat: string;
  label: string;
}

const StatCounter: React.FC<StatCounterProps> = ({ stat, label }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayCount, setDisplayCount] = useState(0);

  // Parse stat string once
  const matchRef = useRef(stat.match(/^(\D*)(\d+)(\D*)$/));
  const match = matchRef.current;
  const prefix = match ? match[1] : "";
  const targetValue = match ? parseInt(match[2], 10) : 0;
  const suffix = match ? match[3] : stat;

  useEffect(() => {
    if (!match || !ref.current) return;

    // Respect reduced motion settings
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplayCount(targetValue);
      return;
    }

    let animationControls: { stop: () => void } | null = null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();

          animationControls = animate(0, targetValue, {
            duration: 2,
            ease: "easeOut",
            onUpdate: (latest) => {
              setDisplayCount(Math.round(latest));
            },
          });
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
      if (animationControls) {
        animationControls.stop();
      }
    };
  }, [targetValue, match]);

  return (
    <div className="flex flex-col gap-1">
      <span ref={ref} className="text-2xl sm:text-4xl font-bold tracking-tight text-black">
        {match ? `${prefix}${displayCount}${suffix}` : stat}
      </span>
      <span className="text-xs sm:text-sm text-[#5B5757]">
        {label}
      </span>
    </div>
  );
};

export const AboutPreview: React.FC = () => {
  return (
    <section id="about" aria-label="About section" className="w-full py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-10 lg:px-16 flex flex-col gap-12">
        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Bio & Core Competencies */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <SectionHeading
              badge="About Me"
              title="Design with Purpose, Built for People"
            />

            <p className="text-lg sm:text-xl text-black font-normal leading-relaxed">
              Hi, my name is Mercy Onyilo, but my friends call me Iye, a product designer with over 3 years of
              experience crafting digital experiences that seamlessly blend
              technology, aesthetics, and functionality.
            </p>

            <p className="text-base text-[#5B5757] leading-relaxed">
              Whether designing scalable mobile platforms or illustrating bespoke brand assets, I focus on creating intuitive, human-centered interfaces that make complex tools feel effortless.
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4 py-4 border-y border-black/10">
              {highlights.map((item, i) => (
                <StatCounter key={i} stat={item.stat} label={item.label} />
              ))}
            </div>

            {/* Core Skills Tags */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#5B5757]">
                Core Competencies
              </span>
              <TagGroup tags={skills} variant="pastel" />
            </div>
          </motion.div>

          {/* Right Column: Portrait & Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col items-center gap-3"
          >
            <div className="relative aspect-4/5 w-full flex items-center justify-center">
              <Image
                src="/images/projects/About.png"
                alt="Mercy Onyilo - Product Designer & Illustrator"
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-contain transition-transform duration-500 hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

AboutPreview.displayName = "AboutPreview";
