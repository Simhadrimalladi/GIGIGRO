"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
// import { Badges } from "@/components/sections/Badges";
import { CreativeServices } from "@/components/sections/CreativeServices";
import { CreativeSolutions } from "@/components/sections/CreativeSolutions";
import { CreativeLocations } from "@/components/sections/CreativeLocations";
import { CreativeTrust } from "@/components/sections/CreativeTrust";
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

const creativeFaqs = [
  {
    q: "What creative production capabilities does DIJIGRO offer?",
    a: "We offer end-to-end creative capabilities including campaign ideation, video production, commercial scriptwriting, photography, sonic branding, and 3D animation."
  },
  {
    q: "How do you align creative concepts with business performance?",
    a: "Our creative direction marries high-level aesthetic storytelling with performance marketing metrics—ensuring every campaign grabs attention while driving conversion."
  },
  {
    q: "Do you handle full-service video and commercial production?",
    a: "Yes, our in-house production team handles everything from pre-production storyboarding to casting, filming, editing, motion graphics, and final audio mastering."
  },
  {
    q: "Can DIJIGRO create custom brand assets for multi-channel distribution?",
    a: "Absolutely. We deliver complete asset suites formatted specifically for TV, social media reels, digital billboards, print, and web."
  },
  {
    q: "What is the typical turnaround time for a creative campaign?",
    a: "Turnaround times vary based on scope—focused video or graphic assets take 1 to 2 weeks, while major multi-channel brand campaigns typically run 4 to 8 weeks."
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
        titleMain="Full Service Creative Agency in\nUK"
        titleSub="That"
        titleHighlight="Inspires Action"
        description="Disrupt your industry with high-impact creative direction, cinematic video production, brand storytelling, and multi-channel campaign ideation engineered to captivate your audience."
      />

      {/* <Badges /> */}
      <CreativeServices />
      <CreativeSolutions />
      <CreativeLocations />
      <CreativeTrust />
      <WebDesignFAQ eyebrow="GOT QUESTIONS?" title="Creative Production FAQs" faqs={creativeFaqs} />
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
