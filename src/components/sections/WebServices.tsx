import React from "react";
import { Globe, Code2, ShoppingCart, Settings, Shield, Zap } from "lucide-react";

export function WebServices() {
  const services = [
    {
      icon: <Globe className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Web Strategy",
      features: ["Digital roadmapping: Planning the long-term evolution of your digital presence.", "Technology consulting: Advising on the best platforms for your specific needs.", "Feasibility studies: Assessing the technical viability of complex web projects."]
    },
    {
      icon: <Code2 className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Custom Web Apps",
      features: ["React & Next.js: Building lightning-fast, modern front-end experiences.", "Node & Python: Developing robust, secure, and scalable backend architectures.", "API Integration: Seamlessly connecting disparate software systems."]
    },
    {
      icon: <ShoppingCart className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "E-commerce Platforms",
      features: ["Shopify Plus: Building high-volume, enterprise-grade retail experiences.", "Headless commerce: Separating front-end design from backend operations.", "Payment gateways: Implementing secure, frictionless checkout processes."]
    },
    {
      icon: <Settings className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "CMS Development",
      features: ["WordPress & headless: Crafting tailored content management experiences.", "Custom plugins: Developing bespoke functionality for your specific workflows.", "Content migration: Safely moving massive amounts of data from legacy systems."]
    },
    {
      icon: <Shield className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Web Security",
      features: ["Penetration testing: Identifying and patching critical vulnerabilities.", "Compliance architecture: Ensuring your web properties meet GDPR and HIPAA standards.", "DDoS mitigation: Implementing advanced networks to keep your site online under attack."]
    },
    {
      icon: <Zap className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Web Performance",
      features: ["Server optimization: Configuring infrastructure for maximum throughput.", "Asset delivery: Implementing CDNs and edge computing for global speed.", "Code refactoring: Cleaning up legacy codebases to improve efficiency."]
    },
  ];

  return (
    <section className="bg-[#050505] py-24 text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 mb-16">
        <h2 className="text-[42px] md:text-[52px] font-bold mb-6 tracking-tight text-white leading-tight">
          Web Services
        </h2>
        <p className="text-[#A3A3A3] text-[15px] leading-[1.8] font-light max-w-none">
          From high-speed React applications to cloud infrastructure and headless commerce platforms, our full-stack web engineering team crafts high-performance digital architecture designed for scale, speed, and seamless user conversion.
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#333333]">
          {services.map((svc, index) => (
            <div key={index} className="py-16 px-10 border-b border-r border-[#333333] flex flex-col items-start hover:bg-[#0a0a0a] transition-colors">
              <div className="mb-8">{svc.icon}</div>
              <h3 className="text-[28px] font-bold mb-8 text-white tracking-tight">{svc.title}</h3>
              <ul className="space-y-6">
                {svc.features.map((feature, idx) => {
                  const [boldPart, restPart] = feature.split(': ');
                  return (
                    <li key={idx} className="flex items-start gap-4">
                      <span className="text-[#38BDF8] mt-1 shrink-0">✓</span>
                      <div className="text-[#A3A3A3] text-[14px] leading-[1.7] font-light">
                        {restPart ? (<><span className="text-[#E5E5E5] font-normal">{boldPart}:</span> {restPart}</>) : (feature)}
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
