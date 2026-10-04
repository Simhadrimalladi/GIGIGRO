import React from "react";
import Image from "next/image";

export function AboutCulture() {
  return (
    <section className="bg-[#FFFFFF] py-24 text-[#000000]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="relative h-[240px] bg-[#f5f5f5] rounded-lg overflow-hidden border border-[#e5e5e5]">
              <Image src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=600&q=80" alt="Culture" fill className="object-cover"/>
            </div>
            <div className="relative h-[320px] bg-[#f5f5f5] rounded-lg overflow-hidden border border-[#e5e5e5]">
              <Image src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80" alt="Team Meeting" fill className="object-cover"/>
            </div>
          </div>
          <div className="space-y-4 mt-12">
            <div className="relative h-[320px] bg-[#f5f5f5] rounded-lg overflow-hidden border border-[#e5e5e5]">
              <Image src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80" alt="Office space" fill className="object-cover"/>
            </div>
            <div className="relative h-[240px] bg-[#f5f5f5] rounded-lg overflow-hidden border border-[#e5e5e5]">
              <Image src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80" alt="Brainstorming" fill className="object-cover"/>
            </div>
          </div>
        </div>
        
        <div className="order-1 lg:order-2 flex flex-col">
          <span className="text-[13px] font-bold text-[#38BDF8] tracking-widest uppercase block mb-3">
            OUR CULTURE
          </span>
          <h2 className="text-[32px] md:text-[44px] font-bold tracking-tight leading-[1.1] mb-8 text-[#000000]">
            Curious Minds. Collaborative Work. Continuous Growth.
          </h2>
          <p className="text-[#333333] text-[15px] leading-[1.7] font-light mb-4">
            We believe the best digital work happens when people are encouraged to learn, share ideas and think differently.
          </p>
          <p className="text-[#333333] text-[15px] leading-[1.7] font-light mb-4">
            Our culture is built around curiosity, collaboration and continuous improvement. We give importance to open communication, practical thinking and the freedom to explore better ways of solving problems.
          </p>
          <p className="text-[#333333] text-[15px] leading-[1.7] font-light mb-8">
            Our experience in digital marketing training has also shaped how we work—we believe knowledge becomes more valuable when it is shared.
          </p>

          <ul className="space-y-6 list-none p-0 m-0">
            <li className="flex items-start gap-4">
              <span className="text-[#38BDF8] mt-1 shrink-0">■</span>
              <div>
                <strong className="block text-[16px] text-[#000000] mb-1">LEARN</strong>
                <span className="text-[#555555] text-[14px] leading-[1.6] font-light">Stay curious. Keep developing. Keep adapting.</span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-[#38BDF8] mt-1 shrink-0">■</span>
              <div>
                <strong className="block text-[16px] text-[#000000] mb-1">COLLABORATE</strong>
                <span className="text-[#555555] text-[14px] leading-[1.6] font-light">Share ideas. Listen carefully. Build together.</span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-[#38BDF8] mt-1 shrink-0">■</span>
              <div>
                <strong className="block text-[16px] text-[#000000] mb-1">GROW</strong>
                <span className="text-[#555555] text-[14px] leading-[1.6] font-light">Learn from experience and continually improve.</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
