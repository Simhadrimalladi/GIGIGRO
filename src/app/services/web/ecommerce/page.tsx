"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Badges } from "@/components/sections/Badges";
import { EcommerceServices } from "@/components/sections/EcommerceServices";
import { EcommerceSolutions } from "@/components/sections/EcommerceSolutions";
import { EcommerceLocations } from "@/components/sections/EcommerceLocations";
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
        eyebrow="ECOMMERCE"
        titleMain="Build an Online Store That"
        titleSub="Makes"
        titleHighlight="Buying Simple"
        description="Selling online is more than putting products on a website. Your customers need to find the right products quickly, understand what they are buying, trust your business and complete their purchase without unnecessary friction. DIJIGRO creates ecommerce websites that bring together design, functionality and user experience to help businesses build a stronger online store. Whether you are launching a new online shop or improving an existing one, we build around your products, customers and business goals."
      />

      <Badges />
      <EcommerceServices />
      <EcommerceSolutions />
      <EcommerceLocations />
      {/* <Industries /> */}
      <CTA />
      {/* <SelectedWork /> */}
      <BlogInsights />
      <AgencyInfo />
      <AgencyRole />
      <WebDesignFAQ 
        eyebrow="ECOMMERCE FAQ"
        title="Frequently Asked Questions"
        faqs={[
          {
            q: "Can you build a new ecommerce website from scratch?",
            a: "Yes. We can plan, design and develop a new ecommerce website based on your products, customers, business model and required features."
          },
          {
            q: "Can you redesign my existing online store?",
            a: "Yes. We can review your existing store and identify opportunities to improve its design, structure, usability and functionality."
          },
          {
            q: "Can I manage products and orders myself?",
            a: "Yes. Where a suitable ecommerce platform or content management system is used, your team can manage products, categories, orders and other store content."
          },
          {
            q: "Can you integrate payment gateways?",
            a: "Yes. We can integrate suitable payment solutions based on the platform, business requirements and available payment provider options."
          },
          {
            q: "Will my ecommerce website work on mobile?",
            a: "Yes. The store is designed and developed with responsive layouts so customers can browse and shop across different devices."
          },
          {
            q: "Can you help with ecommerce SEO?",
            a: "Yes. We can build the website with an SEO-friendly structure, and DIJIGRO also offers dedicated SEO services for businesses that want ongoing organic search growth."
          },
          {
            q: "Can you connect the store with other systems?",
            a: "Where technically suitable, ecommerce websites can be connected with relevant third-party tools, business systems and services."
          },
          {
            q: "Can you add more features later?",
            a: "Yes. We can plan the website with future growth in mind so additional features and improvements can be introduced as your business develops."
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
