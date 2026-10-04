import React from "react";
import { Search, Code, FileText, Link, MapPin, BarChart } from "lucide-react";

export function SeoServices() {
  const services = [
    {
      icon: <Search className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Keyword & Search Intent",
      features: ["We identify the topics, questions and search terms that matter to your audience and map them to the right pages and stages of the customer journey."]
    },
    {
      icon: <Code className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Technical SEO",
      features: ["We assess technical factors such as crawlability, indexing, site structure, page experience, mobile usability and other issues that can affect how search engines access and understand your website."]
    },
    {
      icon: <FileText className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "On-Page SEO",
      features: ["We improve page titles, headings, content structure, internal links, metadata and other on-page elements to make pages clearer and more relevant."]
    },
    {
      icon: <Link className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Content Optimization",
      features: ["We create and improve useful content that answers real customer questions, demonstrates expertise and gives visitors a reason to trust your business."]
    },
    {
      icon: <MapPin className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Local SEO",
      features: ["For businesses serving specific areas, we improve local search visibility through accurate business information, relevant location signals and useful local content."]
    },
    {
      icon: <BarChart className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Ecommerce SEO",
      features: ["We optimise online stores around product discovery, category structure, search intent, technical health and content so customers can find relevant products through organic search."]
    },
  ];

  return (
    <section className="bg-[#050505] py-24 text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 mb-16">
        <p className="text-[#38BDF8] text-[13px] font-mono tracking-widest uppercase mb-3">
          OUR SEO SERVICES
        </p>
        <h2 className="text-[42px] md:text-[52px] font-bold mb-6 tracking-tight text-white leading-tight">
          A Complete Foundation for Organic Visibility
        </h2>
        <p className="text-[#A3A3A3] text-[15px] leading-[1.8] font-light max-w-none">
          We look at the parts of your website and online presence that influence how effectively search systems can discover, understand and connect your business with relevant searches.
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#333333]">
          {services.map((svc, index) => (
            <div key={index} className="py-16 px-10 border-b border-r border-[#333333] flex flex-col items-start hover:bg-[#0a0a0a] transition-colors">
              <div className="mb-8">{svc.icon}</div>
              <h3 className="text-[28px] font-bold mb-8 text-white tracking-tight">{svc.title}</h3>
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
