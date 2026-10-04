"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Badges } from "@/components/sections/Badges";
import { BrandingServices } from "@/components/sections/BrandingServices";
import { BrandingSolutions } from "@/components/sections/BrandingSolutions";
import { BrandingLocations } from "@/components/sections/BrandingLocations";
import { BrandingTrust } from "@/components/sections/BrandingTrust";
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

const brandingFaqs = [
  {
    q: "What is included in a complete brand identity package?",
    a: "A complete brand package includes core strategy positioning, logo design variations, brand color palette, typography hierarchy, verbal tone-of-voice guidelines, and full brand usage rulebooks."
  },
  {
    q: "How long does a full rebranding process take?",
    a: "A full brand identity strategy and visual redesign typically takes 4 to 8 weeks, including research, concept development, refinements, and final asset delivery."
  },
  {
    q: "Will I own full copyright and vector assets for our brand?",
    a: "Yes, upon final project sign-off, you hold 100% full legal ownership of all logo files, vector graphics, font licenses, and brand documentation."
  },
  {
    q: "Can DIJIGRO assist with physical packaging and stationery design?",
    a: "Absolutely. We design physical collateral including product packaging, unboxing boxes, business cards, merchandise, and retail display materials."
  },
  {
    q: "How do you ensure our new brand stays consistent across all channels?",
    a: "We provide comprehensive digital brand guidelines and vector asset libraries to ensure your internal teams and third-party vendors execute your brand flawlessly."
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
        titleMain="Brand Identity Agency in\nUK"
        titleSub="That"
        titleHighlight="Defines Industry Leaders"
        description="Craft an unforgettable visual and verbal brand identity. Our award-winning branding strategists and graphic designers build powerful logos, color systems, tone of voice, and brand guidelines that forge deep customer connections."
      />

      <Badges />
      <BrandingServices />
      <BrandingSolutions />
      <BrandingLocations />
      <BrandingTrust />
      <WebDesignFAQ eyebrow="GOT QUESTIONS?" title="Brand Identity FAQs" faqs={brandingFaqs} />
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
