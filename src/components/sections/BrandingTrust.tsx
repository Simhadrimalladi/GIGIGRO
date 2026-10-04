import React from "react";
import Image from "next/image";
import { PARTNER_LOGOS } from "@/lib/data";

export function BrandingTrust() {
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
          <h2 className="text-[32px] md:text-[46px] font-bold tracking-tight leading-[1.1] mb-8">
            Building Trust and Credibility<br/>
            in Branding: Our Awards<br/>
            and Esteemed Clients
          </h2>
          <p className="text-[#333333] text-[15px] leading-[1.6] font-light mb-8">
            At DIJIGRO, we understand the significance of a powerful brand. Our dedication to delivering outstanding branding services has earned us numerous accolades and an impressive portfolio of iconic identities.
          </p>
          <ol className="space-y-6 mb-10 list-decimal pl-5 marker:font-bold">
            <li className="text-[#333333] text-[14px] leading-[1.7] font-light pl-2">
              <span className="font-bold text-[#000000]">Strategic Foundation:</span> We don&apos;t just design pretty logos; we build comprehensive brand systems rooted in deep market research and consumer psychology.
            </li>
            <li className="text-[#333333] text-[14px] leading-[1.7] font-light pl-2">
              <span className="font-bold text-[#000000]">Timeless Design:</span> We avoid fleeting trends, focusing instead on creating enduring visual identities that will serve your business for decades.
            </li>
            <li className="text-[#333333] text-[14px] leading-[1.7] font-light pl-2">
              <span className="font-bold text-[#000000]">Holistic Consistency:</span> We ensure your brand tells a cohesive story across every possible touchpoint, from your website to your packaging.
            </li>
            <li className="text-[#333333] text-[14px] leading-[1.7] font-light pl-2">
              <span className="font-bold text-[#000000]">Collaborative Process:</span> We work closely with your leadership team, ensuring the final brand truly reflects the soul of your organization.
            </li>
            <li className="text-[#333333] text-[14px] leading-[1.7] font-light pl-2">
              <span className="font-bold text-[#000000]">Transformative Impact:</span> Our rebranding efforts have consistently helped businesses command higher pricing, attract better talent, and dominate their categories.
            </li>
          </ol>
          <p className="text-[#333333] text-[15px] leading-[1.6] font-light">
            Choose DIJIGRO as your trusted partner and join the ranks of successful businesses that have experienced the transformative power of our award-winning Branding services.
          </p>
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
