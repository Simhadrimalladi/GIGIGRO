import React from "react";
import { Code2, Building2, ShoppingCart, Smartphone, Settings } from "lucide-react";

export function WebDevelopmentServices() {
  const services = [
    {
      icon: <Building2 className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Business Website Development",
      features: [
        "We develop professional business websites with clear structure, responsive layouts and the functionality needed to present your business online and generate enquiries."
      ]
    },
    {
      icon: (
        <svg
          className="h-10 w-10 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a10 10 0 0 0-7.3 16.8l5.2-12.2" />
          <path d="M10 20.3A10 10 0 0 0 22 12c0-1.4-.3-2.7-.8-3.9l-5.6 11.5" />
          <path d="M7 10.6l2.3 6.3 3.6-9.9" />
        </svg>
      ),
      title: "WordPress Development",
      features: [
        "Build on a flexible content management system that allows businesses to manage and update website content without depending on a developer for every small change."
      ]
    },
    {
      icon: <ShoppingCart className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Ecommerce Development",
      features: [
        "Create online stores where customers can browse products, understand what you offer and complete purchases through a straightforward shopping experience."
      ]
    },
    {
      icon: <Code2 className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Custom Web Development",
      features: [
        "For projects that need functionality beyond a standard website, we develop tailored solutions around specific business processes, features and integrations."
      ]
    },
    {
      icon: <Smartphone className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Web Application Development",
      features: [
        "We build browser-based applications that help users perform tasks, access information or interact with your business through a dedicated online platform."
      ]
    },
    {
      icon: <Settings className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Website Redevelopment",
      features: [
        "When an existing website has technical, structural or performance limitations, we can rebuild or improve it while keeping the important parts of your existing digital presence in mind."
      ]
    }
  ];

  return (
    <section className="bg-[#050505] py-24 text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 mb-16">
        <p className="text-[#38BDF8] text-[13px] font-mono tracking-widest uppercase mb-3">
          WHAT WE DEVELOP
        </p>
        <h2 className="text-[42px] md:text-[52px] font-bold mb-6 tracking-tight text-white leading-tight">
          From Business Websites to Custom Web Solutions
        </h2>
        <p className="text-[#A3A3A3] text-[15px] leading-[1.8] max-w-[1200px] font-light">
          Every project has different technical requirements. We choose the development approach according to the website, users, functionality and future needs.
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
                {svc.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="text-[#38BDF8] mt-1 shrink-0">✓</span>
                    <div className="text-[#A3A3A3] text-[14px] leading-[1.7] font-light">
                      {feature}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
