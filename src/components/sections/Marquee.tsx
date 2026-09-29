"use client";

import React from "react";

const MARQUEE_ITEMS = [
  "INDUSTRY NEWS",
  "DIGITAL MARKETING UK",
  "HIGH-INTENT SEO",
  "PERFORMANCE PPC",
  "NEXT.JS ARCHITECTURE",
  "CONVERSION RATE OPTIMIZATION",
  "BRAND ELEVATION",
  "MAYFAIR LONDON HQ",
  "VERIFIED COMMERCE RETURNS",
];

export function Marquee() {
  return (
    <section className="relative bg-[#000000] py-7 border-y border-white/10 overflow-hidden select-none">
      {/* Left & right gradient masks to smooth edge appearance */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-black to-transparent z-10" />

      <div className="flex overflow-hidden">
        <div className="animate-marquee flex items-center shrink-0">
          {MARQUEE_ITEMS.concat(MARQUEE_ITEMS).map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-6 px-6 shrink-0"
            >
              <span className="text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-tighter text-white/75 hover:text-[#D4AF37] transition-colors duration-200">
                {item}
              </span>
              <span className="h-2 w-2 rounded-full bg-[#D4AF37] shadow-[0_0_10px_rgba(212,175,55,0.8)]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
