"use client";

import React from "react";
import Link from "next/link";
import { BirdLogo } from "../ui/BirdLogo";

export function Footer() {
  return (
    <footer className="bg-black text-[#F5F5F5] pt-24 pb-16">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Top Grid: 5 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-16 border-b border-[#333333]">
          
          {/* Column 1: Logo & Intro */}
          <div className="lg:col-span-1 space-y-6">
            <div className="w-[120px]">
              <BirdLogo />
            </div>
            <p className="text-[11px] text-[#A3A3A3] leading-[1.8] font-light max-w-[250px]">
              A multi award winning digital agency based in the United Kingdom. With a distinct offering in Technical Web, Digital Marketing and Creative.
            </p>
            <div className="pt-4">
              <span className="text-[15px] font-light text-[#A3A3A3] block mb-1">
                Interested in working with us?
              </span>
              <Link
                href="/contact"
                className="text-[17px] font-light text-[#7DD3FC] relative inline-block after:absolute after:bottom-[2px] after:left-0 after:w-full after:h-[1px] after:bg-[#7DD3FC] hover:opacity-70 transition-opacity"
              >
                Start a Project
              </Link>
            </div>
          </div>

          {/* Column 2: LONDON */}
          <div className="lg:col-span-1 space-y-6">
            <h4 className="text-[13px] font-bold tracking-widest text-white uppercase">
              LONDON
            </h4>
            <div className="text-[13px] text-[#A3A3A3] font-light leading-[1.6]">
              13 Austin Friars,<br />
              London,<br />
              EC2N 2HE
            </div>
            <div className="flex flex-col gap-2 items-start">
              <a href="tel:+442083381206" className="text-[15px] font-light text-[#A3A3A3] relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#A3A3A3] hover:text-white hover:after:bg-white transition-colors">
                +44 208 338 1206
              </a>
              <a href="mailto:london@bird.co.uk" className="text-[15px] font-light text-[#A3A3A3] relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#A3A3A3] hover:text-white hover:after:bg-white transition-colors">
                london@bird.co.uk
              </a>
            </div>
          </div>

          {/* Column 3: ESSEX */}
          <div className="lg:col-span-1 space-y-6">
            <h4 className="text-[13px] font-bold tracking-widest text-white uppercase">
              ESSEX
            </h4>
            <div className="text-[13px] text-[#A3A3A3] font-light leading-[1.6]">
              128a High Street,<br />
              Billericay, Essex,<br />
              CM12 9XE
            </div>
            <div className="flex flex-col gap-2 items-start">
              <a href="tel:+441277286565" className="text-[15px] font-light text-[#A3A3A3] relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#A3A3A3] hover:text-white hover:after:bg-white transition-colors">
                +44 1277 286565
              </a>
              <a href="mailto:essex@bird.co.uk" className="text-[15px] font-light text-[#A3A3A3] relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#A3A3A3] hover:text-white hover:after:bg-white transition-colors">
                essex@bird.co.uk
              </a>
            </div>
          </div>

          {/* Column 4: GLASGOW */}
          <div className="lg:col-span-1 space-y-6">
            <h4 className="text-[13px] font-bold tracking-widest text-white uppercase">
              GLASGOW
            </h4>
            <div className="text-[13px] text-[#A3A3A3] font-light leading-[1.6]">
              30 Stanley Street,<br />
              Glasgow,<br />
              G41 1JB
            </div>
            <div className="flex flex-col gap-2 items-start">
              <a href="tel:+441414719099" className="text-[15px] font-light text-[#A3A3A3] relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#A3A3A3] hover:text-white hover:after:bg-white transition-colors">
                +44 141 471 9099
              </a>
              <a href="mailto:glasgow@bird.co.uk" className="text-[15px] font-light text-[#A3A3A3] relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#A3A3A3] hover:text-white hover:after:bg-white transition-colors">
                glasgow@bird.co.uk
              </a>
            </div>
          </div>

          {/* Column 5: QUICK LINKS */}
          <div className="lg:col-span-1 space-y-6">
            <h4 className="text-[13px] font-bold tracking-widest text-white uppercase">
              QUICK LINKS
            </h4>
            <ul className="flex flex-col gap-2 text-[12px] font-light text-[#A3A3A3]">
              <li><Link href="#" className="hover:text-[#7DD3FC] transition-colors">Nest</Link></li>
              <li><Link href="#" className="hover:text-[#7DD3FC] transition-colors">Email Marketing</Link></li>
              <li><Link href="#" className="hover:text-[#7DD3FC] transition-colors">Marketing Portal</Link></li>
              <li><Link href="#" className="hover:text-[#7DD3FC] transition-colors">Digital Marketing Glossary</Link></li>
              <li><Link href="#" className="hover:text-[#7DD3FC] transition-colors">Digital Marketing Agency London</Link></li>
              <li><Link href="#" className="hover:text-[#7DD3FC] transition-colors">Digital Marketing Agency Essex</Link></li>
            </ul>
          </div>
          
        </div>

        {/* Bottom Grid: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pt-16">
          
          {/* Column 1: Badges */}
          <div className="lg:col-span-1 flex flex-row gap-6 items-start">
            <div className="bg-white p-3 rounded-lg flex flex-col justify-center items-center w-max shadow-sm">
              <div className="flex items-center gap-1">
                <span className="text-[14px] font-bold text-black flex items-center gap-1 whitespace-nowrap">
                  <span className="text-[#4285F4] text-[18px] leading-none">G</span>
                  Google Rating
                </span>
              </div>
              <div className="flex items-center gap-1 text-[12px] font-bold text-black mt-1 whitespace-nowrap">
                5.0 <span className="text-[#F4B400] text-[14px] tracking-[2px]">★★★★★</span>
              </div>
            </div>
            <div className="flex items-center mt-1">
              {/* Trustpilot Mock */}
              <div className="flex flex-col items-center">
                <span className="text-white text-[16px] font-bold flex items-center gap-1">
                  <span className="text-[#00B67A] text-[20px]">★</span> Trustpilot
                </span>
                <span className="text-[#00B67A] text-[16px] mt-1 tracking-widest">
                  ★★★★★
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: CAREERS */}
          <div className="lg:col-span-1 space-y-4">
            <h4 className="text-[13px] font-bold tracking-widest text-white uppercase">
              CAREERS
            </h4>
            <p className="text-[12px] text-[#A3A3A3] leading-[1.6] font-light pr-4">
              We are always looking for talented people to join the team. Scan our careers page to find out about working for us and see if there is an opportunity to become part of the flock.
            </p>
            <div>
              <Link
                href="/careers"
                className="text-[14px] font-light text-[#A3A3A3] relative inline-block after:absolute after:bottom-[2px] after:left-0 after:w-full after:h-[1px] after:bg-[#A3A3A3] hover:text-white hover:after:bg-white transition-colors"
              >
                Careers
              </Link>
            </div>
          </div>

          {/* Column 3: NEED SUPPORT? */}
          <div className="lg:col-span-1 space-y-4">
            <h4 className="text-[13px] font-bold tracking-widest text-white uppercase">
              NEED SUPPORT?
            </h4>
            <p className="text-[12px] text-[#A3A3A3] leading-[1.6] font-light pr-4">
              On our support plan? feel free to submit a ticket or give us a call during business hours.
            </p>
            <div className="flex items-center gap-2 text-[13px] font-light text-[#A3A3A3] pt-2">
              <span className="text-[#7DD3FC]">🎧</span> 09.00 am - 17.00 pm
            </div>
            <div>
              <a
                href="mailto:support@bird.co.uk"
                className="text-[15px] font-light text-[#A3A3A3] relative inline-block after:absolute after:bottom-[2px] after:left-0 after:w-full after:h-[1px] after:bg-[#A3A3A3] hover:text-white hover:after:bg-white transition-colors"
              >
                support@bird.co.uk
              </a>
            </div>
          </div>

          {/* Column 4: LEGAL */}
          <div className="lg:col-span-1 space-y-4">
            <h4 className="text-[13px] font-bold tracking-widest text-white uppercase">
              LEGAL
            </h4>
            <ul className="flex flex-col gap-2 text-[12px] font-light text-[#A3A3A3]">
              <li><Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Nominet Terms</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}
