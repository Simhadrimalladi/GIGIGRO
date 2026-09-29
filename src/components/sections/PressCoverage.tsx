"use client";

import React, { useRef } from "react";
import { PRESS_FEATURES } from "@/lib/data";
import { Award, ExternalLink } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function PressCoverage() {
  const containerRef = useRef<HTMLElement | null>(null);
  const pressGridRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!pressGridRef.current) return;

      gsap.from(pressGridRef.current.children, {
        scrollTrigger: {
          trigger: pressGridRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.7,
        ease: "power2.out",
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      id="press"
      ref={containerRef}
      className="relative bg-[#FFFFFF] text-[#111111] py-20 border-b border-black/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between pb-8 border-b border-black/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-black/5 text-black mb-3">
              <Award className="h-3.5 w-3.5 text-[#B38F26]" />
              Media Mentions
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#111111] tracking-tight">
              Press Coverage Exposure
            </h2>
          </div>
          <span className="text-xs text-[#666666] hidden sm:block">
            Featured across leading global financial & business journals
          </span>
        </div>

        {/* Press Features Grid */}
        <div
          ref={pressGridRef}
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {PRESS_FEATURES.map((item) => (
            <div
              key={item.outlet}
              className="rounded-xl border border-black/10 bg-[#FAFAFA] p-6 flex flex-col justify-between hover:border-black/30 hover:shadow-lg transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-black text-black tracking-tight group-hover:text-[#B38F26] transition-colors">
                    {item.outlet}
                  </span>
                  <span className="text-xs font-mono text-[#888888]">
                    {item.year}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#444444] italic leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-black/5 flex items-center gap-1.5 text-xs font-bold text-[#111111] group-hover:text-[#B38F26] transition-colors cursor-pointer">
                <span>Read Coverage</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
