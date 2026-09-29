import React from "react";
import { Server, Shield, Clock, HardDrive, Headphones, TrendingUp } from "lucide-react";

export function WebHostingServices() {
  const services = [
    {
      icon: <Server className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Fast Servers",
      features: [
        "Lightning speeds: Optimised infrastructure for rapid page load times.",
        "Better UX: Provide a seamless browsing experience for your visitors.",
        "SEO benefits: Improve search engine rankings with faster response times."
      ]
    },
    {
      icon: <Clock className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "High Uptime",
      features: [
        "99.9% guarantee: Ensure your website is always accessible to users.",
        "Reliability: Minimal downtime keeps your business running smoothly.",
        "Consistent performance: Maintain steady traffic and brand trust."
      ]
    },
    {
      icon: <Shield className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Secure Hosting",
      features: [
        "Advanced protection: Guard against malware, DDoS attacks, and breaches.",
        "Free SSL: Encrypt data to protect customer information and build trust.",
        "Proactive monitoring: Identify and resolve threats before they escalate."
      ]
    },
    {
      icon: <HardDrive className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Daily Backups",
      features: [
        "Automated saves: Secure your data automatically every single day.",
        "Easy restoration: Quickly recover your website in case of emergencies.",
        "Peace of mind: Never worry about losing critical business information."
      ]
    },
    {
      icon: <Headphones className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "24/7 Support",
      features: [
        "Expert assistance: Access knowledgeable support staff anytime.",
        "Rapid resolution: Minimize disruptions with quick issue troubleshooting.",
        "Multi-channel help: Reach us via live chat, email, or phone easily."
      ]
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Scalable Resources",
      features: [
        "Flexible plans: Easily upgrade your hosting as your business grows.",
        "Handle traffic spikes: Maintain performance during high-volume periods.",
        "Cost-effective: Only pay for the resources and power you actually need."
      ]
    }
  ];

  return (
    <section className="bg-[#050505] py-24 text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 mb-16">
        <h2 className="text-[42px] md:text-[52px] font-bold mb-6 tracking-tight text-white leading-tight">
          Web Hosting Services
        </h2>
        <p className="text-[#A3A3A3] text-[15px] leading-[1.8] font-light max-w-none">
          In the ever-evolving digital landscape, robust and secure web hosting is crucial to the success of your online presence. As the digital world becomes increasingly competitive, it is essential for businesses of all sizes to invest in top-tier web hosting that not only guarantees maximum uptime but also delivers lightning-fast speeds and bulletproof security.
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
