"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Badges } from "@/components/sections/Badges";
import { WebHostingServices } from "@/components/sections/WebHostingServices";
import { WebHostingSolutions } from "@/components/sections/WebHostingSolutions";
import { WebHostingLocations } from "@/components/sections/WebHostingLocations";
import { WebHostingTrust } from "@/components/sections/WebHostingTrust";
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

const hostingFaqs = [
  {
    q: "What uptime guarantee do you offer for web hosting?",
    a: "We guarantee 99.9% uptime across all our cloud hosting environments, backed by redundant server architecture and 24/7 proactive monitoring."
  },
  {
    q: "Are daily backups included with DIJIGRO web hosting?",
    a: "Yes, automated daily backups of your website files and databases are included as standard, with one-click restore functionality."
  },
  {
    q: "Do you offer free SSL certificates?",
    a: "Absolutely. Every website hosted on our platform receives a free Let's Encrypt SSL certificate to ensure data encryption and trust."
  },
  {
    q: "Can DIJIGRO assist with migrating our site from our current host?",
    a: "Yes, our technical team handles seamless, zero-downtime website migrations from your existing provider free of charge."
  },
  {
    q: "How scalable are your hosting servers?",
    a: "Our cloud infrastructure allows effortless scaling of CPU, RAM, and storage as your traffic spikes, ensuring your site remains responsive under heavy load."
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
        titleMain="Web Hosting Infrastructure in\nUK"
        titleSub="That"
        titleHighlight="Guarantees Uptime"
        description="Experience enterprise-grade cloud hosting with 99.9% guaranteed uptime, lightning-fast SSD storage, automated daily backups, and robust 24/7 security monitoring tailored for high-performance websites."
      />

      <Badges />
      <WebHostingServices />
      <WebHostingSolutions />
      <WebHostingLocations />
      <WebHostingTrust />
      <WebDesignFAQ eyebrow="GOT QUESTIONS?" title="Web Hosting FAQs" faqs={hostingFaqs} />
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
