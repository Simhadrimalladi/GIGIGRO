import React from "react";
import { Trophy } from "lucide-react";

export function WebDesignTestimonial() {
  return (
    <section className="bg-[#050505] py-24 text-white border-t border-[#333333]">
      <div className="max-w-[1000px] mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-16">
          <Trophy className="h-5 w-5 text-[#38BDF8]" />
          <p className="text-[14px] text-[#A3A3A3]">
            <strong className="text-white">100+ Projects Delivered</strong> Across Various Industries, Driving Unmatched <strong className="text-white">Web Design Success</strong>
          </p>
        </div>
        <div className="text-[#38BDF8] text-[64px] leading-none text-left mb-4 italic font-serif">"</div>
        <p className="text-[24px] md:text-[32px] font-medium leading-[1.4] mb-8 italic">
          Excellent team - we've been really impressed with the build quality of our website and the flexibility provided within WordPress. The support team are also incredibly reactive (and helpful when we break things!)
        </p>
        <p className="text-[#A3A3A3] text-[14px] text-left">Rebecca S.</p>
      </div>
    </section>
  );
}
