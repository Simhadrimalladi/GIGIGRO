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
          <h2 className="text-[32px] md:text-[46px] font-bold tracking-tight leading-[1.1] mb-8">
            Our Culture:<br/>
            Where Brilliance<br/>
            Meets Wellbeing
          </h2>
          <p className="text-[#333333] text-[15px] leading-[1.6] font-light mb-8">
            We believe that the best work is produced by teams who are respected, supported, and given the freedom to experiment. At GIGIGRO, we have cultivated an environment that champions continuous learning and psychological safety.
          </p>
          <ul className="space-y-6 list-none p-0 m-0">
            <li className="flex items-start gap-4">
              <span className="text-[#38BDF8] mt-1 shrink-0">■</span>
              <div>
                <strong className="block text-[16px] text-[#000000] mb-1">Diversity & Inclusion</strong>
                <span className="text-[#555555] text-[14px] leading-[1.6] font-light">We celebrate diverse perspectives. Our team comes from 15+ different countries, bringing unique cultural insights to global campaigns.</span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-[#38BDF8] mt-1 shrink-0">■</span>
              <div>
                <strong className="block text-[16px] text-[#000000] mb-1">Continuous Growth</strong>
                <span className="text-[#555555] text-[14px] leading-[1.6] font-light">Every team member gets a dedicated R&D budget for courses, certifications, and attending global tech conferences.</span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-[#38BDF8] mt-1 shrink-0">■</span>
              <div>
                <strong className="block text-[16px] text-[#000000] mb-1">Remote-First Philosophy</strong>
                <span className="text-[#555555] text-[14px] leading-[1.6] font-light">While we have hubs in London and New York, we empower our talent to work from wherever they feel most inspired and productive.</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
