import React from "react";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

export interface SocialLink {
  label: string;
  href: string;
  isExternal?: boolean;
  icon?: React.ReactNode;
}

export interface SocialLinksProps {
  links?: SocialLink[];
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

const defaultLinks: SocialLink[] = [
  { label: "LinkedIn", href: "https://linkedin.com", isExternal: true },
  { label: "Behance", href: "https://www.behance.net/mercyonyilo", isExternal: true },
  { label: "Medium", href: "https://medium.com/@Iye_", isExternal: true },
];

export const SocialLinks: React.FC<SocialLinksProps> = ({
  links = defaultLinks,
  className,
  variant = "secondary",
  size = "sm",
}) => {
  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      {links.map((link) => (
        <Button
          key={link.label}
          variant={variant}
          size={size}
          href={link.href}
          isExternal={link.isExternal}
          className="rounded-[27px] px-4 text-xs md:text-sm font-medium transition-colors"
          aria-label={
            link.isExternal ? `${link.label} (opens in new window)` : link.label
          }
        >
          {link.icon && <span className="mr-1.5 inline-flex">{link.icon}</span>}
          {link.label}
        </Button>
      ))}
    </div>
  );
};

SocialLinks.displayName = "SocialLinks";
