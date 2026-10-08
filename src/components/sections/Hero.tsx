"use client";

import React, { useRef } from "react";
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
  eyebrow = "DIGITAL MARKETING • WEB DESIGN • WEB DEVELOPMENT",
  titleMain = "Digital Marketing That Helps",
  titleSub = "Your",
  titleHighlight = "Business Grow",
  description = "Your digital presence should do more than look good. It should help people find your business, understand what you offer and take the next step. DIJIGRO brings digital marketing, creative strategy, web design and web development together to build online experiences that support real business goals.",
  showFormAndLogos = true
}: HeroProps) {
  const containerRef = useRef<HTMLElement | null>(null);
  const eyebrowRef = useRef<HTMLDivElement | null>(null);
  const headlineRef = useRef<HTMLHeadingElement | null>(null);
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);
  const underlinePathRef = useRef<SVGPathElement | null>(null);

  // Fallback calculation so titleHighlight with SVG underline ALWAYS renders on every page
  let displayMain = titleMain;
  const displaySub = titleSub;
  let displayHighlight = titleHighlight;

  if (!displayHighlight && titleMain) {
    const words = titleMain.trim().split(" ");
    if (words.length >= 3) {
      displayHighlight = words.slice(-2).join(" ");
      displayMain = words.slice(0, -2).join(" ");
    } else if (words.length > 1) {
      displayHighlight = words[words.length - 1];
      displayMain = words.slice(0, -1).join(" ");
    } else {
      displayHighlight = titleMain;
      displayMain = "";
    }
  }

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
    onStartProject();
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
            {displayMain && (
              <span className="hero-heading-main whitespace-pre-line">
                {displayMain}
              </span>
            )}
            {displayHighlight && (
              <span className="hero-heading-sub">
                {displaySub ? `${displaySub} ` : ""}
                <em className="animated">
                  {displayHighlight}
                  {/* Hand-drawn blue curved underline stroke */}
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
            )}
          </h1>

          {/* Subtitle Paragraph */}
          <p ref={paragraphRef} className="hero-paragraph">
            {description}
          </p>

          {/* Interactive Form with zero inline styles */}
          {showFormAndLogos && (
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="hero-form"
            >
              <button type="submit" className="btn-proposal">
                GET MY FREE PROPOSAL
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
