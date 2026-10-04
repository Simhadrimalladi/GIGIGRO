import React from "react";
import { MousePointerClick, MonitorPlay, ShoppingBag, RefreshCcw, Target, PieChart } from "lucide-react";

export function PpcServices() {
  const services = [
    {
      icon: <MousePointerClick className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Google Search Ads",
      features: ["Reach people searching for products or services related to your business with targeted search campaigns built around relevant search intent."]
    },
    {
      icon: <Target className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Keyword Research & Targeting",
      features: ["Identify valuable search terms while filtering out irrelevant traffic so your budget is focused on searches that matter to your business."]
    },
    {
      icon: <MonitorPlay className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Ad Creation & Testing",
      features: ["Create clear and relevant ad messaging and test different variations to understand which messages connect better with your audience."]
    },
    {
      icon: <RefreshCcw className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "PPC Campaign Management",
      features: ["Manage campaign structure, budgets, bids, keywords and targeting while monitoring performance and making regular improvements."]
    },
    {
      icon: <ShoppingBag className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Google Shopping Ads",
      features: ["Promote products directly within shopping-focused search experiences with campaigns structured around your product catalogue and business objectives."]
    },
    {
      icon: <PieChart className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Conversion Tracking",
      features: ["Track meaningful actions such as enquiries, calls, forms, purchases or registrations so campaign performance can be evaluated beyond clicks."]
    },
  ];

  return (
    <section className="bg-[#050505] py-24 text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 mb-16">
        <p className="text-[#38BDF8] text-[13px] font-mono tracking-widest uppercase mb-3">
          WHAT WE DO
        </p>
        <h2 className="text-[42px] md:text-[52px] font-bold mb-6 tracking-tight text-white leading-tight">
          PPC Campaigns Built Around Your Goals
        </h2>
        <p className="text-[#A3A3A3] text-[15px] leading-[1.8] font-light max-w-none">
          A successful PPC campaign needs more than advertisements. It needs the right keywords, audience, messaging, landing experience, tracking and ongoing optimisation.
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#333333]">
          {services.map((svc, index) => (
            <div key={index} className="py-16 px-10 border-b border-r border-[#333333] flex flex-col items-start hover:bg-[#0a0a0a] transition-colors">
              <div className="mb-8">{svc.icon}</div>
              <h3 className="text-[28px] font-bold mb-8 text-white tracking-tight">{svc.title}</h3>
              <ul className="space-y-6">
                {svc.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="text-[#38BDF8] mt-1 shrink-0">✓</span>
                    <div className="text-[#A3A3A3] text-[14px] leading-[1.7] font-light">
                      {feature}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
