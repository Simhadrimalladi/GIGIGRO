import React from "react";
import { MousePointerClick, MonitorPlay, ShoppingBag, RefreshCcw, Target, PieChart } from "lucide-react";

export function PpcServices() {
  const services = [
    {
      icon: <MousePointerClick className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Search Network Ads",
      features: ["Intent-driven targeting: Capturing users actively searching for your services.", "Ad copy testing: Continuous A/B testing for maximum click-through rates.", "Bid management: Optimizing cost-per-click to maximize your budget."]
    },
    {
      icon: <MonitorPlay className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Display & Video Ads",
      features: ["Brand awareness: Reaching your audience across millions of websites.", "Engaging creative: Designing eye-catching banners and video content.", "Targeted placements: Showing ads only where your demographic visits."]
    },
    {
      icon: <ShoppingBag className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Google Shopping",
      features: ["Feed optimization: Structuring your product data for maximum visibility.", "ROAS focus: Bidding strategies tailored to maximize return on ad spend.", "Negative keyword management: Preventing wasted spend on irrelevant searches."]
    },
    {
      icon: <RefreshCcw className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Remarketing Campaigns",
      features: ["Audience segmentation: Targeting users based on their previous interactions.", "Cart abandonment: Bringing back users who left without purchasing.", "Tailored messaging: Serving dynamic ads based on viewed products."]
    },
    {
      icon: <Target className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Conversion Optimization",
      features: ["Landing page design: Creating high-converting destinations for your traffic.", "Funnel analysis: Identifying and fixing drop-off points in the user journey.", "Heatmap tracking: Understanding how paid visitors interact with your site."]
    },
    {
      icon: <PieChart className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Advanced Tracking",
      features: ["Offline conversion tracking: Connecting digital ads to in-store sales.", "Attribution modeling: Understanding the full journey of your customers.", "Automated rules: Using machine learning to optimize bids 24/7."]
    },
  ];

  return (
    <section className="bg-[#050505] py-24 text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 mb-16">
        <h2 className="text-[42px] md:text-[52px] font-bold mb-6 tracking-tight text-white leading-tight">
          PPC Services
        </h2>
        <p className="text-[#A3A3A3] text-[15px] leading-[1.8] font-light max-w-none">
          In today&apos;s competitive digital landscape, effective PPC is essential for standing out and achieving your business objectives. Our award-winning team provides comprehensive solutions tailored to your unique needs, combining innovative strategies with proven execution to deliver measurable results that drive sustainable growth.
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#333333]">
          {services.map((svc, index) => (
            <div key={index} className="py-16 px-10 border-b border-r border-[#333333] flex flex-col items-start hover:bg-[#0a0a0a] transition-colors">
              <div className="mb-8">{svc.icon}</div>
              <h3 className="text-[28px] font-bold mb-8 text-white tracking-tight">{svc.title}</h3>
              <ul className="space-y-6">
                {svc.features.map((feature, idx) => {
                  const [boldPart, restPart] = feature.split(': ');
                  return (
                    <li key={idx} className="flex items-start gap-4">
                      <span className="text-[#38BDF8] mt-1 shrink-0">✓</span>
                      <div className="text-[#A3A3A3] text-[14px] leading-[1.7] font-light">
                        {restPart ? (<><span className="text-[#E5E5E5] font-normal">{boldPart}:</span> {restPart}</>) : (feature)}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
