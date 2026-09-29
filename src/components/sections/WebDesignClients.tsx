import React from "react";
import Image from "next/image";
import { MEDIA_LOGOS } from "@/lib/data";
import { Trophy } from "lucide-react";

export function WebDesignClients() {
  return (
    <section className="bg-[#FAFAFA] text-[#000000] py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-3xl mb-16">
          <h2 className="text-[32px] md:text-[42px] font-bold tracking-tight leading-[1.1] mb-6">
            Recognised as a Leading UK Web Design<br className="hidden md:block" />
            Company
          </h2>
          <p className="text-[#666666] text-[15px] leading-[1.6] max-w-2xl font-light">
            As a trusted UK Web Design Company, Bird has been featured in top-tier media and industry-leading platforms, showcasing our expertise in delivering exceptional digital marketing results.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-16 gap-x-8 items-center justify-items-center mb-20">
          {MEDIA_LOGOS.map((logo) => (
            <div key={logo.name} className="flex items-center justify-center w-full px-4">
              <Image
                src={logo.src}
                alt={logo.name}
                width={200}
                height={100}
                className="max-w-full w-auto h-auto max-h-[40px] md:max-h-[50px] object-contain mix-blend-multiply opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
          <Trophy className="h-[22px] w-[22px] text-[#000000] shrink-0" />
          <p className="text-[13px] md:text-[14px] text-[#333333]">
            Endorsed by <strong className="font-bold text-[#000000]">10+ Global Media Outlets</strong> for Exceptional <strong className="font-bold text-[#000000]">UK Web Design Results</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
