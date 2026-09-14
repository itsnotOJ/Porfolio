import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero, AboutPreview } from "@/components/home";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-black antialiased selection:bg-black selection:text-white">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Page Content */}
      <main id="main-content" tabIndex={-1} className="flex-1 w-full outline-none">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Me Section */}
        <AboutPreview />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}

