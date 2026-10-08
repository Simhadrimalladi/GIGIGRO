"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface WebDesignCMSProps {
  eyebrow?: string;
  titleMain?: React.ReactNode;
  paragraphs?: string[];
  variant?: "design" | "development";
  onTalkClick?: () => void;
}

export function WebDesignCMS({
  eyebrow,
  titleMain,
  paragraphs,
  variant = "design",
  onTalkClick,
}: WebDesignCMSProps) {
  // Simple, Clear, Professional Content for Web Design
  const defaultDesignTitle = (
    <>
      Professional <span className="text-[#38BDF8]">Web Design</span> Crafted for Your Business
    </>
  );

  const defaultDesignParagraphs = [
    "Your website is often the first interaction customers have with your business. We design professional, custom websites tailored specifically around your brand identity, target audience, and growth objectives.",
    "Every visual element, layout structure, color scheme, and typography choice is carefully engineered to build immediate credibility and turn website visitors into active customers.",
    "We focus on intuitive navigation and seamless responsive design, ensuring your website looks stunning and functions perfectly on mobile devices, tablets, and desktop screens."
  ];

  // Simple, Clear, Professional Content for Web Development
  const defaultDevTitle = (
    <>
      Fast, Secure and Scalable <span className="text-[#38BDF8]">Web Development</span>
    </>
  );

  const defaultDevParagraphs = [
    "A great website must perform reliably behind the scenes. We engineer fast, secure, and robust web applications built to support the way your business operates day-to-day.",
    "Using modern coding standards and lightweight technical architecture, we guarantee instant page load speeds, airtight security, and smooth user interactions.",
    "Whether you need a business platform, e-commerce store, or custom web application, we develop scalable solutions that adapt and grow seamlessly alongside your business."
  ];

  const activeTitle = titleMain || (variant === "design" ? defaultDesignTitle : defaultDevTitle);
  const activeParagraphs = paragraphs || (variant === "design" ? defaultDesignParagraphs : defaultDevParagraphs);
  const activeEyebrow = eyebrow || (variant === "design" ? "CUSTOM WEB DESIGN" : "CUSTOM WEB DEVELOPMENT");

  const imageSrc = variant === "design" 
    ? "/images/web-design-showcase.jpg" 
    : "/images/web-development-showcase.jpg";

  return (
    <section className="bg-[#000000] text-[#FFFFFF] py-24 border-b border-[#1A1A1A]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Clean Showcase Image */}
        <div className="relative w-full aspect-[4/3] bg-[#0A0A0A] border border-[#222222] rounded-2xl overflow-hidden shadow-2xl group">
          <Image
            src={imageSrc}
            alt={variant === "design" ? "Web Design Showcase" : "Web Development Showcase"}
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Right Side: Simple & Clear Professional Content */}
        <div className="flex flex-col">
          <span className="text-[13px] font-bold text-[#38BDF8] tracking-widest uppercase block mb-3">
            {activeEyebrow}
          </span>
          <h2 className="text-[32px] md:text-[44px] font-bold tracking-tight leading-[1.15] mb-6 text-white">
            {activeTitle}
          </h2>
          
          <div className="space-y-5 text-[#A3A3A3] text-[15px] leading-[1.7] font-light">
            {activeParagraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-[#222222]">
            <p className="text-[17px] text-[#FFFFFF] font-light">
              Wanna discuss your project requirements?{" "}
              <Link
                href="/contact"
                className="text-[#38BDF8] font-semibold border-b border-[#38BDF8] pb-0.5 hover:text-[#FFFFFF] hover:border-[#FFFFFF] transition-colors"
                onClick={onTalkClick}
              >
                Let&apos;s talk
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


