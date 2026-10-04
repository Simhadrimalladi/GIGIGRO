import React from "react";

export function PerformanceMarketingLocations() {
  const steps = [
    { num: "01", title: "DEFINE", text: "We identify your business objective, target audience, offer and key performance indicators." },
    { num: "02", title: "PLAN", text: "We select the appropriate channels, audiences, campaign structure, messaging and landing-page approach." },
    { num: "03", title: "LAUNCH", text: "Campaigns are launched with appropriate tracking and clearly defined conversion actions." },
    { num: "04", title: "MEASURE", text: "We monitor campaign data to understand what is generating traffic, engagement and conversions." },
    { num: "05", title: "OPTIMISE", text: "We refine targeting, creative, messaging, budgets, landing pages and other campaign elements based on performance." },
    { num: "06", title: "SCALE", text: "When a campaign demonstrates sustainable performance, we identify opportunities to expand while continuing to monitor efficiency." }
  ];

  return (
    <section className="bg-[#050505] py-24 text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <p className="text-[#38BDF8] text-[13px] font-mono tracking-widest uppercase mb-3">
          HOW WE WORK
        </p>
        <h2 className="text-[32px] md:text-[42px] font-bold tracking-tight leading-[1.1] mb-6 text-white">
          Every Campaign Starts With a Clear Objective
        </h2>
        <p className="text-[#A3A3A3] text-[15px] leading-[1.8] font-light max-w-4xl mb-16">
          Before launching a campaign, we need to understand what success means for your business. That could be generating qualified leads, increasing enquiries, driving online purchases or improving the efficiency of your advertising budget.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 border-t border-[#333333] pt-16">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-[#0A0A0A] p-8 border border-[#222222] flex flex-col justify-between">
              <div>
                <span className="text-[#38BDF8] text-[28px] font-bold block mb-3 font-mono">{step.num}</span>
                <h3 className="text-[18px] font-bold text-white mb-3 tracking-wide">{step.title}</h3>
                <p className="text-[#A3A3A3] text-[14px] leading-[1.7] font-light">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-[#38BDF8] text-[15px] font-semibold">
          The goal is not simply to spend more. It is to make every part of the campaign work more effectively.
        </div>
      </div>
    </section>
  );
}
