import React from "react";

interface BirdLogoProps {
  className?: string;
  hideArrow?: boolean;
  arrowOnly?: boolean;
}

export function BirdLogo({ className = "", hideArrow = false, arrowOnly = false }: BirdLogoProps) {
  return (
    <div
      className={`relative inline-flex flex-col items-start justify-center text-current transition-opacity duration-200 hover:opacity-90 select-none ${className}`}
      aria-label="DIJIGRO Logo"
    >
      <div className="relative inline-block">
        <span className={`text-[32px] font-[800] leading-none tracking-tight block text-current ${arrowOnly ? "opacity-0" : ""}`}>
          DIJIGRO
        </span>
        {/* Sky Blue Underline with Upward Growth Arrow (Snug fit right under text) */}
        {!hideArrow && (
          <svg
            className="w-[114%] h-[18px] absolute -bottom-[3px] -left-[1%] overflow-visible pointer-events-none"
            viewBox="0 0 160 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Main Underline & Upward-Right Angle Line */}
            <path
              d="M 1 13 L 136 13 L 152 2"
              stroke="#38BDF8"
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Arrowhead Wings */}
            <path
              d="M 142 3 L 152 2 L 150 12"
              stroke="#38BDF8"
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
    </div>
  );
}
