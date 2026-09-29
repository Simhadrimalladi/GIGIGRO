import React from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "gold" | "outline" | "ghost" | "light" | "pill-gold";
  size?: "sm" | "md" | "lg";
  withArrow?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      variant = "gold",
      size = "md",
      withArrow = false,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "relative inline-flex items-center justify-center font-medium transition-all duration-300 select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

    const sizeStyles = {
      sm: "text-xs px-4 py-2 rounded-full gap-1.5",
      md: "text-sm px-6 py-3 rounded-full gap-2",
      lg: "text-base px-8 py-4 rounded-full gap-2.5",
    };

    const variantStyles = {
      gold: "bg-[#D4AF37] text-[#050505] font-semibold hover:bg-[#E5C158] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] border border-[#D4AF37]",
      "pill-gold":
        "bg-[#D4AF37] text-[#050505] font-semibold hover:bg-[#E5C158] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] border border-[#D4AF37] rounded-full",
      outline:
        "bg-transparent text-[#F5F5F5] border border-white/20 hover:border-[#D4AF37] hover:text-[#D4AF37] hover:bg-[#D4AF37]/5",
      ghost:
        "bg-transparent text-[#A0A0A0] hover:text-[#F5F5F5] hover:bg-white/5",
      light:
        "bg-[#111111] text-[#FFFFFF] font-semibold hover:bg-[#222222] border border-black/10",
    };

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
        {...props}
      >
        <span>{children}</span>
        {withArrow && (
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
