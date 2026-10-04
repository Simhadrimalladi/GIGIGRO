import React from "react";
import Image from "next/image";
import { PARTNER_LOGOS } from "@/lib/data";

export function PerformanceMarketingTrust() {
  const awards = [
    { id: "clutch", text: "Our performance marketing team's commitment to high ROAS earned us top ranking on Clutch for Performance Marketing Agencies." },
    { id: "goodfirms", text: "Recognized by GoodFirms for excellence in scalable paid media management and customer acquisition strategy." },
    { id: "manifest", text: "Honored with the Manifest Top Agency award for consistent campaign profitability and client revenue scaling." },
    { id: "designrush", text: "Awarded Best ROI-Focused Growth Agency by DesignRush for high-converting social & search ad performance." },
    { id: "topinteractive", text: "Celebrated by Top Interactive Agencies for pioneering multi-touch attribution and dynamic ad creative strategies." }
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
            Performance Marketing With the Bigger Picture in Mind
          </h2>
          <p className="text-[#333333] text-[15px] leading-[1.6] font-light mb-8">
            Paid advertising does not operate in isolation. A strong campaign also depends on the quality of the message, landing page, website experience, offer and follow-up process. At DIJIGRO, we look at these connected elements so that your advertising has the right environment to perform.
          </p>
          <ol className="space-y-6 mb-10 list-decimal pl-5 marker:font-bold">
            <li className="text-[#333333] text-[14px] leading-[1.7] font-light pl-2">
              <span className="font-bold text-[#000000]">BUSINESS-FOCUSED:</span> Campaigns are planned around your actual business objectives rather than vanity metrics alone.
            </li>
            <li className="text-[#333333] text-[14px] leading-[1.7] font-light pl-2">
              <span className="font-bold text-[#000000]">DATA-LED:</span> We use campaign and conversion data to guide optimisation decisions.
            </li>
            <li className="text-[#333333] text-[14px] leading-[1.7] font-light pl-2">
              <span className="font-bold text-[#000000]">CREATIVE + PERFORMANCE:</span> Strong performance requires both compelling creative and effective targeting.
            </li>
            <li className="text-[#333333] text-[14px] leading-[1.7] font-light pl-2">
              <span className="font-bold text-[#000000]">TRANSPARENT:</span> We keep reporting understandable so you can see where your budget is going and what the campaign is achieving.
            </li>
            <li className="text-[#333333] text-[14px] leading-[1.7] font-light pl-2">
              <span className="font-bold text-[#000000]">CONNECTED DIGITAL STRATEGY:</span> Where relevant, paid campaigns can work alongside SEO, web development, content and other digital activities.
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
