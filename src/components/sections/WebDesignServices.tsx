import React from "react";
import { ShoppingCart, BookOpen, Smartphone, FileText, Paintbrush, Laptop } from "lucide-react";

export function WebDesignServices() {
  const services = [
    {
      icon: <ShoppingCart className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Ecommerce Web Design",
      features: [
        "Streamlined shopping experience: User-friendly purchase process with intuitive navigation.",
        "Secure transactions: Trustworthy payment processing and data protection for customer confidence."
      ]
    },
    {
      icon: <BookOpen className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Brochure Web Design",
      features: [
        "Clear information presentation: Concisely showcase company offerings and value propositions.",
        "Easy navigation: Straightforward browsing experience to facilitate user interaction.",
        "Cost-effective solution: An affordable way to establish a professional online presence."
      ]
    },
    {
      icon: <Smartphone className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Mobile Web Design",
      features: [
        "Device compatibility: Optimised for smartphones and tablets to ensure seamless functionality.",
        "Improved UX: Seamless navigation and responsiveness on mobile devices.",
        "Increased reach: Capture the growing audience of mobile internet users."
      ]
    },
    {
      icon: <FileText className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "One Page Web Design",
      features: [
        "Simplified layout: Consolidate all essential content on a single, user-friendly page.",
        "Fast loading times: Minimal elements streamline access and improve site performance.",
        "User engagement: Encourage scroll-based exploration and interactivity."
      ]
    },
    {
      icon: <Paintbrush className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Website Redesign",
      features: [
        "Refreshed look: Modernise site appearance to align with current design trends.",
        "Updated functionality: Integrate new features and enhancements to improve user experience.",
        "Enhanced performance: Boost loading speed, mobile responsiveness, and overall UX."
      ]
    },
    {
      icon: <Laptop className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Custom Bespoke Web Design",
      features: [
        "Unique branding: Tailor-made visuals and style to reflect your company's identity.",
        "Personalised features: Custom functionality designed to meet specific business needs.",
        "Competitive edge: Stand out from rivals with a distinct and memorable online presence."
      ]
    }
  ];

  return (
    <section className="bg-[#050505] py-24 text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 mb-16">
        <h2 className="text-[42px] md:text-[52px] font-bold mb-6 tracking-tight text-white leading-tight">
          Web Design Services
        </h2>
        <p className="text-[#A3A3A3] text-[15px] leading-[1.8] max-w-none font-light">
          In the highly competitive digital landscape, a captivating and effective web presence is paramount for success. At Bird, a leading Web Design Agency UK, we excel in crafting bespoke, award-winning online experiences tailored to meet the specific needs of business owners, SMBs, website owners, startups, and enterprises alike. Our innovative and cutting-edge website designs, combined with our robust systems and processes, ensure a seamless and efficient project lifecycle that drives tangible results.
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
