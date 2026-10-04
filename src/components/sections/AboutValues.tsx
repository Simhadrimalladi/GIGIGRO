import React from "react";
import { Lightbulb, Target, Users, ShieldCheck } from "lucide-react";

export function AboutValues() {
  const values = [
    {
      icon: <Lightbulb className="w-10 h-10 text-[#38BDF8]" strokeWidth={1.5} />,
      title: "CREATIVITY WITH PURPOSE",
      desc: "We create ideas that are designed to solve problems, communicate clearly and make a meaningful difference."
    },
    {
      icon: <Target className="w-10 h-10 text-[#38BDF8]" strokeWidth={1.5} />,
      title: "RESULTS THAT MATTER",
      desc: "We focus on outcomes that support business goals rather than chasing numbers that look good but add little value."
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-[#38BDF8]" strokeWidth={1.5} />,
      title: "HONEST COMMUNICATION",
      desc: "We believe in clear conversations, realistic expectations and straightforward recommendations."
    },
    {
      icon: <Users className="w-10 h-10 text-[#38BDF8]" strokeWidth={1.5} />,
      title: "COLLABORATION",
      desc: "We work with our clients as partners, combining our digital expertise with their knowledge of their business."
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-[#38BDF8]" strokeWidth={1.5} />,
      title: "CONTINUOUS LEARNING",
      desc: "Digital changes constantly. We keep learning, testing new ideas and adapting to create better solutions."
    },
    {
      icon: <Target className="w-10 h-10 text-[#38BDF8]" strokeWidth={1.5} />,
      title: "QUALITY IN EVERY DETAIL",
      desc: "From the smallest design element to the overall strategy, we believe good work comes from paying attention to the details."
    }
  ];

  return (
    <section className="bg-[#050505] py-24 text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 mb-16 text-center">
        <span className="text-[13px] font-bold text-[#38BDF8] tracking-widest uppercase block mb-3">
          OUR CORE VALUES
        </span>
        <h2 className="text-[38px] md:text-[52px] font-bold mb-6 tracking-tight text-white leading-tight">
          What Guides the Way We Work
        </h2>
        <p className="text-[#A3A3A3] text-[16px] leading-[1.8] font-light max-w-2xl mx-auto">
          The right digital solution is not only about technology or creativity. It is also about the principles behind the work.
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {values.map((val, idx) => (
          <div key={idx} className="p-8 bg-[#0a0a0a] border border-[#222222] hover:border-[#38BDF8] transition-colors duration-300">
            <div className="mb-6">{val.icon}</div>
            <h3 className="text-[18px] font-bold mb-3 text-white tracking-wider">{val.title}</h3>
            <p className="text-[#A3A3A3] text-[14px] leading-[1.7] font-light">{val.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
