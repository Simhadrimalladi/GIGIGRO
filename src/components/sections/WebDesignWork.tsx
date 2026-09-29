import React from "react";
import Image from "next/image";
import { CASE_STUDIES } from "@/lib/data";

export function WebDesignWork() {
  return (
    <section className="bg-[#050505] py-24 text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 mb-16 flex flex-col md:flex-row justify-between items-end">
        <div className="max-w-2xl">
          <div className="inline-flex items-baseline text-[13px] font-medium tracking-wide text-[#737373] uppercase mb-4">
            <span className="relative after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[1px] after:bg-[#737373]/50">CURATED SELECTION</span>
            <span className="text-[#7DD3FC] font-black text-lg ml-1">.</span>
          </div>
          <h2 className="text-[42px] md:text-[52px] font-bold tracking-tight text-white leading-tight mb-4">
            Featured UK Web Design case studies.
          </h2>
          <p className="text-[#A3A3A3] text-[15px] leading-[1.8] font-light">
            We always put our UK Web Design clients first to deliver our best time after time. Below is some of our proudest UK Web Design work.
          </p>
        </div>
        <div className="mt-8 md:mt-0 pb-2 border-b border-[#737373]/50">
          <a href="#" className="text-[14px] text-[#A3A3A3] hover:text-white transition-colors">View all case studies</a>
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {CASE_STUDIES.slice(0, 3).map((study, i) => (
          <div key={i} className="bg-[#111111] rounded-[4px] p-6 flex flex-col items-center">
            <div className="w-full relative aspect-[16/10] bg-[#222222] mb-6 overflow-hidden rounded-[4px]">
              <Image src={study.image} alt={study.title} fill className="object-cover" />
            </div>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-6">
              <span className="text-[#38BDF8] text-[12px] uppercase font-bold tracking-wider">DIGITAL MARKETING</span>
              <span className="text-[#38BDF8] text-[12px] uppercase font-bold tracking-wider">WEB DESIGN</span>
              <span className="text-[#38BDF8] text-[12px] uppercase font-bold tracking-wider">WEBSITE SUPPORT</span>
            </div>
            <h3 className="text-white text-[16px] font-bold">{study.title}</h3>
          </div>
        ))}
      </div>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 mt-16 flex items-center justify-between">
        <div className="flex gap-4 text-[#38BDF8] text-[18px]">
          <span className="text-white">1</span>
          <span>2</span>
          <span>3</span>
          <span>...</span>
          <span>11</span>
          <span>Next »</span>
        </div>
      </div>
    </section>
  );
}
