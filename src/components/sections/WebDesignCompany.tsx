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
        
        {/* Left Column: Content */}
        <div className="flex flex-col">
          <h2 className="text-[32px] md:text-[46px] font-bold tracking-tight leading-[1.1] mb-8">
            The Innovative UK-Based<br className="hidden md:block" />
            Web Design Company
          </h2>
          <p className="text-[#333333] text-[15px] md:text-[16px] leading-[1.6] font-light mb-8">
            Bird sets itself apart from other Web Design Agencies UK by offering a truly customer-centric experience.
          </p>

          <ul className="space-y-6 mb-10">
            <li className="flex items-start gap-4">
              <span className="text-[#000000] mt-1 shrink-0 text-[10px]">■</span>
              <div className="text-[#333333] text-[14px] leading-[1.7] font-light">
                <span className="font-bold text-[#000000]">Award-winning web design services:</span> Our accolades are a testament to our commitment to excellence and innovation.
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-[#000000] mt-1 shrink-0 text-[10px]">■</span>
              <div className="text-[#333333] text-[14px] leading-[1.7] font-light">
                <span className="font-bold text-[#000000]">UK-based team:</span> Our experienced and dedicated team is entirely UK-based, ensuring seamless communication and a strong understanding of the local market.
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-[#000000] mt-1 shrink-0 text-[10px]">■</span>
              <div className="text-[#333333] text-[14px] leading-[1.7] font-light">
                <span className="font-bold text-[#000000]">Efficiency-driven processes:</span> We utilise robust systems and processes that streamline project management and maximise productivity.
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-[#000000] mt-1 shrink-0 text-[10px]">■</span>
              <div className="text-[#333333] text-[14px] leading-[1.7] font-light">
                <span className="font-bold text-[#000000]">Partnership-Driven Process:</span> Fostering strong client relationships, we involve you in every stage of the project, ensuring alignment with your vision and seamless communication for outstanding results.
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-[#000000] mt-1 shrink-0 text-[10px]">■</span>
              <div className="text-[#333333] text-[14px] leading-[1.7] font-light">
                <span className="font-bold text-[#000000]">All-Encompassing Solutions:</span> Our extensive service offering covers web design, development, SEO, content creation, and maintenance, streamlining the process and addressing all your digital needs in one place.
              </div>
            </li>
          </ul>

          <p className="text-[#333333] text-[15px] md:text-[16px] leading-[1.6] font-light">
            If you&apos;re looking for the best web design agency, you can feel confident choosing Bird that you are partnering with a web design company that delivers exceptional results, time and time again.
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
