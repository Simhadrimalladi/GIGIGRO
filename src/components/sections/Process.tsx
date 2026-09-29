"use client";

import React, { useState } from "react";
import { PROCESS_STEPS } from "@/lib/data";
import { SectionHeading } from "../ui/SectionHeading";
import { CheckCircle2, ArrowRight } from "lucide-react";

export function Process() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id="process"
      className="relative bg-[#050505] py-28 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeading
            badge="03 // Strategic Methodology"
            title="A Rigorous 5-Stage Execution Framework"
            description="We discard generic agency guesswork in favor of clinical engineering sprints, verified commercial milestones, and transparent weekly telemetry."
          />

          <div className="text-right hidden md:block">
            <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest block">
              Deployment Velocity
            </span>
            <span className="text-sm text-[#A0A0A0]">
              Avg. 6–10 weeks from Kickoff to Launch
            </span>
          </div>
        </div>

        {/* Steps Horizontal Tabs on Desktop / Vertical Stack on Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Step Selector List */}
          <div className="lg:col-span-5 space-y-3">
            {PROCESS_STEPS.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <div
                  key={step.step}
                  onClick={() => setActiveStep(idx)}
                  className={`group flex items-start gap-4 rounded-xl border p-5 transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "border-[#D4AF37] bg-[#0E0E0E] shadow-[0_10px_25px_rgba(212,175,55,0.1)]"
                      : "border-white/10 bg-[#080808] hover:border-white/20 hover:bg-[#0B0B0B]"
                  }`}
                >
                  <span
                    className={`font-mono text-sm font-bold transition-colors ${
                      isActive ? "text-[#D4AF37]" : "text-white/40 group-hover:text-white"
                    }`}
                  >
                    {step.step}
                  </span>

                  <div className="flex-1">
                    <h3
                      className={`text-base font-bold transition-colors ${
                        isActive ? "text-white" : "text-[#A0A0A0] group-hover:text-white"
                      }`}
                    >
                      {step.title}
                    </h3>
                  </div>

                  <ArrowRight
                    className={`h-4 w-4 shrink-0 transition-transform duration-300 ${
                      isActive
                        ? "text-[#D4AF37] translate-x-1"
                        : "text-white/20 opacity-0 group-hover:opacity-100"
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* Active Step Deep-Dive Card */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-white/15 bg-[#0B0B0B] p-8 sm:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                  Phase {PROCESS_STEPS[activeStep].step}
                </span>
                <span className="text-xs text-white/50">
                  Sprint Milestone 0{activeStep + 1} of 05
                </span>
              </div>

              <h3 className="mt-6 text-2xl sm:text-3xl font-extrabold text-white">
                {PROCESS_STEPS[activeStep].title}
              </h3>

              <p className="mt-4 text-base text-[#A0A0A0] leading-relaxed">
                {PROCESS_STEPS[activeStep].desc}
              </p>

              <div className="mt-8 pt-6 border-t border-white/10">
                <span className="text-xs uppercase tracking-widest font-mono text-white/80 block mb-4">
                  Key Deliverables & Milestones:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {PROCESS_STEPS[activeStep].deliverables.map((item, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-white/10 bg-white/5 p-3.5 flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="h-4 w-4 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span className="text-xs font-medium text-white/90">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
