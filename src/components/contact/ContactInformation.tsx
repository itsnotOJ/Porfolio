"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Copy, Check, MapPin, Clock, ShieldCheck } from "lucide-react";
import { PrimaryButton } from "@/components/ui/Button";

export const ContactInformation: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = "iyenugwa18@gmail.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback if clipboard API fails
      setCopied(false);
    }
  };

  return (
    <section aria-label="Contact information" className="w-full py-6 bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-10 lg:px-16">
        <h2 className="sr-only">Contact Details &amp; Availability</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 1. Direct Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-col justify-between p-6 rounded-2xl border border-black/10 bg-[#FAFAFA] hover:border-black/20 transition-all gap-4"
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-black">
                <Mail className="h-5 w-5" aria-hidden="true" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#5B5757]">
                  Direct Email
                </span>
              </div>
              <p className="text-base font-bold text-black break-all">{email}</p>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <PrimaryButton
                href={`mailto:${email}`}
                isExternal
                size="sm"
                className="text-xs font-semibold px-4"
              >
                Send Email
              </PrimaryButton>

              <button
                onClick={handleCopyEmail}
                aria-label="Copy email address to clipboard"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-black/10 text-xs font-medium text-black bg-white hover:bg-black/5 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-green-600" aria-hidden="true" />
                    <span className="text-green-700 font-semibold" aria-live="polite">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5 text-black" aria-hidden="true" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* 2. Availability Status Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-col justify-between p-6 rounded-2xl border border-black/10 bg-[#FAFAFA] hover:border-black/20 transition-all gap-4"
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#5B5757]">
                  Current Status
                </span>
              </div>
              <h3 className="text-base font-bold text-black">Available for Hire</h3>
              <p className="text-xs text-[#5B5757] leading-relaxed">
                Open to full-time product design roles, freelance contracts, &amp; creative design sprints.
              </p>
            </div>

            <div className="pt-2">
              <span className="inline-block rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 px-3 py-1 text-xs font-medium">
                Immediate Availability
              </span>
            </div>
          </motion.div>

          {/* 3. Location & Timezone Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex flex-col justify-between p-6 rounded-2xl border border-black/10 bg-[#FAFAFA] hover:border-black/20 transition-all gap-4"
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-black">
                <MapPin className="h-5 w-5" aria-hidden="true" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#5B5757]">
                  Location
                </span>
              </div>
              <h3 className="text-base font-bold text-black">Abuja, Nigeria</h3>
              <p className="text-xs text-[#5B5757] leading-relaxed">
                Timezone: WAT (UTC+1). Seamless async workflow &amp; overlap with US/EU teams.
              </p>
            </div>

            <div className="pt-2">
              <span className="inline-block rounded-full bg-black/5 text-[#5B5757] px-3 py-1 text-xs font-medium">
                Remote Worldwide
              </span>
            </div>
          </motion.div>

          {/* 4. Response Time Guarantee Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="flex flex-col justify-between p-6 rounded-2xl border border-black/10 bg-[#FAFAFA] hover:border-black/20 transition-all gap-4"
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-black">
                <Clock className="h-5 w-5" aria-hidden="true" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#5B5757]">
                  Response Guarantee
                </span>
              </div>
              <h3 className="text-base font-bold text-black">&lt; 24 Hours</h3>
              <p className="text-xs text-[#5B5757] leading-relaxed">
                All inquiries are promptly reviewed. You can expect a response within one business day.
              </p>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-black font-medium pt-2">
              <ShieldCheck className="h-4 w-4 text-black" aria-hidden="true" />
              <span>Prompt communication</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

ContactInformation.displayName = "ContactInformation";
