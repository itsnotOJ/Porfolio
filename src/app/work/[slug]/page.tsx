import type { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";
import { caseStudies } from "@/data/caseStudies";
import { CaseStudyLayout } from "@/components/case-study/CaseStudyLayout";
import { IllustrationLayout } from "@/components/case-study/IllustrationLayout";

interface CaseStudyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const caseStudy = caseStudies[resolvedParams.slug];

  if (!caseStudy) {
    return {
      title: "Case Study Not Found — Mercy Onyilo",
    };
  }

  return {
    title: `${caseStudy.title} — Mercy Onyilo`,
    description: caseStudy.tagline,
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const resolvedParams = await params;
  const caseStudy = caseStudies[resolvedParams.slug];

  if (!caseStudy) {
    notFound();
  }

  if (resolvedParams.slug === "illustrations") {
    return <IllustrationLayout data={caseStudy} />;
  }

  return <CaseStudyLayout data={caseStudy} />;
}
