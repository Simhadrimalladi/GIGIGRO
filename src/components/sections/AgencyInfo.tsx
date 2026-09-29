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
          <div className="lg:w-[50%] space-y-16">
            <div>
              <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold text-white tracking-tight leading-[1.2] mb-6">
                A Leading Full Service Digital Marketing Agency in the UK
              </h2>
              <p className="text-[15px] text-[#A3A3A3] leading-[1.7] font-light">
                Bird is a leading Full Service Digital Marketing Agency based in the UK, renowned for providing the best digital solutions for companies across the UK. Our dynamic digital marketing agency is distinguished by its knack for helping businesses bolster their digital presence, utilising cutting-edge technologies and innovative strategies.
              </p>
            </div>

            <div>
              <h3 className="text-[28px] md:text-[32px] lg:text-[36px] font-bold text-white tracking-tight leading-[1.2] mb-6">
                Strengthening Your Digital Presence
              </h3>
              <p className="text-[15px] text-[#A3A3A3] leading-[1.7] font-light">
                In the ever-evolving digital landscape, maintaining a substantial digital presence is indispensable. Businesses across the globe are acknowledging the power of the digital world, and Bird&apos;s digital marketing services are leading the charge in this digital transformation. Our expertise lies in amplifying businesses&apos; digital footprints, ensuring they excel in the online arena.
              </p>
            </div>
            
            {/* Added some padding at the bottom so it can scroll past the sticky image */}
            <div className="h-[20vh] lg:h-[40vh]"></div>
          </div>

          {/* Right Sticky Column */}
          <div className="lg:w-[50%] lg:sticky lg:top-32">
            <div className="relative w-full rounded-[4px] overflow-hidden bg-white shadow-2xl">
              <Image
                src="https://cdn.bird.marketing/wp-content/uploads/Basic-Image-1-9.png"
                alt="Target Location Map"
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
