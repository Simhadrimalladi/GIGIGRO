"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
// import { Badges } from "@/components/sections/Badges";
import { AboutOurStory } from "@/components/sections/AboutOurStory";
import { AboutValues } from "@/components/sections/AboutValues";
import { AboutCulture } from "@/components/sections/AboutCulture";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/layout/Footer";
import { ProjectModal } from "@/components/ui/ProjectModal";

export default function AboutPage() {
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
        eyebrow="ABOUT GIGIGRO"
        titleMain="Architecting Digital\nFutures"
        titleSub="With"
        titleHighlight="Unmatched Precision"
        description="We are a global collective of engineers, designers, and strategists. Since 2012, we've been pushing the boundaries of what's possible on the web, partnering with visionary brands to deliver exceptional digital experiences."
      />

      {/* <Badges /> */}
      <AboutOurStory />
      <AboutValues />
      <AboutCulture />
      {/* <AboutLeadership /> */}
      <CTA />
      {/* <FinalCTA onStartProject={() => handleOpenProject()} /> */}
      {/* <Marquee /> */}
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
