import React from "react";

export function PpcLocations() {
  const steps = [
    { num: "01", title: "DISCOVER", text: "We understand your business, products or services, target audience, competition and campaign objectives." },
    { num: "02", title: "RESEARCH", text: "We research relevant search terms, audiences and opportunities to create a focused campaign structure." },
    { num: "03", title: "BUILD", text: "We create campaign groups, keywords, advertisements, targeting and conversion tracking based on the agreed strategy." },
    { num: "04", title: "LAUNCH", text: "Campaigns are launched with budgets, bidding and targeting configured around your objectives." },
    { num: "05", title: "MONITOR", text: "We review performance data to understand what is generating useful traffic and meaningful actions." },
    { num: "06", title: "OPTIMISE", text: "We continuously refine keywords, ads, bids, audiences, budgets and landing-page journeys based on what the data shows." }
  ];

  return (
    <section className="bg-[#050505] py-24 text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <p className="text-[#38BDF8] text-[13px] font-mono tracking-widest uppercase mb-3">
          HOW WE WORK
        </p>
        <h2 className="text-[32px] md:text-[42px] font-bold tracking-tight leading-[1.1] mb-6 text-white">
          Plan Carefully. Launch Clearly. Optimise Continuously.
        </h2>
        <p className="text-[#A3A3A3] text-[15px] leading-[1.8] font-light max-w-4xl mb-16">
          Every PPC campaign starts with understanding what you want your advertising to achieve.
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
          PPC works best when campaigns are managed as an ongoing process rather than a one-time setup.
        </div>
      </div>
    </section>
  );
}
