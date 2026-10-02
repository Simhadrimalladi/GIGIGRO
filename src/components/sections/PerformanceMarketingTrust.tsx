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
          <h2 className="text-[32px] md:text-[46px] font-bold tracking-tight leading-[1.1] mb-8">
            Why Leading Brands Trust<br/>
            Our Performance Marketing:<br/>
            Proven Results &amp; Recognition
          </h2>
          <p className="text-[#333333] text-[15px] leading-[1.6] font-light mb-8">
            We don&apos;t focus on vanity metrics like impressions or views. We measure our success strictly by your business growth, lower acquisition costs, and increased top-line revenue.
          </p>
          <ol className="space-y-6 mb-10 list-decimal pl-5 marker:font-bold">
            <li className="text-[#333333] text-[14px] leading-[1.7] font-light pl-2">
              <span className="font-bold text-[#000000]">ROAS-Driven Execution:</span> Every campaign is engineered with clear efficiency metrics to ensure high return on ad spend.
            </li>
            <li className="text-[#333333] text-[14px] leading-[1.7] font-light pl-2">
              <span className="font-bold text-[#000000]">Rapid Testing Cycles:</span> We deploy dynamic creative variations and landing page split tests every week to stay ahead of market shifts.
            </li>
            <li className="text-[#333333] text-[14px] leading-[1.7] font-light pl-2">
              <span className="font-bold text-[#000000]">Full Channel Integration:</span> Unifying Google, Meta, TikTok, and Programmatic under one cohesive strategy.
            </li>
            <li className="text-[#333333] text-[14px] leading-[1.7] font-light pl-2">
              <span className="font-bold text-[#000000]">First-Party Data Strategy:</span> Implementing CAPI and advanced tracking to ensure full data accuracy post-iOS updates.
            </li>
            <li className="text-[#333333] text-[14px] leading-[1.7] font-light pl-2">
              <span className="font-bold text-[#000000]">Transparent Reporting:</span> Access live dashboards showing exact CAC, LTV, revenue, and ad spend in real-time.
            </li>
          </ol>
          <p className="text-[#333333] text-[15px] leading-[1.6] font-light">
            Partner with Bird to scale your marketing budget into a predictable engine of high-converting customers.
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
