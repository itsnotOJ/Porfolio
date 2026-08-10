"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "UI/UX Design Project",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate async submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      subject: "UI/UX Design Project",
      message: "",
    });
    setSubmitted(false);
  };

  return (
    <section id="contact-form" aria-label="Contact message form" className="w-full py-12 md:py-16 bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-10 lg:px-16">
        <div className="p-8 sm:p-12 rounded-3xl border border-black/10 bg-[#FAFAFA] max-w-4xl mx-auto shadow-xs">
          <div className="flex flex-col gap-3 mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#5B5757]">
              Send a direct message
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-black">
              Got a project in mind? Let&apos;s talk.
            </h2>
            <p className="text-base text-[#5B5757]">
              Fill out the form below or drop an email to discuss design, collaboration, or recruitment opportunities.
            </p>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              role="status"
              aria-live="polite"
              className="flex flex-col items-center justify-center text-center p-8 bg-white rounded-2xl border border-black/10 gap-4 my-4"
            >
              <div className="h-14 w-14 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-black">Message Sent Successfully!</h3>
              <p className="text-sm sm:text-base text-[#5B5757] max-w-md">
                Thank you, <span className="font-semibold text-black">{formData.name}</span>. I have received your message regarding &quot;{formData.subject}&quot; and will respond to <span className="font-semibold text-black">{formData.email}</span> shorty.
              </p>
              <Button
                onClick={handleReset}
                variant="outline"
                size="md"
                className="mt-2 text-xs uppercase tracking-wider font-semibold"
              >
                Send Another Message
              </Button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name Input */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-name" className="text-sm font-semibold text-black">
                    Your Name <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    aria-required="true"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-4 py-3 rounded-xl border border-black/15 bg-white text-black text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all placeholder:text-[#6E6E6E]"
                  />
                </div>

                {/* Email Input */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-email" className="text-sm font-semibold text-black">
                    Email Address <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    aria-required="true"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. alex@company.com"
                    className="w-full px-4 py-3 rounded-xl border border-black/15 bg-white text-black text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all placeholder:text-[#6E6E6E]"
                  />
                </div>
              </div>

              {/* Inquiry Type Select */}
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-subject" className="text-sm font-semibold text-black">
                  Inquiry Type
                </label>
                <select
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-black/15 bg-white text-black text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all cursor-pointer"
                >
                  <option value="UI/UX Design Project">UI/UX Design Project</option>
                  <option value="Digital Illustration & Brand Assets">Digital Illustration &amp; Brand Assets</option>
                  <option value="Full-Time Hiring Opportunity">Full-Time Hiring Opportunity</option>
                  <option value="Design System & Consulting">Design System &amp; Consulting</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
              </div>

              {/* Message Textarea */}
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-message" className="text-sm font-semibold text-black">
                  Project Brief or Message <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  aria-required="true"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your goals, timelines, or role details..."
                  className="w-full px-4 py-3 rounded-xl border border-black/15 bg-white text-black text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all placeholder:text-[#6E6E6E] resize-y"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-[27px] font-semibold text-base flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Submit Inquiry</span>
                      <Send className="h-4 w-4" aria-hidden="true" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

ContactForm.displayName = "ContactForm";
