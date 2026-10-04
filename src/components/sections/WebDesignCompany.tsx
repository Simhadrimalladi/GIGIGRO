import React from "react";
import Image from "next/image";
import { PARTNER_LOGOS } from "@/lib/data";

export function WebDesignCompany() {
  const awards = [
    {
      id: "clutch",
      text: "Our teams relentless pursuit of excellence resulted in us winning the prestigious Clutch Top Digital Agency Award."
    },
    {
      id: "goodfirms",
      text: "By consistently delivering innovative solutions and driving client success, we were thrilled to earn the Good Firms Top Digital Agencies Award."
    },
    {
      id: "manifest",
      text: "Our commitment to exceptional service and customer satisfaction led to our company being recognised with the Manifest Top Digital Agencies Award."
    },
    {
      id: "designrush",
      text: "Our expertise in crafting effective B2B marketing strategies earned us the coveted Design Rush Best B2B Digital Marketing Agency Award."
    },
    {
      id: "topinteractive",
      text: "Our team's creativity and outstanding interactive solutions were recognised with a prestigious award from the Top Interactive Agencies, solidifying our position as industry leaders."
    }
  ];

  const getLogo = (id: string) => PARTNER_LOGOS.find(logo => logo.id === id);

  return (
    <section className="bg-[#FFFFFF] py-24 text-[#000000]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Left Column: Process */}
        <div className="flex flex-col">
          <span className="text-[13px] font-bold text-[#38BDF8] tracking-widest uppercase block mb-3">
            HOW WE WORK
          </span>
          <h2 className="text-[32px] md:text-[44px] font-bold tracking-tight leading-[1.1] mb-6 text-[#000000]">
            A Clear Process From First Conversation to Launch
          </h2>
          <p className="text-[#333333] text-[15px] md:text-[16px] leading-[1.6] font-light mb-8">
            We keep the web design process structured and collaborative, so you know what is happening at every stage.
          </p>

          <ul className="space-y-6 mb-10">
            <li className="flex items-start gap-4">
              <span className="text-[#38BDF8] font-bold shrink-0 text-[14px]">01</span>
              <div className="text-[#333333] text-[14px] leading-[1.7] font-light">
                <span className="font-bold text-[#000000]">DISCOVER:</span> We learn about your business, audience, competitors, existing website and goals.
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-[#38BDF8] font-bold shrink-0 text-[14px]">02</span>
              <div className="text-[#333333] text-[14px] leading-[1.7] font-light">
                <span className="font-bold text-[#000000]">PLAN:</span> We organise the content, page structure and user journey before moving into visual design.
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-[#38BDF8] font-bold shrink-0 text-[14px]">03</span>
              <div className="text-[#333333] text-[14px] leading-[1.7] font-light">
                <span className="font-bold text-[#000000]">DESIGN:</span> We create the visual direction and page layouts around your brand and customer experience.
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-[#38BDF8] font-bold shrink-0 text-[14px]">04</span>
              <div className="text-[#333333] text-[14px] leading-[1.7] font-light">
                <span className="font-bold text-[#000000]">REFINE:</span> You review the designs, provide feedback and we make the necessary improvements.
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-[#38BDF8] font-bold shrink-0 text-[14px]">05</span>
              <div className="text-[#333333] text-[14px] leading-[1.7] font-light">
                <span className="font-bold text-[#000000]">LAUNCH:</span> Once everything is ready, the approved design moves into development and prepares for launch.
              </div>
            </li>
          </ul>

          <p className="text-[#000000] text-[15px] font-semibold leading-[1.6] p-4 bg-[#F5F5F5] border-l-4 border-[#38BDF8]">
            A well-planned process creates a better website—and makes the journey easier for everyone involved.
          </p>
        </div>

        {/* Right Column: Awards */}
        <div className="flex flex-col justify-center gap-10">
          {awards.map((award, idx) => {
            const logo = getLogo(award.id);
            if (!logo) return null;
            return (
              <div key={idx} className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="w-[100px] sm:w-[120px] shrink-0">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={80}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <p className="text-[#333333] text-[14px] leading-[1.6] font-light max-w-[400px]">
                  {award.text}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
