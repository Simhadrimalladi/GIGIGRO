"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
// import { Badges } from "@/components/sections/Badges";
import { DigitalMarketingServices } from "@/components/sections/DigitalMarketingServices";
import { DigitalMarketingSolutions } from "@/components/sections/DigitalMarketingSolutions";
import { DigitalMarketingLocations } from "@/components/sections/DigitalMarketingLocations";
import { DigitalMarketingTrust } from "@/components/sections/DigitalMarketingTrust";
import { Industries } from "@/components/sections/Industries";
import { CTA } from "@/components/sections/CTA";
// import { SelectedWork } from "@/components/sections/SelectedWork";
import { BlogInsights } from "@/components/sections/BlogInsights";
import { AgencyInfo } from "@/components/sections/AgencyInfo";
import { AgencyRole } from "@/components/sections/AgencyRole";
import { Marquee } from "@/components/sections/Marquee";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/layout/Footer";
import { ProjectModal } from "@/components/ui/ProjectModal";
import { WebDesignFAQ } from "@/components/sections/WebDesignFAQ";

const dmFaqs = [
  {
    q: "What digital marketing channels does DIJIGRO cover?",
    a: "We offer end-to-end digital marketing solutions spanning SEO, Generative Engine Optimization (GEO), Paid Search (PPC), Paid Social, Performance Marketing, Email Automation, and Conversion Rate Optimization (CRO)."
  },
  {
    q: "How do you measure ROI on digital marketing campaigns?",
    a: "We establish clear KPIs including Customer Acquisition Cost (CAC), Return On Ad Spend (ROAS), Cost Per Lead (CPL), and Organic Revenue Growth, providing real-time analytics dashboards."
  },
  {
    q: "How long does it take to see results from digital marketing?",
    a: "PPC and Paid Social campaigns generate immediate traffic and conversions within 24-48 hours, whereas organic channels like SEO and Content Marketing compound results over 3 to 6 months."
  },
  {
    q: "Will I have a dedicated account manager?",
    a: "Yes, every DIJIGRO client is assigned a dedicated Digital Growth Partner who manages campaign strategy, weekly updates, and monthly performance reviews."
  },
  {
    q: "Do you offer tailored digital marketing packages for B2B and E-commerce?",
    a: "Absolutely. We customize our channel mix, audience targeting, and content strategy specifically to suit B2B lead generation pipelines or B2C e-commerce revenue growth."
  }
];

export default function Page() {
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);
  const [submittedUrl, setSubmittedUrl] = useState<string | undefined>(undefined);

  const handleOpenProject = (service?: string, url?: string) => {
    setSelectedService(service);
    setSubmittedUrl(url);
    setProjectModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#000000] text-[#F5F5F5] flex flex-col selection:bg-[#38BDF8] selection:text-[#000000] relative">
      <Header />

      <Hero 
        onStartProject={(url) => handleOpenProject(undefined, url)}
        eyebrow="TOP RATED AND AWARD WINNING"
        titleMain="Full Service Digital Marketing in\nUK"
        titleSub="That"
        titleHighlight="Drives Revenue"
        description="Scale your business with our multi award-winning Digital Marketing Agency in UK. We combine data-driven SEO, high-converting PPC, performance marketing, and automated conversion strategies to maximize ROI."
      />

      {/* <Badges /> */}
      <DigitalMarketingServices />
      <DigitalMarketingSolutions />
      <DigitalMarketingLocations />
      <DigitalMarketingTrust />
      <WebDesignFAQ eyebrow="GOT QUESTIONS?" title="Digital Marketing FAQs" faqs={dmFaqs} />
      <Industries />
      <CTA />
      {/* <SelectedWork /> */}
      <BlogInsights />
      <AgencyInfo />
      <AgencyRole />
      <FinalCTA onStartProject={() => handleOpenProject()} />
      <Marquee />
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
