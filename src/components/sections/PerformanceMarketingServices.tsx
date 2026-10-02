import React from "react";
import { TrendingUp, Target, RefreshCw, BarChart, Zap, Award } from "lucide-react";

export function PerformanceMarketingServices() {
  const services = [
    {
      icon: <TrendingUp className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Paid Search & Shopping Scaling",
      features: [
        "High-intent keyword capture: Dominating Google & Bing search SERPs with high-converting ads.",
        "Shopping Feed Optimization: Maximizing ROAS with automated product feed management.",
        "Smart Bidding Strategies: Leveraging AI & machine learning to optimize bids for max ROI."
      ]
    },
    {
      icon: <Target className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Paid Social Growth (Meta & TikTok)",
      features: [
        "Full-funnel audience targeting: Engaging cold prospects and turning them into loyal buyers.",
        "High-converting ad creative: Producing UGC, short-form video, and high-impact visual assets.",
        "Scaling profitably: Expanding budget safely while maintaining low Cost Per Acquisition (CPA)."
      ]
    },
    {
      icon: <RefreshCw className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Funnel & Conversion Rate Optimization",
      features: [
        "Landing page engineering: Crafting lightning-fast, high-converting custom landing pages.",
        "A/B & Multivariate testing: Continuous testing of headlines, offers, and checkout flows.",
        "Friction reduction: Streamlining user paths to dramatically increase checkout completion."
      ]
    },
    {
      icon: <BarChart className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Multi-Touch Attribution & Analytics",
      features: [
        "Server-side tracking (CAPI): Bypassing ad blockers and iOS restrictions for true data accuracy.",
        "Custom dashboard reporting: Real-time visibility into customer acquisition cost (CAC) & LTV.",
        "Cross-channel insights: Understanding exact customer touchpoints across the entire buyer journey."
      ]
    },
    {
      icon: <Zap className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Dynamic Retargeting & LTV Boost",
      features: [
        "Omnichannel retargeting: Re-engaging warm visitors across web, social, and video platforms.",
        "Cart abandonment recovery: Hyper-personalized messaging to convert lost visitors into sales.",
        "Customer lifetime value enhancement: Repeat purchase workflows and post-purchase upsells."
      ]
    },
    {
      icon: <Award className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Programmatic & Native Advertising",
      features: [
        "Premium Publisher Placements: Displaying your brand across top-tier global media networks.",
        "Native Content Syndication: Driving high-intent traffic with non-disruptive native ad formats.",
        "Real-Time Bidding (RTB): Precision targeting based on contextual and behavioral user signals."
      ]
    },
  ];

  return (
    <section className="bg-[#050505] py-24 text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 mb-16">
        <h2 className="text-[42px] md:text-[52px] font-bold mb-6 tracking-tight text-white leading-tight">
          Performance Marketing Services
        </h2>
        <p className="text-[#A3A3A3] text-[15px] leading-[1.8] font-light max-w-none">
          Drive predictable, profitable revenue growth with data-backed Performance Marketing. Our team combines multi-channel paid acquisition, conversion rate optimization, and advanced analytics to ensure every marketing dollar spent directly translates into measurable business growth.
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
