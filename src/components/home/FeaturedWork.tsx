"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PrimaryButton } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MarqueeTicker } from "@/components/ui/MarqueeTicker";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  imageSrc: string;
  imageAlt: string;
  slug?: string;
  href?: string;
  isFeatured?: boolean;
}

const projects: Project[] = [
  {
    id: "nurri",
    slug: "nurri",
    title: "Nurri AI Health Companion",
    subtitle: "AI Powered Health & Nutrition Platform",
    description:
      "An AI-powered companion that helps users achieve health and nutrition goals through intelligent diet recommendations, health tracking and real-time suggestions.",
    tags: ["UI/UX Design", "Mobile App", "Web Design", "AI"],
    imageSrc: "/images/projects/Nurri mockup 2.png",
    imageAlt: "Nurri AI Health Companion App Screenshots",
    href: "/work/nurri",
    isFeatured: true,
  },
  {
    id: "oxtago",
    slug: "oxtago",
    title: "Oxtago Financial SaaS",
    subtitle: "Enterprise Financial Analytics",
    description:
      "A streamlined financial dashboard offering real-time transaction tracking, operational insights, and automated revenue reporting.",
    tags: ["UI/UX Design", "SaaS", "Dashboard", "Fintech"],
    imageSrc: "/images/projects/Oxtago mockup.png",
    imageAlt: "Oxtago SaaS Financial Dashboard",
    href: "/work/oxtago",
    isFeatured: false,
  },
  {
    id: "brand-illustrations",
    title: "Brand Artwork & Characters",
    subtitle: "Digital Illustration & Visual Identity",
    description:
      "Custom character illustrations and brand visual assets designed for tech startups, editorial platforms, and digital marketing campaigns.",
    tags: ["Illustration", "Visual Identity", "Digital Art"],
    imageSrc: "/images/illustrations/Queen-Idia.png",
    imageAlt: "Digital Illustration Art Collection",
    href: "/work",
    isFeatured: false,
  },
];

export const FeaturedWork: React.FC = () => {
  return (
    <section id="work" aria-label="Selected works" className="w-full py-12 md:py-20">
      {/* Infinite Scrolling Marquee Banner */}
      <MarqueeTicker className="my-8" />

      {/* Main Grid Container */}
      <div className="mx-auto max-w-7xl px-5 sm:px-10 lg:px-16 flex flex-col gap-10">
        {/* Section Heading */}
        <SectionHeading
          badge="Featured Projects"
          title="Crafted with Intent"
          subtitle="A selection of recent product design and web application projects built for scale, clarity, and user delight."
        />

        {/* Project Cards Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => {
            const projectUrl =
              project.href || (project.slug ? `/work/${project.slug}` : "/work");

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border border-black/10 bg-[#F9F9F9] transition-all duration-300 hover:shadow-xl ${
                  project.isFeatured ? "md:col-span-2" : "md:col-span-1"
                }`}
              >
                {/* Project Image Container */}
                <div
                  className={`relative w-full overflow-hidden bg-black/5 ${
                    project.isFeatured
                      ? "h-72 sm:h-96 lg:h-[480px]"
                      : "h-64 sm:h-80 lg:h-96"
                  }`}
                >
                  <Image
                    src={project.imageSrc}
                    alt={project.imageAlt}
                    fill
                    loading="lazy"
                    sizes={
                      project.isFeatured
                        ? "100vw"
                        : "(max-width: 768px) 100vw, 50vw"
                    }
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Card Details Body */}
                <div className="flex flex-1 flex-col justify-between p-6 sm:p-8 bg-white">
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#5B5757]">
                      {project.subtitle}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-black">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm sm:text-base text-[#5B5757] leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Bottom CTA Action Buttons */}
                  <div className="mt-6 flex items-center justify-between pt-4 border-t border-black/5">
                    <PrimaryButton
                      href={projectUrl}
                      size="md"
                      className="rounded-[27px] text-xs sm:text-sm font-medium"
                    >
                      View Project Details
                    </PrimaryButton>

                    <Link
                      href={projectUrl}
                      aria-label={`View details for ${project.title}`}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-black/5 text-black transition-all hover:bg-black hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
                    >
                      <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

FeaturedWork.displayName = "FeaturedWork";

