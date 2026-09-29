import React from "react";
import Image from "next/image";

export function AboutOurStory() {
  return (
    <section className="bg-[#000000] py-24 text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="flex flex-col">
          <h2 className="text-[32px] md:text-[46px] font-bold tracking-tight leading-[1.1] mb-8">
            Our Story: <br/>
            Redefining Digital <br/>
            Excellence Since 2012
          </h2>
          <p className="text-[#A3A3A3] text-[15px] leading-[1.6] font-light mb-6">
            GIGIGRO was born out of a simple yet profound vision: to bridge the gap between creative design and technical brilliance. Over a decade ago, we started as a small team of passionate developers and designers who believed that digital experiences should be both beautiful and highly functional.
          </p>
          <p className="text-[#A3A3A3] text-[15px] leading-[1.6] font-light mb-6">
            Today, we are proud to be an award-winning digital agency serving global enterprise clients, dynamic startups, and visionary leaders. Our journey has been defined by relentless innovation, a commitment to our clients&apos; growth, and an uncompromising standard of quality.
          </p>
          <div className="flex items-center gap-8 mt-4">
            <div>
              <p className="text-[32px] font-bold text-white">12+</p>
              <p className="text-[14px] text-[#A3A3A3] font-light uppercase tracking-wider mt-1">Years of Excellence</p>
            </div>
            <div className="w-[1px] h-12 bg-[#333333]"></div>
            <div>
              <p className="text-[32px] font-bold text-white">450+</p>
              <p className="text-[14px] text-[#A3A3A3] font-light uppercase tracking-wider mt-1">Global Clients</p>
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
