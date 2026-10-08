"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, MapPin, Star } from "lucide-react";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  location: string;
  rating: number;
}

export function WebDesignTestimonial() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "DIJIGRO revamped our entire e-commerce portal and performance marketing funnel. Our monthly order volume increased by 300% within just 60 days of launch! Their attention to speed and user experience is truly world-class.",
      author: "Rajesh Sharma",
      role: "Founder & CEO",
      company: "Apex Retail India",
      location: "Mumbai",
      rating: 5
    },
    {
      id: 2,
      quote: "The web development and UI/UX design executed by DIJIGRO exceeded all our expectations. They delivered a high-performance React application with zero bugs and sub-second page loading speed. Outstanding communication throughout!",
      author: "Ananya Reddy",
      role: "Co-Founder",
      company: "HealthTech Solutions",
      location: "Hyderabad",
      rating: 5
    },
    {
      id: 3,
      quote: "Working with DIJIGRO has been a game-changer for our B2B brand. Their SEO and digital marketing strategy brought us organic top 3 rankings for our primary keywords in under 4 months. Highly recommended!",
      author: "Vikram Verma",
      role: "Managing Director",
      company: "SunRise Enterprise",
      location: "Bengaluru",
      rating: 5
    },
    {
      id: 4,
      quote: "The team at DIJIGRO built our Shopify e-commerce store with seamless payment gateway integration and mobile-first responsive design. Sales started coming in from Day 1! Their ongoing technical support is top-notch.",
      author: "Priya Nair",
      role: "Head of E-Commerce",
      company: "Vibe Fashion Store",
      location: "Visakhapatnam",
      rating: 5
    },
    {
      id: 5,
      quote: "Extremely professional technical team! DIJIGRO migrated our legacy monolith to a lightning-fast Next.js architecture. Our Google PageSpeed score went from 42 to 99/100 instantly. Best agency decision we made.",
      author: "Suresh Kumar",
      role: "Chief Technology Officer",
      company: "FinEdge Digital",
      location: "Chennai",
      rating: 5
    },
    {
      id: 6,
      quote: "DIJIGRO’s PPC and performance marketing campaigns delivered a massive 4.8x ROAS for our product launches. Their weekly analytics reports and proactive optimization make them an invaluable growth partner.",
      author: "Kavita Joshi",
      role: "Marketing Director",
      company: "EcoLiving Products",
      location: "Delhi NCR",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic slide loop every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="bg-[#050505] py-24 text-white border-t border-[#222222] relative overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-6 text-center relative z-10">
        
        {/* Carousel Slide Area with Side Arrows */}
        <div className="relative min-h-[260px] flex flex-col justify-center items-center">
          
          {/* Quote Mark */}
          <div className="text-[#38BDF8] text-[72px] leading-none mb-1 font-serif select-none opacity-80">
            &quot;
          </div>

          {/* Comment Block with Left and Right Arrows */}
          <div className="w-full flex items-center justify-between gap-4 md:gap-8 my-2">
            
            {/* Left Arrow Button */}
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="shrink-0 w-11 h-11 rounded-full bg-[#111111] border border-[#2A2A2A] flex items-center justify-center text-[#A3A3A3] hover:text-white hover:border-[#38BDF8] hover:bg-[#38BDF8]/15 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <ChevronLeft className="w-6 h-6 text-[#38BDF8]" />
            </button>

            {/* Testimonial Quote Text */}
            <p key={current.id} className="flex-1 text-[19px] sm:text-[25px] md:text-[28px] font-medium leading-[1.45] italic text-[#F5F5F5] max-w-[850px] transition-all duration-500">
              {current.quote}
            </p>

            {/* Right Arrow Button */}
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="shrink-0 w-11 h-11 rounded-full bg-[#111111] border border-[#2A2A2A] flex items-center justify-center text-[#A3A3A3] hover:text-white hover:border-[#38BDF8] hover:bg-[#38BDF8]/15 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <ChevronRight className="w-6 h-6 text-[#38BDF8]" />
            </button>

          </div>

          {/* 5-Star Rating & Author Info */}
          <div className="flex flex-col items-center gap-2 mt-6">
            <div className="flex items-center gap-1 text-[#F4B400]">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#F4B400] text-[#F4B400]" />
              ))}
            </div>
            
            <h4 className="text-[17px] font-bold text-white tracking-wide">
              {current.author}
            </h4>
            
            <p className="text-[#A3A3A3] text-[13px] font-light flex items-center gap-2">
              <span>{current.role}, <strong className="text-white font-normal">{current.company}</strong></span>
              <span className="text-[#444444]">•</span>
              <span className="flex items-center gap-1 text-[#38BDF8] font-medium">
                <MapPin className="w-3.5 h-3.5" /> {current.location}
              </span>
            </p>
          </div>
        </div>

        {/* Centered Automatic Slide Dots Indicator */}
        <div className="flex items-center justify-center gap-2.5 mt-10 pt-8 border-t border-[#1F1F1F]">
          {testimonials.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`transition-all duration-500 rounded-full ${
                currentIndex === idx
                  ? "w-8 h-2.5 bg-[#38BDF8] shadow-[0_0_12px_rgba(56,189,248,0.6)]"
                  : "w-2.5 h-2.5 bg-[#262626] hover:bg-[#555555]"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}



