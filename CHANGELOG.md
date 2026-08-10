# Changelog

## [1.0.0] - 2026-08-05

### Added
- **Navigation & Layout**: Sticky glassmorphic navbar with smooth scroll spy, mobile slide-out drawer menu, and global footer with back-to-top button.
- **Home Page**: Interactive hero section with 2x2 illustration grid, featured projects section, digital artwork showcase gallery with lightbox modal, about preview, and contact CTA.
- **Selected Works Page**: Filterable project gallery (`UI/UX`, `SaaS`, `Illustration`), interactive project detail case study modals, and continuous marquee ticker.
- **Case Study Pages**: Detailed case study layouts for both Nurri Marketplace and Oxtago SaaS (`Problem Statement`, `Solution Overview`, `Deep-Dive Features`, `Design System & Aesthetics`, `Impact Metrics`, `Next/Prev Navigation`).
- **Contact Page**: Dedicated route featuring contact hero, direct touchpoint cards (email copy with instant clipboard feedback, status, timezone, response guarantee), interactive project brief form, resume download section, and social profile links.
- **Accessibility (WCAG 2.1 AA)**: Keyboard skip navigation link (`#main-content`), main landmark IDs, interactive artwork card `<button>` controls, `aria-modal` dialogs, `aria-pressed` filter toggle states, 5.0:1 contrast input placeholders, decorative icon `aria-hidden` attributes, and `@media (prefers-reduced-motion: reduce)` support.
- **Performance Optimization**: `lucide-react` and `framer-motion` package import tree-shaking, Server Component refactoring (`MarqueeTicker`), dynamic code-splitting for case study modal (`next/dynamic`), `loading="lazy"` image loading attributes, font preloading (`preload: true`), and 1-year AVIF/WebP image cache headers.

### Fixed
- **Featured Work Case Study Routing**: Replaced static hash anchors (`#contact`) in `FeaturedWork` CTA buttons with direct routes to project case studies (`/work/nurri`, `/work/oxtago`, `/work`).

### Verified
- **Production Build Readiness**: Verified clean Next.js 15 production build (`next build`) with 0 TypeScript/ESLint errors and 100% static prerendering across all 8 routes (`/`, `/contact`, `/work`, `/work/nurri`, `/work/oxtago`, etc.).

## [0.1.0] - 2026-08-05
- Initial Next.js 15 App Router project setup with TypeScript and Tailwind CSS v4.