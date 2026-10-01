"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProjectModal } from "@/components/ui/ProjectModal";
import { Clock } from "lucide-react";

export default function PortfolioPage() {
  const [projectModalOpen, setProjectModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#000000] text-[#F5F5F5] selection:bg-[#38BDF8] selection:text-[#000000] flex flex-col">
      <Header />
      
      {/* Coming Soon Section */}
      <section className="flex-1 flex flex-col items-center justify-center pt-32 pb-24 px-6 relative overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#38BDF8] opacity-5 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 text-center max-w-2xl mx-auto flex flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-[#080808] border border-white/10 flex items-center justify-center mb-10 shadow-[0_0_30px_rgba(56,189,248,0.1)]">
            <Clock className="w-8 h-8 text-[#38BDF8]" />
          </div>
          
          <h1 className="text-[48px] md:text-[64px] font-bold tracking-tighter leading-[1.1] mb-6 text-white">
            Our Portfolio
          </h1>
          
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/20 mb-8">
            <span className="text-[#38BDF8] font-bold tracking-widest text-xs uppercase">
              Coming Soon
            </span>
          </div>

          <p className="text-[#888] text-[18px] md:text-[20px] leading-relaxed mb-12 font-light">
            We are currently curating some of our best work to showcase. Our new portfolio experience is launching shortly.
          </p>

          <button
            onClick={() => setProjectModalOpen(true)}
            className="group relative inline-flex items-center justify-center h-[54px] px-8 bg-white text-black font-bold text-[13px] tracking-widest uppercase overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <div className="absolute inset-0 bg-[#38BDF8] transform scale-y-0 origin-bottom transition-transform duration-300 group-hover:scale-y-100" />
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              Start A Project Today
            </span>
          </button>
        </div>
      </section>

      <ProjectModal 
        open={projectModalOpen} 
        onOpenChange={setProjectModalOpen} 
      />

      <Footer />
    </main>
  );
}
