"use client";

import React, { useRef } from "react";
import { INDUSTRIES_DATA } from "@/lib/industries";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Industries() {
  const containerRef = useRef<HTMLElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!gridRef.current) return;

      gsap.from(gridRef.current.children, {
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 20,
        opacity: 0,
        stagger: 0.02,
        duration: 0.5,
        ease: "power2.out",
      });
    },
    { scope: containerRef }
  );

  // Take the first 25 items for a clean 5x5 grid as in the screenshot
  const displayedIndustries = INDUSTRIES_DATA.slice(0, 25);

  return (
    <section
      id="industries"
      ref={containerRef}
      className="relative bg-[#000000] py-20 md:py-28 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mb-16 md:mb-20">
          <h2 className="text-white text-[32px] md:text-[42px] font-bold tracking-tight leading-tight mb-5">
            Industries We Work With
          </h2>
          <p className="text-[#A3A3A3] text-[15px] leading-[1.6] max-w-2xl font-light">
            At Bird, we extend our Digital Marketing Agency UK expertise across a diverse range of<br className="hidden md:block" />
            industries, tailoring strategies to meet the unique demands and opportunities each sector<br className="hidden md:block" />
            presents.
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-8 gap-y-12"
        >
          {displayedIndustries.map((ind) => (
            <a
              key={ind.name}
              href="#"
              className="group flex items-center cursor-pointer"
            >
              <div
                className="w-[40px] h-[40px] shrink-0 mr-4 flex items-center justify-center [&_svg]:w-full [&_svg]:h-full [&_svg_path]:fill-[#7DD3FC] [&_svg_g_rect]:fill-[#7DD3FC] group-hover:[&_svg_path]:fill-white group-hover:[&_svg_g_rect]:fill-white [&_svg_path]:transition-colors [&_svg_path]:duration-300 [&_svg_g_rect]:transition-colors [&_svg_g_rect]:duration-300"
                dangerouslySetInnerHTML={{ __html: ind.icon }}
              />
              <h3 className="text-white text-[14px] font-medium leading-snug group-hover:text-white/90 transition-colors">
                {ind.name}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
