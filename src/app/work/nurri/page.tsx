import type { Metadata } from "next";
import React from "react";
import { caseStudies } from "@/data/caseStudies";
import { CaseStudyLayout } from "@/components/case-study/CaseStudyLayout";

export const metadata: Metadata = {
  title: "Nurri AI Health Companion — Case Study | Mercy Onyilo",
  description: caseStudies.nurri.tagline,
};

export default function NurriCaseStudyPage() {
  return <CaseStudyLayout data={caseStudies.nurri} />;
}
