"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Badges } from "@/components/sections/Badges";
import { SocialMediaServices } from "@/components/sections/SocialMediaServices";
import { SocialMediaSolutions } from "@/components/sections/SocialMediaSolutions";
import { SocialMediaLocations } from "@/components/sections/SocialMediaLocations";
import { SocialMediaTrust } from "@/components/sections/SocialMediaTrust";
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
        eyebrow="SOCIAL MEDIA MARKETING"
        titleMain="Build a Social Presence"
        titleSub="People Want to"
        titleHighlight="Follow"
        description="Social media is more than posting regularly. Your brand needs the right message, the right content and a clear reason for people to engage with you. DIJIGRO helps businesses build a consistent social media presence through strategy, content creation, audience engagement and ongoing optimisation. We create social media plans that are built around your brand, your audience and what you want your social channels to achieve."
      />

      <Badges />
      <SocialMediaServices />
      <SocialMediaSolutions />
      <SocialMediaLocations />
      <SocialMediaTrust />
      <Industries />
      <CTA />
      {/* <SelectedWork /> */}
      <BlogInsights />
      <AgencyInfo />
      <AgencyRole />
      <WebDesignFAQ 
        eyebrow="SOCIAL MEDIA FAQ"
        title="Frequently Asked Questions"
        faqs={[
          {
            q: "What is social media marketing?",
            a: "Social media marketing uses social platforms to help businesses communicate with their audience, build awareness, generate engagement and support broader marketing goals."
          },
          {
            q: "Which social media platforms do you manage?",
            a: "The right platforms depend on your business, audience and objectives. We focus on the channels where your target audience is most relevant rather than trying to maintain every platform."
          },
          {
            q: "Do you create social media content?",
            a: "Yes. We can support content planning, post copy, creative concepts, graphics and suitable short-form video content based on your requirements."
          },
          {
            q: "Do you manage social media accounts?",
            a: "Yes. Social media management can include content planning, scheduling, publishing, monitoring and ongoing coordination."
          },
          {
            q: "Can you help with Instagram and Facebook?",
            a: "Yes. Where these platforms are relevant to your audience and goals, we can plan and manage content for them."
          },
          {
            q: "Can you manage LinkedIn for businesses?",
            a: "Yes. We can create professional social content for businesses and B2B brands where LinkedIn is an appropriate channel."
          },
          {
            q: "Do you provide social media advertising?",
            a: "Yes. Paid social campaigns can be part of a broader social media strategy. Detailed paid campaign management is also covered through our Performance Marketing and PPC services."
          },
          {
            q: "How often should a business post on social media?",
            a: "There is no single posting frequency that works for every business. The right schedule depends on your audience, content resources, platform and goals. Consistent, useful content is more important than posting simply to meet a number."
          },
          {
            q: "Can you manage comments and messages?",
            a: "Yes. Depending on the agreed scope, we can help monitor and manage audience interactions and maintain an appropriate brand voice."
          },
          {
            q: "How do you measure social media performance?",
            a: "Depending on your objectives, we can monitor measures such as reach, engagement, audience growth, content performance, website visits, enquiries and other meaningful actions."
          },
          {
            q: "Can social media generate leads and sales?",
            a: "Yes, social media can contribute to lead generation and sales, but results depend on factors such as the offer, audience, content, platform, campaign strategy and customer journey."
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
