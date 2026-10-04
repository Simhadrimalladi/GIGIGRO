"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Badges } from "@/components/sections/Badges";
import { UiUxServices } from "@/components/sections/UiUxServices";
import { UiUxSolutions } from "@/components/sections/UiUxSolutions";
import { UiUxLocations } from "@/components/sections/UiUxLocations";
import { UiUxTrust } from "@/components/sections/UiUxTrust";
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

const uiuxFaqs = [
  {
    q: "What is the difference between UI and UX design?",
    a: "UX (User Experience) design focuses on the overall user journey, wireframing, and product usability, while UI (User Interface) design focuses on the visual presentation, typography, colors, and interactive micro-animations."
  },
  {
    q: "How do you conduct user research and testing?",
    a: "We conduct real user interviews, competitor heuristic evaluations, interactive prototype testing in Figma, and heatmap conversion tracking to validate every design choice."
  },
  {
    q: "Do you build design systems for engineering teams?",
    a: "Yes, we construct comprehensive Figma design systems with auto-layout components, design tokens, and style guides to streamline developer handoffs."
  },
  {
    q: "Are your UI/UX designs compliant with WCAG accessibility standards?",
    a: "Absolutely. Accessibility is fundamental to our design process. We adhere strictly to WCAG 2.1 AA guidelines for color contrast, screen reader compatibility, and font sizing."
  },
  {
    q: "Can DIJIGRO redesign an existing SaaS product or mobile app?",
    a: "Yes, we perform full UX audits and product redesigns to eliminate user friction, improve onboarding flows, and boost product retention."
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
        titleMain="UI/UX Design Agency in\nUK"
        titleSub="That"
        titleHighlight="Delights Users"
        description="Craft seamless, user-centric digital experiences. Our award-winning UI/UX designers turn complex workflows into intuitive web applications, SaaS dashboards, and mobile app interfaces engineered for maximum conversion."
      />

      <Badges />
      <UiUxServices />
      <UiUxSolutions />
      <UiUxLocations />
      <UiUxTrust />
      <WebDesignFAQ eyebrow="GOT QUESTIONS?" title="UI/UX Design FAQs" faqs={uiuxFaqs} />
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
