"use client";

import React, { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface FinalCTAProps {
  onStartProject: () => void;
}

export function FinalCTA({ onStartProject }: FinalCTAProps) {
  const containerRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const marqueeRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (contentRef.current) {
        gsap.from(contentRef.current.children, {
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          y: 40,
          opacity: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "power2.out",
        });
      }

      if (marqueeRef.current) {
        gsap.to(marqueeRef.current, {
          xPercent: -50,
          repeat: -1,
          duration: 15,
          ease: "linear",
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative bg-[#050505] pt-24 md:pt-32 overflow-hidden"
    >
      <div
        ref={contentRef}
        className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16"
      >
        {/* Eyebrow */}
        <div className="inline-flex items-baseline text-[13px] font-medium tracking-wide text-[#737373] uppercase mb-8 relative">
          <span className="relative after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[1px] after:bg-[#737373]/50">
            LET&apos;S WORK TOGETHER
          </span>
          <span className="text-[#7DD3FC] font-black text-lg ml-1">.</span>
        </div>

        {/* Heading */}
        <h2 className="text-[44px] md:text-[56px] lg:text-[64px] font-bold text-white tracking-tight leading-[1.1] mb-16 md:mb-24">
          Wanna get in touch? <span className="text-[#7DD3FC]">Let&apos;s talk</span>
        </h2>

        {/* 2-Column Text */}
        <div className="flex flex-col md:flex-row gap-16 md:gap-24 lg:gap-32 pb-16 md:pb-24">
          
          {/* Left Column */}
          <div className="flex-1 space-y-12">
            <p className="text-[15px] text-[#A3A3A3] leading-[1.7] font-light">
              We offer exceptional services tailored to a wide range of businesses that want to improve the effectiveness of their digital marketing activities with discernible returns on investment. We aim to get back to all enquiries rapidly.
            </p>
            <div>
              <span className="text-[17px] text-[#A3A3A3] font-light mr-2">
                Interested in working with us?
              </span>
              <Link
                href="/contact"
                className="text-[17px] font-light text-[#7DD3FC] relative after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[1px] after:bg-[#7DD3FC] hover:opacity-70 transition-opacity"
              >
                Contact us
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1 space-y-12">
            <p className="text-[15px] text-[#A3A3A3] leading-[1.7] font-light">
              Fill in our simple quotation request form for an indication of just how cost-effective we can be. We aim to have pricing available to review within 24 hours.
            </p>
            <div>
              <button
                onClick={onStartProject}
                className="text-[32px] md:text-[40px] font-bold text-white relative inline-block cursor-pointer hover:opacity-80 transition-opacity after:absolute after:bottom-[4px] after:left-0 after:w-full after:h-[3px] after:bg-white"
              >
                Start a project
              </button>
            </div>
          </div>
          
        </div>
      </div>

      {/* Outlined Bottom Text (Scrolling) */}
      <div className="relative w-full overflow-hidden whitespace-nowrap mt-16 pb-8 select-none">
        <div ref={marqueeRef} className="inline-flex">
          <div className="text-[120px] md:text-[200px] lg:text-[280px] font-black uppercase leading-[0.75] tracking-tighter opacity-20 pr-12" style={{ WebkitTextStroke: "1px #ffffff", color: "transparent" }}>
            START A PROJECT START A PROJECT
          </div>
          <div className="text-[120px] md:text-[200px] lg:text-[280px] font-black uppercase leading-[0.75] tracking-tighter opacity-20 pr-12" style={{ WebkitTextStroke: "1px #ffffff", color: "transparent" }}>
            START A PROJECT START A PROJECT
          </div>
        </div>
      </div>
    </section>
  );
}
