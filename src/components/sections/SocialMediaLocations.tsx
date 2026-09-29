import React from "react";

export function SocialMediaLocations() {
  return (
    <section className="bg-[#050505] py-24 text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <h2 className="text-[32px] md:text-[42px] font-bold tracking-tight leading-[1.1] mb-6 text-white">
          Social Media Office Locations
        </h2>
        <p className="text-[#A3A3A3] text-[15px] leading-[1.8] font-light max-w-4xl mb-16">
          Our Social Media services are delivered across multiple locations through a globally connected team. This approach ensures consistent standards, reliable communication, and effective delivery regardless of region.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-[#333333] pt-16">
          <div>
            <h3 className="text-[20px] font-bold text-white mb-4">Social Media London</h3>
            <p className="text-[#A3A3A3] text-[14px] leading-[1.8] mb-4">111 Park Street,<br />London, W1K 7JA, UK</p>
            <a href="#" className="block text-[#38BDF8] underline underline-offset-4 mb-2">+44 203 135 7206</a>
            <a href="#" className="block text-white hover:text-[#38BDF8] transition-colors">london@bird.co.uk</a>
          </div>
          <div>
            <h3 className="text-[20px] font-bold text-white mb-4">Social Media Essex</h3>
            <p className="text-[#A3A3A3] text-[14px] leading-[1.8] mb-4">1 High Street,<br />Billericay,<br />Essex, CM12 9AB, UK</p>
            <a href="#" className="block text-[#38BDF8] underline underline-offset-4 mb-2">+44 1277 289360</a>
            <a href="#" className="block text-white hover:text-[#38BDF8] transition-colors">essex@bird.co.uk</a>
          </div>
          <div>
            <h3 className="text-[20px] font-bold text-white mb-4">Social Media Glasgow</h3>
            <p className="text-[#A3A3A3] text-[14px] leading-[1.8] mb-4">151 Stanley Street,<br />Glasgow, G41 1JA, UK</p>
            <a href="#" className="block text-[#38BDF8] underline underline-offset-4 mb-2">+44 141 471 9005</a>
            <a href="#" className="block text-white hover:text-[#38BDF8] transition-colors">glasgow@bird.co.uk</a>
          </div>
        </div>
      </div>
    </section>
  );
}
