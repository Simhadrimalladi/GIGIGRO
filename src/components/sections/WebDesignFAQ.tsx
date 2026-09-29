import React from "react";

export function WebDesignFAQ() {
  const faqs = [
    "How does a Web Design project normally work?",
    "Do you build on custom platforms or mainly CMS?",
    "What is the average timeline for a new Web Design build?",
    "Will you help with content migration?",
    "Who is my main point of contact during the project?",
    "What level of support do you offer post-launch?",
    "How does a Web Design sprint differ from a normal build?",
    "Are you able to integrate with existing legacy systems?",
    "Can you handle eCommerce and custom portals?",
    "Are hosting and maintenance included?"
  ];

  return (
    <section className="bg-[#FFFFFF] text-[#000000] py-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <h2 className="text-[32px] md:text-[42px] font-bold tracking-tight leading-[1.1] mb-12">
          UK Web Design FAQ's
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-gray-200 py-4 flex justify-between items-center cursor-pointer hover:text-[#555]">
              <span className="font-bold text-[15px]">{faq}</span>
              <span className="text-gray-400 text-xl font-light">+</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
