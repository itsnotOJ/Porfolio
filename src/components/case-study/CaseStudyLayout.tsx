"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Award,
} from "lucide-react";
import { CaseStudyData } from "@/data/caseStudies";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

interface CaseStudyLayoutProps {
  data: CaseStudyData;
}

export const CaseStudyLayout: React.FC<CaseStudyLayoutProps> = ({ data }) => {
  return (
    <div className="flex min-h-screen flex-col bg-white text-black antialiased">
      {/* Global Navigation */}
      <Navbar />

      <main id="main-content" tabIndex={-1} className="flex-1 w-full pt-8 md:pt-12 outline-none">
        {/* Top Header & Breadcrumb */}
        <div className="mx-auto max-w-7xl px-5 sm:px-10 lg:px-16 flex flex-col gap-6">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#5B5757] hover:text-black transition-colors w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-full px-3 py-1 bg-black/5"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span>Back to Selected Works</span>
          </Link>

          {/* Title & Subtitle */}
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
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-6 rounded-2xl bg-black/5 border border-black/10 my-4 text-sm">
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
              <span className="font-semibold text-black text-base">{data.tools.slice(0, 2).join(", ")}</span>
            </div>
          </div>

          {/* Main Hero Mockup Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative aspect-16/9 w-full rounded-3xl overflow-hidden bg-black/5 border border-black/10 shadow-xl my-4"
          >
            <Image
              src={data.heroImage}
              alt={data.heroImageAlt}
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Content Body Sections */}
        <div className="mx-auto max-w-7xl px-5 sm:px-10 lg:px-16 flex flex-col gap-16 py-12">
          {/* Section 1: Problem Statement */}
          <section className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#5B5757] rounded-full bg-black/5 px-3 py-1 w-fit">
                01. Problem Statement
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black">
                {data.problem.title}
              </h2>
            </div>
            <p className="text-base sm:text-lg text-black/80 leading-relaxed max-w-4xl">
              {data.problem.description}
            </p>

            {/* Pain Points Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              {data.problem.painPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-5 rounded-2xl border border-black/10 bg-[#F9F9F9]"
                >
                  <AlertCircle className="h-5 w-5 text-black shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-sm sm:text-base font-medium text-black/90 leading-relaxed">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Section 2: The Solution & Deliverables */}
          <section className="flex flex-col gap-6 pt-8 border-t border-black/10">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#5B5757] rounded-full bg-black/5 px-3 py-1 w-fit">
                02. Solution Overview
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black">
                {data.solution.title}
              </h2>
            </div>
            <p className="text-base sm:text-lg text-black/80 leading-relaxed max-w-4xl">
              {data.solution.description}
            </p>

            {/* Deliverable Checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              {data.solution.keyDeliverables.map((deliv, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-5 rounded-2xl border border-black/10 bg-white shadow-xs"
                >
                  <CheckCircle2 className="h-5 w-5 text-black shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-sm sm:text-base font-medium text-black leading-relaxed">
                    {deliv}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: Deep-Dive Features */}
          <section className="flex flex-col gap-12 pt-8 border-t border-black/10">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#5B5757] rounded-full bg-black/5 px-3 py-1 w-fit">
                03. Key Features
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black">
                Design Architecture &amp; User Experience
              </h2>
            </div>

            {data.features.map((feature, idx) => (
              <div
                key={idx}
                className="flex flex-col lg:flex-row items-center gap-8 p-6 sm:p-8 rounded-3xl border border-black/10 bg-[#F9F9F9]"
              >
                <div className="flex flex-col gap-4 lg:w-1/2">
                  <h3 className="text-2xl sm:text-3xl font-bold text-black">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#5B5757] leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="flex flex-col gap-2 pt-2">
                    {feature.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-black shrink-0" aria-hidden="true" />
                        <span className="text-xs sm:text-sm font-medium text-black">
                          {h}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative aspect-16/10 w-full lg:w-1/2 rounded-2xl overflow-hidden bg-black/5 border border-black/10 shadow-md">
                  <Image
                    src={feature.imageSrc}
                    alt={feature.imageAlt}
                    fill
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </section>

          {/* Section 4: Design System & Aesthetics */}
          <section className="flex flex-col gap-6 pt-8 border-t border-black/10">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#5B5757] rounded-full bg-black/5 px-3 py-1 w-fit">
                04. Visual Style &amp; Design System
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black">
                Typography &amp; Color Palette
              </h2>
            </div>
            <p className="text-base sm:text-lg text-black/80 leading-relaxed max-w-4xl">
              {data.designSystem.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-2">
              <div className="p-6 rounded-2xl bg-black text-white flex flex-col justify-between h-36">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#D9D9D9]">
                  Primary Color
                </span>
                <span className="text-2xl font-bold">{data.designSystem.primaryColor}</span>
              </div>
              <div className="p-6 rounded-2xl bg-[#D9D9D9] text-black flex flex-col justify-between h-36 border border-black/10">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#5B5757]">
                  Secondary Color
                </span>
                <span className="text-2xl font-bold">{data.designSystem.secondaryColor}</span>
              </div>
              <div className="p-6 rounded-2xl bg-[#F9F9F9] text-black flex flex-col justify-between h-36 border border-black/10">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#5B5757]">
                  Typography Family
                </span>
                <span className="text-xl font-bold">{data.designSystem.typography}</span>
              </div>
            </div>
          </section>

          {/* Section 5: Impact & Results */}
          <section className="flex flex-col gap-6 pt-8 border-t border-black/10">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#5B5757] rounded-full bg-black/5 px-3 py-1 w-fit">
                05. Results &amp; Impact
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black">
                Measurable Project Outcomes
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-2">
              {data.results.map((res, i) => (
                <div
                  key={i}
                  className="p-8 rounded-3xl border border-black/10 bg-white shadow-xs flex flex-col gap-2"
                >
                  <Award className="h-6 w-6 text-black mb-2" aria-hidden="true" />
                  <span className="text-4xl sm:text-5xl font-bold tracking-tight text-black">
                    {res.metric}
                  </span>
                  <span className="text-sm font-medium text-[#5B5757]">
                    {res.label}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Next / Previous Project Navigation Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-12 border-t border-black/10">
            <Link
              href={`/work/${data.prevSlug}`}
              className="flex items-center gap-3 p-4 rounded-2xl border border-black/10 hover:bg-black hover:text-white transition-all w-full sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
            >
              <ArrowLeft className="h-5 w-5" aria-hidden="true" />
              <div className="flex flex-col">
                <span className="text-xs uppercase text-[#5B5757]">Previous Project</span>
                <span className="font-bold text-base">{data.prevTitle}</span>
              </div>
            </Link>

            <Link
              href={`/work/${data.nextSlug}`}
              className="flex items-center gap-3 p-4 rounded-2xl border border-black/10 hover:bg-black hover:text-white transition-all w-full sm:w-auto text-right focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
            >
              <div className="flex flex-col">
                <span className="text-xs uppercase text-[#5B5757]">Next Project</span>
                <span className="font-bold text-base">{data.nextTitle}</span>
              </div>
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

CaseStudyLayout.displayName = "CaseStudyLayout";
