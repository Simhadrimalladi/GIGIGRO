import React from "react";
import { Search, Code, FileText, Link, MapPin, BarChart } from "lucide-react";

export function SeoServices() {
  const services = [
    {
      icon: <Search className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Keyword Strategy",
      features: ["In-depth research: Identifying high-intent search terms for your niche.", "Competitor gap analysis: Finding opportunities your rivals missed.", "Search intent mapping: Aligning keywords with the buyer journey."]
    },
    {
      icon: <Code className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Technical SEO",
      features: ["Site architecture: Optimizing your structure for efficient crawling.", "Core Web Vitals: Enhancing load speed, interactivity, and stability.", "Indexation fixes: Resolving duplicate content and crawl errors."]
    },
    {
      icon: <FileText className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "On-Page Optimization",
      features: ["Content enhancement: Upgrading existing pages for better relevance.", "Meta optimization: Crafting compelling titles and descriptions for high CTR.", "Internal linking: Distributing authority effectively across your site."]
    },
    {
      icon: <Link className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Link Building",
      features: ["High-authority outreach: Acquiring backlinks from trusted industry sites.", "Digital PR: Creating shareable content that naturally earns media coverage.", "Toxic link cleanup: Disavowing harmful links that damage your profile."]
    },
    {
      icon: <MapPin className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Local SEO",
      features: ["Google Business Profile: Fully optimizing your local listings.", "Citation building: Ensuring consistent NAP data across directories.", "Localized content: Targeting specific geographic regions effectively."]
    },
    {
      icon: <BarChart className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Analytics & Reporting",
      features: ["Custom dashboards: Real-time tracking of rankings and organic traffic.", "Conversion tracking: Measuring the actual ROI of your organic visitors.", "Monthly strategy reviews: Adapting our approach based on hard data."]
    },
  ];

  return (
    <section className="bg-[#050505] py-24 text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 mb-16">
        <h2 className="text-[42px] md:text-[52px] font-bold mb-6 tracking-tight text-white leading-tight">
          SEO Services
        </h2>
        <p className="text-[#A3A3A3] text-[15px] leading-[1.8] font-light max-w-none">
          In today&apos;s competitive digital landscape, effective SEO is essential for standing out and achieving your business objectives. Our award-winning team provides comprehensive solutions tailored to your unique needs, combining innovative strategies with proven execution to deliver measurable results that drive sustainable growth.
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
