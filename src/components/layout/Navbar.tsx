"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (pathname === "/") {
        const sections = ["home", "work", "about", "contact"];
        const scrollPosition = window.scrollY + 200;

        for (const section of sections) {
          const el = document.getElementById(section);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href === "/contact" && pathname === "/contact") {
      e.preventDefault();
      const contactForm = document.getElementById("contact-form");
      if (contactForm) {
        contactForm.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
    closeMenu();
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-colors duration-200 bg-white border-b border-black/5",
        scrolled && "shadow-xs"
      )}
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-10 lg:px-16">
        {/* Logo / Name Pill */}
        <Link
          href="/"
          className="flex items-center gap-2 rounded-full bg-black/5 px-4 py-2 text-sm font-semibold text-black transition-colors hover:bg-black hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
        >
          <span>Mercy Onyilo</span>
        </Link>

        {/* Desktop / Tablet Nav Links */}
        <nav
          className="hidden items-center gap-8 md:flex ml-auto"
          aria-label="Desktop Navigation"
        >
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href.includes("#") &&
                activeSection === link.href.split("#")[1]);
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={cn(
                  "font-sans text-base transition-colors duration-200 lg:text-lg font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-md px-2 py-1",
                  isActive
                    ? "text-black font-semibold"
                    : "text-[#6C6C6C] hover:text-black"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Hamburger Toggle (Mobile Only) */}
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleMenu}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            className="flex items-center justify-center p-2 text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-lg cursor-pointer"
          >
            {isOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-x-0 top-[69px] bottom-0 z-50 w-full bg-white p-8 md:hidden flex flex-col gap-6 overflow-y-auto"
            role="dialog"
            aria-label="Mobile Navigation Menu"
          >
            <div className="flex flex-col gap-6 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-2xl font-medium text-[#6C6C6C] transition-colors hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-md"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

Navbar.displayName = "Navbar";

