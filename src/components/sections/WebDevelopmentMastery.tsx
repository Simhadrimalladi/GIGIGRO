import React from "react";

export function WebDevelopmentMastery() {
  return (
    <section className="bg-[#FFFFFF] py-24 md:py-32 flex flex-col items-center justify-center text-center px-6">
      <div className="max-w-[900px] mx-auto">
        <p className="text-[#000000] text-[13px] font-mono tracking-widest uppercase mb-3 font-semibold">
          THE RIGHT TECHNOLOGY
        </p>
        <h2 className="text-[32px] md:text-[52px] font-bold text-[#000000] tracking-tight leading-[1.2] mb-8">
          We Choose Technology Based on <span className="bg-[#38BDF8] px-2 py-1 leading-[1.4] box-decoration-clone">What You Need</span>
        </h2>
        <p className="text-[#333333] text-[15px] md:text-[16px] leading-[1.8] font-light max-w-[800px] mx-auto mb-6">
          There is no single technology that is right for every website. The technology and development approach should depend on factors such as the type of website, required functionality, expected traffic, integrations, content management needs and future plans.
        </p>
        <p className="text-[#333333] text-[15px] md:text-[16px] leading-[1.8] font-light max-w-[800px] mx-auto">
          For some businesses, a content management system may be the most practical choice. Other projects may require a more customised development approach. We focus on choosing technology that solves the problem—not technology simply because it is new.
        </p>
      </div>
    </section>
  );
}
