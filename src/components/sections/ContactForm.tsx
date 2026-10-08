"use client";

import React, { useState } from "react";
import { Send } from "lucide-react";
import { SuccessModal } from "../ui/SuccessModal";
import { CustomSelect } from "../ui/CustomSelect";

const BUDGET_OPTIONS = [
  { value: "5k-10k", label: "£5,000 - £10,000" },
  { value: "10k-25k", label: "£10,000 - £25,000" },
  { value: "25k-50k", label: "£25,000 - £50,000" },
  { value: "50k+", label: "£50,000+" },
];

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    budget: "",
    message: ""
  });

  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    setIsSuccessModalOpen(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      budget: "",
      message: ""
    });
  };

  return (
    <section className="bg-[#000000] py-24 text-white relative overflow-hidden">
      {/* Background visual element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#1a1a1a] to-transparent opacity-50 pointer-events-none"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative z-10">
        
        {/* Left Side: Context & Trust */}
        <div className="flex flex-col justify-center">
          <span className="text-[#38BDF8] text-[13px] font-mono tracking-widest uppercase mb-3 block font-semibold">
            START A CONVERSATION
          </span>
          <h2 className="text-[42px] md:text-[56px] font-bold tracking-tight leading-[1.1] mb-8">
            Tell Us About Your <span className="text-[#38BDF8]">Project</span>
          </h2>
          <p className="text-[#A3A3A3] text-[16px] leading-[1.7] font-light max-w-lg">
            Fill in a few details and give us an idea of what you are looking to achieve. Whether you are starting something new or improving what you already have, we&apos;d love to hear about your project.
          </p>
        </div>

        {/* Right Side: The Form */}
        <div className="bg-[#050505] p-8 md:p-12 rounded-2xl border border-[#222222] shadow-2xl">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-bold text-[#A3A3A3] uppercase tracking-wider">Full Name *</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-[#111111] border border-[#333333] h-12 rounded-lg px-4 text-white outline-none focus:border-[#38BDF8] transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-bold text-[#A3A3A3] uppercase tracking-wider">Email Address *</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-[#111111] border border-[#333333] h-12 rounded-lg px-4 text-white outline-none focus:border-[#38BDF8] transition-colors"
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-bold text-[#A3A3A3] uppercase tracking-wider">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-[#111111] border border-[#333333] h-12 rounded-lg px-4 text-white outline-none focus:border-[#38BDF8] transition-colors"
                  placeholder="+44 20 7946 0912"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-bold text-[#A3A3A3] uppercase tracking-wider">Company Name</label>
                <input 
                  type="text" 
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="bg-[#111111] border border-[#333333] h-12 rounded-lg px-4 text-white outline-none focus:border-[#38BDF8] transition-colors"
                  placeholder="Your Company Ltd"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-bold text-[#A3A3A3] uppercase tracking-wider">Project Budget</label>
              <CustomSelect 
                options={BUDGET_OPTIONS}
                value={formData.budget}
                onChange={(val) => setFormData({ ...formData, budget: val })}
                placeholder="Select a range..."
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-bold text-[#A3A3A3] uppercase tracking-wider">Project Details *</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="bg-[#111111] border border-[#333333] rounded-lg p-4 text-white outline-none focus:border-[#38BDF8] transition-colors resize-none"
                placeholder="Tell us about your goals, timelines, and requirements..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="mt-4 bg-[#38BDF8] text-black h-14 rounded-lg font-bold text-[15px] uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-[#7dd3fc] transition-colors shadow-[0_0_20px_rgba(56,189,248,0.2)] hover:shadow-[0_0_25px_rgba(56,189,248,0.4)]"
            >
              Submit Inquiry <Send className="w-4 h-4" />
            </button>
            <p className="text-[#777777] text-[12px] text-center mt-2">
              By submitting this form, you agree to our privacy policy and terms of service.
            </p>
          </form>
        </div>
      </div>
      
      <SuccessModal 
        open={isSuccessModalOpen} 
        onOpenChange={setIsSuccessModalOpen} 
        title="Message Sent Successfully!"
        description={`Thank you, ${formData.name || 'there'}. Our senior strategist will get back to you within 24 hours.`}
      />
    </section>
  );
}
