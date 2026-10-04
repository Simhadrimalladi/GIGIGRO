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
import { WebDesignFAQ } from "@/components/sections/WebDesignFAQ";
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
        eyebrow="PERFORMANCE MARKETING"
        titleMain="Marketing Focused on"
        titleSub="Measurable"
        titleHighlight="Growth"
        description="Getting traffic is only part of the job. The real question is what happens after someone clicks your ad. DIJIGRO creates and manages performance marketing campaigns designed to reach the right audience, generate meaningful actions and continuously improve campaign performance. We connect advertising, creative, landing pages, tracking and data to create a clearer path from marketing spend to business outcomes."
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
      <WebDesignFAQ 
        eyebrow="PERFORMANCE MARKETING FAQ"
        title="Frequently Asked Questions"
        faqs={[
          {
            q: "What is performance marketing?",
            a: "Performance marketing is a form of digital advertising where campaigns are planned, measured and optimised around specific business actions or outcomes."
          },
          {
            q: "What is the difference between performance marketing and digital marketing?",
            a: "Digital marketing is a broad term covering activities such as SEO, social media, content marketing, paid advertising and more. Performance marketing focuses specifically on measurable campaigns and outcomes."
          },
          {
            q: "What platforms can you advertise on?",
            a: "The right platform depends on your audience and objectives. Depending on the campaign, this can include search engines, social media platforms, display networks and other relevant advertising channels."
          },
          {
            q: "Can performance marketing generate leads?",
            a: "Yes. Campaigns can be designed around lead-generation actions such as forms, calls, enquiries, registrations or other meaningful conversions."
          },
          {
            q: "Can you manage ecommerce advertising?",
            a: "Yes. Ecommerce campaigns can be structured around product discovery, website traffic, conversions and purchases."
          },
          {
            q: "Do you create landing pages for campaigns?",
            a: "Yes. Where required, landing pages can be designed and developed specifically for campaigns to create a more focused post-click experience."
          },
          {
            q: "How do you measure campaign success?",
            a: "Success depends on the objective. Relevant measures can include leads, conversions, cost per acquisition, conversion rate, revenue and other business-specific metrics."
          },
          {
            q: "How quickly can performance marketing produce results?",
            a: "Paid advertising can begin generating data soon after campaigns launch, but meaningful optimisation usually requires ongoing testing and sufficient data. Results vary according to factors such as industry, audience, offer, competition, budget and campaign setup."
          },
          {
            q: "Can you work with our existing campaigns?",
            a: "Yes. We can review existing campaigns, identify areas for improvement and optimise them rather than necessarily starting again."
          },
          {
            q: "Can you track where our leads come from?",
            a: "Where suitable tracking is available, campaigns can be configured to measure important conversion actions and help identify which channels and campaigns are generating them."
          }
        ]}
      />
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
