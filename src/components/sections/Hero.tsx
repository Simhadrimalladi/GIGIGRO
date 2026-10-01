"use client";

import React, { useRef, useState } from "react";
import { GoldenGlobeCanvas } from "../ui/GoldenGlobeCanvas";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface HeroProps {
  onStartProject: (websiteUrl?: string) => void;
  eyebrow?: string;
  titleMain?: string;
  titleSub?: string;
  titleHighlight?: string;
  description?: string;
  showFormAndLogos?: boolean;
}

export function Hero({ 
  onStartProject,
  eyebrow = "TOP RATED DIGITAL AGENCY",
  titleMain = "Transforming Brands With In Innovation",
  titleSub = "That",
  titleHighlight = "Drives Growth",
  description = "Accelerate your business growth with our multi award-winning, full-service digital agency. We offer a broad spectrum of tailored digital solutions designed to elevate your brand. With proven expertise and a global presence, we ensure you outpace the competition and achieve measurable success.",
  showFormAndLogos = true
}: HeroProps) {
  const [websiteUrl, setWebsiteUrl] = useState("");
  const containerRef = useRef<HTMLElement | null>(null);
  const eyebrowRef = useRef<HTMLDivElement | null>(null);
  const headlineRef = useRef<HTMLHeadingElement | null>(null);
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);
  const underlinePathRef = useRef<SVGPathElement | null>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(eyebrowRef.current, {
        opacity: 0,
        y: -15,
        duration: 0.7,
        delay: 0.1,
      })
        .from(
          headlineRef.current,
          {
            opacity: 0,
            y: 35,
            duration: 1.1,
          },
          "-=0.4"
        )
        .from(
          underlinePathRef.current,
          {
            strokeDashoffset: 350,
            duration: 1.2,
            ease: "power2.out",
          },
          "-=0.6"
        )
        .from(
          paragraphRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.8,
          },
          "-=0.7"
        )
        .from(
          formRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.8,
          },
          "-=0.5"
        );
    },
    { scope: containerRef }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onStartProject(websiteUrl);
  };

  return (
    <section ref={containerRef} className="hero-section">
      {/* Golden Globe Shimmering Stardust Graphic */}
      <GoldenGlobeCanvas className="z-0 opacity-95" />

      {/* Main Banner Content */}
      <div className="hero-inner">
        <div className="hero-content">
          {/* Eyebrow */}
          <div ref={eyebrowRef} className="hero-eyebrow">
            <span className="hero-eyebrow-text">
              {eyebrow}
            </span>
          </div>

          {/* Main Headline - Exact typography hierarchy from reference */}
          <h1 ref={headlineRef} className="hero-heading">
            <span className="hero-heading-main whitespace-pre-line">
              {titleMain}
            </span>
            <span className="hero-heading-sub">
              {titleSub}{" "}
              <em className="animated">
                {titleHighlight}
                {/* Hand-drawn yellow curved underline stroke */}
                <svg
                  className="hero-underline-svg"
                  viewBox="0 0 320 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    ref={underlinePathRef}
                    d="M4 12 C 60 17, 140 18, 220 12 C 265 8, 295 7, 316 11"
                    className="hero-underline-path"
                  />
                </svg>
              </em>
            </span>
          </h1>

          {/* Subtitle Paragraph */}
          <p ref={paragraphRef} className="hero-paragraph">
            {description}
          </p>

          {/* Interactive Form with zero inline styles */}
          {showFormAndLogos && (
            <>
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="hero-form"
              >
                <div className="hero-input-wrapper">
                  <input
                    type="text"
                    value={websiteUrl}
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                    placeholder="Website URL *"
                    className="hero-input"
                  />
                  {!websiteUrl && (
                    <div className="hero-input-placeholder">
                      <span>Website URL</span>
                      <span className="hero-input-required">*</span>
                    </div>
                  )}
                </div>

                <button type="submit" className="btn-proposal">
                  GET MY FREE PROPOSAL
                </button>
              </form>

              {/* Review Badges from reference */}
              <div className="hero-reviews">
                <div className="hero-review-item">
                  <span className="hero-review-brand">
                    <span className="hero-review-star">★</span>
                    Trustpilot
                  </span>
                </div>

                <div className="hero-review-item">
                  <span className="hero-review-brand hero-brand-google">
                    Google
                  </span>
                </div>

                <div className="hero-review-item">
                  <span className="hero-review-brand hero-brand-goodfirms">
                    <svg
                      className="goodfirms-svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M4 4h7v7H4V4zm9 0h7v7h-7V4zm-9 9h7v7H4v-7zm9 0h7v7h-7v-7z" />
                    </svg>
                    GoodFirms
                  </span>
                </div>

                <div className="hero-review-item">
                  <span className="hero-review-brand hero-brand-clutch">
                    Clutch
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
