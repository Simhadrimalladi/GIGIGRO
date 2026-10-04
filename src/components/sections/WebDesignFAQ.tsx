import React from "react";

interface FAQItem {
  q: string;
  a: string;
}

interface WebDesignFAQProps {
  eyebrow?: string;
  title?: string;
  faqs?: FAQItem[];
}

const DEFAULT_FAQS: FAQItem[] = [
  {
    q: "What information do you need to start a website project?",
    a: "We usually begin with your business details, target audience, existing website, goals, preferred features and any brand materials you already have. This helps us understand the project before planning the design."
  },
  {
    q: "Can you redesign my existing website?",
    a: "Yes. A redesign can address outdated visuals, confusing navigation, poor mobile experience, weak content structure or other areas that may be limiting the website."
  },
  {
    q: "Do you design ecommerce websites?",
    a: "Yes. We can design ecommerce experiences around your products, customers and buying journey, with a focus on clear product presentation and a smooth shopping experience."
  },
  {
    q: "Will the website work on mobile devices?",
    a: "Yes. Responsive design is part of our approach, so the layout and user experience are planned for different screen sizes."
  },
  {
    q: "Can you design a website based on our existing brand?",
    a: "Yes. We can work with your existing logo, colours, typography and brand guidelines while creating a consistent website experience."
  },
  {
    q: "Do you also provide website development?",
    a: "Yes. DIJIGRO provides both web design and web development, allowing the design and technical implementation to be planned together."
  },
  {
    q: "Can you help with website content?",
    a: "Yes. Website design works best when content and layout are planned together. We can help structure the content so that important information is clear and easy to navigate."
  },
  {
    q: "Can you improve an existing website instead of creating a new one?",
    a: "Yes. Depending on the condition of the existing site, we can identify what should be improved, redesigned or rebuilt rather than starting from scratch unnecessarily."
  }
];

export function WebDesignFAQ({
  eyebrow = "WEB DESIGN FAQ",
  title = "Frequently Asked Questions",
  faqs = DEFAULT_FAQS
}: WebDesignFAQProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const leftColumnFaqs = faqs.map((faq, originalIndex) => ({ faq, originalIndex })).filter((_, idx) => idx % 2 === 0);
  const rightColumnFaqs = faqs.map((faq, originalIndex) => ({ faq, originalIndex })).filter((_, idx) => idx % 2 === 1);

  const renderFaqItem = (faq: FAQItem, originalIndex: number) => {
    const isOpen = openIndex === originalIndex;
    return (
      <div 
        key={originalIndex} 
        className="border-b border-gray-200 py-4 cursor-pointer transition-colors hover:border-[#38BDF8]/50"
        onClick={() => setOpenIndex(isOpen ? null : originalIndex)}
      >
        <div className="flex justify-between items-center gap-4">
          <span className="font-bold text-[16px] text-[#000000] leading-snug">{faq.q}</span>
          <span className="text-[#38BDF8] text-xl font-bold shrink-0">{isOpen ? "−" : "+"}</span>
        </div>
        {isOpen && (
          <p className="mt-3 text-[14px] text-[#555555] leading-[1.7] font-light">
            {faq.a}
          </p>
        )}
      </div>
    );
  };

  return (
    <section className="bg-[#FFFFFF] text-[#000000] py-24 border-t border-[#E5E5E5]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <span className="text-[13px] font-bold text-[#38BDF8] tracking-widest uppercase block mb-3">
          {eyebrow}
        </span>
        <h2 className="text-[32px] md:text-[42px] font-bold tracking-tight leading-[1.1] mb-12">
          {title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 items-start">
          {/* Left Column Stack */}
          <div className="flex flex-col gap-2">
            {leftColumnFaqs.map(({ faq, originalIndex }) => renderFaqItem(faq, originalIndex))}
          </div>

          {/* Right Column Stack */}
          <div className="flex flex-col gap-2 mt-2 md:mt-0">
            {rightColumnFaqs.map(({ faq, originalIndex }) => renderFaqItem(faq, originalIndex))}
          </div>
        </div>
      </div>
    </section>
  );
}
