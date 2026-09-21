# Architecture Decision Log

## Purpose

This document records important technical and design decisions made throughout the project.

Before introducing a new pattern, dependency, or architecture change, review this file.

Do not remove previous decisions.

If a decision changes, add a new entry explaining why.

---

# Decision 001

## Title

Framework Selection

Status

Approved

Decision

Use Next.js 15 with the App Router.

Reason

Provides excellent performance, SEO, server rendering, image optimization, and aligns with modern React best practices.

---

# Decision 002

## Title

Programming Language

Status

Approved

Decision

Use TypeScript.

Reason

Improves maintainability, developer experience, and reduces runtime errors.

---

# Decision 003

## Title

Styling System

Status

Approved

Decision

Use Tailwind CSS v4.

Reason

Rapid development, reusable utility classes, consistent spacing, and AI-friendly implementation.

---

# Decision 004

## Title

Component Library

Status

Approved

Decision

Use shadcn/ui.

Reason

Accessible, customizable components that integrate well with Tailwind CSS.

---

# Decision 005

## Title

Icons

Status

Approved

Decision

Use Lucide React.

Reason

Consistent design language and lightweight bundle size.

---

# Decision 006

## Title

Animation Library

Status

Approved

Decision

Use Framer Motion.

Reason

Create subtle, performant animations that enhance the user experience without distracting from the content.

---

# Decision 007

## Title

Image Handling

Status

Approved

Decision

Use the Next.js Image component for raster images.

Reason

Automatic optimization, responsive sizing, lazy loading, and improved performance.

---

# Decision 008

## Title

Typography

Status

Approved

Decision

Load fonts using next/font.

Reason

Improves performance and avoids layout shift.

---

# Decision 009

## Title

Component Architecture

Status

Approved

Decision

Build reusable components before creating page layouts.

Reason

Reduces duplication and improves maintainability.

---

# Decision 010

## Title

Responsive Strategy

Status

Approved

Decision

Use a mobile-first responsive approach.

Reason

Ensures consistent layouts across mobile, tablet, and desktop devices.

---

# Decision 011

## Title

Accessibility

Status

Approved

Decision

Target WCAG AA compliance where practical.

Reason

Creates a more inclusive experience and aligns with modern web standards.

---

# Decision 012

## Title

Performance

Status

Approved

Decision

Prioritize fast load times over unnecessary visual effects.

Reason

Recruiters should experience a fast, polished portfolio regardless of device.

---

# Decision 013

## Title

AI Workflow

Status

Approved

Decision

Gemini must follow AGENTS.md before implementing any feature.

Reason

Ensures consistent implementation and adherence to the documented workflow.

---

# Decision 014

## Title

Contact Page Architecture & Direct Form / Resume Download Integration

Status

Approved

Decision

Create a dedicated `/contact` route in the Next.js App Router comprising modular components (`ContactHero`, `ContactInformation`, `ContactForm`, `ResumeSection`) and link to starter asset `/resume.pdf`.

Reason

Provides recruiters and prospective clients with multiple accessible touchpoints (direct email copying, status indicators, accessible message form, and instant resume download).

---

# Decision 015

## Title

Marquee Ticker Component Abstraction & Unified Section Headings

Status

Approved

Decision

Extract duplicated inline marquee ticker banners across Home and Selected Works pages into a standalone, reusable `MarqueeTicker` UI component (`src/components/ui/MarqueeTicker.tsx`), and standardize heading structures using `SectionHeading`.

Reason

Reduces code duplication, improves maintainability, enforces consistent typography and animation speed across the application, and ensures zero visual regression.

---

# Decision 016

## Title

Accessibility Audit & WCAG 2.1 AA Standards Compliance

Status

Approved

Decision

Implement global WCAG 2.1 AA accessibility standards including a keyboard skip navigation link (`Skip to main content`), `<main id="main-content">` landmark anchors, interactive artwork card `<button>` elements, aria-modal dialogs, aria-pressed filter states, input placeholder contrast enhancement (>= 4.5:1), decorative icon `aria-hidden` attributes, and `@media (prefers-reduced-motion: reduce)` support.

Reason

