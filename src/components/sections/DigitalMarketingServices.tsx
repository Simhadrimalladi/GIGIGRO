import React from "react";
import { Compass, Mail, PenTool, Smartphone, BarChart2, Activity } from "lucide-react";

export function DigitalMarketingServices() {
  const services = [
    {
      icon: <Compass className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Comprehensive Strategy",
      features: ["Holistic planning: Integrating all channels for a unified brand message.", "Market positioning: Identifying your unique value proposition in the digital space.", "Resource allocation: Distributing budget effectively across high-ROI channels."]
    },
    {
      icon: <Mail className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Email Marketing",
      features: ["List building: Growing your subscriber base with high-converting lead magnets.", "Automated flows: Setting up drip campaigns that nurture leads while you sleep.", "Personalization: Segmenting audiences for highly targeted messaging."]
    },
    {
      icon: <PenTool className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Content Marketing",
      features: ["Blogging & Articles: Establishing thought leadership and capturing long-tail search traffic.", "Whitepapers & E-books: Creating high-value assets for B2B lead generation.", "Content distribution: Ensuring your content reaches the widest possible audience."]
    },
    {
      icon: <Smartphone className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Mobile Marketing",
      features: ["SMS campaigns: Reaching customers directly with time-sensitive offers.", "App store optimization: Improving the visibility of your mobile applications.", "Location-based targeting: Engaging users based on their physical proximity."]
    },
    {
      icon: <BarChart2 className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Conversion Rate Optimization",
      features: ["A/B testing: Scientifically improving landing pages to capture more leads.", "User journey mapping: Removing friction points from the checkout process.", "Multivariate testing: Analyzing complex combinations to find the perfect layout."]
    },
    {
      icon: <Activity className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Data Analytics",
      features: ["Advanced configuration: Setting up GA4 and Tag Manager flawlessly.", "Custom dashboards: Providing real-time, actionable insights in one place.", "Predictive modeling: Using historical data to forecast future trends."]
    },
  ];

  return (
    <section className="bg-[#050505] py-24 text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 mb-16">
        <h2 className="text-[42px] md:text-[52px] font-bold mb-6 tracking-tight text-white leading-tight">
          Digital Marketing Services
        </h2>
        <p className="text-[#A3A3A3] text-[15px] leading-[1.8] font-light max-w-none">
          In today's competitive digital landscape, effective Digital Marketing is essential for standing out and achieving your business objectives. Our award-winning team provides comprehensive solutions tailored to your unique needs, combining innovative strategies with proven execution to deliver measurable results that drive sustainable growth.
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
