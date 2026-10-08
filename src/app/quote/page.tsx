"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SuccessModal } from "@/components/ui/SuccessModal";
import { CustomSelect } from "@/components/ui/CustomSelect";
import { Check, Send } from "lucide-react";

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
    <main className="min-h-screen bg-[#000000] text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[#050505] text-white pt-44 pb-16 px-6 md:px-12 lg:px-16 relative overflow-hidden border-b border-[#1A1A1A]">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-10 right-10 flex gap-4 text-[#38BDF8]">
            <svg width="40" height="20" viewBox="0 0 100 50" fill="currentColor">
              <path d="M10 25 Q30 5, 50 25 Q70 5, 90 25 Q70 15, 50 35 Q30 15, 10 25 Z" />
            </svg>
            <svg width="60" height="30" viewBox="0 0 100 50" fill="currentColor" className="mt-8 ml-8">
              <path d="M10 25 Q30 5, 50 25 Q70 5, 90 25 Q70 15, 50 35 Q30 15, 10 25 Z" />
            </svg>
          </div>
        </div>
        
        <div className="max-w-[1200px] mx-auto relative z-10">
          <span className="text-[#38BDF8] text-[13px] font-mono tracking-widest uppercase mb-3 block font-semibold">
            GET A QUOTE
          </span>
          
          <h1 className="text-[44px] sm:text-[56px] md:text-[68px] font-extrabold tracking-tight mb-6 leading-tight text-white">
            Tell Us What You{" "}
            <span className="relative inline-block text-[#38BDF8]">
              Need
              {/* Hand-drawn blue curved underline stroke */}
              <svg
                className="absolute left-0 -bottom-3 w-full h-[16px] text-[#38BDF8] pointer-events-none"
                viewBox="0 0 320 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 12 C 60 17, 140 18, 220 12 C 265 8, 295 7, 316 11"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>
          
          <p className="text-[#A3A3A3] text-[16px] md:text-[18px] font-light mb-6 max-w-2xl leading-relaxed">
            Planning a new website, looking for better digital marketing or need help with an existing project? Share a few details about your requirements and we’ll get back to you with the next steps.
          </p>
          
          <p className="text-[16px] font-light text-white">
            Not sure what you need?{" "}
            <a href="/contact" className="text-[#38BDF8] border-b border-[#38BDF8]/50 pb-0.5 hover:border-[#38BDF8] hover:text-[#7dd3fc] transition-colors">
              Let&apos;s Talk
            </a>
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 px-6 md:px-12 lg:px-16 bg-[#000000] text-white">
        <div className="max-w-[1100px] mx-auto">
          <form onSubmit={handleSubmit} className="space-y-12">
            
            {/* The Basics Card */}
            <div className="bg-[#0B0B0B] border border-[#222222] rounded-2xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
              <div className="mb-8 pb-4 border-b border-[#1A1A1A]">
                <h2 className="text-[24px] md:text-[28px] font-bold text-white tracking-tight">The Basics</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[12px] font-bold tracking-wider uppercase text-[#A3A3A3]">Full Name *</label>
                  <input 
                    type="text" 
                    required
                    placeholder="John Smith"
                    className="w-full bg-[#141414] border border-[#2A2A2A] rounded-xl p-4 text-[15px] text-white placeholder-gray-600 focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] transition-all"
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[12px] font-bold tracking-wider uppercase text-[#A3A3A3]">Email Address *</label>
                  <input 
                    type="email" 
                    required
                    placeholder="john@dijigro.com"
                    className="w-full bg-[#141414] border border-[#2A2A2A] rounded-xl p-4 text-[15px] text-white placeholder-gray-600 focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] transition-all"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[12px] font-bold tracking-wider uppercase text-[#A3A3A3]">Phone *</label>
                  <input 
                    type="tel" 
                    required
                    placeholder="+44 208 338 1206"
                    className="w-full bg-[#141414] border border-[#2A2A2A] rounded-xl p-4 text-[15px] text-white placeholder-gray-600 focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] transition-all"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[12px] font-bold tracking-wider uppercase text-[#A3A3A3]">Website URL *</label>
                  <input 
                    type="url" 
                    required
                    placeholder="https://dijigro.com"
                    className="w-full bg-[#141414] border border-[#2A2A2A] rounded-xl p-4 text-[15px] text-white placeholder-gray-600 focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] transition-all"
                    value={formData.website}
                    onChange={(e) => setFormData({...formData, website: e.target.value})}
                  />
                </div>
              </div>
            </div>

            {/* Services Card */}
            <div className="bg-[#0B0B0B] border border-[#222222] rounded-2xl p-6 md:p-10 shadow-2xl">
              <div className="mb-2 pb-4 border-b border-[#1A1A1A]">
                <h2 className="text-[24px] md:text-[28px] font-bold text-white tracking-tight">Services Required</h2>
              </div>
              <p className="text-[13px] text-[#888888] font-medium tracking-wide uppercase mt-2 mb-6">What services would you like us to quote for? *</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.keys(formData.services).map((service) => {
                  const isChecked = formData.services[service as keyof typeof formData.services];
                  return (
                    <div 
                      key={service}
                      onClick={() => handleServiceChange(service)}
                      className={`border rounded-xl p-4 cursor-pointer transition-all flex items-center justify-between h-[60px] select-none ${
                        isChecked 
                          ? 'border-[#38BDF8] bg-[#38BDF8]/15 text-[#38BDF8] shadow-[0_0_15px_rgba(56,189,248,0.15)] font-bold' 
                          : 'border-[#222222] bg-[#141414] text-[#CCCCCC] hover:border-[#444444] hover:text-white'
                      }`}
                    >
                      <span className="text-[13px] tracking-wider">{service}</span>
                      <div className={`w-5 h-5 rounded flex items-center justify-center transition-colors ${isChecked ? 'bg-[#38BDF8] text-black' : 'border border-[#444444]'}`}>
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </div>
                  );
                })}
              </div>
              <p className="text-[12px] text-[#777777] mt-4 italic">Feel free to select as many services as you like.</p>
            </div>

            {/* Additional Details Card */}
            <div className="bg-[#0B0B0B] border border-[#222222] rounded-2xl p-6 md:p-10 shadow-2xl space-y-6">
              <div className="mb-6 pb-4 border-b border-[#1A1A1A]">
                <h2 className="text-[24px] md:text-[28px] font-bold text-white tracking-tight">Additional Details</h2>
              </div>

              {/* How did you hear */}
              <div className="space-y-2 relative">
                <label className="text-[12px] font-bold tracking-wider uppercase text-[#A3A3A3]">How did you hear about DIJIGRO? *</label>
                <CustomSelect 
                  options={howDidYouHearOptions}
                  value={formData.howDidYouHear}
                  onChange={(val) => setFormData({ ...formData, howDidYouHear: val })}
                  placeholder="Please select..."
                  variant="dark"
                  className="h-[54px] rounded-xl border-[#2A2A2A] bg-[#141414] p-4 text-[15px]"
                />
                <input type="hidden" required value={formData.howDidYouHear} />
              </div>

              {/* Notes */}
              <div className="space-y-2">
                <label className="text-[12px] font-bold tracking-wider uppercase text-[#A3A3A3]">Do you have any other questions or notes?</label>
                <textarea 
                  placeholder="Tell us about your project goals, timeline, budget range or specific requirements (optional)..."
                  rows={4}
                  className="w-full bg-[#141414] border border-[#2A2A2A] rounded-xl p-4 text-[15px] text-white placeholder-gray-600 focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] transition-all resize-none"
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                ></textarea>
              </div>
            </div>

            {/* Submit CTA Button */}
            <div className="pt-4">
              <button 
                type="submit"
                className="w-full sm:w-auto bg-[#38BDF8] text-black h-[56px] px-12 rounded-xl font-extrabold text-[14px] uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-[#7dd3fc] transition-all shadow-[0_0_25px_rgba(56,189,248,0.25)] hover:shadow-[0_0_35px_rgba(56,189,248,0.45)] cursor-pointer"
              >
                Submit Form <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
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
