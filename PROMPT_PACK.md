# AI Prompt Pack

## Purpose

This document contains standardized prompts for building, reviewing, and maintaining the portfolio.

Every prompt assumes the project uses:

- AGENTS.md
- PROJECT.md
- DESIGN.md
- IMPLEMENTATION.md
- CONTENT.md
- ASSETS.md
- TASKS.md
- DECISIONS.md
- STACK.md

Always follow AGENTS.md first.

---

# Prompt 01 — Project Initialization

## Goal

Initialize the project and prepare the development environment.

## Instructions

### Step 1

Read:

- AGENTS.md
- PROJECT.md
- DESIGN.md
- IMPLEMENTATION.md
- STACK.md

### Step 2

Summarize your understanding of the project in a few bullet points.

Do not begin coding until the requirements are understood.

### Step 3

Verify the required technologies:

- Next.js 15
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- Framer Motion
- Lucide React

### Step 4

Verify the project structure.

If anything is missing, create it.

### Step 5

Explain the implementation plan.

### Step 6

Begin implementation.

### Step 7

Update TASKS.md.

### Step 8

Record architectural decisions in DECISIONS.md if necessary.

## Verification

Before completing this task, verify:

- Matches the approved Figma
- Responsive on desktop, tablet, and mobile
- Accessible
- Uses reusable components
- Uses the approved tech stack
- No TypeScript errors
- No ESLint errors
- Images optimized
- Update TASKS.md
- Update DECISIONS.md if architecture changed

---

# Prompt 02 — Build Shared Components

## Goal

Create every reusable global component.

## Instructions

### Step 1

Read:

- DESIGN.md
- IMPLEMENTATION.md
- CONTENT.md

### Step 2

Review the component inventory.

### Step 3

Build:

- Navigation
- Footer
- Primary Button
- Secondary Button
- Tags
- Section Heading
- Social Links

### Step 4

Verify:

- Responsive
- Accessible
- Reusable
- Typed with TypeScript
- Uses Tailwind
- Uses shadcn/ui where appropriate

### Step 5

Update TASKS.md.

## Verification

Before completing this task, verify:

- Matches the approved Figma
- Responsive on desktop, tablet, and mobile
- Accessible
- Uses reusable components
- Uses the approved tech stack
- No TypeScript errors
- No ESLint errors
- Images optimized
- Update TASKS.md
- Update DECISIONS.md if architecture changed

---

# Prompt 03 — Build Home Page

## Goal

Implement the Home page.

## Instructions

### Step 1

Read:

- PROJECT.md
- DESIGN.md
- CONTENT.md
- ASSETS.md

### Step 2

Review the Home page structure.

### Step 3

Implement:

- Navigation
- Hero
- Featured Work
- Illustration Showcase
- About Preview
- Contact CTA
- Footer

### Step 4

Use approved assets only.

### Step 5

Add subtle animations.

### Step 6

Verify responsiveness.

### Step 7

Update TASKS.md.

## Verification

Before completing this task, verify:

- Matches the approved Figma
- Responsive on desktop, tablet, and mobile
- Accessible
- Uses reusable components
- Uses the approved tech stack
- No TypeScript errors
- No ESLint errors
- Images optimized
- Update TASKS.md
- Update DECISIONS.md if architecture changed

---

# Prompt 04 — Build Work Page

## Goal

Implement the Work page.

## Instructions

### Step 1

Read the relevant project documents.

### Step 2

Implement the page according to the approved Figma.

### Step 3

Build reusable project cards.

### Step 4

Optimize images.

### Step 5

Verify accessibility.

### Step 6

Update TASKS.md.

## Verification

Before completing this task, verify:

- Matches the approved Figma
- Responsive on desktop, tablet, and mobile
- Accessible
- Uses reusable components
- Uses the approved tech stack
- No TypeScript errors
- No ESLint errors
- Images optimized
- Update TASKS.md
- Update DECISIONS.md if architecture changed

---

# Prompt 05 — Build Case Study

## Goal

Implement a complete case study page.

## Instructions

### Step 1

Read:

- PROJECT.md
- DESIGN.md
- CONTENT.md
- ASSETS.md

### Step 2

Implement every approved section.

### Step 3

Use reusable layouts where possible.

### Step 4

Optimize images.

### Step 5

Test responsiveness.

### Step 6

Update TASKS.md.

Repeat this workflow for both Oxtago and Nuuri.

## Verification

Before completing this task, verify:

- Matches the approved Figma
- Responsive on desktop, tablet, and mobile
- Accessible
- Uses reusable components
- Uses the approved tech stack
- No TypeScript errors
- No ESLint errors
- Images optimized
- Update TASKS.md
- Update DECISIONS.md if architecture changed

---

# Prompt 06 — Build Contact Page

## Goal

Implement the Contact page.

## Instructions

### Step 1

Read the project documentation.

### Step 2

Implement:

- Contact Hero
- Contact Information
- Social Links
- Resume Download
- Footer

### Step 3

Verify accessibility.

### Step 4

Update TASKS.md.

## Verification

Before completing this task, verify:

- Matches the approved Figma
- Responsive on desktop, tablet, and mobile
- Accessible
- Uses reusable components
- Uses the approved tech stack
- No TypeScript errors
- No ESLint errors
- Images optimized
- Update TASKS.md
- Update DECISIONS.md if architecture changed

---

# Prompt 07 — Refactor

## Goal

Improve the codebase without changing functionality.

## Instructions

### Step 1

Review the relevant files.

### Step 2

Identify duplication.

### Step 3

Extract reusable components where appropriate.

### Step 4

Improve readability.

### Step 5

Ensure no visual regressions.

### Step 6

Update DECISIONS.md if architectural changes are made.

## Verification

Before completing this task, verify:

- Matches the approved Figma
- Responsive on desktop, tablet, and mobile
- Accessible
- Uses reusable components
- Uses the approved tech stack
- No TypeScript errors
- No ESLint errors
- Images optimized
- Update TASKS.md
- Update DECISIONS.md if architecture changed

---

# Prompt 08 — Accessibility Audit

## Goal

Audit the project for accessibility.

## Instructions

Check:

- Semantic HTML
- Heading hierarchy
- Keyboard navigation
- Focus states
- Alt text
- Form labels
- Colour contrast
- Reduced motion support

Fix all issues before completing the audit.

## Verification

Before completing this task, verify:

- Matches the approved Figma
- Responsive on desktop, tablet, and mobile
- Accessible
- Uses reusable components
- Uses the approved tech stack
- No TypeScript errors
- No ESLint errors
- Images optimized
- Update TASKS.md
- Update DECISIONS.md if architecture changed

---

# Prompt 09 — Performance Audit

## Goal

Optimize the project.

## Instructions

Review:

- Bundle size
- Image optimization
- Server Components
- Client Components
- Lazy loading
- Fonts
- Lighthouse performance

Implement improvements without changing the design.

## Verification

Before completing this task, verify:

- Matches the approved Figma
- Responsive on desktop, tablet, and mobile
- Accessible
- Uses reusable components
- Uses the approved tech stack
- No TypeScript errors
- No ESLint errors
- Images optimized
- Update TASKS.md
- Update DECISIONS.md if architecture changed

---

# Prompt 10 — Final Review

## Goal

Prepare the project for deployment.

## Instructions

### Step 1

Run every checklist inside CHECKLISTS.md.

### Step 2

Fix outstanding issues.

### Step 3

Verify the production build succeeds.

### Step 4

Update:

- TASKS.md
- CHANGELOG.md
- DECISIONS.md (if required)

### Step 5

Summarize completed work.

### Step 6

Recommend any final improvements before deployment.