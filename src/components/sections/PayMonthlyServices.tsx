import React from "react";
import { CreditCard, Layout, Server, RefreshCw, Search, PhoneCall } from "lucide-react";

export function PayMonthlyServices() {
  const services = [
    {
      icon: <CreditCard className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Low Initial Cost",
      features: ["Zero upfront fees: Start your online journey without breaking the bank.", "Predictable expenses: Fixed monthly rates help you manage your cash flow.", "All-inclusive: Design, hosting, and support wrapped into one payment."]
    },
    {
      icon: <Layout className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Bespoke Design",
      features: ["Custom themes: Tailored specifically to match your brand identity.", "Responsive layouts: Perfect viewing on mobile, tablet, and desktop.", "Modern aesthetics: Using the latest design trends to stand out."]
    },
    {
      icon: <Server className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Premium Hosting",
      features: ["Lightning fast: Hosted on our high-performance, secure servers.", "SSL included: Free security certificates to protect your visitors.", "Unlimited bandwidth: Scale without worrying about traffic limits."]
    },
    {
      icon: <RefreshCw className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Regular Updates",
      features: ["Content edits: We handle minor content updates as part of your plan.", "Platform upgrades: Core system updates managed by our team.", "Feature additions: Request new functionality as your business grows."]
    },
    {
      icon: <Search className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "SEO Foundation",
      features: ["Technical SEO: Built from the ground up to be search-engine friendly.", "Speed optimized: Fast loading times to boost Google rankings.", "Schema markup: Helping search engines understand your content."]
    },
    {
      icon: <PhoneCall className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Ongoing Support",
      features: ["Dedicated account manager: Your personal point of contact.", "Priority help: Jump the queue for urgent changes or fixes.", "Strategic advice: Regular check-ins to help you maximize your site."]
    },
  ];

  return (
    <section className="bg-[#050505] py-24 text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 mb-16">
        <h2 className="text-[42px] md:text-[52px] font-bold mb-6 tracking-tight text-white leading-tight">
          Pay Monthly Websites Services
        </h2>
        <p className="text-[#A3A3A3] text-[15px] leading-[1.8] font-light max-w-none">
          In today's competitive digital landscape, effective Pay Monthly Websites is essential for standing out and achieving your business objectives. Our award-winning team provides comprehensive solutions tailored to your unique needs, combining innovative strategies with proven execution to deliver measurable results that drive sustainable growth.
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
