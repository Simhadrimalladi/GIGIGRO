"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { PerformanceMarketingServices } from "@/components/sections/PerformanceMarketingServices";
import { PerformanceMarketingSolutions } from "@/components/sections/PerformanceMarketingSolutions";
import { PerformanceMarketingLocations } from "@/components/sections/PerformanceMarketingLocations";
import { PerformanceMarketingTrust } from "@/components/sections/PerformanceMarketingTrust";
import { Industries } from "@/components/sections/Industries";
import { CTA } from "@/components/sections/CTA";
// import { SelectedWork } from "@/components/sections/SelectedWork";
import { BlogInsights } from "@/components/sections/BlogInsights";
import { AgencyInfo } from "@/components/sections/AgencyInfo";
import { AgencyRole } from "@/components/sections/AgencyRole";
import { Footer } from "@/components/layout/Footer";
import { ProjectModal } from "@/components/ui/ProjectModal";

export default function PerformanceMarketingPage() {
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);
  const [submittedUrl, setSubmittedUrl] = useState<string | undefined>(undefined);

  const handleOpenProject = (service?: string, url?: string) => {
    setSelectedService(service || "Performance Marketing");
    setSubmittedUrl(url);
    setProjectModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#000000] text-[#F5F5F5] flex flex-col selection:bg-[#38BDF8] selection:text-[#000000] relative">
      <Header />

      <Hero 
        onStartProject={(url) => handleOpenProject("Performance Marketing", url)}
        eyebrow="HIGH-IMPACT &amp; DATA-DRIVEN"
        titleMain="Performance Marketing\nAgency in UK"
        titleSub="That"
        titleHighlight="Scales ROAS"
        description="Transform your paid media channels into a high-converting growth engine. We combine multi-touch attribution, creative testing, and AI-driven bidding to lower your customer acquisition cost and maximize return on ad spend."
      />

      <PerformanceMarketingServices />
      <PerformanceMarketingSolutions />
      <PerformanceMarketingLocations />
      <PerformanceMarketingTrust />
      <Industries />
      <CTA />
      {/* <SelectedWork /> */}
      <BlogInsights />
      <AgencyInfo />
      <AgencyRole />
      <Footer />

      <ProjectModal
        open={projectModalOpen}
        onOpenChange={setProjectModalOpen}
        defaultService={selectedService}
        defaultUrl={submittedUrl}
      />
    </main>
  );
}
