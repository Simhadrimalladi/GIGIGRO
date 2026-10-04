import React from "react";

export function SeoLocations() {
  const steps = [
    { num: "01", title: "DISCOVER", text: "We review your website, current visibility, audience, competitors and business goals." },
    { num: "02", title: "AUDIT", text: "We identify technical, content, structural and search-related opportunities." },
    { num: "03", title: "STRATEGY", text: "We prioritise the work around search intent, business value and realistic opportunities." },
    { num: "04", title: "OPTIMIZE", text: "We improve the website, content and supporting digital signals based on the strategy." },
    { num: "05", title: "MEASURE", text: "We monitor search visibility, traffic, engagement and relevant conversion signals." },
    { num: "06", title: "IMPROVE", text: "SEO is an ongoing process. We continue refining the strategy as search behaviour, your business and the digital landscape change." }
  ];

  return (
    <section className="bg-[#050505] py-24 text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <p className="text-[#38BDF8] text-[13px] font-mono tracking-widest uppercase mb-3">
          HOW WE WORK
        </p>
        <h2 className="text-[32px] md:text-[42px] font-bold tracking-tight leading-[1.1] mb-6 text-white">
          A Search Strategy Built Around Your Business
        </h2>
        <p className="text-[#A3A3A3] text-[15px] leading-[1.8] font-light max-w-4xl mb-16">
          We don&apos;t start with a list of keywords and immediately change your website. We first understand your business, your audience, your competition and the opportunities available to you.
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
          We focus on sustainable improvement—not shortcuts or promises of instant rankings.
        </div>
      </div>
    </section>
  );
}
