"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SuccessModal } from "@/components/ui/SuccessModal";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronDown } from "lucide-react";

const howDidYouHearOptions = [
  { value: "Google", label: "Google Search" },
  { value: "Social Media", label: "Social Media" },
  { value: "Referral", label: "Referral" },
  { value: "Clutch", label: "Clutch / GoodFirms" },
  { value: "Other", label: "Other" }
];

export default function QuotePage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    website: "",
    services: {
      "WEB DESIGN": false,
      "WEB APPLICATIONS": false,
      "GRAPHIC DESIGN": false,
      "SEO": false,
      "PPC": false,
      "SOCIAL": false,
      "HOSTING & EMAILS": false,
      "SUPPORT": false,
      "UNSURE": false,
    },
    howDidYouHear: "",
    notes: "",
  });

  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const handleServiceChange = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: {
        ...prev.services,
        [service]: !prev.services[service as keyof typeof prev.services],
      },
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Quote Form Submitted:", formData);
    setIsSuccessModalOpen(true);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      website: "",
      services: {
        "WEB DESIGN": false,
        "WEB APPLICATIONS": false,
        "GRAPHIC DESIGN": false,
        "SEO": false,
        "PPC": false,
        "SOCIAL": false,
        "HOSTING & EMAILS": false,
        "SUPPORT": false,
        "UNSURE": false,
      },
      howDidYouHear: "",
      notes: "",
    });
  };

  return (
    <main className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section className="bg-[#050505] text-white pt-40 pb-20 px-6 md:px-12 lg:px-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-10 right-10 flex gap-4 text-[#38BDF8]">
            {/* Some faint dijigro background elements as seen in the dark background */}
            <svg width="40" height="20" viewBox="0 0 100 50" fill="currentColor">
              <path d="M10 25 Q30 5, 50 25 Q70 5, 90 25 Q70 15, 50 35 Q30 15, 10 25 Z" />
            </svg>
            <svg width="60" height="30" viewBox="0 0 100 50" fill="currentColor" className="mt-8 ml-8">
              <path d="M10 25 Q30 5, 50 25 Q70 5, 90 25 Q70 15, 50 35 Q30 15, 10 25 Z" />
            </svg>
          </div>
        </div>
        <div className="max-w-[1400px] mx-auto relative z-10">
          <span className="text-[#38BDF8] text-[13px] font-mono tracking-widest uppercase mb-3 block font-semibold">
            GET A QUOTE
          </span>
          <h1 className="text-[48px] md:text-[64px] font-bold tracking-tight mb-4 text-white">
            Tell Us What You Need
          </h1>
          <p className="text-[#A3A3A3] text-[16px] font-light mb-8 max-w-2xl">
            Planning a new website, looking for better digital marketing or need help with an existing project? Share a few details about your requirements and we’ll get back to you with the next steps.
          </p>
          <p className="text-[18px] font-light text-white">
            Not sure what you need? <a href="/contact" className="text-[#38BDF8] border-b border-[#38BDF8] pb-1 hover:text-[#7dd3fc] transition-colors">Let&apos;s Talk</a>
          </p>
          
          {/* Faint 'START A PROJECT' text in background */}
          <div className="absolute -bottom-16 left-0 w-full overflow-hidden pointer-events-none select-none opacity-10 flex whitespace-nowrap">
            <div className="animate-marquee flex gap-8">
              <span className="text-[120px] font-black uppercase text-transparent shrink-0" style={{ WebkitTextStroke: '2px #38BDF8' }}>
                START A PROJECT • START A PROJECT • START A PROJECT •
              </span>
              <span className="text-[120px] font-black uppercase text-transparent shrink-0" style={{ WebkitTextStroke: '2px #38BDF8' }}>
                START A PROJECT • START A PROJECT • START A PROJECT •
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 px-6 md:px-12 lg:px-16 text-black bg-white">
        <div className="max-w-[1000px] mx-auto">
          <form onSubmit={handleSubmit} className="space-y-16">
            
            {/* The Basics */}
            <div>
              <h2 className="text-[28px] font-bold mb-8">The Basics</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[11px] font-bold tracking-widest uppercase text-gray-500">Full Name *</label>
                  <input 
                    type="text" 
                    required
                    placeholder="John Smith"
                    className="w-full border border-gray-300 rounded p-4 text-[15px] focus:outline-none focus:border-[#38BDF8] transition-colors"
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold tracking-widest uppercase text-gray-500">Email Address *</label>
                  <input 
                    type="email" 
                    required
                    placeholder="john@dijigro.com"
                    className="w-full border border-gray-300 rounded p-4 text-[15px] focus:outline-none focus:border-[#38BDF8] transition-colors"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold tracking-widest uppercase text-gray-500">Phone *</label>
                  <input 
                    type="tel" 
                    required
                    placeholder="+44 208 338 1206"
                    className="w-full border border-gray-300 rounded p-4 text-[15px] focus:outline-none focus:border-[#38BDF8] transition-colors"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold tracking-widest uppercase text-gray-500">Website URL *</label>
                  <input 
                    type="url" 
                    required
                    placeholder="https://dijigro.com"
                    className="w-full border border-gray-300 rounded p-4 text-[15px] focus:outline-none focus:border-[#38BDF8] transition-colors"
                    value={formData.website}
                    onChange={(e) => setFormData({...formData, website: e.target.value})}
                  />
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h2 className="text-[28px] font-bold mb-4">Services</h2>
              <p className="text-[11px] font-bold tracking-widest uppercase text-gray-500 mb-6">What services would you like us to quote for? *</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.keys(formData.services).map((service) => (
                  <div 
                    key={service}
                    onClick={() => handleServiceChange(service)}
                    className={`border ${formData.services[service as keyof typeof formData.services] ? 'border-[#38BDF8] bg-[#e0f2fe]' : 'border-gray-300 hover:border-gray-400'} rounded p-4 cursor-pointer transition-colors flex items-center h-[60px]`}
                  >
                    <span className="text-[13px] font-bold tracking-wider">{service}</span>
                  </div>
                ))}
              </div>
              <p className="text-[12px] text-gray-400 mt-4 italic">Feel free to select as many services as you like.</p>
            </div>

            {/* How did you hear */}
            <div className="space-y-2 relative">
              <label className="text-[11px] font-bold tracking-widest uppercase text-gray-500">How did you hear about DIJIGRO? *</label>
              
              <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  <button 
                    type="button"
                    className="w-full border border-gray-300 rounded p-4 text-[15px] focus:outline-none focus:border-[#38BDF8] transition-colors flex justify-between items-center bg-white text-left shadow-sm"
                  >
                    <span className={formData.howDidYouHear ? "text-black" : "text-gray-400"}>
                      {howDidYouHearOptions.find(opt => opt.value === formData.howDidYouHear)?.label || "Please select"}
                    </span>
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </button>
                </DropdownMenu.Trigger>

                <DropdownMenu.Portal>
                  <DropdownMenu.Content 
                    align="start"
                    sideOffset={5}
                    className="z-[100] w-[var(--radix-dropdown-menu-trigger-width)] bg-white rounded-lg border border-gray-200 shadow-xl overflow-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
                  >
                    {howDidYouHearOptions.map((opt) => (
                      <DropdownMenu.Item 
                        key={opt.value}
                        onSelect={() => setFormData({...formData, howDidYouHear: opt.value})}
                        className="px-4 py-3 text-[15px] text-gray-700 outline-none cursor-pointer hover:bg-[#e0f2fe] hover:text-[#0ea5e9] transition-colors data-[highlighted]:bg-[#e0f2fe] data-[highlighted]:text-[#0ea5e9]"
                      >
                        {opt.label}
                      </DropdownMenu.Item>
                    ))}
                  </DropdownMenu.Content>
                </DropdownMenu.Portal>
              </DropdownMenu.Root>
              
              {/* Hidden input for HTML validation requirement */}
              <input type="hidden" required value={formData.howDidYouHear} />
            </div>

            {/* Notes */}
            <div className="space-y-2">
              <label className="text-[11px] font-bold tracking-widest uppercase text-gray-500">Do you have any other questions or notes?</label>
              <textarea 
                placeholder="(optional)"
                rows={4}
                className="w-full border border-gray-300 rounded p-4 text-[15px] focus:outline-none focus:border-[#38BDF8] transition-colors resize-none"
                value={formData.notes}
                onChange={(e) => setFormData({...formData, notes: e.target.value})}
              ></textarea>
            </div>

            {/* Submit */}
            <div>
              <button 
                type="submit"
                className="bg-[#38BDF8] text-black h-[50px] px-10 rounded font-bold text-[13px] uppercase tracking-widest hover:bg-[#7dd3fc] transition-colors shadow-[0_0_15px_rgba(56,189,248,0.2)] hover:shadow-[0_0_20px_rgba(56,189,248,0.4)]"
              >
                Submit Form
              </button>
            </div>
          </form>

          {/* Trust Badges */}
          <div className="mt-24 pt-12 border-t border-gray-200 flex flex-wrap items-center justify-center gap-12 opacity-80">
            <Image src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft Partner" width={120} height={40} className="grayscale hover:grayscale-0 transition-all opacity-60" />
            <Image src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="AWS Partner" width={90} height={30} className="grayscale hover:grayscale-0 transition-all opacity-60" />
            <Image src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google Partner" width={90} height={30} className="grayscale hover:grayscale-0 transition-all opacity-60" />
            <div className="text-[20px] font-bold text-gray-400 grayscale hover:grayscale-0 transition-all cursor-pointer">★ Trustpilot</div>
          </div>
        </div>
      </section>
      
      <SuccessModal 
        open={isSuccessModalOpen} 
        onOpenChange={setIsSuccessModalOpen} 
        title="Quote Request Received!"
        description={`Thank you, ${formData.fullName || 'there'}. Our team will review your requirements and get back to you shortly.`}
      />
      
      <Footer />
    </main>
  );
}
