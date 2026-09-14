import React from "react";
import { Mail, ArrowRight } from "lucide-react";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { PrimaryButton } from "@/components/ui/Button";

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="w-full bg-white text-black py-16 md:py-24 border-t border-black/10">
      <div className="mx-auto max-w-7xl px-5 sm:px-10 lg:px-16 flex flex-col gap-12">
        {/* Main Content Block */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          <div className="flex flex-col gap-4 max-w-2xl">
            <span className="inline-block rounded-full bg-black/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-[#5B5757] w-fit">
              Get in Touch
            </span>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-black leading-tight">
              Let&apos;s connect
            </h2>
            <p className="text-lg sm:text-xl text-[#5B5757] font-normal leading-relaxed">
              Open to new opportunities, freelance design collaborations, and full-time product design roles. Let&apos;s build something exceptional together.
            </p>
          </div>

          {/* Action Column & Social Links */}
          <div className="flex flex-col gap-6 w-full lg:w-auto">
            <PrimaryButton
              href="mailto:iyenugwa18@gmail.com"
              isExternal
              size="lg"
              className="w-full sm:w-auto text-base sm:text-lg px-8 py-4 rounded-[27px] flex items-center justify-center gap-3"
            >
              <Mail className="h-5 w-5" aria-hidden="true" />
              <span>Come say hi</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </PrimaryButton>

            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#5B5757]">
                Social Profiles
              </span>
              <SocialLinks />
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-black/10 text-xs text-[#5B5757]">
          <p>© {new Date().getFullYear()} Mercy Onyilo. All rights reserved.</p>
          <p>Product Designer &amp; Illustrator</p>
        </div>
      </div>
    </footer>
  );
};

Footer.displayName = "Footer";

