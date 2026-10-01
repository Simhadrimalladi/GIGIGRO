"use client";

import React, { useState, useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Monitor, Megaphone, Pencil } from "lucide-react";

interface MobileNavProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onStartProject: (serviceId?: string) => void;
}

import { useRouter } from "next/navigation";

export function MobileNav({
  open,
  onOpenChange,
  onStartProject,
}: MobileNavProps) {
  const router = useRouter();
  const [view, setView] = useState<'main' | 'services' | 'web' | 'digital-marketing' | 'creative'>('main');

  // Reset to main view after menu closes
  useEffect(() => {
    if (!open) {
      const timer = setTimeout(() => setView('main'), 500);
      return () => clearTimeout(timer);
    }
  }, [open]);

  type NavLink = { label: string; href?: string; action?: () => void };
  type ServiceLink = { label: string; href?: string; id?: string; action?: () => void; icon?: React.ReactNode };

  const navLinks: NavLink[] = [
    { label: "ABOUT", href: "/about" },
    { label: "SERVICES", action: () => setView('services') },
    { label: "PORTFOLIO", href: "/portfolio" },
    { label: "BLOG", href: "/blog" },
    { label: "CONTACT US", href: "/contact" },
  ];

  // SERVICES Level
  const servicesMainRow1: ServiceLink[] = [
    { label: "WEB", action: () => setView('web'), icon: <Monitor className="w-6 h-6 sm:w-8 sm:h-8" /> },
    { label: "DIGITAL MARKETING", action: () => setView('digital-marketing'), icon: <Megaphone className="w-6 h-6 sm:w-8 sm:h-8" /> },
  ];
  const servicesMainRow2: ServiceLink[] = [
    { label: "CREATIVE", action: () => setView('creative'), icon: <Pencil className="w-6 h-6 sm:w-8 sm:h-8" /> },
  ];

  // CREATIVE Level
  const creativeRow1: ServiceLink[] = [
    { label: "BRANDING", href: "/services/creative/branding" },
    { label: "DESIGN", href: "/services/creative/design" },
    { label: "UI/UX", href: "/services/creative/ui-ux" },
  ];
  const creativeRow2: ServiceLink[] = [
    { label: "WEB DESIGN", href: "/services/web/web-design" },
  ];

  // WEB Level
  const webRow1: ServiceLink[] = [
    { label: "WEB DESIGN", href: "/services/web/web-design" },
    { label: "WEB DEVELOPMENT", href: "/services/web/web-development" },
  ];
  const webRow2: ServiceLink[] = [
    { label: "ECOMMERCE WEBSITES", href: "/services/web/ecommerce" },
    { label: "WEB HOSTING", href: "/services/web/web-hosting" },
  ];
  const webRow3: ServiceLink[] = [
    { label: "WEBSITE SUPPORT", href: "/services/web/website-support" },
  ];
  const webRow4: ServiceLink[] = [
    { label: "PAY MONTHLY WEBSITES", href: "/services/web/pay-monthly" },
  ];

  // DIGITAL MARKETING Level
  const dmRow1: ServiceLink[] = [
    { label: "WEBSITE DESIGN & DEV", href: "/services/web/web-design" },
    { label: "SEO OPTIMIZATION", href: "/services/digital-marketing/seo" },
  ];
  const dmRow2: ServiceLink[] = [
    { label: "GOOGLE & META ADS", href: "/services/digital-marketing/ppc" },
    { label: "SOCIAL MEDIA GROWTH", href: "/services/digital-marketing/social-media" },
  ];

  const handleLinkClick = (href?: string, action?: () => void) => {
    if (action) {
      action();
    } else if (href) {
      onOpenChange(false);
      if (href.startsWith('/')) {
        router.push(href);
      }
    }
  };

  const handleServiceClick = (id: string) => {
    onOpenChange(false);
    if (onStartProject) onStartProject(id);
  };

  const renderServiceRow = (row: ServiceLink[]) => (
    <div className="flex flex-row flex-wrap items-center justify-center gap-x-8 sm:gap-x-12 lg:gap-x-16 gap-y-6 w-full">
      {row.map((link, idx) => (
        <a
          key={link.label}
          href={link.href || "#"}
          onClick={(e) => {
            if (link.action) {
              e.preventDefault();
              link.action();
            } else if (link.id) {
              e.preventDefault();
              handleServiceClick(link.id);
            } else if (link.href) {
              onOpenChange(false);
            } else {
              e.preventDefault();
            }
          }}
          className="animate-text-slide-up flex items-center gap-3 sm:gap-4 text-[26px] sm:text-[38px] lg:text-[48px] font-bold tracking-tight text-white hover:text-[#38BDF8] transition-colors uppercase relative group cursor-pointer text-center"
          style={{ animationDelay: `${idx * 0.05 + 0.1}s` }}
        >
          {link.icon && (
            <span className="text-white group-hover:text-[#38BDF8] transition-colors flex items-center justify-center">
              {link.icon}
            </span>
          )}
          <span>{link.label}</span>
          <span className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-[3px] sm:h-[4px] bg-[#38BDF8] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></span>
        </a>
      ))}
    </div>
  );

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[9998] bg-transparent" />
        <Dialog.Content className="dialog-content fixed inset-0 z-[9998] flex flex-col items-center justify-center bg-[#000000] p-6 focus:outline-none overflow-y-auto">
          
          {view === 'main' && (
            <div className="w-full max-w-6xl mx-auto flex flex-row flex-wrap items-center justify-center gap-x-10 gap-y-8 sm:gap-x-16 lg:gap-x-24 animate-in fade-in duration-300">
              {navLinks.map((link, idx) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    if (link.action) {
                      e.preventDefault();
                      handleLinkClick(undefined, link.action);
                    } else {
                      handleLinkClick(link.href);
                    }
                  }}
                  className="animate-text-slide-up text-[32px] sm:text-[48px] lg:text-[64px] font-bold tracking-tight text-white hover:text-[#38BDF8] transition-colors uppercase block cursor-pointer"
                  style={{
                    animationDelay: `${idx * 0.1 + 0.2}s`
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}

          {view === 'services' && (
            <div className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center animate-in fade-in slide-in-from-bottom-10 duration-500 ease-out">
              <button 
                onClick={() => setView('main')}
                className="mb-12 sm:mb-20 px-6 py-2 border border-white/40 text-white uppercase font-bold text-lg tracking-wider hover:bg-white/10 hover:border-white transition-all cursor-pointer"
              >
                BACK
              </button>
              <div className="flex flex-col gap-y-10 sm:gap-y-14 w-full">
                {renderServiceRow(servicesMainRow1)}
                {renderServiceRow(servicesMainRow2)}
              </div>
            </div>
          )}

          {view === 'web' && (
            <div className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center animate-in fade-in slide-in-from-bottom-10 duration-500 ease-out">
              <button 
                onClick={() => setView('services')}
                className="mb-10 sm:mb-16 px-6 py-2 border border-white/40 text-white uppercase font-bold text-lg tracking-wider hover:bg-white/10 hover:border-white transition-all cursor-pointer"
              >
                BACK
              </button>
              <div className="flex flex-col gap-y-8 sm:gap-y-12 w-full items-center">
                {renderServiceRow(webRow1)}
                {renderServiceRow(webRow2)}
                {renderServiceRow(webRow3)}
                {renderServiceRow(webRow4)}
              </div>
            </div>
          )}

          {view === 'digital-marketing' && (
            <div className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center animate-in fade-in slide-in-from-bottom-10 duration-500 ease-out">
              <button 
                onClick={() => setView('services')}
                className="mb-12 sm:mb-20 px-6 py-2 border border-white/40 text-white uppercase font-bold text-lg tracking-wider hover:bg-white/10 hover:border-white transition-all cursor-pointer"
              >
                BACK
              </button>
              <div className="flex flex-col gap-y-10 sm:gap-y-14 w-full items-center">
                {renderServiceRow(dmRow1)}
                {renderServiceRow(dmRow2)}
              </div>
            </div>
          )}

          {view === 'creative' && (
            <div className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center animate-in fade-in slide-in-from-bottom-10 duration-500 ease-out">
              <button 
                onClick={() => setView('services')}
                className="mb-12 sm:mb-20 px-6 py-2 border border-white/40 text-white uppercase font-bold text-lg tracking-wider hover:bg-white/10 hover:border-white transition-all cursor-pointer"
              >
                BACK
              </button>
              <div className="flex flex-col gap-y-10 sm:gap-y-14 w-full items-center">
                {renderServiceRow(creativeRow1)}
                {renderServiceRow(creativeRow2)}
              </div>
            </div>
          )}
          
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
