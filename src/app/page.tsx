"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
// import { Badges } from "@/components/sections/Badges";
import { Services } from "@/components/sections/Services";
import { Clients } from "@/components/sections/Clients";
import { Industries } from "@/components/sections/Industries";
import { CTA } from "@/components/sections/CTA";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { BlogInsights } from "@/components/sections/BlogInsights";
import { AgencyInfo } from "@/components/sections/AgencyInfo";
import { AgencyRole } from "@/components/sections/AgencyRole";
// import { Marquee } from "@/components/sections/Marquee";
// import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/layout/Footer";
import { ProjectModal } from "@/components/ui/ProjectModal";

export default function Home() {
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
      {/* Sticky Top Header with DIJIGRO Branding, GET A QUOTE button & Menu */}
      <Header />

      {/* Exact Reference Hero Banner with Golden Stardust Stardust & Proposal Form */}
      <Hero onStartProject={(url) => handleOpenProject(undefined, url)} />

      {/* Accreditation Badges Strip */}
      {/* <Badges /> */}

      
      <Services onSelectService={(service) => handleOpenProject(service)} />

      {/* White Section: Recognised as a Leading Agency by Top Brands */}
      <Clients />

      {/* Industries We Work With (16 Grid Matrix) */}
      <Industries />

      {/* Start a Project CTA */}
      <CTA />

      {/* Case Studies, a selection of successful projects */}
      <SelectedWork />

      {/* Stories of a Digital Marketing Agency (Editorial Insights) */}
      <BlogInsights />

      {/* Agency Info - Black Section with sticky right map */}
      <AgencyInfo />

      {/* Agency Role - White Section with sticky left mockup */}
      <AgencyRole />

      {/* Climax Call to Action: Want to get in touch? Let's talk */}
      {/* <FinalCTA onStartProject={() => handleOpenProject()} /> */}

      {/* Horizontal Continuous Agency Marquee */}
      {/* <Marquee /> */}
      {/* Multi-Column Mayfair London Footer with Live Clock */}
      <Footer />

      {/* Radix UI Interactive Project Proposal Modal */}
      <ProjectModal
        open={projectModalOpen}
        onOpenChange={setProjectModalOpen}
        defaultService={selectedService}
        defaultUrl={submittedUrl}
      />
    </main>
  );
}
