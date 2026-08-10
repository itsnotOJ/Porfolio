"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectCard, ProjectCardData } from "@/components/ui/ProjectCard";

const ProjectDetailModal = dynamic(
  () => import("./ProjectDetailModal").then((mod) => mod.ProjectDetailModal),
  { ssr: false }
);

const allProjects: ProjectCardData[] = [
  {
    id: "nurri",
    slug: "nurri",
    title: "Nurri AI Health Companion",
    subtitle: "AI Powered Health & Nutrition Platform",
    description:
      "An AI-powered companion that helps users achieve health and nutrition goals through intelligent diet recommendations, health tracking and real-time suggestions.",
    overview:
      "Nurri is an AI-powered nutrition and wellness coach that helps users achieve their health and fitness goals through personalized diet recommendations, meal planning, progress tracking, and intelligent insights. The platform leverages cutting-edge AI and machine learning algorithms to deliver tailored nutrition guidance, recipe suggestions, and lifestyle recommendations that adapt to individual preferences, dietary needs, and wellness objectives.",
    keyFeatures: [
      "Personalized meal plans",
      "Smart nutrition tracking",
      "Goal setting and progress tracking",
      "24/7 AI health coach",
    ],
    tags: ["UI/UX Design", "Mobile App", "Web Design", "AI"],
    category: "ui-ux",
    imageSrc: "/images/projects/Nurri mockup 2.png",
    imageAlt: "Nurri AI Health Companion Screenshots",
    year: "2025",
    role: "Product Designer",
    isFeatured: true,
  },
  {
    id: "oxtago",
    slug: "oxtago",
    title: "Oxtago",
    subtitle: "Hybrid Marketplace",
    description:
      "A streamlined financial dashboard offering real-time transaction tracking, operational insights, and automated revenue reporting.",
    overview:
      "Enterprise finance teams struggled to track multi-currency transactions and revenue metrics due to cluttered spreadsheet dashboards and fragmented payment gateways. Oxtago provides a clean, high-performance financial dashboard that condenses complex revenue streams into actionable visual insights and custom exportable reports.",
    keyFeatures: [
      "Real-time revenue & expense intelligence",
      "Automated multi-currency conversion analytics",
      "Role-based access control & permission matrix",
      "Customizable date ranges & exportable reports",
    ],
    tags: ["UI/UX Design", "SaaS", "Dashboard", "Fintech"],
    category: "ui-ux",
    imageSrc: "/images/projects/Oxtago mockup.png",
    imageAlt: "Oxtago Financial SaaS Analytics Dashboard",
    year: "2024",
    role: "Product Designer",
    isFeatured: false,
  },
  {
    id: "brand-illustrations",
    title: "Brand Artwork & Characters",
    subtitle: "Digital Illustration & Visual Identity",
    description:
      "Custom character illustrations and brand visual assets designed for tech startups, editorial platforms, and digital marketing campaigns.",
    overview:
      "A curated collection of bespoke digital art, vector illustrations, and brand graphics. Built to provide digital products with distinct human warmth and visual personality.",
    keyFeatures: [
      "Custom character design & expression sheets",
      "Scalable vector assets for web & mobile interfaces",
      "Cohesive brand color palettes & icon sets",
      "High-resolution marketing graphics",
    ],
    tags: ["Illustration", "Visual Identity", "Digital Art"],
    category: "illustration",
    imageSrc: "/images/illustrations/Queen-Idia.png",
    imageAlt: "Digital Illustration Art Collection",
    year: "2026",
    role: "Digital Illustrator",
    isFeatured: false,
    ctaText: "View illustrations",
    galleryImages: [
      "/images/hero/Hero-illustration-1.png",
      "/images/hero/Hero-illustration-2.png",
      "/images/hero/Hero-illustration-3.png",
      "/images/hero/Hero-illustration-4.png",
      "/images/illustrations/Queen-Idia.png",
      "/images/illustrations/Night-time.png",
      "/images/illustrations/Drink.png",
      "/images/illustrations/Artists-voyage.png",
      "/images/illustrations/Archi-shelf.png",
    ],
  },
];

const categories = [
  { label: "All Projects", value: "all" },
  { label: "UI/UX Design", value: "ui-ux" },
  { label: "Illustrations", value: "illustration" },
];

export const WorkGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<ProjectCardData | null>(null);

  const filteredProjects =
    activeFilter === "all"
      ? allProjects
      : allProjects.filter((p) => p.category === activeFilter);

  return (
    <section aria-label="Work gallery" className="w-full py-8 md:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-10 lg:px-16 flex flex-col gap-10">
        <h2 className="sr-only">Project Gallery</h2>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-3 border-b border-black/10 pb-6" role="toolbar" aria-label="Project category filters">
          {categories.map((cat) => {
            const isActive = activeFilter === cat.value;
            return (
              <button
                key={cat.value}
                type="button"
                onClick={() => setActiveFilter(cat.value)}
                aria-pressed={isActive}
                aria-label={`Filter projects by ${cat.label}`}
                className={`rounded-full px-5 py-2 text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black ${isActive
                  ? "bg-black text-white shadow-xs"
                  : "bg-[#D9D9D9] text-black hover:bg-black hover:text-white"
                  }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Animated Project Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={(proj) => setSelectedProject(proj)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Case Study Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

WorkGallery.displayName = "WorkGallery";
