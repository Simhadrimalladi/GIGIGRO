"use client";

import React, { useRef } from "react";
import Image from "next/image";

export function AgencyRole() {
  const containerRef = useRef<HTMLElement | null>(null);

  return (
    <section
      ref={containerRef}
      className="relative bg-white py-24 md:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col-reverse lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Left Sticky Column */}
          <div className="lg:w-[50%] lg:sticky lg:top-32">
            <div className="relative w-full rounded-[4px] overflow-hidden bg-black shadow-2xl">
              <Image
                src="https://cdn.bird.marketing/wp-content/uploads/Cover-menu.11.png"
                alt="Website Mockup"
                width={1920}
                height={1280}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right Scrolling Column */}
          <div className="lg:w-[50%] space-y-16">
            <div>
              <h3 className="text-[28px] md:text-[32px] lg:text-[36px] font-bold text-black tracking-tight leading-[1.2] mb-6">
                The Role of a Digital Marketing Agency
              </h3>
              <p className="text-[15px] text-[#4A4A4A] leading-[1.7] font-light mb-6">
                As a comprehensive digital marketing agency, Bird crafts and implements digital solutions that encompass the full scope of the online world. Rather than focusing on individual service offerings, our approach is all-encompassing, enabling businesses to fully harness the potential of the digital sphere and improve their online visibility.
              </p>
              <p className="text-[15px] text-[#4A4A4A] leading-[1.7] font-light">
                Our team of digital professionals excels at understanding each brands unique requirements and creating bespoke strategies that help businesses shine in the digital realm. We take pride in facilitating digital transformations that drive growth, using progressive techniques that keep our clients at the forefront of digital innovation.
              </p>
            </div>

            <div>
              <h3 className="text-[28px] md:text-[32px] lg:text-[36px] font-bold text-black tracking-tight leading-[1.2] mb-6">
                Your Digital Success Partner
              </h3>
              <p className="text-[15px] text-[#4A4A4A] leading-[1.7] font-light mb-6">
                Bird serves as a trusted partner in your digital journey, providing the support and guidance businesses require to navigate the complex and swiftly changing digital landscape. Our dedication to excellence and a customer-centric approach have made them a preferred digital partner for businesses aiming to enhance their digital visibility.
              </p>
              <p className="text-[15px] text-[#4A4A4A] leading-[1.7] font-light">
                In the digital universe, success hinges on visibility and innovation - and our digital marketing agency is committed to ensuring your business achieves both. We have mastered the art of deploying digital solutions to their fullest potential, guaranteeing our clients not only adapt but thrive in the digital era. Your digital success is our primary goal, and we have...
              </p>
            </div>
            
            {/* Added some padding at the bottom so it can scroll past the sticky image */}
            <div className="h-[20vh] lg:h-[40vh]"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
