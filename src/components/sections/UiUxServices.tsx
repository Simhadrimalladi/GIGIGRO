import React from "react";
import { Users, GitMerge, Smartphone, CheckSquare, Layers, Zap } from "lucide-react";

export function UiUxServices() {
  const services = [
    {
      icon: <Users className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "User Research",
      features: ["Persona development: Creating detailed profiles of your target users.", "User interviews: Gathering qualitative data directly from your audience.", "Competitor benchmarking: Analyzing the usability of rival products."]
    },
    {
      icon: <GitMerge className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Information Architecture",
      features: ["Sitemaps: Structuring your content logically for easy navigation.", "User flows: Mapping the exact paths users take to complete tasks.", "Wireframing: Establishing the skeletal framework of your interfaces."]
    },
    {
      icon: <Smartphone className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "UI Design",
      features: ["High-fidelity mockups: Crafting pixel-perfect visual representations.", "Design systems: Building reusable component libraries for consistency.", "Micro-interactions: Designing subtle animations that delight users."]
    },
    {
      icon: <CheckSquare className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Usability Testing",
      features: ["Prototype testing: Validating concepts before writing a single line of code.", "A/B testing: Comparing different interface variations to maximize conversions.", "Accessibility audits: Ensuring your product is usable by everyone (WCAG compliance)."]
    },
    {
      icon: <Layers className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Product Design",
      features: ["SaaS platforms: Designing complex, data-heavy web applications.", "Mobile apps: Creating intuitive experiences for iOS and Android natively.", "Enterprise software: Modernizing legacy systems for better productivity."]
    },
    {
      icon: <Zap className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "UX Audit",
      features: ["Heuristic evaluation: Identifying friction points in existing products.", "Conversion analysis: Finding out exactly why users are dropping off.", "Actionable recommendations: Providing a clear roadmap for UX improvements."]
    },
  ];

  return (
    <section className="bg-[#050505] py-24 text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 mb-16">
        <h2 className="text-[42px] md:text-[52px] font-bold mb-6 tracking-tight text-white leading-tight">
          UI/UX Design Services
        </h2>
        <p className="text-[#A3A3A3] text-[15px] leading-[1.8] font-light max-w-none">
          In today&apos;s competitive digital landscape, effective UI/UX Design is essential for standing out and achieving your business objectives. Our award-winning team provides comprehensive solutions tailored to your unique needs, combining innovative strategies with proven execution to deliver measurable results that drive sustainable growth.
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
