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
          
          <Link href="/quote" className="group inline-flex flex-col mb-8 relative">
            <div className="overflow-hidden pb-1">
              <h2 
                ref={textRef} 
                className="text-[46px] md:text-[68px] lg:text-[76px] font-bold text-white tracking-tight leading-[1.1] transform translate-y-[100%]"
              >
                Start a project
              </h2>
            </div>
            <span 
              ref={underlineRef} 
              className="w-full h-[3px] bg-white mt-1 transform scale-x-0 origin-left"
            ></span>
          </Link>
          
          <p className="text-[#A3A3A3] text-[16px] md:text-[18px] lg:text-[20px] leading-[1.6] md:leading-[1.7] max-w-3xl font-light">
            Do you have a digital marketing objective{" "}
            <Link href="/quote" className="text-white hover:text-white/80 transition-colors underline decoration-white/70 hover:decoration-white underline-offset-[5px] decoration-[1px]">
              you&apos;d like to achieve
            </Link>
            ? Are you ready to find out how Bird can help to{" "}
            <Link href="/quote" className="text-white hover:text-white/80 transition-colors underline decoration-white/70 hover:decoration-white underline-offset-[5px] decoration-[1px]">
              build your business online
            </Link>
            ? If so, make contact with us today...
          </p>
        </div>
      </div>
    </section>
  );
}
