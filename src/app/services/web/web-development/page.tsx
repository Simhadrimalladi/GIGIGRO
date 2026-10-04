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
        eyebrow="WEB DEVELOPMENT"
        titleMain="Web Development Built Around"
        titleSub="Your"
        titleHighlight="Business"
        description="A website should do more than display information. It should work reliably, load smoothly and support the way your business operates. DIJIGRO develops websites and web solutions that combine functionality, performance and usability, helping businesses turn their digital ideas into working experiences. From business websites and ecommerce platforms to custom web applications, we develop solutions based on your requirements rather than forcing every project into the same structure."
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
    
      <WebDesignFAQ 
        eyebrow="WEB DEVELOPMENT FAQ"
        title="Frequently Asked Questions"
        faqs={[
          {
            q: "What is web development?",
            a: "Web development is the process of building the functional and technical parts of a website or web application. It includes everything from page functionality and content management to integrations and interactive features."
          },
          {
            q: "Can you develop a website from an existing design?",
            a: "Yes. We can take an approved website design and convert it into a fully functional, responsive website."
          },
          {
            q: "Can you redesign and redevelop my existing website?",
            a: "Yes. We can assess the existing website and determine whether it is better to improve specific areas or rebuild the platform."
          },
          {
            q: "Do you build ecommerce websites?",
            a: "Yes. We develop ecommerce websites based on your products, customers, required features and purchasing process."
          },
          {
            q: "Do you develop custom web applications?",
            a: "Yes. When a business requires functionality beyond a standard website, we can plan and develop a tailored web application around the specific requirements."
          },
          {
            q: "Can you develop WordPress websites?",
            a: "Yes. WordPress can be used where it is a suitable choice for the project's content management and functionality requirements."
          },
          {
            q: "Will the website work on mobile devices?",
            a: "Yes. Responsive development is considered so the website can adapt to different screen sizes and devices."
          },
          {
            q: "Can you integrate third-party tools?",
            a: "Where technically appropriate, we can integrate websites with relevant external platforms, services and business systems."
          },
          {
            q: "Can you provide website maintenance after launch?",
            a: "Yes. Ongoing maintenance, updates and improvements can be planned according to the website and your business requirements."
          }
        ]}
      />
     
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
