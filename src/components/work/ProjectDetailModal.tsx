"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ArrowRight } from "lucide-react";
import { ProjectCardData } from "@/components/ui/ProjectCard";
import { PrimaryButton } from "@/components/ui/Button";
import { TagGroup } from "@/components/ui/Tag";

interface ProjectDetailModalProps {
  project: ProjectCardData | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && project) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="fixed inset-0 z-50 bg-white flex flex-col w-full h-full overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
      >
        {/* Full-Screen Header */}
        <div className="flex items-center justify-between px-6 py-5 sm:px-12 sm:py-6 border-b border-black/10 bg-white shrink-0 z-20">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#5B5757]">
              {project.subtitle}
            </span>
            <h2
              id="modal-project-title"
              className="text-2xl sm:text-4xl font-bold tracking-tight text-black"
            >
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close project page"
            className="p-3 rounded-full hover:bg-black/5 text-black border border-black/10 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Scrollable Page Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-12 w-full max-w-7xl mx-auto flex flex-col gap-8">
          {/* Overview */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xl sm:text-2xl font-bold text-black">Project Overview</h3>
            <p className="text-base sm:text-lg text-black/80 leading-relaxed max-w-4xl">
              {project.overview || project.description}
            </p>
          </div>

          {/* Gallery Images (Illustrations) or Standard Single Image + Metadata */}
          {project.galleryImages && project.galleryImages.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-2">
              {project.galleryImages.map((src, idx) => (
                <div
                  key={idx}
                  className="group relative aspect-[275.12/389.75] w-full rounded-2xl overflow-hidden transition-all duration-300"
                >
                  <Image
                    src={src}
                    alt={`Illustration artwork ${idx + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          ) : (
            <>
              {/* Image Preview */}
              <div className="relative aspect-16/9 w-full rounded-2xl overflow-hidden bg-black/5 border border-black/10 shadow-md">
                <Image
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Quick Metadata Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-black/5 border border-black/5 text-sm">
                <div>
                  <span className="block text-xs font-semibold uppercase text-[#5B5757]">
                    Role
                  </span>
                  <span className="font-semibold text-black">
                    {project.role || "UI/UX Designer"}
                  </span>
                </div>
                <div>
                  <span className="block text-xs font-semibold uppercase text-[#5B5757]">
                    Year
                  </span>
                  <span className="font-semibold text-black">
                    {project.year || "2025"}
                  </span>
                </div>
                <div>
                  <span className="block text-xs font-semibold uppercase text-[#5B5757]">
                    Category
                  </span>
                  <span className="font-semibold text-black capitalize">
                    {project.category.replace("-", " / ")}
                  </span>
                </div>
                <div>
                  <span className="block text-xs font-semibold uppercase text-[#5B5757]">
                    Tech &amp; Tools
                  </span>
                  <span className="font-semibold text-black">Figma / React</span>
                </div>
              </div>

              {/* Key Deliverables / Features */}
              {project.keyFeatures && project.keyFeatures.length > 0 && (
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-bold text-black">
                    Key Deliverables &amp; Solutions
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.keyFeatures.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-3 rounded-lg border border-black/5 bg-[#F9F9F9]"
                      >
                        <CheckCircle2 className="h-5 w-5 text-black shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="text-sm font-medium text-black/90">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-col gap-2 pt-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#5B5757]">
                  Project Tags
                </span>
                <TagGroup tags={project.tags} variant="dark" />
              </div>
            </>
          )}
        </div>

        {/* Full-Screen Footer */}
        <div className="px-6 py-5 sm:px-12 sm:py-6 border-t border-black/10 bg-[#F9F9F9] flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <span className="text-sm text-[#5B5757]">
            Interested in similar work for your project?
          </span>
          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto justify-end">
            {project.slug && (
              <PrimaryButton
                href={`/work/${project.slug}`}
                onClick={onClose}
                size="md"
                className="flex items-center gap-2"
              >
                <span>View Full Case Study</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </PrimaryButton>
            )}
            <PrimaryButton
              href="/contact"
              onClick={onClose}
              size="md"
              className="flex items-center gap-2"
            >
              <span>Discuss Project</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </PrimaryButton>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

ProjectDetailModal.displayName = "ProjectDetailModal";
