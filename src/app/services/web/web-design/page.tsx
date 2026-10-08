"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
// import { Badges } from "@/components/sections/Badges";
import { WebDesignServices } from "@/components/sections/WebDesignServices";
import { WebDesignMastery } from "@/components/sections/WebDesignMastery";
// import { WebDesignWork } from "@/components/sections/WebDesignWork";
import { WebDesignTestimonial } from "@/components/sections/WebDesignTestimonial";
import { WebDesignConsultancy } from "@/components/sections/WebDesignConsultancy";
import { WebDesignCMS } from "@/components/sections/WebDesignCMS";
import { WebDesignTools } from "@/components/sections/WebDesignTools";
import { WebDesignFAQ } from "@/components/sections/WebDesignFAQ";
// import { Industries } from "@/components/sections/Industries";
import { Footer } from "@/components/layout/Footer";
import { ProjectModal } from "@/components/ui/ProjectModal";

export default function WebDesignPage() {
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
        onStartProject={(url) => handleOpenProject("Web Design", url)}
        eyebrow="WEB DESIGN"
        titleMain="Websites Designed for People and"
        titleSub="Built for"
        titleHighlight="Business"
        description="Your website is often the first place people experience your brand. We design professional, responsive websites that make your business easy to understand, simple to navigate and ready to turn visitors into enquiries, customers or opportunities. Whether you need a new business website, an ecommerce store or a complete website redesign, we create the experience around your brand, audience and goals."
      />

      <WebDesignServices />
      <WebDesignMastery />
      {/* <WebDesignWork /> */}
      <WebDesignTestimonial />
      {/* <Industries /> */}
      <WebDesignConsultancy variant="design" />
      <WebDesignCMS variant="design" />
      <WebDesignTools variant="design" />
      
      <WebDesignFAQ />
   
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
