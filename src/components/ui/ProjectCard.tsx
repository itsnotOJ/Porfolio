"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PrimaryButton } from "@/components/ui/Button";
import { TagGroup } from "@/components/ui/Tag";

export interface ProjectCardData {
  id: string;
  slug?: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  category: "ui-ux" | "saas" | "illustration";
  imageSrc: string;
  imageAlt: string;
  year?: string;
  role?: string;
  client?: string;
  overview?: string;
  keyFeatures?: string[];
  isFeatured?: boolean;
  ctaText?: string;
  galleryImages?: string[];
}

export interface ProjectCardProps {
  project: ProjectCardData;
  onSelect?: (project: ProjectCardData) => void;
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onSelect,
  className = "",
}) => {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-black/10 bg-white transition-all duration-300 hover:shadow-xl ${className}`}
    >
      {/* Top Image Container */}
      <div className="relative aspect-16/10 w-full overflow-hidden bg-black/5">
        <Image
          src={project.imageSrc}
          alt={project.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Top-Left Pill Tags Overlay */}
        <div className="absolute top-4 left-4 z-10">
          <TagGroup tags={project.tags} variant="dark" />
        </div>

        {/* Year Pill Top-Right */}
        {project.year && (
          <div className="absolute top-4 right-4 z-10 rounded-full bg-white/90 backdrop-blur-xs px-3 py-1 text-xs font-semibold text-black border border-black/10">
            {project.year}
          </div>
        )}
      </div>

      {/* Details Container */}
      <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
        <div className="flex flex-col gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#5B5757]">
            {project.subtitle}
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-black group-hover:text-black/80 transition-colors">
            {project.title}
          </h3>
          <p className="mt-1 text-sm sm:text-base text-[#5B5757] leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Bottom Actions */}
        <div className="mt-6 flex items-center justify-between pt-4 border-t border-black/5">
          <PrimaryButton
            onClick={() => onSelect?.(project)}
            size="md"
            className="rounded-[27px] text-xs sm:text-sm font-medium"
          >
            {project.ctaText || "View Case Study"}
          </PrimaryButton>

          <button
            onClick={() => onSelect?.(project)}
            aria-label={`View details for ${project.title}`}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-black/5 text-black transition-all hover:bg-black hover:text-white cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
          >
            <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </motion.article>
  );
};

ProjectCard.displayName = "ProjectCard";
