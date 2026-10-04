import React from "react";
import Image from "next/image";

export function AboutOurStory() {
  return (
    <section className="bg-[#000000] py-24 text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="flex flex-col">
          <span className="text-[13px] font-bold text-[#38BDF8] tracking-widest uppercase block mb-3">
            OUR STORY
          </span>
          <h2 className="text-[32px] md:text-[44px] font-bold tracking-tight leading-[1.1] mb-8">
            From Learning Digital to Building Digital Solutions
          </h2>
          <p className="text-[#A3A3A3] text-[15px] leading-[1.7] font-light mb-4">
            Our journey began in <strong className="text-white font-semibold">2015 with SRJINFOWAYS</strong>, where we started providing digital marketing training and services.
          </p>
          <p className="text-[#A3A3A3] text-[15px] leading-[1.7] font-light mb-4">
            Over the years, we trained <strong className="text-white font-semibold">250+ students in digital marketing</strong> and worked with <strong className="text-white font-semibold">nearly 100 clients</strong>, gaining hands-on experience across different businesses, industries and digital challenges.
          </p>
          <p className="text-[#A3A3A3] text-[15px] leading-[1.7] font-light mb-4">
            Teaching digital marketing gave us the opportunity to understand how people learn and use digital tools. Working with clients taught us something equally important—how businesses actually need those tools to deliver value.
          </p>
          <p className="text-[#A3A3A3] text-[15px] leading-[1.7] font-light mb-6">
            That experience became the foundation for <strong className="text-[#38BDF8] font-semibold">DIJIGRO</strong> — bringing digital marketing, web design and web development together under one brand to create solutions focused on real business objectives.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-4 border-t border-[#333333] pt-8">
            <div>
              <p className="text-[28px] font-bold text-white">2015</p>
              <p className="text-[12px] text-[#A3A3A3] font-light uppercase tracking-wider mt-1">Journey Began</p>
            </div>
            <div>
              <p className="text-[28px] font-bold text-[#38BDF8]">250+</p>
              <p className="text-[12px] text-[#A3A3A3] font-light uppercase tracking-wider mt-1">Students Trained</p>
            </div>
            <div>
              <p className="text-[28px] font-bold text-white">100+</p>
              <p className="text-[12px] text-[#A3A3A3] font-light uppercase tracking-wider mt-1">Clients Served</p>
            </div>
            <div>
              <p className="text-[24px] font-bold text-[#38BDF8]">DIJIGRO</p>
              <p className="text-[12px] text-[#A3A3A3] font-light uppercase tracking-wider mt-1">Next Chapter</p>
            </div>
          </div>
        </div>
        <div className="relative w-full h-[500px] rounded-lg overflow-hidden border border-[#333333]">
          <Image 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" 
            alt="Our Team Collaborating" 
            fill 
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
