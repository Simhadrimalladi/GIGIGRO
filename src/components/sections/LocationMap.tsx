"use client";

import React, { useRef } from "react";
import { MapPin, Mail, Phone, Clock, Compass } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function LocationMap() {
  const containerRef = useRef<HTMLElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!cardRef.current) return;

      gsap.from(cardRef.current, {
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative bg-[#050505] py-28 border-b border-white/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={cardRef}
          className="rounded-3xl border border-white/10 bg-[#0B0B0B] p-8 sm:p-14 relative overflow-hidden shadow-2xl"
        >
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/8 rounded-full blur-[140px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column Text matching reference */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                <Compass className="h-3.5 w-3.5" />
                <span>Headquarters & Reach</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                A Leading UK & <br />
                <span className="text-[#D4AF37]">Global Presence</span>
              </h2>

              <p className="text-base text-[#A0A0A0] leading-relaxed">
                Headquartered in Mayfair, London with active operational partnerships across the United Kingdom, Europe, and North America. We provide dedicated on-site strategy sessions and executive quarterly reviews.
              </p>

              <div className="pt-4 space-y-3.5 text-sm text-[#CCCCCC]">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 shrink-0 text-[#D4AF37] mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">London Mayfair Studio (HQ)</span>
                    <span className="text-xs text-[#888888]">24 Berkeley Square, Mayfair, London W1J 6HE, United Kingdom</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 shrink-0 text-[#D4AF37]" />
                  <span>+44 (0)20 7946 0912</span>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 shrink-0 text-[#D4AF37]" />
                  <span className="hover:text-[#D4AF37] transition-colors cursor-pointer">london@vo-agency.co.uk</span>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 shrink-0 text-[#D4AF37]" />
                  <span className="font-mono text-xs text-[#D4AF37]">London Local Time: 09:00 – 18:30 GMT</span>
                </div>
              </div>
            </div>

            {/* Right Column: Stylized Vector Map Graphic with Pulsing Beacon */}
            <div className="lg:col-span-6 flex items-center justify-center">
              <div className="relative w-full aspect-[4/3] rounded-2xl border border-white/10 bg-[#0F0F0F] p-6 flex flex-col justify-between overflow-hidden shadow-inner">
                {/* SVG Stylized UK & European Map Grid */}
                <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px]" />

                {/* Radar Coordinates header */}
                <div className="relative z-10 flex items-center justify-between text-xs font-mono text-white/50 border-b border-white/10 pb-3">
                  <span className="text-[#D4AF37] flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#D4AF37] animate-ping" />
                    LIVE BEACON: LONDON HQ
                  </span>
                  <span>51.5074° N, 0.1278° W</span>
                </div>

                {/* Visual Map Canvas Representation */}
                <div className="relative z-10 my-auto flex flex-col items-center justify-center py-6">
                  {/* London Beacon */}
                  <div className="relative flex items-center justify-center">
                    <div className="absolute h-24 w-24 rounded-full bg-[#D4AF37]/10 animate-ping" />
                    <div className="absolute h-16 w-16 rounded-full border border-[#D4AF37]/40 animate-pulse" />
                    <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#D4AF37] text-black font-black text-xs shadow-[0_0_30px_#D4AF37]">
                      VO
                    </div>
                  </div>

                  <div className="mt-6 text-center">
                    <span className="text-base font-extrabold text-white block">
                      Mayfair Flagship Studio
                    </span>
                    <span className="text-xs text-[#A0A0A0]">
                      Serving clients across London, Manchester, Edinburgh & Worldwide
                    </span>
                  </div>
                </div>

                {/* Hubs readout */}
                <div className="relative z-10 grid grid-cols-3 gap-2 pt-3 border-t border-white/10 text-center font-mono text-[11px] text-white/60">
                  <div>
                    <span className="text-[#D4AF37] block font-bold">LONDON</span>
                    <span>ACTIVE HQ</span>
                  </div>
                  <div>
                    <span className="text-white block font-bold">MANCHESTER</span>
                    <span>NORTH HUB</span>
                  </div>
                  <div>
                    <span className="text-white block font-bold">NEW YORK</span>
                    <span>US DESK</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
