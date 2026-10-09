"use client";

import React, { useRef } from "react";
import Image from "next/image";

export function AgencyInfo() {
  const containerRef = useRef<HTMLElement | null>(null);

  return (
    <section
      ref={containerRef}
      className="relative bg-black py-24 md:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Left Scrolling Column */}
          <div className="lg:w-[50%] space-y-10">
            <div>
              <span className="text-[13px] font-bold text-[#38BDF8] tracking-widest uppercase block mb-3">
                ABOUT DIJIGRO
              </span>
              <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold text-white tracking-tight leading-[1.2] mb-6">
                We Build Digital Experiences With Business in Mind
              </h2>
              <p className="text-[15px] text-[#A3A3A3] leading-[1.8] font-light mb-4">
                DIJIGRO is a digital marketing and web development agency helping businesses build stronger, more useful online experiences.
              </p>
              <p className="text-[15px] text-[#A3A3A3] leading-[1.8] font-light">
                We bring marketing, design and technology together so your digital presence is not only visually appealing but also useful to the people you want to reach.
              </p>
            </div>

            <div>
              <p className="text-[15px] text-[#A3A3A3] leading-[1.8] font-light mb-4">
                From search visibility and social media to websites and custom development, we work across the digital journey to create solutions that make sense for your business.
              </p>
              <p className="text-[15px] text-[#A3A3A3] leading-[1.8] font-light">
                Our approach is straightforward: understand the goal, build the right solution and keep improving it as your business grows.
              </p>
            </div>
            
            <div>
              <a href="/about" className="inline-block px-8 py-4 bg-[#38BDF8] text-black font-bold text-[14px] uppercase tracking-wider hover:bg-[#7DD3FC] transition-colors rounded-none">
                MORE ABOUT DIJIGRO
              </a>
            </div>
          </div>

          {/* Right Sticky Column */}
          <div className="lg:w-[50%] lg:sticky lg:top-36">
            <div className="relative w-full rounded-[12px] overflow-hidden bg-[#111111] border border-[#222222] shadow-2xl">
              <Image
                src="/images/agency-network-map.webp"
                alt="DIJIGRO Global Network Map"
                width={1920}
                height={1079}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
