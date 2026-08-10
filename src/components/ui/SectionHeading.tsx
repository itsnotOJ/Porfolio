import React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  badge?: string;
  align?: "left" | "center" | "right";
  asTag?: "h1" | "h2" | "h3" | "h4";
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  badge,
  align = "left",
  asTag: HeadingTag = "h2",
  className,
  titleClassName,
  subtitleClassName,
}) => {
  const alignStyles = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  return (
    <div className={cn("flex flex-col gap-3", alignStyles[align], className)}>
      {badge && (
        <span className="inline-block rounded-full bg-black/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-[#5B5757]">
          {badge}
        </span>
      )}
      <HeadingTag
        className={cn(
          "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-[1.1]",
          titleClassName
        )}
      >
        {title}
      </HeadingTag>
      {subtitle && (
        <p
          className={cn(
            "text-base md:text-lg lg:text-xl text-[#5B5757] font-normal leading-relaxed max-w-2xl",
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

SectionHeading.displayName = "SectionHeading";
