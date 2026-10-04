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
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto text-center">
        <span className="text-[#38BDF8] text-[13px] font-mono tracking-widest uppercase mb-3 block font-semibold">
          OUR WORK
        </span>
        <h1 className="text-[42px] md:text-[64px] font-bold tracking-tight leading-[1.1] mb-6 text-white">
          Ideas Built Into Digital Experiences
        </h1>
        <p className="text-[#A3A3A3] text-[16px] md:text-[18px] leading-[1.8] font-light max-w-3xl mx-auto mb-10">
          Every project starts with a business need. From websites and ecommerce platforms to SEO and digital marketing, we create digital solutions designed around the goals of each business we work with.
        </p>
      </section>

      {/* Project Categories Section */}
      <section className="py-20 bg-[#0A0A0A] border-t border-b border-[#222222]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
          <span className="text-[#38BDF8] text-[13px] font-mono tracking-widest uppercase mb-3 block font-semibold">
            WHAT WE WORK ON
          </span>
          <h2 className="text-[32px] md:text-[44px] font-bold tracking-tight text-white mb-12">
            Projects That Solve Real Business Needs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-[#111111] border border-[#222222]">
              <h3 className="text-[20px] font-bold text-white mb-3">WEB DESIGN</h3>
              <p className="text-[#A3A3A3] text-[14px] leading-[1.7] font-light">
                Professional digital experiences built around the brand and customer journey.
              </p>
            </div>
            <div className="p-8 bg-[#111111] border border-[#222222]">
              <h3 className="text-[20px] font-bold text-white mb-3">WEB DEVELOPMENT</h3>
              <p className="text-[#A3A3A3] text-[14px] leading-[1.7] font-light">
                Functional, reliable websites and digital solutions built around business requirements.
              </p>
            </div>
            <div className="p-8 bg-[#111111] border border-[#222222]">
              <h3 className="text-[20px] font-bold text-white mb-3">ECOMMERCE</h3>
              <p className="text-[#A3A3A3] text-[14px] leading-[1.7] font-light">
                Online stores designed to make product discovery and purchasing easier.
              </p>
            </div>
            <div className="p-8 bg-[#111111] border border-[#222222]">
              <h3 className="text-[20px] font-bold text-white mb-3">SEO & SEARCH</h3>
              <p className="text-[#A3A3A3] text-[14px] leading-[1.7] font-light">
                Strategies designed to improve organic visibility and discoverability.
              </p>
            </div>
            <div className="p-8 bg-[#111111] border border-[#222222]">
              <h3 className="text-[20px] font-bold text-white mb-3">DIGITAL MARKETING</h3>
              <p className="text-[#A3A3A3] text-[14px] leading-[1.7] font-light">
                Campaigns and content created to help businesses reach and engage their audiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 text-center px-6">
        <div className="max-w-3xl mx-auto">
          <span className="text-[#38BDF8] text-[13px] font-mono tracking-widest uppercase mb-3 block font-semibold">
            HAVE A PROJECT IN MIND?
          </span>
          <h2 className="text-[32px] md:text-[48px] font-bold text-white mb-6">
            Your Project Could Be Our Next Success Story
          </h2>
          <p className="text-[#A3A3A3] text-[16px] leading-relaxed mb-8">
            Tell us what you want to build, improve or grow. Let&apos;s create something that works for your business.
          </p>
          <button
            onClick={() => setProjectModalOpen(true)}
            className="inline-flex items-center justify-center h-[54px] px-8 bg-[#38BDF8] text-black font-bold text-[13px] tracking-widest uppercase hover:bg-white transition-colors"
          >
            START YOUR PROJECT
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
