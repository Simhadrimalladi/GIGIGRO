import React from "react";

export function SocialMediaLocations() {
  const steps = [
    { num: "01", title: "UNDERSTAND", text: "We learn about your business, audience, competitors, brand voice and social media goals." },
    { num: "02", title: "STRATEGISE", text: "We define the content direction, platform priorities, themes and posting approach." },
    { num: "03", title: "CREATE", text: "We develop content that reflects your brand and is adapted to the way people use each platform." },
    { num: "04", title: "PUBLISH", text: "Content is organised and published according to the agreed content plan." },
    { num: "05", title: "ENGAGE", text: "We help maintain conversations with your audience and keep your brand responsive." },
    { num: "06", title: "IMPROVE", text: "We review performance and use what we learn to refine future content and strategy." }
  ];

  return (
    <section className="bg-[#050505] py-24 text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <p className="text-[#38BDF8] text-[13px] font-mono tracking-widest uppercase mb-3">
          OUR APPROACH
        </p>
        <h2 className="text-[32px] md:text-[42px] font-bold tracking-tight leading-[1.1] mb-6 text-white">
          Content With a Reason Behind It
        </h2>
        <p className="text-[#A3A3A3] text-[15px] leading-[1.8] font-light max-w-4xl mb-16">
          Posting for the sake of posting rarely creates a strong brand presence. Before creating content, we look at what your business wants to communicate, who you want to reach and what action you want your audience to take.
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
          A strong social presence grows through consistency, relevance and continuous learning.
        </div>
      </div>
    </section>
  );
}
