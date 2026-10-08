"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
// import { Badges } from "@/components/sections/Badges";
import { WebServices } from "@/components/sections/WebServices";
import { WebSolutions } from "@/components/sections/WebSolutions";
import { WebLocations } from "@/components/sections/WebLocations";
import { WebTrust } from "@/components/sections/WebTrust";
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

const webFaqs = [
  {
    q: "What web development technologies does DIJIGRO specialize in?",
    a: "We specialize in modern web technologies including React, Next.js, TypeScript, Node.js, Python, Shopify Plus, WordPress, and Headless CMS architectures tailored to your enterprise requirements."
  },
  {
    q: "How do you ensure web applications are secure and GDPR-compliant?",
    a: "We implement military-grade encryption, automated vulnerability testing, HTTPS/SSL protocols, and strict GDPR data governance frameworks across all web builds."
  },
  {
    q: "Can DIJIGRO integrate our custom web platform with existing enterprise software?",
    a: "Yes, our engineers excel at building custom REST and GraphQL APIs to seamlessly connect your web application with CRMs, ERPs, payment gateways, and third-party tools."
  },
  {
    q: "What is your web project delivery timeline?",
    a: "Project timelines vary depending on scope—standard bespoke websites take 4 to 8 weeks, while complex web applications and custom software typically take 8 to 14 weeks using agile development sprints."
  },
  {
    q: "Do you provide post-launch maintenance and server management?",
    a: "Absolutely. We offer round-the-clock SLA support, automated backups, performance tuning, and managed cloud hosting to keep your platform operating at peak performance."
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
        titleMain="Web Engineering Agency in\nUK"
        titleSub="That"
        titleHighlight="Delivers Results"
        description="Accelerate your digital transformation with our multi award-winning Web Agency in UK, offering high-performance web applications, ecommerce systems, and cloud infrastructure tailored for measurable business growth."
      />

      {/* <Badges /> */}
      <WebServices />
      <WebSolutions />
      <WebLocations />
      <WebTrust />
      <WebDesignFAQ eyebrow="GOT QUESTIONS?" title="Web Engineering FAQs" faqs={webFaqs} />
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
