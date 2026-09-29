"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { TEAM_MEMBERS } from "@/lib/data";
import { Users } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Team() {
  const containerRef = useRef<HTMLElement | null>(null);
  const teamGridRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!teamGridRef.current) return;

      gsap.from(teamGridRef.current.children, {
        scrollTrigger: {
          trigger: teamGridRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 40,
        opacity: 0,
        stagger: 0.04,
        duration: 0.7,
        ease: "power2.out",
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      id="team"
      ref={containerRef}
      className="relative bg-[#FFFFFF] text-[#111111] py-28 border-y border-black/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Exact text from reference screenshot */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-black/10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-black/5 text-black border border-black/10 mb-4">
              <Users className="h-3.5 w-3.5 text-[#B38F26]" />
              Mayfair Studio Leadership
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#111111] leading-tight">
              Expert Digital Marketing Team
            </h2>
            <p className="mt-2 text-base text-[#555555]">
              Dedicated Specialists, Strategists & Creatives driving measurable commercial impact.
            </p>
          </div>

          <div className="text-left md:text-right">
            <span className="text-xs font-mono font-bold uppercase text-black tracking-widest block">
              Direct Senior Access
            </span>
            <span className="text-xs text-[#666666]">
              Every client project is led by a partner. Zero junior hand-offs.
            </span>
          </div>
        </div>

        {/* Team Grid with 16 Black & White Studio Portraits matching reference screenshot! */}
        <div
          ref={teamGridRef}
          className="mt-14 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.name}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-black/10 bg-[#F5F5F5] transition-all duration-300 hover:shadow-2xl hover:border-black/30 cursor-pointer"
            >
              {/* Studio Portrait with B&W filter as in reference */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-200">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 300px"
                  className="object-cover grayscale contrast-125 transition-all duration-500 ease-out group-hover:scale-105 group-hover:grayscale-0"
                />

                {/* Hover overlay with role & location */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-white">
                    <span className="text-[10px] font-mono text-[#E5C158] block uppercase font-bold tracking-wider">
                      {member.location}
                    </span>
                    <span className="text-xs font-medium text-white/90">
                      {member.discipline}
                    </span>
                  </div>
                </div>
              </div>

              {/* Info block */}
              <div className="p-3.5 bg-white flex flex-col justify-between flex-1 border-t border-black/5">
                <h3 className="text-sm font-bold text-[#111111] group-hover:text-[#B38F26] transition-colors leading-tight">
                  {member.name}
                </h3>
                <p className="text-[11px] text-[#666666] mt-0.5 leading-snug">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
