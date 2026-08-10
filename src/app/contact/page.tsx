import type { Metadata } from "next";
import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  ContactHero,
  ContactInformation,
  ContactForm,
} from "@/components/contact";
import { AboutPreview } from "@/components/home";

export const metadata: Metadata = {
  title: "Contact — Mercy Onyilo | Product Designer & Illustrator",
  description:
    "Get in touch with Mercy Onyilo for full-time product design roles, freelance contracts, UI/UX design, or illustration inquiries.",
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-black antialiased selection:bg-black selection:text-white">
      {/* Global Navigation */}
      <Navbar />

      {/* Main Page Content */}
      <main id="main-content" tabIndex={-1} className="flex-1 w-full outline-none">
        {/* 1. About Me Section */}
        <AboutPreview />

        {/* 2. Contact Hero */}
        <ContactHero />

        {/* 3. Contact Information Cards */}
        <ContactInformation />

        {/* 4. Direct Contact Form */}
        <ContactForm />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
