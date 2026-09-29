import React from "react";
import Image from "next/image";
import { TEAM_MEMBERS } from "@/lib/data";

export function WebDesignTeam() {
  return (
    <section className="bg-[#050505] text-[#FFFFFF] py-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="mb-16">
          <div className="inline-flex items-baseline text-[13px] font-medium tracking-wide text-[#737373] uppercase mb-4">
            <span className="relative after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[1px] after:bg-[#737373]/50">PASSIONATE</span>
          </div>
          <h2 className="text-[32px] md:text-[52px] font-bold tracking-tight leading-[1.1]">
            Our <span className="text-[#38BDF8]">UK Web Design</span> team.
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {TEAM_MEMBERS.slice(0, 10).map((member, i) => (
            <div key={i} className="relative aspect-[3/4] bg-[#111111] overflow-hidden group">
              <Image src={member.image} alt={member.name} fill className="object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
