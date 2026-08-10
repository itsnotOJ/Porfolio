# Prompt Library

## Navigation
Build a sticky navigation bar with the following spec:

Logo/name area: text reading "PORTFOLIO" centred between two vertical divider lines, with "About Me" on the left and "Contact" on the right (desktop layout)
Alternative nav (from the refined desktop frame): logo pill on the far left (grey placeholder rectangle — replace with Mercy's name or logo), then nav links Home | Work | About on the right, and a black pill CTA button labelled "Contact"
Use the second nav pattern as the production version (cleaner, more modern)
Nav links: font-family: Comme, sans-serif, font-size: 20px, color: #6C6C6C for inactive, 
#000000 for active/hover
Contact button: black background 
#000000, text 
#D9D9D9, border-radius: 27px, padding: 10px 15px
On tablet: reduce font size to 16px, compress spacing
On mobile: collapse to a hamburger menu. Drawer slides in from the right with links stacked vertically. Contact button remains visible in the closed nav bar

---

## Hero

Build the hero section with a split layout:

Desktop layout (≥ 1280px):

Left half: a 2×2 grid of four illustrated artworks displayed in shaped/masked panels (irregular organic shapes, not simple rectangles). These are Mercy's illustrations — use the images from Figma assets
Right half: vertically centred text block containing:
Name: "Mercy Onyilo" — font-family: Neue Montreal, font-weight: bold, font-size: 64px, letter-spacing: 1.92px
Subtitle: "Product Designer & Illustrator" — font-family: Comme, font-weight: thin, font-size: 20px, color: #5B5757, centred
Tagline: "From idea to interface, I focus on creating clean, structured experiences that feel simple to use" — font-family: Comme, font-size: 20px, centred
CTA button: "View my work" — black pill button, anchors to Selected Works section

Tablet layout (768px – 1279px):

Stack the illustration grid above the text block
Illustration grid becomes 2×2 at reduced size, centred
Text block centred below, reduce name to 48px

Mobile layout (≤ 767px):

Illustration grid becomes a 2×2 compact grid or a horizontally scrollable strip
Text block stacks below, name scales to 36px
Tagline font size reduces to 16px
Button spans full width

Image masking note: The four images use an organic SVG mask shape (like a rounded irregular blob). Replicate this with CSS clip-path or SVG clipPathUnits. The mask SVG is available in the Figma assets. On mobile, simplify to border-radius: 12px rounded rectangles if the mask causes performance issues.

---

## About

This is a short bio paragraph that sits inline with the hero on desktop and stacks below on smaller screens.

Content (placeholder — Mercy to replace with final copy):

"Hi, my name is Mercy Onyilo, a product designer with over 3 years experience crafting digital experiences that seamlessly blend technology, aesthetics and functionality."

font-family: Comme or Inter, font-size: 20px, line-height: 1.3, color: #000000
On desktop: appears in the right column below the hero tagline, or as part of the intro text block
On tablet/mobile: appears as its own full-width block below the hero

---

## Projects

Build a projects showcase section with a scrolling marquee header and project cards.

Marquee / ticker:

Full-width dark bar (background: #D9D9D9 in wireframe — update to a dark or accent colour per final design direction)
Text repeating: "Selected works •" scrolling horizontally on loop
font-family: Neue Montreal or Inter, font-weight: bold, font-size: 40px
Use CSS animation (animation: marquee linear infinite) or a JS scroll library

Project cards:

The section has 3 project cards in total — 1 large feature card and 2 equal-width cards below.

Card structure (each card):

Background: project mockup image (grey placeholder in wireframe — use actual project screenshots)
Top-left pill tags: e.g. "UI/UX design" and "Web design" — black background, white text, border-radius: 31px
Bottom-left: project name in bold (font-size: 40px)
Below name: short project description (1–2 lines, font-size: 24px, line-height: 1.3)
Bottom CTA: "View project" black pill button + circular arrow icon button side by side
border-radius: 8px on the card itself

Project 1 content (from Figma):

Title: Project 1 (replace with real project name)
Tags: UI/UX design, Web design
Description: "A web and mobile on-demand services marketplace connecting clients to verified artisans and service providers for scheduled or real-time jobs."

Project 2 & 3: Same structure, side by side below Project 1.

Desktop layout: Project 1 spans full width. Projects 2 and 3 sit side by side at 50% each below.

Tablet layout: Project 1 full width. Projects 2 and 3 stack into a single column.

Mobile layout: All cards stacked in a single column, full width.

---

## Footer

Build the footer / contact section.

Top block:

Heading: "Lets connect" — font-family: Neue Montreal or Inter, font-weight: bold, font-size: 64px, line-height: 1.3
Subtext or call to action below (Mercy to supply final copy — placeholder can be an email address or a short line like "Open to new opportunities and collaborations")

Social / contact links:

Three pill-shaped link buttons in a row (grey placeholders in Figma — to be populated with LinkedIn, Behance/Dribbble, and email)
Style: grey or outlined pill, height: 28px, text inside

Divider lines:

Two full-width horizontal lines above the footer block (as seen in the design)
border: 1px solid #000 or similar

Desktop: Heading on the left, contact links to the right or below Tablet/Mobile: Everything stacked, centred

---

## Responsive Rules

Apply these rules globally across all sections:
Breakpoints:
  Mobile:  max-width 767px
  Tablet:  768px – 1279px
  Desktop: 1280px and above

Layout:
  - Use CSS Grid or Flexbox for all layouts
  - No fixed pixel widths on containers — use max-width + auto margins
  - All horizontal padding scales: 64px → 40px → 20px
  - All font sizes scale down: reduce headings by ~25% on tablet, ~40% on mobile

Fonts:
  - Import: Neue Montreal (Bold, Medium) and Comme (Regular, Thin) from the project's font source
  - Fallback: Inter, sans-serif

Buttons:
  - All CTA buttons use border-radius: 27px (pill shape)
  - Hover state: invert colours (white background, black text) with 200ms transition
  - Active state: slight scale-down (transform: scale(0.97))

Images:
  - All images use object-fit: cover
  - Illustration grid images maintain aspect ratio — do not stretch
  - Lazy load all images below the fold

Animation (optional but recommended):
  - Hero text fades in on load (opacity 0 → 1, translateY 20px → 0, 600ms ease)
  - Project cards fade in on scroll (use IntersectionObserver)
  - Marquee scrolls continuously at ~40px/s

Accessibility:
  - All interactive elements have visible focus states
  - Images have descriptive alt text
  - Nav has aria-label="Main navigation"
  - Colour contrast meets WCAG AA minimum

  