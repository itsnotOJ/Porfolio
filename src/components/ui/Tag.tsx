import React from "react";
import { cn } from "@/lib/utils";

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "dark" | "light" | "outline";
}

export const Tag: React.FC<TagProps> = ({
  children,
  variant = "dark",
  className,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center px-4 py-1.5 rounded-[31px] text-xs md:text-sm font-medium tracking-wide transition-colors";

  const variantStyles = {
    dark: "bg-black text-white",
    light: "bg-[#D9D9D9] text-black",
    outline: "bg-transparent text-black border border-black/30",
  };

  return (
    <span
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </span>
  );
};

Tag.displayName = "Tag";

export interface TagGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  tags?: string[];
  variant?: "dark" | "light" | "outline";
  children?: React.ReactNode;
}

export const TagGroup: React.FC<TagGroupProps> = ({
  tags,
  variant = "dark",
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn("flex flex-wrap items-center gap-2", className)}
      {...props}
    >
      {tags
        ? tags.map((tag) => (
            <Tag key={tag} variant={variant}>
              {tag}
            </Tag>
          ))
        : children}
    </div>
  );
};

TagGroup.displayName = "TagGroup";

export const Tags = TagGroup;
