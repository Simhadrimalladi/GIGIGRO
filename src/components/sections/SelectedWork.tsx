"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { CASE_STUDIES } from "@/lib/data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function SelectedWork() {
  const containerRef = useRef<HTMLElement | null>(null);
  const projectsListRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!projectsListRef.current) return;

      gsap.from(projectsListRef.current.children, {
        scrollTrigger: {
          trigger: projectsListRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      id="case-studies"
      ref={containerRef}
      className="relative bg-[#000000] text-[#F5F5F5] py-20 md:py-32 border-t border-[#222222]"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          
          {/* Left Sticky Column */}
          <div className="lg:w-[40%] lg:sticky lg:top-36 space-y-6">
            <div>
              <div className="inline-flex items-baseline text-[13px] font-mono tracking-widest text-[#38BDF8] uppercase mb-4 relative font-semibold">
                <span>OUR WORK</span>
                <span className="text-[#38BDF8] font-black text-lg ml-1">.</span>
              </div>

              <h2 className="text-[32px] sm:text-[42px] md:text-[50px] lg:text-[54px] font-bold text-white tracking-tight leading-[1.1]">
                Projects Built Around <br />
                <span className="bg-[#38BDF8] text-[#000000] px-2 py-0.5 inline-block mt-1">
                  Real Business Needs
                </span>
              </h2>

              <p className="mt-6 text-[14px] sm:text-[15px] text-[#A3A3A3] leading-[1.8] font-light max-w-[420px]">
                Good digital work starts with understanding the business behind the brief. Explore selected DIJIGRO projects to see how strategy, design, development and marketing come together to solve different digital challenges.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/portfolio"
                className="inline-block text-[15px] font-bold text-black uppercase tracking-wider relative after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[1px] after:bg-black hover:opacity-70 transition-opacity"
              >
                VIEW ALL PROJECTS
              </Link>
            </div>
          </div>

          {/* Right Column: Case Studies Stack */}
          <div
            ref={projectsListRef}
            className="lg:w-[60%] space-y-16"
          >
            {CASE_STUDIES.map((project) => (
              <article key={project.id} className="group cursor-pointer">
                <Link href={`/case-studies/${project.id}`} className="block">
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[4px] bg-[#f5f5f5]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    
                    {/* View Circle Hover Effect */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-[100px] h-[100px] rounded-full bg-white/70 backdrop-blur-sm flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                        <span className="text-black text-sm font-bold tracking-wider">VIEW</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-[22px] font-bold text-black inline-block relative after:absolute after:bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-black group-hover:text-black/80">
                      {project.title}
                    </h3>
                  </div>
                </Link>
              </article>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
