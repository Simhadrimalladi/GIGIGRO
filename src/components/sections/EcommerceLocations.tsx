import React from "react";

export function EcommerceLocations() {
  const steps = [
    { num: "01", title: "UNDERSTAND", text: "We learn about your products, customers, competitors, existing systems and business objectives." },
    { num: "02", title: "PLAN", text: "We map the store structure, product categories, customer journey, required features and technical requirements." },
    { num: "03", title: "DESIGN", text: "We create a shopping experience that makes your products easy to discover, understand and explore." },
    { num: "04", title: "DEVELOP", text: "We turn the approved design into a functional ecommerce website with the required features and integrations." },
    { num: "05", title: "TEST", text: "We check important journeys such as navigation, product browsing, cart actions, checkout, forms and mobile usability." },
    { num: "06", title: "LAUNCH", text: "After final checks and approval, your online store is prepared for launch." }
  ];

  return (
    <section className="bg-[#050505] py-24 text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <p className="text-[#38BDF8] text-[13px] font-mono tracking-widest uppercase mb-3">
          HOW WE BUILD
        </p>
        <h2 className="text-[32px] md:text-[42px] font-bold tracking-tight leading-[1.1] mb-6 text-white">
          Designed Around Your Customers. Built Around Your Business.
        </h2>
        <p className="text-[#A3A3A3] text-[15px] leading-[1.8] font-light max-w-4xl mb-16">
          A successful ecommerce website has to work for two audiences: the people shopping on it and the business managing it. That is why we consider the complete ecommerce experience before development begins.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 border-t border-[#333333] pt-16">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-[#0A0A0A] p-8 border border-[#222222] flex flex-col justify-between">
              <div>
                <span className="text-[#38BDF8] text-[28px] font-bold block mb-3 font-mono">{step.num}</span>
                <h3 className="text-[18px] font-bold text-white mb-3 tracking-wide">{step.title}</h3>
                <p className="text-[#A3A3A3] text-[14px] leading-[1.7] font-light">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-[#38BDF8] text-[15px] font-semibold">
          A better shopping experience starts with thoughtful planning.
        </div>
      </div>
    </section>
  );
}
