export interface CaseStudyData {
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  category: string;
  year: string;
  role: string;
  timeline: string;
  client: string;
  tools: string[];
  tags: string[];
  logo?: string;
  heroImage: string;
  heroImageAlt: string;
  nextSlug: string;
  nextTitle: string;
  prevSlug: string;
  prevTitle: string;

  problem: {
    title: string;
    description: string;
    painPoints: string[];
  };

  solution: {
    title: string;
    description: string;
    keyDeliverables: string[];
  };

  features: {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    highlights: string[];
  }[];

  designSystem: {
    primaryColor: string;
    secondaryColor: string;
    typography: string;
    description: string;
  };

  results?: {
    metric: string;
    label: string;
  }[];
}

export const caseStudies: Record<string, CaseStudyData> = {
  nurri: {
    slug: "nurri",
    title: "Nurri",
    subtitle: "AI powered health and nutrition platform",
    tagline:
      "An AI-powered companion that helps users achieve health and nutrition goals through intelligent diet recommendations, health tracking and real-time suggestions.",
    category: "UI/UX & Mobile App",
    year: "2025",
    role: "Product Designer",
    timeline: "4 Months",
    client: "Nurri",
    tools: ["Figma"],
    tags: ["UI/UX Design", "Mobile App", "Web Design", "Design System"],
    logo: "/images/logos/Logo-Nurri.svg",
    heroImage: "/images/projects/Nurri-mockup-2.png",
    heroImageAlt: "Nurri AI Mockup",
    nextSlug: "oxtago",
    nextTitle: "Oxtago",
    prevSlug: "illustrations",
    prevTitle: "Illustrations",

    problem: {
      title: "The Challenge: Making Healthy Eating Consistent",
      description:
        "1 out of 2 people struggle daily with healthy foods to eat consistently, especially those managing health conditions that require daily food decisions. In fact, only 21% of adults describe their diet as very healthy while the others say they struggle to stay consistent. Maintaining a healthy diet is difficult for many people, especially those managing health conditions, allergies, or specific weight goals. Users often lack clear, personalized guidance and struggle with the daily decision of what to eat, leading to inconsistency, confusion, and poor long-term adherence to healthy eating habits.",
      painPoints: [
        "Users struggle to find meal recommendations that align with their health conditions, allergies, and personal goals.",
        "Choosing what to eat every day becomes overwhelming, making it difficult to build consistent healthy eating habits.",
        "Users are exposed to inconsistent and often contradictory dietary advice, leaving them unsure of the best choices.",
        "Without ongoing support or tailored recommendations, users find it hard to stick to healthy eating habits over time.",
      ],
    },

    solution: {
      title: "The Solution: AI-Powered Personalized Nutrition",
      description:
        "Nurri combines AI-driven meal planning with real-time nutrition guidance to help users make healthier food choices based on their unique needs. By delivering personalized recommendations and reducing daily decision fatigue, the product makes healthy eating more consistent and sustainable.",
      keyDeliverables: [
        "Generates tailored meal recommendations based on health conditions, allergies, dietary preferences, and weight goals.",
        "Provides instant, conversational support for questions about food, nutrition, mood, and healthy eating.",
        "Collects user preferences, health information, and goals to deliver relevant recommendations from the start.",
        "Helps users monitor adherence to their meal plans and track progress toward their health and wellness goals.",
      ],
    },

    features: [
      {
        title: "1. AI-Powered Meal Planning",
        description:
          "Nurri creates personalized meal plans based on each user's health goals, dietary preferences, allergies, lifestyle, and schedule. Instead of generic recommendations, the AI generates meal suggestions that adapt to individual needs, making healthy eating easier to maintain over time.",
        imageSrc: "/images/projects/AI-Powered-Meal-Planning.png",
        imageAlt: "Nurri Booking Interface Screens",
        highlights: [
          "Personalized meal plans tailored to individual health needs.",
          "Smart recommendations that adapt to user goals."
        ],
      },
      {
        title: "2. AI Nutrition Assistant",
        description:
          "An integrated conversational AI allows users to ask questions about meals, portion sizes, hydration, nutrition, and healthy habits whenever they need guidance. This provides real-time, contextual support without interrupting the user's journey, making nutrition advice more accessible and actionable.",
        imageSrc: "/images/projects/AI-Nutrition-Assistant.png",
        imageAlt: "Nurri Artisan Portal Interface",
        highlights: [
          "Instant answers to nutrition and wellness questions.",
          "Real-time guidance through conversational AI.",
        ],
      },

      {
        title: "3. Health Goal Tracking",
        description:
          "Users can track progress toward personal health and nutrition goals while receiving gentle reminders and motivational feedback. By visualizing progress and celebrating milestones, the feature encourages long-term consistency and helps users build sustainable eating habits.",
        imageSrc: "/images/projects/Health-Goal-Tracking.png",
        imageAlt: "Nurri mockup",
        highlights: [
          "Monitor progress toward health and fitness goals.",
          "Stay consistent with reminders and progress updates.",
        ],
      },

      {
        title: "4. Personalized Nutrition Insights",
        description:
          "Nurri delivers tailored nutrition tips and educational content based on each user's dietary preferences, lifestyle, and wellness goals. Instead of presenting generic health advice, the app surfaces relevant insights that help users make informed food choices every day.",
        imageSrc: "/images/projects/Personalized-Nutrition-Insights.png",
        imageAlt: "Nurri Artisan Portal Interface",
        highlights: [
          "Receive tailored nutrition tips and recommendations.",
          "Learn healthier habits through personalized guidance.",
        ],
      },
    ],

    designSystem: {
      primaryColor: "#FE934E",
      secondaryColor: "#6BC57D",
      typography: "Satoshi",
      description:
        "Built on a high-contrast, accessible color hierarchy emphasizing legibility, bold pill actions, and fluid touch targets across all devices.",
    },

    results: [
      { metric: "100%", label: "Participants completed meal plan creation without assistance." },
      { metric: "4/5", label: "Users said the AI chatbot made nutrition guidance easier to understand" },
      { metric: "1.5k+", label: "Joined waitlist" },
    ],
  },

  oxtago: {
    slug: "oxtago",
    title: "Oxtago",
    subtitle: "Enterprise Financial Analytics & Dashboard",
    tagline:
      "Bridging the gap between reliability and accessibility.",
    category: "Mobile & Web App",
    year: "2025",
    role: "Product Designer",
    timeline: "3 Months",
    client: "Oxtago",
    tools: ["Figma"],
    tags: ["UI/UX Design", "Dashboard"],
    logo: "/images/logos/Logo-Oxtago.svg",
    heroImage: "/images/projects/Oxtago-mockup.png",
    heroImageAlt: "Oxtago",
    nextSlug: "illustrations",
    nextTitle: "Illustrations",
    prevSlug: "nurri",
    prevTitle: "Nurri",

    problem: {
      title: "The Challenge: Building Trust",
      description:
        "OXTAGO was conceived to solve a very familiar problem: finding reliable help, fast, without stress or risk. From broken plumbing to short‑notice staffing, people often rely on informal networks, word of mouth, or unverified contacts. The result is usually the same; missed appointments, unclear pricing, and zero accountability.",
      painPoints: [
        "Lack of trust in hiring local service providers",
        "Fragmented booking and payment experiences",
        "Poor visibility into job progress",
        "Inefficient provider onboarding and verification",
        "Limited tools for admins to manage quality and disputes",
      ],
    },

    solution: {
      title: "The Solution: The Hybrid Marketplace",
      description:
        "OXTAGO was designed as a three-sided platform; A client-facing web experience focused on speed, clarity, and trust, A provider-facing mobile app optimized for mobility, alerts, and earnings, and An admin dashboard for full operational control and oversight.",
      keyDeliverables: [
        "Real-time booking and job matching",
        "GPS-based job tracking",
        "Provider verification and ratings",
        "Admin tools for pricing, disputes and analytics",
        "Transparent pricing and secure payments",
      ],
    },

    features: [
      {
        title: "1. Verified Service Providers",
        description:
          "Every provider has a verified profile with ratings, reviews, skills, and work samples. This gives clients the information they need to make confident hiring decisions.",
        imageSrc: "/images/projects/Verified-Service-Providers.png",
        imageAlt: "Oxtago Provider Application Interface",
        highlights: [
          "Hire with confidence",
          "Verified profiles with ratings, reviews, and work samples",
          "Transparent skill credentials to support confident hiring",
        ],
      },
      {
        title: "2. Seamless Booking & Payments",
        description:
          "A guided booking flow lets clients select their service, schedule, add instructions, and review estimated costs before confirming. Secure escrow payments help protect both clients and providers.",
        imageSrc: "/images/projects/Seamless-Booking-Payments.png",
        imageAlt: "Oxtago Seamless Booking and Payments Interface",
        highlights: [
          "Book without the uncertainty",
          "Guided booking flow with upfront cost estimates",
          "Secure escrow payments protecting both clients and providers",
        ],
      },
      {
        title: "3. Real-Time Job Tracking",
        description:
          "Clients can track their provider’s journey and follow the job from booking to completion. In-app chat and status updates keep both sides informed throughout the service.",
        imageSrc: "/images/projects/Real-Time-Job-Tracking.png",
        imageAlt: "Oxtago Real-Time Job Tracking Interface",
        highlights: [
          "Always know what’s happening",
          "Live provider journey tracking from booking to completion",
          "In-app chat and real-time status updates",
        ],
      },
      {
        title: "4. Admin Dashboard",
        description:
          "The admin dashboard gives the operations team visibility into users, jobs, payments, providers, and disputes. Admins can verify providers, manage bookings, monitor transactions, and track platform performance through reports and analytics.",
        imageSrc: "/images/projects/Admin-Dashboard.png",
        imageAlt: "Oxtago Admin Operations Dashboard",
        highlights: [
          "Manage the marketplace from one place",
          "Full operational visibility across users, jobs, and disputes",
          "Verify providers, monitor transactions, and track platform analytics",
        ],
      },
    ],

    designSystem: {
      primaryColor: "#FF8B00",
      secondaryColor: "#05061C",
      typography: "Satoshi / Inter",
      description:
        "Focused on data clarity, strict grid alignment, subtle border separators, and high-contrast numerical typography for zero reading ambiguity.",
    },
  },

  illustrations: {
    slug: "illustrations",
    title: "Illustrations",
    subtitle: "Digital Illustration & Visual Identity Collection",
    tagline:
      "Custom character illustrations and brand visual assets designed for tech startups, editorial platforms, and digital marketing campaigns.",
    category: "Digital Illustration",
    year: "2026",
    role: "Digital Illustrator",
    timeline: "Ongoing",
    client: "Various Clients",
    tools: ["Figma", "Illustrator", "Procreate"],
    tags: ["Illustration", "Visual Identity", "Digital Art"],
    heroImage: "/images/illustrations/Queen-Idia.png",
    heroImageAlt: "Digital Illustration Art Collection",
    nextSlug: "nurri",
    nextTitle: "Nurri",
    prevSlug: "oxtago",
    prevTitle: "Oxtago",

    problem: {
      title: "The Challenge: Visual Identity Beyond Generic Stock",
      description:
        "Modern digital products and tech brands often struggle to differentiate themselves in crowded markets. Overused stock graphics and generic vectors fail to convey brand personality, human warmth, or cultural richness.",
      painPoints: [
        "Generic stock illustration dilutes brand identity and visual uniqueness.",
        "Inconsistent visual style across web, mobile, and marketing channels.",
        "Lack of diverse, expressive character art representing varied user demographics.",
        "Need for scalable vector assets optimized for fast web rendering.",
      ],
    },

    solution: {
      title: "The Solution: Custom Character & Brand Illustration",
      description:
        "Crafted bespoke visual stories, editorial artwork, and character designs that give digital products a distinct identity. Each piece is designed with clean visual hierarchy, scalable vector geometry, and harmonious color palettes.",
      keyDeliverables: [
        "Custom character design & expression sheets",
        "Scalable vector assets for web & mobile interfaces",
        "Cohesive brand color palettes & icon sets",
        "High-resolution artwork for digital editorial and marketing campaigns",
      ],
    },

    features: [
      {
        title: "1. Cultural & Character Art",
        description:
          "Rich character illustrations celebrating culture, storytelling, and human expression, designed for high-impact visual engagement.",
        imageSrc: "/images/illustrations/Queen-Idia.png",
        imageAlt: "Queen Idia Character Artwork",
        highlights: [
          "Detailed vector artwork with vibrant palettes",
          "Expressive character poses and cultural motifs",
        ],
      },
      {
        title: "2. Editorial & Storytelling Scenes",
        description:
          "Atmospheric illustrations depicting serene moments, artistic voyages, and spatial composition for modern digital platforms.",
        imageSrc: "/images/illustrations/Artists-voyage.png",
        imageAlt: "Artist's Voyage Editorial Illustration",
        highlights: [
          "Atmospheric lighting and color storytelling",
          "Versatile assets for editorial and splash screens",
        ],
      },
      {
        title: "3. UI Graphic & Conceptual Artwork",
        description:
          "Clean, minimalist visual elements tailored for landing pages, empty states, hero sections, and mobile application graphics.",
        imageSrc: "/images/illustrations/Night-time.png",
        imageAlt: "Night time illustration",
        highlights: [
          "Optimized SVG & PNG exports for fast loading",
          "Harmonious visual style matching modern UI design systems",
        ],
      },
    ],

    designSystem: {
      primaryColor: "#FF5733",
      secondaryColor: "#1F2937",
      typography: "Outfit / Inter",
      description:
        "Vibrant visual expression anchored by bold primary accents, organic shapes, rich contrast, and scalable vector precision.",
    },
  },
};
