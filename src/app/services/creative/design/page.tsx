"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Badges } from "@/components/sections/Badges";
import { DesignServices } from "@/components/sections/DesignServices";
import { DesignSolutions } from "@/components/sections/DesignSolutions";
import { DesignLocations } from "@/components/sections/DesignLocations";
import { DesignTrust } from "@/components/sections/DesignTrust";
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

const designFaqs = [
  {
    q: "What design services do you provide?",
    a: "We offer digital graphic design, social media kits, newsletter templates, print brochures, custom illustrations, infographics, motion graphics, and 3D rendering."
  },
  {
    q: "What file formats will I receive for my design assets?",
    a: "You will receive high-resolution print-ready PDFs, editable source files (Figma, Adobe Illustrator, Photoshop, After Effects), and optimized web graphics (SVG, PNG, WebP)."
  },
  {
    q: "How do you manage design revisions?",
    a: "We include collaborative feedback rounds with fast turnaround times to ensure the final creative output aligns 100% with your vision and brand specifications."
  },
  {
    q: "Can DIJIGRO create custom motion graphics and animations?",
    a: "Yes, our motion design team creates explainer videos, logo animations, Lottie animations, and micro-interactions for websites and mobile applications."
  },
  {
    q: "Do you offer ongoing retainer options for graphic design?",
    a: "Yes, we offer flexible design subscription retainers giving your business dedicated designer access for monthly graphic, social, and marketing needs."
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
        titleMain="Graphic & Digital Design in\nUK"
        titleSub="That"
        titleHighlight="Commands Attention"
        description="Elevate your visual communication with our award-winning Graphic Design Agency in UK. From custom digital illustration and print collateral to motion graphics and 3D product rendering, we craft bespoke visuals designed for maximum impact."
      />

      <Badges />
      <DesignServices />
      <DesignSolutions />
      <DesignLocations />
      <DesignTrust />
      <WebDesignFAQ eyebrow="GOT QUESTIONS?" title="Graphic Design FAQs" faqs={designFaqs} />
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
