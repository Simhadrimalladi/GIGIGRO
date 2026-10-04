import React from "react";

export function Clients() {
  return (
    <section className="relative bg-[#FAFAFA] text-[#000000] py-20 md:py-28 overflow-hidden border-t border-b border-[#E5E5E5]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        
        <div className="max-w-4xl mb-16">
          <h2 className="text-[32px] md:text-[48px] font-bold tracking-tight leading-[1.1] mb-6 text-[#000000]">
            A Digital Partner Focused on Your Business Goals
          </h2>
          <p className="text-[#444444] text-[16px] leading-[1.8] font-light max-w-3xl">
            From your first website to your next stage of growth, DIJIGRO helps you make smarter digital decisions. We combine strategy, creativity, technology and marketing to create solutions that are practical, clear and built around your business.
          </p>
        </div>

        {/* Three Supporting Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-[#E0E0E0] pt-12">
          <div className="flex flex-col">
            <h3 className="text-[18px] font-bold text-[#000000] tracking-wider uppercase mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
              STRATEGY FIRST
            </h3>
            <p className="text-[#555555] text-[14px] leading-[1.7] font-light">
              We start with your goals, audience and market before recommending a digital solution.
            </p>
          </div>

          <div className="flex flex-col">
            <h3 className="text-[18px] font-bold text-[#000000] tracking-wider uppercase mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
              BUILT AROUND USERS
            </h3>
            <p className="text-[#555555] text-[14px] leading-[1.7] font-light">
              We create websites and campaigns that are easy to understand, easy to use and designed to encourage action.
            </p>
          </div>

          <div className="flex flex-col">
            <h3 className="text-[18px] font-bold text-[#000000] tracking-wider uppercase mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
              FOCUSED ON GROWTH
            </h3>
            <p className="text-[#555555] text-[14px] leading-[1.7] font-light">
              We look beyond clicks and traffic to the signals that matter to your business, from enquiries and leads to customer engagement and sales.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
