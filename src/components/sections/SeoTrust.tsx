import React from "react";
import Image from "next/image";
import { PARTNER_LOGOS } from "@/lib/data";

export function SeoTrust() {
  const awards = [
    { id: "clutch", text: "Our teams relentless pursuit of excellence resulted in us winning the prestigious Clutch Top Digital Agency Award." },
    { id: "goodfirms", text: "By consistently delivering innovative solutions and driving client success, we were thrilled to earn the Good Firms Top Digital Agencies Award." },
    { id: "manifest", text: "Our commitment to exceptional service and customer satisfaction led to our company being recognised with the Manifest Top Digital Agencies Award." },
    { id: "designrush", text: "Our expertise in crafting effective B2B marketing strategies earned us the coveted Design Rush Best B2B Digital Marketing Agency Award." },
    { id: "topinteractive", text: "Our teams creativity and outstanding interactive solutions were recognised with a prestigious award from the Top Interactive Agencies, solidifying our position as industry leaders." }
  ];

  const getLogo = (id: string) => PARTNER_LOGOS.find(logo => logo.id === id);

  return (
    <section className="bg-[#FFFFFF] py-24 text-[#000000]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        <div className="flex flex-col">
          <span className="text-[13px] font-bold text-[#38BDF8] tracking-widest uppercase block mb-3">
            WHY DIJIGRO
          </span>
          <h2 className="text-[32px] md:text-[44px] font-bold tracking-tight leading-[1.1] mb-6 text-[#000000]">
            Search Strategy With a Business Perspective
          </h2>
          <p className="text-[#333333] text-[15px] leading-[1.6] font-light mb-8">
            SEO should not become a never-ending list of technical tasks. It should support what your business actually wants to achieve. Our approach connects search visibility with your wider digital presence so that your website is built to attract the right audience and give them useful information when they arrive.
          </p>
          <ol className="space-y-6 mb-10 list-decimal pl-5 marker:font-bold">
            <li className="text-[#333333] text-[14px] leading-[1.7] font-light pl-2">
              <span className="font-bold text-[#000000]">PEOPLE-FIRST CONTENT:</span> We create and optimise content for people first, while making it easier for search systems to understand.
            </li>
            <li className="text-[#333333] text-[14px] leading-[1.7] font-light pl-2">
              <span className="font-bold text-[#000000]">TECHNICAL + CONTENT:</span> Strong visibility depends on both a sound technical foundation and genuinely useful information.
            </li>
            <li className="text-[#333333] text-[14px] leading-[1.7] font-light pl-2">
              <span className="font-bold text-[#000000]">SEARCH + AI:</span> We consider traditional search together with emerging AI-powered discovery experiences.
            </li>
            <li className="text-[#333333] text-[14px] leading-[1.7] font-light pl-2">
              <span className="font-bold text-[#000000]">CLEAR REPORTING:</span> We focus on understandable reporting so you can see what is being worked on and how the website is progressing.
            </li>
            <li className="text-[#333333] text-[14px] leading-[1.7] font-light pl-2">
              <span className="font-bold text-[#000000]">LONG-TERM THINKING:</span> We aim to build sustainable search visibility rather than rely on shortcuts that may not last.
            </li>
          </ol>
        </div>
        <div className="flex flex-col justify-center gap-10">
          {awards.map((award, idx) => {
            const logo = getLogo(award.id);
            if (!logo) return null;
            return (
              <div key={idx} className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="w-[100px] sm:w-[120px] shrink-0">
                  <Image src={logo.src} alt={logo.alt} width={logo.width} height={80} className="w-full h-auto object-contain" />
                </div>
                <p className="text-[#333333] text-[14px] leading-[1.6] font-light max-w-[400px]">{award.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
