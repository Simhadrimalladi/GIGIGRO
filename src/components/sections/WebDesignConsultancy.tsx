import React from "react";

export function WebDesignConsultancy() {
  return (
    <section className="bg-[#FFFFFF] text-[#000000] py-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-[32px] md:text-[42px] font-bold tracking-tight leading-[1.1] mb-6">
            Expert Web Design<br/>Consultancy:<br/>
            <span className="bg-[#38BDF8] px-2 py-1 inline-block mt-2">Guiding Your Digital Transformation</span>
          </h2>
          <p className="text-[#333333] text-[15px] leading-[1.6] font-light mb-6">
            Navigating the complex landscape of digital transformation can be challenging. Our UK Web Design agency offers comprehensive consultancy services to guide your business through every stage of its digital journey.
          </p>
          <p className="text-[#333333] text-[15px] leading-[1.6] font-light mb-8">
            From conducting in-depth audits of your current digital presence to developing robust strategies for future growth, our consultants provide actionable insights that align with your business objectives.
          </p>
          <a href="#" className="text-[14px] font-bold uppercase tracking-wider text-[#000000] border-b-2 border-[#000000] pb-1 hover:text-[#555] hover:border-[#555] transition-colors">Let&apos;s talk</a>
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="text-[28px] font-bold mb-8">What We Can Cover</h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-[15px] text-[#333333]"><span className="text-[#38BDF8]">✓</span> Comprehensive Digital Audits</li>
            <li className="flex items-center gap-3 text-[15px] font-bold text-[#38BDF8]"><span className="text-[#38BDF8]">✓</span> Strategic Planning & Roadmapping</li>
            <li className="flex items-center gap-3 text-[15px] text-[#333333]"><span className="text-[#38BDF8]">✓</span> Technology Stack Selection</li>
            <li className="flex items-center gap-3 text-[15px] text-[#333333]"><span className="text-[#38BDF8]">✓</span> User Experience Optimization</li>
            <li className="flex items-center gap-3 text-[15px] text-[#333333]"><span className="text-[#38BDF8]">✓</span> SEO & Performance Analysis</li>
            <li className="flex items-center gap-3 text-[15px] text-[#333333]"><span className="text-[#38BDF8]">✓</span> Conversion Rate Optimization</li>
            <li className="flex items-center gap-3 text-[15px] text-[#333333]"><span className="text-[#38BDF8]">✓</span> Digital Transformation Strategy</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
