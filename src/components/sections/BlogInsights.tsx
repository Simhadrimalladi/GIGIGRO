"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function BlogInsights() {
  const containerRef = useRef<HTMLElement | null>(null);
  const listRef = useRef<HTMLUListElement | null>(null);

  useGSAP(
    () => {
      if (!listRef.current) return;

      gsap.from(listRef.current.children, {
        scrollTrigger: {
          trigger: listRef.current,
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
      id="insights"
      ref={containerRef}
      className="relative bg-black py-24 md:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Left Sticky Column */}
          <div className="lg:w-[40%] lg:sticky lg:top-32 space-y-8">
            <div>
              <div className="inline-flex items-baseline text-[13px] font-medium tracking-wide text-[#737373] uppercase mb-6 relative">
                <span className="relative after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[1px] after:bg-[#737373]/50">
                  NEWS & INFORMATION
                </span>
                <span className="text-[#7DD3FC] font-black text-lg ml-1">.</span>
              </div>

              <h2 className="text-[44px] md:text-[56px] lg:text-[64px] font-bold text-white tracking-tight leading-[1.1]">
                Stay <br />
                up-to-date
              </h2>

              <p className="mt-8 text-[15px] text-[#A3A3A3] leading-[1.7] max-w-[400px] font-light">
                Stay up-to-date with industry news and information with our articles covering all subjects in the Web and Digital Marketing landscape.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/blog"
                className="inline-block text-[17px] font-light text-[#7DD3FC] relative after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[1px] after:bg-[#7DD3FC] hover:opacity-70 transition-opacity"
              >
                Read all articles
              </Link>
            </div>
          </div>

          {/* Right Column: Article List */}
          <div className="lg:w-[60%]">
            <ul ref={listRef} className="flex flex-col">
              {BLOG_POSTS.map((post, idx) => (
                <li
                  key={post.title}
                  className="group border-b border-[#333333] last:border-b-0 py-10 transition-colors hover:border-[#7DD3FC] cursor-pointer"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10 transition-transform duration-500 ease-out group-hover:translate-x-6">
                    {/* Number Circle & Date */}
                    <div className="flex items-center gap-4 min-w-[200px]">
                      <div className="w-10 h-10 rounded-full border border-[#7DD3FC] flex items-center justify-center text-white text-sm font-light">
                        {idx + 1}
                      </div>
                      <span className="text-[#A3A3A3] text-sm font-light group-hover:text-white transition-colors duration-500">
                        {post.date}
                      </span>
                    </div>

                    {/* Title */}
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-white leading-snug group-hover:text-[#7DD3FC] transition-colors duration-500">
                        {post.title}
                      </h3>
                    </div>

                    {/* Read More Link */}
                    <div>
                      <Link
                        href="#"
                        className="text-white text-[11px] font-medium tracking-widest uppercase relative after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[1px] after:bg-white group-hover:text-[#7DD3FC] group-hover:after:bg-[#7DD3FC] transition-colors duration-500"
                      >
                        READ MORE
                      </Link>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  );
}
