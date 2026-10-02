"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
// import { Badges } from "@/components/sections/Badges";
import { WebDevelopmentServices } from "@/components/sections/WebDevelopmentServices";
import { WebDevelopmentMastery } from "@/components/sections/WebDevelopmentMastery";
import { WebDesignCompany } from "@/components/sections/WebDesignCompany";

import { WebDesignTestimonial } from "@/components/sections/WebDesignTestimonial";
import { WebDesignClients } from "@/components/sections/WebDesignClients";
import { WebDesignConsultancy } from "@/components/sections/WebDesignConsultancy";
import { WebDesignCMS } from "@/components/sections/WebDesignCMS";
import { WebDesignTools } from "@/components/sections/WebDesignTools";
import { WebDesignFAQ } from "@/components/sections/WebDesignFAQ";
import { Industries } from "@/components/sections/Industries";
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
        eyebrow="TOP RATED AND AWARD WINNING"
        titleMain="Web Development Agency in\nUK"
        titleSub="That"
        titleHighlight="Delivers Results"
        description="Accelerate your business growth with our multi award-winning Agency in UK, offering a broad spectrum of tailored digital solutions. With headquarters in the UK and branches worldwide, our proven expertise ensures you outpace the competition and achieve measurable success."
      />

      {/* <Badges /> */}
      <WebDevelopmentServices />
      <WebDevelopmentMastery />
      <WebDesignCompany />
    
      <WebDesignTestimonial />
      <WebDesignClients />
      <Industries />
      <WebDesignConsultancy />
      <WebDesignCMS />
      <WebDesignTools />
    
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
