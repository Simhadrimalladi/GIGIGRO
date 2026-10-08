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
        eyebrow="ABOUT DIJIGRO"
        titleMain="Building Better"
        titleSub="Digital"
        titleHighlight="Experiences"
        description="DIJIGRO is a digital marketing, web design and web development agency focused on helping businesses create a stronger presence online. Our digital journey began in 2015. Today, we bring that experience together with creativity, technology and practical thinking to build digital solutions that help businesses move forward."
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
