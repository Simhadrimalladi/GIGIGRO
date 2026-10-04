import React from "react";
import { TrendingUp, Target, RefreshCw, BarChart, Zap, Award } from "lucide-react";

export function PerformanceMarketingServices() {
  const services = [
    {
      icon: <TrendingUp className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Paid Search",
      features: ["Reach people actively searching for products or services related to your business through targeted search advertising."]
    },
    {
      icon: <Target className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Paid Social",
      features: ["Run targeted advertising campaigns across relevant social platforms to reach potential customers based on audience, interests, behaviour and other available signals."]
    },
    {
      icon: <Zap className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Lead Generation",
      features: ["Build campaigns around meaningful actions such as enquiries, calls, registrations, bookings or other business-defined goals."]
    },
    {
      icon: <Award className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Ecommerce Advertising",
      features: ["Promote products to relevant audiences and create campaigns designed around product discovery, consideration and purchase."]
    },
    {
      icon: <RefreshCw className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Remarketing",
      features: ["Reconnect with people who have already interacted with your website, products or campaigns and guide them towards the next step."]
    },
    {
      icon: <BarChart className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Landing Page Optimisation",
      features: ["Improve the pages people reach after clicking an advertisement so that the experience is relevant, clear and focused on the intended action."]
    },
  ];

  return (
    <section className="bg-[#050505] py-24 text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 mb-16">
        <p className="text-[#38BDF8] text-[13px] font-mono tracking-widest uppercase mb-3">
          PERFORMANCE MARKETING SERVICES
        </p>
        <h2 className="text-[42px] md:text-[52px] font-bold mb-6 tracking-tight text-white leading-tight">
          From Clicks to Meaningful Actions
        </h2>
        <p className="text-[#A3A3A3] text-[15px] leading-[1.8] font-light max-w-none">
          Performance marketing is not simply about buying more traffic. It is about understanding which activities contribute to your business goals and improving them over time.
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
