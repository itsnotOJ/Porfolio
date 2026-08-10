import React from "react";
import { cn } from "@/lib/utils";

export interface MarqueeTickerProps {
  items?: string[];
  className?: string;
  itemClassName?: string;
  speed?: "normal" | "fast" | "slow";
}

const defaultItems = [
  "UI/UX Design •",
  "Digital Illustration •",
  "Product Strategy •",
  "AI-Assisted Development •",
  "UI/UX Design •",
  "Digital Illustration •",
  "Product Strategy •",
  "AI-Assisted Development •",
];

export const MarqueeTicker: React.FC<MarqueeTickerProps> = ({
  items = defaultItems,
  className,
  itemClassName,
}) => {
  return (
    <div
      role="region"
      aria-label="Selected disciplines ticker"
      className={cn(
        "w-full overflow-hidden bg-black text-[#D9D9D9] py-4 border-y border-black/10 select-none",
        className
      )}
    >
      <div className="animate-marquee whitespace-nowrap flex items-center gap-8 text-2xl sm:text-4xl font-bold uppercase tracking-wider">
        {items.map((item, index) => (
          <span key={index} className={cn("inline-block", itemClassName)}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

MarqueeTicker.displayName = "MarqueeTicker";
