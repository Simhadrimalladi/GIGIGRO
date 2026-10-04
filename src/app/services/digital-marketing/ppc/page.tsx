"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Badges } from "@/components/sections/Badges";
import { PpcServices } from "@/components/sections/PpcServices";
import { PpcSolutions } from "@/components/sections/PpcSolutions";
import { PpcLocations } from "@/components/sections/PpcLocations";
import { PpcTrust } from "@/components/sections/PpcTrust";
import { Industries } from "@/components/sections/Industries";
import { CTA } from "@/components/sections/CTA";
// import { SelectedWork } from "@/components/sections/SelectedWork";
import { BlogInsights } from "@/components/sections/BlogInsights";
import { AgencyInfo } from "@/components/sections/AgencyInfo";
import { AgencyRole } from "@/components/sections/AgencyRole";
import { Marquee } from "@/components/sections/Marquee";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { WebDesignFAQ } from "@/components/sections/WebDesignFAQ";
import { Footer } from "@/components/layout/Footer";
import { ProjectModal } from "@/components/ui/ProjectModal";

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
        eyebrow="PPC ADVERTISING"
        titleMain="Get Your Business in Front"
        titleSub="of the"
        titleHighlight="Right Searches"
        description="When potential customers are actively searching for what you offer, paid search can put your business in front of them at the right moment. DIJIGRO manages PPC campaigns with a focus on relevant traffic, clear targeting, conversion tracking and continuous optimisation. From campaign setup to ongoing management, we help turn your advertising budget into measurable opportunities for your business."
      />

      <Badges />
      <PpcServices />
      <PpcSolutions />
      <PpcLocations />
      <PpcTrust />
      <Industries />
      <CTA />
      {/* <SelectedWork /> */}
      <BlogInsights />
      <AgencyInfo />
      <AgencyRole />
      <WebDesignFAQ 
        eyebrow="PPC FAQ"
        title="Frequently Asked Questions"
        faqs={[
          {
            q: "What is PPC advertising?",
            a: "PPC stands for Pay-Per-Click. It is a form of online advertising where advertisers generally pay when someone clicks on an advertisement."
          },
          {
            q: "What is the difference between PPC and SEO?",
            a: "PPC uses paid advertising to gain visibility, while SEO focuses on improving organic visibility in search engines. They can be used together as part of a broader search strategy."
          },
          {
            q: "Do you manage Google Ads?",
            a: "Yes. We can help with Google Ads campaign planning, setup, keyword targeting, ad creation, conversion tracking and ongoing optimisation."
          },
          {
            q: "Can you manage an existing Google Ads account?",
            a: "Yes. We can review an existing account, identify opportunities and optimise the current campaigns where appropriate."
          },
          {
            q: "Can PPC generate leads?",
            a: "Yes. PPC campaigns can be structured around lead-generation actions such as enquiry forms, phone calls, registrations and other defined conversions."
          },
          {
            q: "Do you manage Google Shopping campaigns?",
            a: "Yes. We can support ecommerce businesses with Shopping campaigns and product-focused paid advertising."
          },
          {
            q: "Can you run remarketing campaigns?",
            a: "Yes. Where suitable, remarketing can be used to reconnect with people who have previously interacted with your website or business."
          },
          {
            q: "How do you measure PPC performance?",
            a: "Measurement depends on the campaign objective. Common measures include clicks, conversion rate, cost per conversion, leads, enquiries, purchases and revenue where reliable tracking is available."
          },
          {
            q: "How quickly can PPC start generating traffic?",
            a: "Paid campaigns can begin receiving traffic once they are approved and active, but meaningful optimisation requires ongoing monitoring and sufficient performance data."
          },
          {
            q: "Can you guarantee a specific number of leads or sales?",
            a: "No. PPC performance depends on factors such as competition, targeting, offer, landing page, budget, market conditions and customer behaviour. Campaigns should be tested and optimised rather than based on guaranteed outcomes."
          }
        ]}
      />
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
