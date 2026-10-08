"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Badges } from "@/components/sections/Badges";
import { WebsiteSupportServices } from "@/components/sections/WebsiteSupportServices";
import { WebsiteSupportSolutions } from "@/components/sections/WebsiteSupportSolutions";
import { WebsiteSupportLocations } from "@/components/sections/WebsiteSupportLocations";
import { WebsiteSupportTrust } from "@/components/sections/WebsiteSupportTrust";
// import { Industries } from "@/components/sections/Industries";
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

const supportFaqs = [
  {
    q: "What is your guaranteed response time for technical support?",
    a: "We provide guaranteed SLA response times as fast as 15 minutes for critical emergencies and under 2 hours for standard tickets."
  },
  {
    q: "What platforms do you support?",
    a: "Our engineers specialize in supporting React, Next.js, Node, WordPress, Shopify, Laravel, and custom PHP/JavaScript platforms."
  },
  {
    q: "How do you handle emergency website outages or hack attempts?",
    a: "We deploy immediate malware isolation, restore your site from secure clean backups, patch the security vulnerability, and harden firewalls to prevent future breaches."
  },
  {
    q: "Are content updates included in website support plans?",
    a: "Yes, our support plans include dedicated developer hours every month for text changes, image swaps, layout tweaks, and new plugin installations."
  },
  {
    q: "Do you provide monthly health & security reports?",
    a: "Yes, every client receives a transparent monthly report detailing site uptime, security scan results, performance speeds, and completed maintenance tasks."
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
        titleMain="Website Support & Maintenance in\nUK"
        titleSub="That"
        titleHighlight="Protects Your Site"
        description="Keep your website running smoothly, securely, and glitch-free. Our dedicated technical team provides 24/7 proactive monitoring, rapid SLA ticket resolution, malware protection, and regular software updates."
      />

      <Badges />
      <WebsiteSupportServices />
      <WebsiteSupportSolutions />
      <WebsiteSupportLocations />
      <WebsiteSupportTrust />
      <WebDesignFAQ eyebrow="GOT QUESTIONS?" title="Website Support FAQs" faqs={supportFaqs} />
      {/* <Industries /> */}
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
