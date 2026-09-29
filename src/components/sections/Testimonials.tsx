import React from "react";
import { TESTIMONIALS } from "@/lib/data";
import { SectionHeading } from "../ui/SectionHeading";
import { Quote, TrendingUp } from "lucide-react";

export function Testimonials() {
  return (
    <section className="relative bg-[#050505] py-28 border-b border-white/10 overflow-hidden">
      {/* Subtle gold spotlight */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="05 // Client Governance"
          title="Executive Endorsements"
          highlight="& Verified Returns"
          description="Leadership perspectives from the executives and founders whose digital growth trajectories we have steered."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0B0B0B] p-8 sm:p-10 transition-all duration-300 hover:border-[#D4AF37]/50 hover:bg-[#0E0E0E]"
            >
              <div>
                <Quote className="h-8 w-8 text-[#D4AF37]/40 mb-6" />

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20 text-xs font-bold font-mono mb-4">
                  <TrendingUp className="h-3 w-3" />
                  {t.metric}
                </div>

                <p className="text-sm sm:text-base text-white/90 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <h4 className="text-base font-bold text-white">
                  {t.author}
                </h4>
                <p className="text-xs text-[#A0A0A0] mt-0.5">
                  {t.title}, <span className="text-white/80">{t.company}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
