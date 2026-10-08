"use client";

import React from "react";
import Link from "next/link";
import { DijigroLogo } from "../ui/DijigroLogo";
import { MapPin, Mail, Clock, ArrowUpRight } from "lucide-react";

export function Footer() {
  const socialLinks = [
    {
      name: "Facebook",
      href: "https://facebook.com",
      hoverClass: "hover:border-[#1877F2] hover:bg-[#1877F2]/15 hover:shadow-[0_0_15px_rgba(24,119,242,0.4)]",
      icon: (
        <svg className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="12" fill="#1877F2"/>
          <path d="M15.36 12.073h-2.285v7.427h-3.07v-7.427H8.385V9.43h1.62V7.787c0-2.317 1.345-3.597 3.498-3.597 1.031 0 2.11.184 2.11.184v2.32h-1.188c-1.149 0-1.507.713-1.507 1.446v1.29h2.614l-.418 2.643z" fill="#FFFFFF"/>
        </svg>
      )
    },
    {
      name: "Instagram",
      href: "https://instagram.com",
      hoverClass: "hover:border-[#E4405F] hover:bg-[#E4405F]/15 hover:shadow-[0_0_15px_rgba(228,64,95,0.4)]",
      icon: (
        <svg className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none">
          <defs>
            <radialGradient id="igGrad" cx="30%" cy="107%" r="150%" fx="30%" fy="107%">
              <stop offset="0%" stopColor="#fdf497" />
              <stop offset="5%" stopColor="#fdf497" />
              <stop offset="45%" stopColor="#fd5949" />
              <stop offset="60%" stopColor="#d6249f" />
              <stop offset="90%" stopColor="#285AEB" />
            </radialGradient>
          </defs>
          <rect width="24" height="24" rx="6" fill="url(#igGrad)" />
          <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3zm4.5-8.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16.2c-3.97 0-7.2-3.23-7.2-7.2S8.03 4.8 12 4.8s7.2 3.23 7.2 7.2-3.23 7.2-7.2 7.2z" fill="#FFFFFF"/>
        </svg>
      )
    },
    {
      name: "Twitter / X",
      href: "https://twitter.com",
      hoverClass: "hover:border-white/40 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]",
      icon: (
        <svg className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="6" fill="#000000" stroke="#333333" strokeWidth="1"/>
          <path d="M17.18 5h2.2l-4.8 5.49L20.22 19h-4.43l-3.47-4.54L8.35 19H6.15l5.14-5.87L6 5h4.54l3.14 4.15L17.18 5zm-.77 12.68h1.22L9.67 6.26H8.36l8.05 11.42z" fill="#FFFFFF"/>
        </svg>
      )
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      hoverClass: "hover:border-[#0A66C2] hover:bg-[#0A66C2]/15 hover:shadow-[0_0_15px_rgba(10,102,194,0.4)]",
      icon: (
        <svg className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="5" fill="#0A66C2" />
          <path d="M19 19h-3v-4.74c0-1.42-.56-2.38-1.83-2.38-1 0-1.57.67-1.83 1.32-.1.23-.08.56-.08.89V19h-3s.04-9.25 0-10.2h3v1.54c.4-.62 1.11-1.5 2.7-1.5 1.97 0 3.45 1.29 3.45 4.06V19zM7.88 7.5a1.69 1.69 0 1 0 0-3.38 1.69 1.69 0 0 0 0 3.38zM6.38 19h3V8.8h-3V19z" fill="#FFFFFF"/>
        </svg>
      )
    },
    {
      name: "YouTube",
      href: "https://youtube.com",
      hoverClass: "hover:border-[#FF0000] hover:bg-[#FF0000]/15 hover:shadow-[0_0_15px_rgba(255,0,0,0.4)]",
      icon: (
        <svg className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="6" fill="#FF0000"/>
          <path d="M10 15l5.19-3L10 9v6z" fill="#FFFFFF"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-[#030508] text-[#F5F5F5] pt-20 pb-12 border-t border-[#151D2A]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Main Grid: 4 Modern Agency Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 pb-16 border-b border-[#151D2A]">
          
          {/* Column 1: Brand & Overview */}
          <div className="space-y-5">
            <div className="w-[130px]">
              <DijigroLogo />
            </div>
            <p className="text-[13px] text-[#94A3B8] leading-[1.7] font-light">
              DIJIGRO is a full-service digital agency specializing in high-performance digital marketing, bespoke web design, and scalable web engineering for growing brands worldwide.
            </p>
            <div className="pt-2">
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 text-[13px] font-bold text-black bg-[#38BDF8] px-5 py-2.5 rounded-full hover:bg-[#7dd3fc] transition-all shadow-[0_0_20px_rgba(56,189,248,0.25)] hover:shadow-[0_0_25px_rgba(56,189,248,0.45)] group"
              >
                <span>Start A Project</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Column 2: Web Solutions */}
          <div className="space-y-4 lg:pl-4">
            <h4 className="text-[12px] font-bold tracking-widest text-[#38BDF8] uppercase font-mono">
              WEB SOLUTIONS
            </h4>
            <ul className="space-y-2.5 text-[13px] font-light text-[#94A3B8]">
              <li><Link href="/services/web/web-design" className="hover:text-white transition-colors">Bespoke Web Design</Link></li>
              <li><Link href="/services/web/web-development" className="hover:text-white transition-colors">Web Development</Link></li>
              <li><Link href="/services/web/ecommerce" className="hover:text-white transition-colors">Ecommerce Platforms</Link></li>
              <li><Link href="/services/web/website-support" className="hover:text-white transition-colors">Website Support & Care</Link></li>
              <li><Link href="/services/web/web-hosting" className="hover:text-white transition-colors">Managed Web Hosting</Link></li>
            </ul>
          </div>

          {/* Column 3: Digital Marketing */}
          <div className="space-y-4 lg:pl-4">
            <h4 className="text-[12px] font-bold tracking-widest text-[#38BDF8] uppercase font-mono">
              DIGITAL MARKETING
            </h4>
            <ul className="space-y-2.5 text-[13px] font-light text-[#94A3B8]">
              <li><Link href="/services/digital-marketing/seo" className="hover:text-white transition-colors">SEO & Search Visibility</Link></li>
              <li><Link href="/services/digital-marketing/performance-marketing" className="hover:text-white transition-colors">Performance Marketing</Link></li>
              <li><Link href="/services/digital-marketing/ppc" className="hover:text-white transition-colors">PPC & Paid Ads</Link></li>
              <li><Link href="/services/digital-marketing/social-media" className="hover:text-white transition-colors">Social Media Marketing</Link></li>
              <li><Link href="/quote" className="hover:text-white transition-colors">Get A Free Quote</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & Office Location */}
          <div className="space-y-4">
            <h4 className="text-[12px] font-bold tracking-widest text-white uppercase font-mono">
              GET IN TOUCH
            </h4>
            <div className="space-y-3.5 text-[13px] text-[#94A3B8] font-light leading-[1.6]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#38BDF8] shrink-0 mt-1" />
                <div>
                  <p className="text-white font-medium">Flat No. JV202, JV Gardens,</p>
                  <p>Employees Colony, Road No.1, Srinagar,</p>
                  <p>Gajuwaka, Visakhapatnam,</p>
                  <p>Andhra Pradesh - 530026 (India)</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5 pt-1">
                <Mail className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <a href="mailto:support@dijigro.com" className="hover:text-white transition-colors text-white font-medium">
                  support@dijigro.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <span>Mon - Fri: 09:00 - 18:00 IST</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Google Rating Badge, Social Media Icons, Copyright & Legal Links */}
        <div className="pt-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* Left: Google Rating Badge & Social Icons */}
          <div className="flex flex-wrap items-center gap-6">
            {/* Google Rating Badge */}
            <div className="bg-[#0B111A] border border-[#1E293B] px-3.5 py-2 rounded-xl flex items-center gap-3 shadow-md">
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
                <span className="text-[13px] font-semibold text-white whitespace-nowrap">
                  Google Rating
                </span>
              </div>
              <div className="flex items-center gap-1 text-[12px] font-bold text-white whitespace-nowrap">
                5.0 <span className="text-[#F4B400] text-[13px]">★★★★★</span>
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="hidden sm:block w-[1px] h-8 bg-[#1E293B]" />

            {/* Social Icons */}
            <div className="flex items-center gap-2.5">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className={`group w-9 h-9 rounded-full bg-[#0B111A] border border-[#1E293B] flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 ${item.hoverClass}`}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Copyright & Legal Links */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-[12px] text-[#94A3B8] font-light">
            <span>© {new Date().getFullYear()} DIJIGRO. All rights reserved.</span>
            <span className="hidden sm:inline text-[#334155]">•</span>
            <div className="flex items-center gap-4">
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
