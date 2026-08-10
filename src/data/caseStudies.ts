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

  results: {
    metric: string;
    label: string;
  }[];
}

export const caseStudies: Record<string, CaseStudyData> = {
  nurri: {
    slug: "nurri",
    title: "Nurri AI Health Companion",
    subtitle: "AI powered health and nutrition platform",
    tagline:
      "An AI-powered companion that helps users achieve health and nutrition goals through intelligent diet recommendations, health tracking and real-time suggestions.",
    category: "UI/UX & Mobile App",
    year: "2025",
    role: "Product Designer",
    timeline: "4 Months",
    client: "Nurri",
    tools: ["Figma",],
    tags: ["UI/UX Design", "Mobile App", "Web Design", "Design System"],
    heroImage: "/images/projects/Nurri mockup 2.png",
    heroImageAlt: "Nurri AI Health Companion Mockups",
    nextSlug: "oxtago",
    nextTitle: "Oxtago Financial SaaS",
    prevSlug: "oxtago",
    prevTitle: "Oxtago Financial SaaS",

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
        imageSrc: "/images/projects/Nurri mockup 2.png",
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
        imageSrc: "/images/projects/Nurri mockup.png",
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
        imageSrc: "/images/projects/Nurri mockup.png",
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
        imageSrc: "/images/projects/Nurri mockup.png",
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
      "Empowering finance teams with real-time revenue tracking, automated reconciliation, and executive reporting.",
    category: "Mobile & Web App",
    year: "2025",
    role: "Product Designer",
    timeline: "3 Months",
    client: "Oxtago",
    tools: ["Figma"],
    tags: ["UI/UX Design", "Dashboard"],
    heroImage: "/images/projects/Oxtago mockup.png",
    heroImageAlt: "Oxtago Financial Analytics Dashboard",
    nextSlug: "nurri",
    nextTitle: "Illustrations",
    prevSlug: "nurri",
    prevTitle: "Nurri",

    problem: {
      title: "The Challenge: High Data Density & Fragmented Reporting",
      description:
        "Enterprise finance teams struggled to track multi-currency transactions and revenue metrics due to cluttered spreadsheet dashboards and fragmented third-party payment gateways.",
      painPoints: [
        "Overwhelming data density causing cognitive overload for financial analysts",
        "Lack of real-time synchronization across multi-currency accounts",
        "Slow custom report generation for executive stakeholders",
        "Inconsistent design language across legacy banking tools",
      ],
    },

    solution: {
      title: "The Solution: Modular Financial Command Center",
      description:
        "Architected a clean, high-performance financial dashboard that condenses complex revenue streams into actionable visual insights and custom exportable reports.",
      keyDeliverables: [
        "Modular dashboard cards with customizable layout widgets",
        "Interactive real-time transaction filter tables",
        "Automated multi-currency conversion analytics",
        "Light & Dark theme accessibility support",
      ],
    },

    features: [
      {
        title: "1. Real-Time Revenue & Expense Intelligence",
        description:
          "Integrated dynamic financial charts allowing analysts to drill down from high-level monthly summaries to granular transaction logs in a single click.",
        imageSrc: "/images/projects/Oxtago mockup.png",
        imageAlt: "Oxtago Financial Analytics Widgets",
        highlights: [
          "Live stream transaction feed with status indicators",
          "Customizable date ranges & exportable CSV/PDF reports",
          "Automated anomaly detection alerts for unusual spikes",
        ],
      },
      {
        title: "2. Team Permissions & Reconciliation Flow",
        description:
          "Streamlined auditor workflows with role-based access control and inline transaction tagging for audit trails.",
        imageSrc: "/images/projects/About.png",
        imageAlt: "Oxtago User Permissions Interface",
        highlights: [
          "Role-based permission matrix (Admin, Accountant, Auditor)",
          "Inline comment threads for flagged transactions",
          "Seamless bank account API sync",
        ],
      },
    ],

    designSystem: {
      primaryColor: "#000000",
      secondaryColor: "#5B5757",
      typography: "Neue Montreal / Inter",
      description:
        "Focused on data clarity, strict grid alignment, subtle border separators, and high-contrast numerical typography for zero reading ambiguity.",
    },

    results: [
      { metric: "60%", label: "Faster monthly report generation" },
      { metric: "99.9%", label: "Data accuracy score" },
      { metric: "$12M+", label: "Monthly transaction volume processed" },
    ],
  },
};
