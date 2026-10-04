"use client";

import React, { useEffect, useState } from "react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    // Run once on mount to handle initial state if page is refreshed down scroll
    toggleVisibility();

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top of page"
      className={`fixed bottom-7 right-7 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-[#111111]/90 backdrop-blur-md text-white border border-[#333333] shadow-2xl transition-all duration-300 ease-out hover:bg-[#38BDF8] hover:text-[#000000] hover:border-[#38BDF8] hover:scale-110 active:scale-95 group ${
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <svg
        className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
