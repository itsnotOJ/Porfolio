import React from "react";
import { cn } from "@/lib/utils";

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?:
    | "dark"
    | "light"
    | "outline"
    | "pastel-blue"
    | "pastel-green"
    | "pastel-purple";
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
    "pastel-blue": "bg-[#EBF5FF] text-[#1E3A8A] border border-[#BFDBFE]",
    "pastel-green": "bg-[#F0FDF4] text-[#14532D] border border-[#BBF7D0]",
    "pastel-purple": "bg-[#FAF5FF] text-[#581C87] border border-[#E9D5FF]",
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
  variant?:
    | "dark"
    | "light"
    | "outline"
    | "pastel"
    | "pastel-blue"
    | "pastel-green"
    | "pastel-purple";
  children?: React.ReactNode;
}

export const TagGroup: React.FC<TagGroupProps> = ({
  tags,
  variant = "dark",
  className,
  children,
  ...props
}) => {
  const pastelVariants: Array<
    "pastel-blue" | "pastel-green" | "pastel-purple"
  > = ["pastel-blue", "pastel-green", "pastel-purple"];

  return (
    <div
      className={cn("flex flex-wrap items-center gap-2", className)}
      {...props}
    >
      {tags
        ? tags.map((tag, i) => {
            const currentVariant =
              variant === "pastel"
                ? pastelVariants[i % pastelVariants.length]
                : variant;
            return (
              <Tag key={tag} variant={currentVariant}>
                {tag}
              </Tag>
            );
          })
        : children}
    </div>
  );
};

TagGroup.displayName = "TagGroup";

export const Tags = TagGroup;
