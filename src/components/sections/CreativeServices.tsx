import React from "react";
import { Lightbulb, Camera, Mic, Aperture, Music, Sparkles } from "lucide-react";

export function CreativeServices() {
  const services = [
    {
      icon: <Lightbulb className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Campaign Ideation",
      features: ["Concept development: Generating big, bold ideas that disrupt the market.", "Brainstorming workshops: Collaborating with your team to unlock new angles.", "Pitch decks: Visualizing concepts clearly for stakeholder buy-in."]
    },
    {
      icon: <Camera className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Video Production",
      features: ["Commercials: Shooting high-end video content for TV and digital distribution.", "Brand films: Telling the authentic story behind your company and its people.", "Post-production: Expert editing, color grading, and sound design."]
    },
    {
      icon: <Mic className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Copywriting",
      features: ["Brand storytelling: Crafting compelling narratives that connect emotionally.", "Ad copy: Writing punchy, persuasive text that drives immediate action.", "Scriptwriting: Developing engaging scripts for video and audio campaigns."]
    },
    {
      icon: <Aperture className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Photography",
      features: ["Product photography: Capturing your offerings in the best possible light.", "Lifestyle shoots: Creating authentic imagery of your products in use.", "Corporate headshots: Professional portraits of your leadership team."]
    },
    {
      icon: <Music className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Audio Production",
      features: ["Podcast production: Recording, editing, and distributing branded audio content.", "Sonic branding: Creating unique audio logos and brand soundscapes.", "Voiceover recording: Sourcing and recording top-tier voice talent."]
    },
    {
      icon: <Sparkles className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Experiential",
      features: ["Event design: Creating immersive physical environments for your brand.", "AR/VR experiences: Building cutting-edge interactive digital realities.", "Guerilla marketing: Executing unconventional, high-impact public stunts."]
    },
  ];

  return (
    <section className="bg-[#050505] py-24 text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 mb-16">
        <h2 className="text-[42px] md:text-[52px] font-bold mb-6 tracking-tight text-white leading-tight">
          Creative Services
        </h2>
        <p className="text-[#A3A3A3] text-[15px] leading-[1.8] font-light max-w-none">
          In today&apos;s competitive digital landscape, effective Creative is essential for standing out and achieving your business objectives. Our award-winning team provides comprehensive solutions tailored to your unique needs, combining innovative strategies with proven execution to deliver measurable results that drive sustainable growth.
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
