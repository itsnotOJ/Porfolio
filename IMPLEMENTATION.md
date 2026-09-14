# Implementation Guide

## Purpose

This document defines the engineering standards for the portfolio.

Every implementation should prioritize maintainability, performance, accessibility, and consistency.

The approved Figma is the source of truth for UI implementation.

---

# Tech Stack

## Framework

Next.js 15

App Router

---

## Language

TypeScript

Strict Mode enabled.

Avoid `any` unless absolutely necessary.

---

## Styling

Tailwind CSS v4

Prefer utility classes over custom CSS.

Avoid inline styles unless unavoidable.

---

## Components

shadcn/ui

Always use shadcn components before building custom primitives.

Customize components instead of rewriting them.

---

## Icons

Lucide React

Do not mix icon libraries.

---

## Animations

Framer Motion

Use only where meaningful.

Animations should enhance usability, not distract from it.

---

## Images

Next.js Image component

Use responsive images.

Lazy-load images below the fold.

Never distort aspect ratios.

---

## Fonts

Use next/font.

Do not import fonts from external CDNs.

---

## Deployment

Vercel

Production build must complete without warnings or errors.

---

# Project Structure

app/

components/

public/

lib/

hooks/

styles/

types/

---

# Routing

Use Next.js App Router.

Each page should have its own route.

Shared layouts should be placed in the app layout.

Avoid unnecessary nested routes.

---

# Component Architecture

Components should be:

Reusable

Focused on a single responsibility

Easy to test

Easy to maintain

Split large UI into smaller components.

Avoid duplicate code.

---

# File Naming

Components

PascalCase

Example

ProjectCard.tsx

---

Utilities

camelCase

Example

formatDate.ts

---

Folders

lowercase

Example

components/

lib/

hooks/

---

# State Management

Use React state.

Lift state only when necessary.

Avoid introducing global state libraries unless the project genuinely requires them.

---

# Styling Rules

Prefer Tailwind utility classes.

Avoid custom CSS files.

Avoid duplicated utility combinations by extracting reusable components.

Maintain consistent spacing using the design system.

---

# Responsive Development

Follow a mobile-first approach.

Support:

Desktop

Tablet

Mobile

Layouts must never introduce horizontal scrolling.

Images should resize correctly.

Typography should scale appropriately.

---

# Performance

Optimize images.

Lazy-load non-critical content.

Keep bundle size small.

Avoid unnecessary client-side JavaScript.

Prefer Server Components.

---

# Accessibility

Semantic HTML

Keyboard navigation

Visible focus indicators

Accessible forms

Meaningful alt text

Correct heading hierarchy

ARIA attributes only when necessary

Respect reduced-motion preferences

Target WCAG AA compliance.

---

# AI Implementation Rules

Before writing code:

Read:

- PROJECT.md
- DESIGN.md
- CONTENT.md
- DECISIONS.md

If a relevant skill exists inside:

.agent/skills/gstack

use it before implementing.

---

# Coding Standards

Keep components under approximately 200 lines where practical.

Avoid deeply nested JSX.

Prefer composition over inheritance.

Extract repeated UI into reusable components.

Use descriptive variable names.

Remove unused code immediately.

Avoid commented-out code.

---

# Server Components

Use Server Components by default.

Only convert to Client Components when:

- state is required
- effects are required
- browser APIs are required

---

# Forms

Validate user input.

Display clear validation messages.

Keep forms accessible.

Prevent duplicate submissions.

---

# Error Handling

Gracefully handle missing data.

Avoid runtime crashes.

Display meaningful fallback UI.

---

# Images

Use descriptive filenames.

Compress large assets.

Prefer WebP where appropriate.

Use PNG only when transparency or image quality requires it.

---

# SEO

Meaningful page titles.

Meta descriptions.

Open Graph metadata.

Semantic HTML.

Structured headings.

Optimized images.

---

# Code Review Checklist

Before completing any task, verify:

✓ Matches Figma

✓ Responsive

✓ Accessible

✓ No duplicate code

✓ Reusable components

✓ Clean TypeScript

✓ No lint errors

✓ Images optimized

✓ Mobile tested

✓ Performance considered

---

# Workflow

For every task:

1. Read AGENTS.md.

2. Read PROJECT.md.

3. Read DESIGN.md.

4. Read CONTENT.md.

5. Review DECISIONS.md.

6. Implement the feature.

7. Update TASKS.md.

8. Record important decisions inside DECISIONS.md if architecture changes.

9. Mark the task complete.