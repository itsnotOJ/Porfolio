"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "icon";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  download?: boolean | string;
  children: React.ReactNode;
}

export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    {
      variant = "primary",
      size = "md",
      href,
      isExternal = false,
      download,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50 cursor-pointer";

    const variantStyles = {
      primary:
        "bg-black text-[#D9D9D9] border border-black rounded-[27px] hover:bg-white hover:text-black",
      secondary:
        "bg-transparent text-black border border-black rounded-[27px] hover:bg-black hover:text-white",
      outline:
        "bg-transparent text-black border border-black rounded-[27px] hover:bg-black hover:text-white",
      icon:
        "bg-black text-white rounded-full p-3 hover:bg-white hover:text-black border border-black",
    };

    const sizeStyles = {
      sm: "text-xs py-1.5 px-3.5 h-[32px]",
      md: "text-sm md:text-base py-2.5 px-5 h-[42px]",
      lg: "text-base md:text-lg py-3 px-7 h-[48px]",
    };

    const combinedClassName = cn(
      baseStyles,
      variantStyles[variant],
      variant !== "icon" && sizeStyles[size],
      className
    );

    if (href) {
      if (isExternal || download !== undefined) {
        return (
          <a
            href={href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            download={download}
            className={combinedClassName}
            ref={ref as React.Ref<HTMLAnchorElement>}
          >
            {children}
          </a>
        );
      }
      return (
        <Link
          href={href}
          className={combinedClassName}
          ref={ref as React.Ref<HTMLAnchorElement>}
        >
          {children}
        </Link>
      );
    }

    return (
      <button
        className={combinedClassName}
        ref={ref as React.Ref<HTMLButtonElement>}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export const PrimaryButton = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  Omit<ButtonProps, "variant">
>((props, ref) => <Button variant="primary" ref={ref} {...props} />);
PrimaryButton.displayName = "PrimaryButton";

export const SecondaryButton = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  Omit<ButtonProps, "variant">
>((props, ref) => <Button variant="secondary" ref={ref} {...props} />);
SecondaryButton.displayName = "SecondaryButton";
