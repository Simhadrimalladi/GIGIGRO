"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Badges } from "@/components/sections/Badges";
import { SeoServices } from "@/components/sections/SeoServices";
import { SeoSolutions } from "@/components/sections/SeoSolutions";
import { SeoLocations } from "@/components/sections/SeoLocations";
import { SeoTrust } from "@/components/sections/SeoTrust";
// import { Industries } from "@/components/sections/Industries";
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
        eyebrow="SEO • AEO • GEO"
        titleMain="Be Found Where Your Customers"
        titleSub="Are"
        titleHighlight="Searching"
        description="Search is changing. People are no longer discovering businesses only through traditional search results. They are also asking questions, comparing options and looking for recommendations through AI-powered search experiences. DIJIGRO helps businesses build a stronger and more discoverable online presence through SEO, Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO). We focus on the fundamentals that matter: useful content, strong technical foundations, clear information, relevant topics and a website that search systems can understand."
      />

      <Badges />
      <SeoServices />
      <SeoSolutions />
      <SeoLocations />
      <SeoTrust />
      {/* <Industries /> */}
      <CTA />
      {/* <SelectedWork /> */}
      <BlogInsights />
      <AgencyInfo />
      <AgencyRole />
      <WebDesignFAQ 
        eyebrow="SEO, AEO & GEO FAQ"
        title="Frequently Asked Questions"
        faqs={[
          {
            q: "What is SEO?",
            a: "SEO, or Search Engine Optimization, is the practice of improving a website so search engines can better discover, understand and surface its pages for relevant searches."
          },
          {
            q: "What is AEO?",
            a: "AEO stands for Answer Engine Optimization. It focuses on making information clear and useful for question-based searches and answer-focused search experiences."
          },
          {
            q: "What is GEO?",
            a: "GEO stands for Generative Engine Optimization. It is a term used for work intended to improve a website's visibility or representation in generative AI search experiences."
          },
          {
            q: "Is AEO replacing SEO?",
            a: "No. SEO remains an important foundation for search visibility, including Google's AI search experiences. AEO can be considered an extension of creating clear, useful answers for changing search behaviour rather than a replacement for SEO."
          },
          {
            q: "Is GEO a separate ranking system?",
            a: "Not in the sense of a separate Google ranking system. Google describes AEO and GEO as terms used for work focused on AI search visibility, while its guidance says the established SEO fundamentals remain relevant to generative AI features."
          },
          {
            q: "Can you guarantee Google rankings or AI visibility?",
            a: "No responsible SEO provider can guarantee a specific ranking or guarantee that a page will appear in an AI-generated answer. Our focus is on improving the technical quality, usefulness, relevance and clarity of your digital presence."
          },
          {
            q: "How long does SEO take to show results?",
            a: "SEO usually requires consistent work and measurement over time. The timeframe can vary significantly depending on your website, competition, industry, current authority, technical condition and the work required."
          },
          {
            q: "Do you provide Local SEO?",
            a: "Yes. We can improve local search visibility for businesses that serve specific locations or communities."
          },
          {
            q: "Can you optimize existing content?",
            a: "Yes. We can review existing pages and improve their structure, clarity, search intent alignment and usefulness instead of replacing everything unnecessarily."
          },
          {
            q: "Do you provide ongoing SEO services?",
            a: "Yes. Ongoing SEO can include technical improvements, content optimisation, search research, authority-building activities, monitoring and regular strategy refinement."
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
