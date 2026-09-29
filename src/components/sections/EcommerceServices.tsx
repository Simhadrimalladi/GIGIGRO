import React from "react";
import { Smartphone, Search, ShoppingCart, Package, CreditCard, Store } from "lucide-react";

export function EcommerceServices() {
  const services = [
    {
      icon: <Smartphone className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Mobile Ready",
      features: [
        "Enhanced UX: Responsive design for seamless browsing on smartphones and tablets.",
        "Greater reach: Engage with the growing mobile audience for increased visibility.",
        "Improved performance: Fast loading and smooth interactions tailored for mobile devices."
      ]
    },
    {
      icon: <Search className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "SEO Ready",
      features: [
        "Higher rankings: Enhance visibility in search results for targeted keywords.",
        "Increased traffic: Attract more potential customers through improved organic reach.",
        "Competitive edge: Stand out among competitors by optimising your online presence."
      ]
    },
    {
      icon: <ShoppingCart className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Increased Sales",
      features: [
        "Boost revenue: Enhance online conversions through targeted strategies and user engagement.",
        "Wider audience: Reach more potential customers by expanding your online presence.",
        "Effective marketing: Improve sales through data-driven marketing tactics and customer insights."
      ]
    },
    {
      icon: <Package className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Efficient Inventory Management",
      features: [
        "Accurate tracking: Monitor stock levels and reduce errors.",
        "Simplified fulfillment: Streamline order processing and shipping.",
        "Informed decisions: Utilise data for better inventory planning and forecasting."
      ]
    },
    {
      icon: <CreditCard className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Fast Payment Processing",
      features: [
        "Seamless transactions: Offer a frictionless and user-friendly checkout experience.",
        "Secure payments: Ensure customer trust with robust security measures.",
        "Multiple options: Cater to diverse preferences with various payment methods."
      ]
    },
    {
      icon: <Store className="h-10 w-10 text-white" strokeWidth={1.5} />,
      title: "Multi-channel Selling",
      features: [
        "Diversified reach: Access new customers through various platforms.",
        "Unified experience: Consistent branding and messaging across channels.",
        "Increased revenue: Maximise sales opportunities by targeting different market segments."
      ]
    }
  ];

  return (
    <section className="bg-[#050505] py-24 text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 mb-16">
        <h2 className="text-[42px] md:text-[52px] font-bold mb-6 tracking-tight text-white leading-tight">
          Ecommerce Ecommerce Web Design Services
        </h2>
        <p className="text-[#A3A3A3] text-[15px] leading-[1.8] font-light max-w-none">
          In the ever-evolving digital landscape, a robust and innovative ecommerce website design is crucial to the success of UK-based retailers and shop owners. As the online marketplace becomes increasingly competitive, it is essential for shop owners, retailers, ecommerce entrepreneurs, and business of all sizes to invest in a top-tier ecommerce web design that not only captivates their target audience but also drives conversions and boosts profitability.
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
