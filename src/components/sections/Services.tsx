import React from "react";
import { Search, Monitor, Pencil, PenTool, Target, MessageSquare, Check, Wrench } from "lucide-react";
import { SERVICES } from "@/lib/data";

const ICON_MAP: Record<string, React.ReactNode> = {
  Search: <Search className="h-12 w-12 stroke-[1.5] text-white" />,
  Monitor: <Monitor className="h-12 w-12 stroke-[1.5] text-white" />,
  PenTool: <Pencil className="h-12 w-12 stroke-[1.5] text-white" />,
  Wrench: (
    <div className="relative h-12 w-12">
      <Wrench className="absolute top-0 left-0 h-10 w-10 stroke-[1.5] text-white" />
      <PenTool className="absolute bottom-0 right-0 h-10 w-10 stroke-[1.5] text-white rotate-90" />
    </div>
  ),
  Target: <Target className="h-12 w-12 stroke-[1.5] text-white" />,
  MessageSquare: (
    <div className="relative h-12 w-12">
      <MessageSquare className="absolute top-0 left-0 h-10 w-10 stroke-[1.5] text-white" />
      <MessageSquare className="absolute bottom-1 right-0 h-10 w-10 stroke-[1.5] text-white" />
    </div>
  ),
};

interface ServicesProps {
  onSelectService?: (serviceName: string) => void;
}

export function Services({ onSelectService }: ServicesProps) {
  return (
    <section id="services" className="bg-[#050505] py-24 text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 mb-16">
        <h2 className="text-[42px] md:text-[52px] font-bold mb-6 tracking-tight text-white leading-tight">
          Digital Marketing Services
        </h2>
        <p className="text-[#A3A3A3] text-[15px] leading-[1.8] max-w-none font-light">
          In the highly competitive online market, building a digital strategy is crucial to cultivating successful, revenue-driving brand engagements. Bird, a leading award-winning digital marketing agency in the UK, can harness the power of data-driven campaigns and multi-channel outreach to elevate your brand&apos;s presence across the web. Our team of savvy marketing professionals, adept in cutting-edge organic search, social media, and paid advertising, works diligently to refine your brand message, expand reach, and drive measurable growth. By leveraging targeted digital strategies, refining customer journeys, and executing creative campaigns, we empower your brand to rise above the digital noise.
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-[#333333]">
          {SERVICES.map((svc) => (
            <div
              key={svc.id}
              className="py-16 px-10 border-b border-r border-[#333333] flex flex-col items-start cursor-pointer group hover:bg-[#0a0a0a] transition-colors"
              onClick={() => onSelectService?.(svc.id)}
            >
              <div className="mb-8">
                {ICON_MAP[svc.icon]}
              </div>
              <h3 className="text-[28px] font-bold mb-8 text-white tracking-tight">
                {svc.title}
              </h3>
              <ul className="space-y-6">
                {svc.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <Check className="h-4 w-4 shrink-0 text-[#7DD3FC] mt-1 stroke-[3]" />
                    <div className="text-[#A3A3A3] text-[14px] leading-[1.7] font-light">
                      <span className="text-[#E5E5E5] font-normal">
                        {detail.title}:
                      </span>{" "}
                      {detail.desc}
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

