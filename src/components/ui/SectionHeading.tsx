import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  theme?: "dark" | "light";
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  highlight,
  description,
  align = "left",
  theme = "dark",
  className,
}: SectionHeadingProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {badge && (
        <div
          className={cn(
            "inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full text-xs font-semibold tracking-widest uppercase",
            isDark
              ? "bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20"
              : "bg-black/5 text-[#111111] border border-black/10"
          )}
        >
          <span
            className={cn(
              "w-1.5 h-1.5 rounded-full",
              isDark ? "bg-[#D4AF37] animate-pulse" : "bg-black"
            )}
          />
          {badge}
        </div>
      )}

      <h2
        className={cn(
          "text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.12]",
          isDark ? "text-[#F5F5F5]" : "text-[#111111]"
        )}
      >
        {title}{" "}
        {highlight && (
          <span className={isDark ? "text-[#D4AF37]" : "text-[#B38F26]"}>
            {highlight}
          </span>
        )}
      </h2>

      {description && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg leading-relaxed font-normal",
            isDark ? "text-[#A0A0A0]" : "text-[#555555]"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
