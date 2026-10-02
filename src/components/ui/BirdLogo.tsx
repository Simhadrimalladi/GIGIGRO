import React from "react";

interface BirdLogoProps {
  className?: string;
  hideArrow?: boolean;
  arrowOnly?: boolean;
}

export function BirdLogo({ className = "", hideArrow = false, arrowOnly = false }: BirdLogoProps) {
  return (
    <div
      className={`relative inline-flex flex-col items-start justify-center text-current transition-opacity duration-200 hover:opacity-95 select-none group ${className}`}
      aria-label="DIJIGRO Logo"
    >
      <style>{`
        @keyframes logoArrowLoopLine {
          0% {
            stroke-dashoffset: 200;
            opacity: 1;
          }
          24%, 88% {
            stroke-dashoffset: 0;
            opacity: 1;
          }
          95%, 100% {
            stroke-dashoffset: 200;
            opacity: 0;
          }
        }
        @keyframes logoArrowLoopHead {
          0%, 15% {
            stroke-dashoffset: 40;
            opacity: 0;
          }
          24%, 88% {
            stroke-dashoffset: 0;
            opacity: 1;
          }
          95%, 100% {
            stroke-dashoffset: 40;
            opacity: 0;
          }
        }
        .animate-logo-line {
          stroke-dasharray: 200;
          stroke-dashoffset: 200;
          animation: logoArrowLoopLine 10s cubic-bezier(0.25, 1, 0.4, 1) infinite;
        }
        .animate-logo-head {
          stroke-dasharray: 40;
          stroke-dashoffset: 40;
          animation: logoArrowLoopHead 10s cubic-bezier(0.25, 1, 0.4, 1) infinite;
        }
      `}</style>

      <div className="relative inline-block">
        <span className={`text-[32px] font-[800] leading-none tracking-tight block text-current ${arrowOnly ? "opacity-0" : ""}`}>
          DIJIGRO
        </span>
        {/* Sky Blue Underline with Upward Growth Arrow (Comfortable 7px gap under text with 10s repeating flow animation) */}
        {!hideArrow && (
          <svg
            className="w-[114%] h-[18px] absolute -bottom-[7px] -left-[1%] overflow-visible pointer-events-none"
            viewBox="0 0 160 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Main Underline & Upward-Right Angle Line */}
            <path
              className="animate-logo-line"
              d="M 1 13 L 136 13 L 152 2"
              stroke="#38BDF8"
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Arrowhead Wings */}
            <path
              className="animate-logo-head"
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
