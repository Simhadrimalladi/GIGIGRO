import React from "react";
import { Target, PenTool, MessageSquare, BookOpen, Package, Globe } from "lucide-react";

export function BrandingServices() {
  const services = [
    {
      icon: <Target className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Brand Strategy",
      features: ["Core identity: Defining your mission, vision, and core values.", "Market positioning: Finding your unique space in a crowded marketplace.", "Brand archetypes: Establishing a relatable persona for your business."]
    },
    {
      icon: <PenTool className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Visual Identity",
      features: ["Logo design: Creating memorable, timeless marks that represent your essence.", "Color psychology: Selecting palettes that evoke the right emotional response.", "Typography selection: Choosing fonts that perfectly balance legibility and personality."]
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Verbal Identity",
      features: ["Tone of voice: Developing guidelines for how your brand speaks and writes.", "Taglines & Slogans: Crafting concise, powerful statements that stick.", "Naming: Generating unique, protectable names for new products or companies."]
    },
    {
      icon: <BookOpen className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Brand Guidelines",
      features: ["Comprehensive rules: Documenting exactly how to use your brand assets.", "Asset libraries: Organizing files for easy access by your internal teams.", "Consistency frameworks: Ensuring your brand looks the same across all mediums."]
    },
    {
      icon: <Package className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Packaging Design",
      features: ["Shelf impact: Designing physical packaging that stands out in retail environments.", "Unboxing experience: Creating memorable moments for e-commerce customers.", "Sustainable materials: Advising on eco-friendly packaging solutions."]
    },
    {
      icon: <Globe className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Brand Rollout",
      features: ["Internal launch: Educating your team on the new brand identity.", "External campaigns: Coordinating the public reveal of your new look.", "Touchpoint auditing: Ensuring every customer interaction reflects the new brand."]
    },
  ];

  return (
    <section className="bg-[#050505] py-24 text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 mb-16">
        <h2 className="text-[42px] md:text-[52px] font-bold mb-6 tracking-tight text-white leading-tight">
          Branding Services
        </h2>
        <p className="text-[#A3A3A3] text-[15px] leading-[1.8] font-light max-w-none">
          In today's competitive digital landscape, effective Branding is essential for standing out and achieving your business objectives. Our award-winning team provides comprehensive solutions tailored to your unique needs, combining innovative strategies with proven execution to deliver measurable results that drive sustainable growth.
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
