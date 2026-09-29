import React from "react";
import { Lightbulb, Target, Users, ShieldCheck } from "lucide-react";

export function AboutValues() {
  const values = [
    {
      icon: <Lightbulb className="w-10 h-10 text-white" strokeWidth={1.5} />,
      title: "Relentless Innovation",
      desc: "We never settle for the status quo. We constantly explore new technologies, frameworks, and creative concepts to keep our clients ahead of the curve."
    },
    {
      icon: <Target className="w-10 h-10 text-white" strokeWidth={1.5} />,
      title: "Results-Driven",
      desc: "Every design choice and line of code is measured by its impact on your bottom line. We prioritize tangible business results over vanity metrics."
    },
    {
      icon: <Users className="w-10 h-10 text-white" strokeWidth={1.5} />,
      title: "Radical Collaboration",
      desc: "We view our clients as partners. Through transparent communication and agile methodologies, we build solutions together, ensuring alignment at every step."
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-white" strokeWidth={1.5} />,
      title: "Uncompromising Integrity",
      desc: "Trust is our most valuable currency. We operate with complete transparency in our pricing, timelines, and technical recommendations."
    }
  ];

  return (
    <section className="bg-[#050505] py-24 text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 mb-16 text-center">
        <h2 className="text-[42px] md:text-[52px] font-bold mb-6 tracking-tight text-white leading-tight">
          Our Core Values
        </h2>
        <p className="text-[#A3A3A3] text-[15px] leading-[1.8] font-light max-w-2xl mx-auto">
          These principles guide every decision we make, every line of code we write, and every relationship we build. They are the foundation of the GIGIGRO standard.
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        {values.map((val, idx) => (
          <div key={idx} className="p-10 bg-[#0a0a0a] border border-[#222222] rounded-xl hover:border-[#38BDF8] transition-colors duration-300">
            <div className="mb-6">{val.icon}</div>
            <h3 className="text-[24px] font-bold mb-4 text-white">{val.title}</h3>
            <p className="text-[#A3A3A3] text-[15px] leading-[1.6] font-light">{val.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
