"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Badges } from "@/components/sections/Badges";
import { PayMonthlyServices } from "@/components/sections/PayMonthlyServices";
import { PayMonthlySolutions } from "@/components/sections/PayMonthlySolutions";
import { PayMonthlyLocations } from "@/components/sections/PayMonthlyLocations";
import { PayMonthlyTrust } from "@/components/sections/PayMonthlyTrust";
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

const payMonthlyFaqs = [
  {
    q: "What is included in a pay monthly website package?",
    a: "Our pay monthly packages include bespoke web design, premium cloud hosting, SSL certificates, continuous maintenance, domain management, and ongoing technical support for one low monthly rate."
  },
  {
    q: "Are there any upfront or hidden costs?",
    a: "No. There are zero upfront setup fees and zero hidden costs. You only pay your agreed fixed monthly subscription fee."
  },
  {
    q: "Can I update the website content myself?",
    a: "Yes, you have full access to an intuitive Content Management System (CMS), or our team can perform minor updates for you as part of your monthly maintenance allowance."
  },
  {
    q: "What happens if I want to upgrade my website in the future?",
    a: "You can seamlessly scale your monthly plan at any time to add new pages, e-commerce capabilities, custom features, or advanced SEO tools as your business expands."
  },
  {
    q: "Is there a long-term lock-in contract?",
    a: "We offer flexible contract terms designed to give small and medium businesses peace of mind without tying you down to restrictive long-term commitments."
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
        titleMain="Pay Monthly Websites in\nUK"
        titleSub="That"
        titleHighlight="Empower Growth"
        description="Get an award-winning, bespoke website without hefty upfront costs. Our all-inclusive pay-monthly website packages combine custom design, ultra-fast hosting, SSL security, and continuous support into one transparent monthly investment."
      />

      <Badges />
      <PayMonthlyServices />
      <PayMonthlySolutions />
      <PayMonthlyLocations />
      <PayMonthlyTrust />
      <WebDesignFAQ eyebrow="GOT QUESTIONS?" title="Pay Monthly Website FAQs" faqs={payMonthlyFaqs} />
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
