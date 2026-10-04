import React from "react";
import { ShoppingCart, BookOpen, Smartphone, FileText, Paintbrush, Laptop } from "lucide-react";

export function WebDesignServices() {
  const services = [
    {
      icon: <Laptop className="h-10 w-10 text-[#38BDF8]" strokeWidth={1.5} />,
      title: "Business Website Design",
      features: [
        "First Impression: Clearly presents your business, services, expertise and contact information while creating a strong first impression."
      ]
    },
    {
      icon: <ShoppingCart className="h-10 w-10 text-[#38BDF8]" strokeWidth={1.5} />,
      title: "Ecommerce Web Design",
      features: [
        "Seamless Shopping: Online stores designed to make browsing, product discovery and purchasing straightforward across desktop and mobile devices."
      ]
    },
    {
      icon: <BookOpen className="h-10 w-10 text-[#38BDF8]" strokeWidth={1.5} />,
      title: "Corporate Website Design",
      features: [
        "Structured Clarity: Structured digital experiences for established businesses that need to communicate capabilities, services, people and brand with clarity."
      ]
    },
    {
      icon: <FileText className="h-10 w-10 text-[#38BDF8]" strokeWidth={1.5} />,
      title: "Landing Page Design",
      features: [
        "Conversion Focus: Focused pages built around a specific campaign, service, product or conversion goal."
      ]
    },
    {
      icon: <Paintbrush className="h-10 w-10 text-[#38BDF8]" strokeWidth={1.5} />,
      title: "Website Redesign",
      features: [
        "Fresh Approach: A fresh approach for outdated or underperforming websites, improving visual presentation, navigation, content structure and user experience."
      ]
    },
    {
      icon: <Smartphone className="h-10 w-10 text-[#38BDF8]" strokeWidth={1.5} />,
      title: "Custom Web Design",
      features: [
        "Unique Experience: Unique website experiences created around specific business requirements rather than relying on a one-size-fits-all layout."
      ]
    }
  ];

  return (
    <section className="bg-[#050505] py-24 text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 mb-16">
        <span className="text-[13px] font-bold text-[#38BDF8] tracking-widest uppercase block mb-3">
          WHAT WE DESIGN
        </span>
        <h2 className="text-[42px] md:text-[52px] font-bold mb-6 tracking-tight text-white leading-tight">
          The Right Website for the Way You Do Business
        </h2>
        <p className="text-[#A3A3A3] text-[16px] leading-[1.8] max-w-none font-light">
          Different businesses need different types of websites. We create designs based on what your customers need to see, understand and do.
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#333333]">
          {services.map((svc, index) => (
            <div
              key={index}
              className="py-16 px-10 border-b border-r border-[#333333] flex flex-col items-start hover:bg-[#0a0a0a] transition-colors"
            >
              <div className="mb-8">
                {svc.icon}
              </div>
              <h3 className="text-[28px] font-bold mb-8 text-white tracking-tight">
                {svc.title}
              </h3>
              <ul className="space-y-6">
                {svc.features.map((feature, idx) => {
                  const [boldPart, restPart] = feature.split(': ');
                  return (
                    <li key={idx} className="flex items-start gap-4">
                      <span className="text-[#38BDF8] mt-1 shrink-0">✓</span>
                      <div className="text-[#A3A3A3] text-[14px] leading-[1.7] font-light">
                        {restPart ? (
                          <>
                            <span className="text-[#E5E5E5] font-normal">{boldPart}:</span> {restPart}
                          </>
                        ) : (
                          feature
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
