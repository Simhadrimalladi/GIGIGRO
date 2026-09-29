import React from "react";
import { PRESS_FEATURES, OFFICES } from "@/lib/data";
import { SectionHeading } from "../ui/SectionHeading";
import { Globe, MapPin, Mail, Phone, ExternalLink } from "lucide-react";

export function Recognition() {
  return (
    <section
      id="recognition"
      className="relative bg-[#050505] py-28 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeading
            badge="04 // Press & Footprint"
            title="Global Recognition & Studio Network"
            description="Our client case studies and strategic perspectives are frequently profiled by leading international business and technology publications."
          />

          <div className="hidden md:flex items-center gap-2 text-xs font-mono text-[#D4AF37] uppercase tracking-widest">
            <Globe className="h-4 w-4" />
            <span>4 Global Hubs</span>
          </div>
        </div>

        {/* Press Quotes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {PRESS_FEATURES.map((item) => (
            <div
              key={item.outlet}
              className="rounded-2xl border border-white/10 bg-[#0B0B0B] p-6 flex flex-col justify-between hover:border-[#D4AF37]/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-bold text-[#D4AF37] uppercase tracking-wider font-mono">
                    {item.outlet}
                  </span>
                  <span className="text-[11px] text-white/40 font-mono">
                    {item.year}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-white/80 italic leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-1 text-[11px] font-semibold text-white/50 hover:text-white transition-colors cursor-pointer">
                <span>Read Feature</span>
                <ExternalLink className="h-3 w-3" />
              </div>
            </div>
          ))}
        </div>

        {/* Studio Locations Grid */}
        <div className="rounded-3xl border border-white/10 bg-[#0B0B0B] p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 border-b border-white/10 gap-4">
            <div>
              <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest block mb-1">
                Studio Network
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Physical Hubs Across Key Financial Capitals
              </h3>
            </div>
            <div className="text-xs text-[#A0A0A0] max-w-xs">
              Seamless 24/5 synchronous collaboration across European, US, and Asian operational hours.
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {OFFICES.map((office) => (
              <div key={office.city} className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-bold text-white flex items-center gap-1.5">
                    {office.city}
                    {office.isHQ && (
                      <span className="rounded bg-[#D4AF37] text-black text-[9px] font-black px-1.5 py-0.5 uppercase tracking-wider">
                        HQ
                      </span>
                    )}
                  </h4>
                  <span className="text-xs font-mono text-[#D4AF37]">
                    {office.timezone}
                  </span>
                </div>

                <div className="space-y-2 text-xs text-[#A0A0A0]">
                  <p className="flex items-start gap-2">
                    <MapPin className="h-3.5 w-3.5 shrink-0 text-white/40 mt-0.5" />
                    <span>{office.address}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="h-3.5 w-3.5 shrink-0 text-white/40" />
                    <span className="hover:text-white transition-colors">{office.email}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="h-3.5 w-3.5 shrink-0 text-white/40" />
                    <span>{office.phone}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
