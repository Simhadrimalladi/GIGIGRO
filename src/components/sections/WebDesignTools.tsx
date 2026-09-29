import React from "react";

export function WebDesignTools() {
  const tools = ["GSAP", "Netlify", "Next.js", "Elementor", "HTML5", "JS", "GitHub", "SQL", "PHP", "MariaDB", "WPCode", "Directus"];
  return (
    <section className="bg-[#FFFFFF] text-[#000000] py-24 border-b border-gray-200">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 text-center">
        <h2 className="text-[32px] md:text-[42px] font-bold tracking-tight leading-[1.1] mb-6">
          UK Web Design <span className="bg-[#38BDF8] px-2 py-1">Tools & Software</span>
        </h2>
        <p className="text-[#333333] text-[15px] leading-[1.6] font-light max-w-3xl mx-auto mb-16">
          At Bird, our UK Web Design team utilises a diverse suite of industry-leading tools and software to bring your digital vision to life. From advanced design platforms to robust development frameworks, we ensure every project is built for performance and scalability.
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16 items-center opacity-60">
          {tools.map(tool => (
            <div key={tool} className="text-2xl md:text-3xl font-black tracking-tighter text-gray-400 grayscale hover:grayscale-0 hover:text-black transition-all cursor-pointer">
              {tool}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
