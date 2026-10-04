import React from "react";
import { Share2, PenTool, Users, TrendingUp, Megaphone, Activity } from "lucide-react";

export function SocialMediaServices() {
  const services = [
    {
      icon: <Share2 className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Social Media Strategy",
      features: ["We create a practical social media direction based on your business goals, audience, brand voice and the platforms that make sense for you."]
    },
    {
      icon: <PenTool className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Content Planning",
      features: ["We develop content calendars that give your social presence structure while leaving room for timely ideas, campaigns and relevant conversations."]
    },
    {
      icon: <Megaphone className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Content Creation",
      features: ["From post copy and creative concepts to graphics, short-form video and other social content, we create material designed for each platform and audience."]
    },
    {
      icon: <Activity className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Social Media Management",
      features: ["We help manage your social channels with consistent publishing, content coordination and regular attention to your brand presence."]
    },
    {
      icon: <Users className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Community Engagement",
      features: ["We help your brand stay connected with its audience by monitoring comments, messages and interactions and responding in a suitable tone."]
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Paid Social Campaigns",
      features: ["Where paid promotion supports your goals, we can create targeted social campaigns and work with relevant audiences to extend the reach of your content and offers."]
    },
  ];

  return (
    <section className="bg-[#050505] py-24 text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 mb-16">
        <p className="text-[#38BDF8] text-[13px] font-mono tracking-widest uppercase mb-3">
          WHAT WE DO
        </p>
        <h2 className="text-[42px] md:text-[52px] font-bold mb-6 tracking-tight text-white leading-tight">
          Everything You Need for a Stronger Social Presence
        </h2>
        <p className="text-[#A3A3A3] text-[15px] leading-[1.8] font-light max-w-none">
          Your social media should feel consistent, purposeful and relevant to the people you want to reach.
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
