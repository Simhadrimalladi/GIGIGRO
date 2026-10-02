import React from "react";
import { Layout, Printer, Image as ImageIcon, Video, BookOpen, Box } from "lucide-react";

export function DesignServices() {
  const services = [
    {
      icon: <Layout className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Digital Design",
      features: ["Website graphics: Creating stunning visual assets for your online presence.", "Social media kits: Designing cohesive templates for all your social channels.", "Email templates: Crafting beautiful, high-converting newsletter layouts."]
    },
    {
      icon: <Printer className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Print Design",
      features: ["Brochures & Flyers: Designing tactile marketing materials that leave an impression.", "Business stationery: Crafting premium business cards, letterheads, and envelopes.", "Large format: Creating impactful billboards, exhibition stands, and signage."]
    },
    {
      icon: <ImageIcon className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Illustration",
      features: ["Custom iconography: Designing unique icon sets tailored to your brand.", "Editorial illustration: Creating bespoke artwork for articles and blogs.", "Infographics: Turning complex data into easily digestible, shareable graphics."]
    },
    {
      icon: <Video className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Motion Graphics",
      features: ["Explainer videos: Animating complex concepts to educate your audience quickly.", "Logo animations: Bringing your brand mark to life for digital mediums.", "Lottie animations: Creating lightweight, interactive animations for the web."]
    },
    {
      icon: <BookOpen className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Publication Design",
      features: ["Annual reports: Designing engaging, professional corporate documents.", "Magazines & Books: Crafting beautiful layouts for multi-page publications.", "E-books: Creating compelling digital downloads for lead generation."]
    },
    {
      icon: <Box className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "3D Design",
      features: ["Product rendering: Creating photorealistic 3D models of your physical products.", "Architectural visualization: Bringing unbuilt spaces to life visually.", "Interactive 3D: Designing WebGL experiences for modern web browsers."]
    },
  ];

  return (
    <section className="bg-[#050505] py-24 text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 mb-16">
        <h2 className="text-[42px] md:text-[52px] font-bold mb-6 tracking-tight text-white leading-tight">
          Design Services
        </h2>
        <p className="text-[#A3A3A3] text-[15px] leading-[1.8] font-light max-w-none">
          In today&apos;s competitive digital landscape, effective Design is essential for standing out and achieving your business objectives. Our award-winning team provides comprehensive solutions tailored to your unique needs, combining innovative strategies with proven execution to deliver measurable results that drive sustainable growth.
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
