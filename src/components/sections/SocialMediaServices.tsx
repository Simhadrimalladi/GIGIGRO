import React from "react";
import { Share2, PenTool, Users, TrendingUp, Megaphone, Activity } from "lucide-react";

export function SocialMediaServices() {
  const services = [
    {
      icon: <Share2 className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Social Strategy",
      features: ["Audience profiling: Identifying exactly where your target demographic spends time.", "Platform selection: Focusing efforts on the most impactful networks for your brand.", "Content calendars: Planning cohesive messaging months in advance."]
    },
    {
      icon: <PenTool className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Content Creation",
      features: ["Engaging copywriting: Crafting posts that spark conversation and sharing.", "Bespoke graphics: Designing thumb-stopping visual assets for your feeds.", "Video production: Creating short-form reels and TikToks that capture attention."]
    },
    {
      icon: <Users className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Community Management",
      features: ["Active monitoring: Responding to comments and messages in real-time.", "Brand voice: Maintaining a consistent, authentic tone across all interactions.", "Crisis management: Handling negative sentiment swiftly and professionally."]
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Paid Social Ads",
      features: ["Micro-targeting: Reaching hyper-specific audiences on Facebook, Instagram, and LinkedIn.", "Retargeting funnels: Nurturing warm leads until they are ready to convert.", "A/B testing: Constantly refining creatives and audiences for lower CPA."]
    },
    {
      icon: <Megaphone className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Influencer Outreach",
      features: ["Partner identification: Finding authentic voices that align with your brand values.", "Campaign management: Coordinating deliverables and tracking performance.", "Affiliate setups: Creating measurable ROI models for influencer partnerships."]
    },
    {
      icon: <Activity className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Social Listening",
      features: ["Brand monitoring: Tracking mentions of your company across the web.", "Competitor tracking: Analyzing rival strategies to capitalize on their weaknesses.", "Trend spotting: Jumping on relevant viral moments to boost brand visibility."]
    },
  ];

  return (
    <section className="bg-[#050505] py-24 text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 mb-16">
        <h2 className="text-[42px] md:text-[52px] font-bold mb-6 tracking-tight text-white leading-tight">
          Social Media Services
        </h2>
        <p className="text-[#A3A3A3] text-[15px] leading-[1.8] font-light max-w-none">
          In today&apos;s competitive digital landscape, effective Social Media is essential for standing out and achieving your business objectives. Our award-winning team provides comprehensive solutions tailored to your unique needs, combining innovative strategies with proven execution to deliver measurable results that drive sustainable growth.
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
