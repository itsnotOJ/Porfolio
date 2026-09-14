import type { Metadata } from "next";
import React from "react";
import { caseStudies } from "@/data/caseStudies";
import { CaseStudyLayout } from "@/components/case-study/CaseStudyLayout";

export const metadata: Metadata = {
  title: "Oxtago — Case Study | Mercy Onyilo",
  description: caseStudies.oxtago.tagline,
};

export default function OxtagoCaseStudyPage() {
  return <CaseStudyLayout data={caseStudies.oxtago} />;
}
