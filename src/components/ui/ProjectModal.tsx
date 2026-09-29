"use client";

import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X, CheckCircle2, Send, Sparkles } from "lucide-react";
import { Button } from "./Button";

interface ProjectModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultService?: string;
  defaultUrl?: string;
}

const SERVICES_OPTIONS = [
  "Technical SEO & Authority",
  "Paid Performance & Growth",
  "Next.js Web Engineering",
  "Brand Identity & 3D Systems",
  "Conversion Optimization (CRO)",
  "Autonomous AI Automation",
];

const BUDGET_OPTIONS = [
  "£15k – £30k",
  "£30k – £60k",
  "£60k – £120k",
  "£120k+",
];

export function ProjectModal({
  open,
  onOpenChange,
  defaultService,
  defaultUrl,
}: ProjectModalProps) {
  const [selectedServices, setSelectedServices] = useState<string[]>(
    defaultService ? [defaultService] : ["Technical SEO & Authority"]
  );
  const [selectedBudget, setSelectedBudget] = useState<string>("£30k – £60k");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState(defaultUrl || "");
  const [notes, setNotes] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleService = (svc: string) => {
    if (selectedServices.includes(svc)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== svc));
      }
    } else {
      setSelectedServices([...selectedServices, svc]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate brief submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setName("");
    setEmail("");
    setCompany("");
    setNotes("");
  };

  return (
    <Dialog.Root
      open={open}
      onOpenChange={(val) => {
        if (!val) resetForm();
        onOpenChange(val);
      }}
    >
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed left-[50%] top-[50%] z-50 max-h-[92vh] w-[95vw] max-w-2xl translate-x-[-50%] translate-y-[-50%] overflow-y-auto rounded-2xl border border-white/10 bg-[#0B0B0B] p-6 sm:p-10 shadow-2xl focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]">
          {/* Close button */}
          <Dialog.Close asChild>
            <button
              aria-label="Close modal"
              className="absolute right-5 top-5 rounded-full p-2 text-white/50 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            >
              <X className="h-5 w-5" />
            </button>
          </Dialog.Close>

          {isSubmitted ? (
            <div className="py-12 text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#D4AF37]">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <Dialog.Title className="text-2xl sm:text-3xl font-bold text-white">
                Brief Received with Distinction
              </Dialog.Title>
              <Dialog.Description className="mx-auto mt-3 max-w-md text-sm text-[#A0A0A0] leading-relaxed">
                Thank you, <span className="text-white font-medium">{name}</span>. Our partners at the Mayfair studio will review your project requirements and respond within 24 business hours.
              </Dialog.Description>

              <div className="mt-8 rounded-xl border border-white/10 bg-[#121212] p-5 text-left text-xs text-[#A0A0A0] space-y-2">
                <div className="flex justify-between">
                  <span className="text-white/60">Services Requested:</span>
                  <span className="text-white font-medium">{selectedServices.join(", ")}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Estimated Allocation:</span>
                  <span className="text-[#D4AF37] font-semibold">{selectedBudget}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Dedicated Lead:</span>
                  <span className="text-white">Alexander Vance (ECD)</span>
                </div>
              </div>

              <div className="mt-8">
                <Button
                  variant="gold"
                  size="md"
                  onClick={() => {
                    resetForm();
                    onOpenChange(false);
                  }}
                >
                  Return to Studio
                </Button>
              </div>
            </div>
          ) : (
            <div>
              {/* Header */}
              <div className="mb-8">
                <div className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
                  <Sparkles className="h-3 w-3" />
                  Direct Partner Inquiry
                </div>
                <Dialog.Title className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Start a Project with <span className="text-[#38BDF8]">BIRD</span>
                </Dialog.Title>
                <Dialog.Description className="mt-2 text-sm text-[#A0A0A0]">
                  Share your commercial objectives. We take on a maximum of 4 enterprise engagements per quarter.
                </Dialog.Description>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Services Selection */}
                <div>
                  <label className="mb-2.5 block text-xs font-semibold uppercase tracking-wider text-[#A0A0A0]">
                    Required Capabilities (Select all that apply)
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {SERVICES_OPTIONS.map((svc) => {
                      const isSelected = selectedServices.includes(svc);
                      return (
                        <button
                          key={svc}
                          type="button"
                          onClick={() => toggleService(svc)}
                          className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-200 cursor-pointer ${
                            isSelected
                              ? "border border-[#D4AF37] bg-[#D4AF37]/15 text-[#D4AF37]"
                              : "border border-white/10 bg-white/5 text-[#A0A0A0] hover:border-white/20 hover:text-white"
                          }`}
                        >
                          {svc}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Budget Selection */}
                <div>
                  <label className="mb-2.5 block text-xs font-semibold uppercase tracking-wider text-[#A0A0A0]">
                    Anticipated Budget / Capital Allocation
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {BUDGET_OPTIONS.map((budget) => {
                      const isSelected = selectedBudget === budget;
                      return (
                        <button
                          key={budget}
                          type="button"
                          onClick={() => setSelectedBudget(budget)}
                          className={`rounded-xl px-3 py-2 text-xs font-medium transition-all duration-200 cursor-pointer text-center ${
                            isSelected
                              ? "border border-[#D4AF37] bg-[#D4AF37]/20 text-[#D4AF37] font-semibold"
                              : "border border-white/10 bg-white/5 text-[#A0A0A0] hover:border-white/20 hover:text-white"
                          }`}
                        >
                          {budget}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Form Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-white/80">
                      Your Name <span className="text-[#D4AF37]">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Eleanor Vance"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-[#141414] px-4 py-2.5 text-sm text-white placeholder-white/30 focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-white/80">
                      Work Email <span className="text-[#D4AF37]">*</span>
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="e.g. eleanor@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-[#141414] px-4 py-2.5 text-sm text-white placeholder-white/30 focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-medium text-white/80">
                    Company Name / Web URL
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. acme-luxury.com"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-[#141414] px-4 py-2.5 text-sm text-white placeholder-white/30 focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-medium text-white/80">
                    Project Overview / Commercial Goals
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe what you are looking to achieve, existing metrics, or target timeline..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full resize-none rounded-xl border border-white/10 bg-[#141414] px-4 py-2.5 text-sm text-white placeholder-white/30 focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-white/40">
                    Strict NDA honored by default.
                  </span>
                  <Button
                    type="submit"
                    variant="gold"
                    size="md"
                    disabled={isSubmitting}
                    className="gap-2"
                  >
                    {isSubmitting ? (
                      "Transmitting Brief..."
                    ) : (
                      <>
                        <span>Submit Project Brief</span>
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
