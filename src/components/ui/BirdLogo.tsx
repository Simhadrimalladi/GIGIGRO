import React from "react";

export function BirdLogo({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex flex-col items-start justify-center text-current transition-opacity duration-200 hover:opacity-90 select-none ${className}`}
      aria-label="DIJIGRO Logo"
    >
      <span className="text-[32px] font-[750] leading-none tracking-tight">DIJIGRO</span>
      {/* <span className="text-[11px] font-bold leading-none tracking-[0.35em] uppercase mt-[3px] ml-[2px] opacity-80">
        GRO
      </span> */}
    </div>
  );
}
