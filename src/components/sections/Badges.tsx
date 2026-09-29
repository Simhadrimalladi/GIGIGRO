import React from "react";
import Image from "next/image";
import { PARTNER_LOGOS } from "@/lib/data";

export function Badges() {
  return (
    <section className="relative bg-[#000000] py-[5vw] overflow-hidden">
      <div className="w-full">
        <div className="relative flex overflow-hidden group">
          <div className="animate-marquee flex items-center whitespace-nowrap will-change-transform">
            {[...PARTNER_LOGOS, ...PARTNER_LOGOS, ...PARTNER_LOGOS, ...PARTNER_LOGOS].map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="flex shrink-0 items-center justify-center px-10 transition-transform duration-500"
                style={{ width: `${logo.width + 80}px` }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={80}
                  className="w-full h-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