Ensures full inclusivity for screen readers, keyboard-only users, and users requiring reduced motion while meeting strict accessibility success criteria without altering the visual design aesthetics.

---

# Decision 017

## Title

Performance Audit & Multi-Layer Application Optimization

Status

Approved

Decision

Implement multi-layer performance optimizations including `experimental.optimizePackageImports` in `next.config.ts` for tree-shaking `lucide-react` and `framer-motion`, Server Component refactoring for static components (`MarqueeTicker`), dynamic code splitting for modals (`next/dynamic` for `ProjectDetailModal`), explicit `loading="lazy"` attributes for below-the-fold images, font preloading (`preload: true`), and extended cache TTL headers for AVIF/WebP image formats.

Reason

Dramatically reduces initial JavaScript bundle size, minimizes main-thread rendering work, accelerates LCP/FID/CLS web vitals, and optimizes resource delivery without altering visual design.

---

# Decision 018

## Title

Final Pre-Deployment Codebase Audit & Production Build Verification

Status

Approved

Decision

Perform complete pre-landing checklist audit across security, performance, accessibility, SEO, code quality, and routing integrity. Update home page featured project routing to directly link to case study pages (`/work/nurri`, `/work/oxtago`, `/work`) and execute `next build` to verify 100% static prerendering.

Reason

Ensures that recruiters and hiring managers navigating the live application experience zero dead ends or broken links, that all 8 routes compile cleanly as SSG static pages, and that the project is completely production-ready for deployment to Vercel/Netlify.

---

# Decision 019

## Title

Hero Section CTA Streamlining & Top Navigation Contact Alignment

Status

Approved

Decision

Remove the secondary CTA button ("Get in Touch") from the Hero section, horizontally center the primary CTA button ("View Selected Works") beneath the hero body copy relative to the text content, update top navigation "Contact" item to smoothly scroll to the Contact section (`#contact`), and eliminate redundant Contact buttons in top header to maintain a single Contact CTA in the navigation interface.

Reason

Eliminates CTA duplication across hero and navigation components, establishes a clean visual hierarchy focused on "View Selected Works" in the hero section, provides an intuitive smooth scroll path to the contact section, and ensures consistent design alignment across mobile, tablet, and desktop viewports.

---

# Decision 020

## Title

CV PDF CTA Integration & Download Handler Implementation

Status

Approved

Decision

Enhanced `Button` component to support the `download` property for HTML anchor tags, updated `ResumeSection` on `/contact` page to provide dedicated "Download Resume (PDF)" (with `download="Mercy_Onyilo_Resume.pdf"`) and "View Online" (in new tab) CTAs linking to `/resume.pdf`, and updated `AboutPreview` section on the Home page to include a direct "View Resume" CTA pointing to `/resume.pdf`.

Reason

Ensures seamless user experience for recruiters and hiring managers looking to download or preview Mercy Onyilo's CV directly from multiple entry points across the portfolio website.

---

# Decision 021

## Title

Contact Page Layout Restructuring & About Me Section Prioritization

Status

Approved

Decision

Prioritize the "About Me" section at the top of the `/contact` page above the Contact Hero, and remove the redundant Action Buttons (CTAs) from the About Me component (`AboutPreview`).

Reason

Placing the "About Me" section first provides visiting recruiters and prospective clients with immediate context regarding Mercy Onyilo's background, metrics, and core competencies before presenting direct contact options. Removing the action buttons ("Get in Touch" and "View Resume") from the About Me section eliminates redundant CTA elements on the Contact page, where contact information and outreach forms are already directly accessible in the sections below.

---

# Decision 022

## Title

Vercel Web Analytics Integration & Production Deployment

Status

Approved

Decision

Integrate `@vercel/analytics` by embedding the `<Analytics />` component in the root layout (`src/app/layout.tsx`), installing global Vercel CLI and Gemini plugin, and deploying the application to production using `vercel --prod`.

Reason

Enables real-time tracking of page views, visitor metrics, and performance analytics directly in the Vercel Dashboard without impacting site performance or requiring custom tracking scripts.

---

# Future Decisions

Record future decisions here using the same format.

Include:

- Date
- Title
- Status
- Decision
- Reason
- Impact