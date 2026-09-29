"use client";

import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#000000] text-[#F5F5F5] flex flex-col selection:bg-[#38BDF8] selection:text-[#000000] relative">
      <Header />

      {/* Hero Section */}
      <section className="bg-[#050505] text-white pt-48 pb-32 px-6 md:px-12 lg:px-16 relative overflow-hidden flex-1 flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-20 right-20 flex gap-4 text-[#38BDF8]">
            <svg width="40" height="20" viewBox="0 0 100 50" fill="currentColor">
              <path d="M10 25 Q30 5, 50 25 Q70 5, 90 25 Q70 15, 50 35 Q30 15, 10 25 Z" />
            </svg>
            <svg width="60" height="30" viewBox="0 0 100 50" fill="currentColor" className="mt-8 ml-8">
              <path d="M10 25 Q30 5, 50 25 Q70 5, 90 25 Q70 15, 50 35 Q30 15, 10 25 Z" />
            </svg>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col items-center">
          <span className="text-[#38BDF8] text-[13px] font-bold tracking-[3px] uppercase mb-4 block">
            OUR BLOG
          </span>
          <h1 className="text-[56px] md:text-[80px] lg:text-[100px] font-bold tracking-tight mb-8 leading-[1.1]">
            Coming Soon
          </h1>
          <p className="text-[#A3A3A3] text-[18px] md:text-[22px] font-light max-w-2xl">
            We are working hard to bring you the best insights, strategies, and updates from the world of digital marketing and web development. Stay tuned!
          </p>
        </div>

        {/* Faint text in background */}
        <div className="absolute -bottom-16 left-0 w-full overflow-hidden pointer-events-none select-none opacity-10 flex whitespace-nowrap justify-center">
          <span className="text-[120px] font-black uppercase text-transparent" style={{ WebkitTextStroke: '2px #38BDF8' }}>
            BLOG BLOG BLOG BLOG
          </span>
        </div>
      </section>

      <Footer />
    </main>
  );
}
