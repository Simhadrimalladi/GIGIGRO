"use client";

import React, { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function CTA() {
  const containerRef = useRef<HTMLElement | null>(null);
  const textRef = useRef<HTMLHeadingElement | null>(null);
  const underlineRef = useRef<HTMLSpanElement | null>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate underline first (or together)
      tl.to(underlineRef.current, {
        scaleX: 1,
        duration: 0.6,
        ease: "power3.inOut",
      })
      // Then slide text up from the underline
      .to(
        textRef.current,
        {
          y: "0%",
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.2"
      );
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="relative bg-[#141414] py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl">
          <span className="text-[13px] font-bold text-[#38BDF8] tracking-widest uppercase block mb-3">
            HAVE A DIGITAL GOAL?
          </span>
          <Link href="/quote" className="group inline-flex flex-col mb-8 relative">
            <div className="overflow-hidden pb-1">
              <h2 
                ref={textRef} 
                className="text-[38px] md:text-[54px] lg:text-[64px] font-bold text-white tracking-tight leading-[1.1] transform translate-y-[100%]"
              >
                Let’s Turn Your Next Idea Into a Digital Experience
              </h2>
            </div>
            <span 
              ref={underlineRef} 
              className="w-full h-[3px] bg-[#38BDF8] mt-2 transform scale-x-0 origin-left"
            ></span>
          </Link>
          
          <p className="text-[#A3A3A3] text-[16px] md:text-[18px] leading-[1.8] max-w-3xl font-light mb-10">
            Maybe your current website is holding your business back. Maybe your search visibility needs improvement. Or perhaps you want a better way to generate enquiries online. Tell us what you are trying to achieve, and we’ll help you identify where to start.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <Link href="/quote" className="px-8 py-4 bg-[#38BDF8] text-black font-bold text-[14px] uppercase tracking-wider hover:bg-[#7DD3FC] transition-colors rounded-none">
              START YOUR PROJECT
            </Link>
            <Link href="/contact" className="px-8 py-4 border border-white/30 text-white font-bold text-[14px] uppercase tracking-wider hover:bg-white/10 transition-colors rounded-none">
              TALK TO OUR TEAM
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
