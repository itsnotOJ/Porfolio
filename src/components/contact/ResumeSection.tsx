"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download, ExternalLink, FileText, CheckCircle } from "lucide-react";
import { PrimaryButton, SecondaryButton } from "@/components/ui/Button";

const resumeHighlights = [
  "3+ years of end-to-end Product Design & UI/UX experience",
  "Specialized in Mobile Applications, SaaS Dashboards & Design Systems",
  "Custom Digital Vector & Brand Illustration expertise",
  "Strong collaboration with cross-functional engineering & product teams",
];

export const ResumeSection: React.FC = () => {
  return (
    <section aria-label="Resume download section" className="w-full py-12 md:py-16 bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-8 sm:p-12 rounded-3xl bg-black text-white flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10"
        >
          {/* Left Column: Details */}
          <div className="flex flex-col gap-6 max-w-2xl">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-[#D9D9D9]" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#D9D9D9]">
                Curriculum Vitae / Resume
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Mercy Onyilo — Resume
              </h2>
              <p className="text-base sm:text-lg text-[#D9D9D9]">
                Download a PDF copy of my complete professional experience, product design achievements, skills matrix, and educational background.
              </p>
            </div>

            {/* Highlights List */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#D9D9D9]">
              {resumeHighlights.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Download & View Actions */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-4 w-full lg:w-auto shrink-0">
            <PrimaryButton
              href="/resume.pdf"
              isExternal
              download="Mercy_Onyilo_Resume.pdf"
              size="lg"
              className="w-full text-base px-8 py-4 rounded-[27px] bg-white text-black border-white hover:bg-black hover:text-white flex items-center justify-center gap-3 font-semibold"
            >
              <Download className="h-5 w-5" aria-hidden="true" />
              <span>Download Resume (PDF)</span>
            </PrimaryButton>

            <SecondaryButton
              href="/resume.pdf"
              isExternal
              size="lg"
              className="w-full text-base px-8 py-4 rounded-[27px] bg-transparent text-white border-white/30 hover:bg-white/10 hover:text-white flex items-center justify-center gap-2 font-medium"
            >
              <span>View Online</span>
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </SecondaryButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

ResumeSection.displayName = "ResumeSection";
