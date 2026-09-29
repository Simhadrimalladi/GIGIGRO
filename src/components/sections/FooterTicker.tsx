"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

const TICKER_ITEMS = [
  "START A PROJECT",
  "TALK TO US",
  "GET A QUOTE",
  "START A PROJECT",
  "TALK TO US",
  "GET A QUOTE",
];

export function FooterTicker({ onStartProject }: { onStartProject: () => void }) {
  return (
    <div
      onClick={onStartProject}
      className="relative bg-[#D4AF37] text-black py-5 overflow-hidden select-none cursor-pointer group hover:bg-[#E5C158] transition-colors duration-300"
    >
      <div className="flex overflow-hidden">
        <div className="animate-marquee flex items-center shrink-0">
          {TICKER_ITEMS.concat(TICKER_ITEMS).map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-8 px-6 shrink-0"
            >
              <span className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight text-black flex items-center gap-2">
                <span>{item}</span>
                <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
              <span className="h-2.5 w-2.5 rounded-full bg-black" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
