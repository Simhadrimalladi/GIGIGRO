"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { DijigroLogo } from "../ui/DijigroLogo";
import { MobileNav } from "./MobileNav";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { usePathname, useRouter } from "next/navigation";

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(
    () => {
      gsap.from(headerRef.current, {
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    },
    { scope: headerRef }
  );

  const handleLogoClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        ref={headerRef}
        className={`dijigro-header mix-blend-difference text-white pointer-events-none ${
          isScrolled ? "dijigro-header-scrolled" : ""
        }`}
      >
        <div className="dijigro-header-inner">
          {/* Logo - Official DIJIGRO Text with mix-blend-difference */}
          <Link 
            href="/" 
            aria-label="DIJIGRO Home" 
            className="pointer-events-auto"
            onClick={handleLogoClick}
          >
            <DijigroLogo hideArrow={true} />
          </Link>

          {/* Right Actions: Hamburger only in the mix-blend layer */}
          <div className="dijigro-header-actions pointer-events-none">
            {/* Invisible spacer for the quote button to maintain layout */}
            <div className="w-[95px] sm:w-[130px] h-[32px] sm:h-[38px] opacity-0" />

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close Menu" : "Open Navigation Menu"}
              className="btn-hamburger pointer-events-auto"
            >
              {mobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              ) : (
                <>
                  <span />
                  <span />
                  <span />
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Parallel layer for the button and pure Sky Blue arrow to escape mix-blend-difference */}
      <div className="fixed top-0 left-0 right-0 z-[10000] pointer-events-none dijigro-header-padding-sync">
        <div className="dijigro-header-inner">
          <Link 
            href="/" 
            aria-label="DIJIGRO Home" 
            className="pointer-events-auto"
            onClick={handleLogoClick}
          >
            <DijigroLogo arrowOnly={true} />
          </Link>
          <div className="dijigro-header-actions pointer-events-none">
            <Link
              href="/quote"
              className="btn-quote pointer-events-auto"
            >
              GET A QUOTE
            </Link>
            {/* Invisible spacer for the hamburger to maintain layout */}
            <div className="w-[24px] h-[38px] opacity-0" />
          </div>
        </div>
      </div>

      <MobileNav
        open={mobileMenuOpen}
        onOpenChange={setMobileMenuOpen}
        onStartProject={(id?: string) => {
          if (id) {
            router.push(`/quote?service=${id}`);
          } else {
            router.push('/quote');
          }
        }}
      />
    </>
  );
}
