import React from "react";

interface WebDesignConsultancyProps {
  variant?: "design" | "development";
}

export function WebDesignConsultancy({ variant = "design" }: WebDesignConsultancyProps) {
  if (variant === "development") {
    return (
      <section className="bg-[#FFFFFF] text-[#000000] py-24 border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <span className="text-[13px] font-bold text-[#38BDF8] tracking-widest uppercase block mb-3">
              OUR DEVELOPMENT APPROACH
            </span>
            <h2 className="text-[32px] md:text-[42px] font-bold tracking-tight leading-[1.1] mb-6">
              Engineering That Performs, <br/>
              Scales Effortlessly and <br/>
              <span className="bg-[#38BDF8] px-2 py-1 inline-block mt-2">Delivers Results</span>
            </h2>
            <p className="text-[#333333] text-[15px] leading-[1.8] font-light mb-6">
              Robust web development is about more than writing clean syntax. We architect scalable systems, optimize data pipelines, and ensure your web application performs under high traffic demands with zero downtime.
            </p>
            <div className="p-6 bg-[#F5F5F5] border-l-4 border-[#38BDF8] mb-6">
              <span className="text-[13px] font-bold text-[#000000] tracking-widest uppercase block mb-1">
                ENGINEERING EXCELLENCE
              </span>
              <p className="text-[#000000] text-[15px] font-bold">
                &quot;Great code is invisible to the user, but powers seamless speed, security, and effortless user interactions behind the scenes.&quot;
              </p>
            </div>
            <a href="/quote" className="text-[14px] font-bold uppercase tracking-wider text-[#000000] border-b-2 border-[#000000] pb-1 hover:text-[#555] hover:border-[#555] transition-colors">
              START YOUR DEVELOPMENT PROJECT
            </a>
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-[24px] font-bold mb-6 text-[#000000]">Our Codebase Guarantees</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-[14px] text-[#333333]">
                <span className="text-[#38BDF8] font-bold mt-0.5">✓</span>
                <div><strong className="text-[#000000]">CLEAN CODE ARCHITECTURE:</strong> Modular TypeScript and React component structures built for long-term maintainability and rapid iteration.</div>
              </li>
              <li className="flex items-start gap-3 text-[14px] text-[#333333]">
                <span className="text-[#38BDF8] font-bold mt-0.5">✓</span>
                <div><strong className="text-[#000000]">SUB-SECOND SPEED:</strong> Optimized asset delivery, server-side caching, and minimal bundle sizes for 100/100 PageSpeed scores.</div>
              </li>
              <li className="flex items-start gap-3 text-[14px] text-[#333333]">
                <span className="text-[#38BDF8] font-bold mt-0.5">✓</span>
                <div><strong className="text-[#000000]">AIRTIGHT SECURITY:</strong> Headless serverless architecture protecting your database from common Web exploits and vulnerabilities.</div>
              </li>
              <li className="flex items-start gap-3 text-[14px] text-[#333333]">
                <span className="text-[#38BDF8] font-bold mt-0.5">✓</span>
                <div><strong className="text-[#000000]">API INTEGRATIONS:</strong> Seamless connections to payment processors, CRMs, ERPs, and custom backend databases via REST & GraphQL.</div>
              </li>
              <li className="flex items-start gap-3 text-[14px] text-[#333333]">
                <span className="text-[#38BDF8] font-bold mt-0.5">✓</span>
                <div><strong className="text-[#000000]">CROSS-PLATFORM STABILITY:</strong> Rigorously tested across browsers and mobile web runtimes for 99.99% uptime and reliability.</div>
              </li>
              <li className="flex items-start gap-3 text-[14px] text-[#333333]">
                <span className="text-[#38BDF8] font-bold mt-0.5">✓</span>
                <div><strong className="text-[#000000]">SCALABLE INFRASTRUCTURE:</strong> Built on global edge networks (Vercel / AWS) to handle rapid spikes in traffic without performance degradation.</div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#FFFFFF] text-[#000000] py-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <span className="text-[13px] font-bold text-[#38BDF8] tracking-widest uppercase block mb-3">
            OUR DESIGN APPROACH
          </span>
          <h2 className="text-[32px] md:text-[42px] font-bold tracking-tight leading-[1.1] mb-6">
            Design That Looks Good, <br/>
            Works Well and <br/>
            <span className="bg-[#38BDF8] px-2 py-1 inline-block mt-2">Makes Sense</span>
          </h2>
          <p className="text-[#333333] text-[15px] leading-[1.8] font-light mb-6">
            Good web design is about more than choosing colours, fonts and images. We think about how visitors arrive on your website, what they need to know, how quickly they can find it and what should happen next.
          </p>
          <div className="p-6 bg-[#F5F5F5] border-l-4 border-[#38BDF8] mb-6">
            <span className="text-[13px] font-bold text-[#000000] tracking-widest uppercase block mb-1">
              BEYOND GOOD DESIGN
            </span>
            <p className="text-[#000000] text-[15px] font-bold">
              &quot;The goal is not just to create a beautiful website. The goal is to create a website that has a job to do.&quot;
            </p>
          </div>
          <a href="/quote" className="text-[14px] font-bold uppercase tracking-wider text-[#000000] border-b-2 border-[#000000] pb-1 hover:text-[#555] hover:border-[#555] transition-colors">
            START YOUR WEBSITE DESIGN PROJECT
          </a>
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="text-[24px] font-bold mb-6 text-[#000000]">Our Designs Bring Together</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-[14px] text-[#333333]">
              <span className="text-[#38BDF8] font-bold mt-0.5">✓</span>
              <div><strong className="text-[#000000]">CLEAR STRUCTURE:</strong> Important information is organised so visitors can understand your business without unnecessary complexity.</div>
            </li>
            <li className="flex items-start gap-3 text-[14px] text-[#333333]">
              <span className="text-[#38BDF8] font-bold mt-0.5">✓</span>
              <div><strong className="text-[#000000]">USER EXPERIENCE:</strong> Navigation, page layouts and interactions are designed to make the website comfortable and intuitive to use.</div>
            </li>
            <li className="flex items-start gap-3 text-[14px] text-[#333333]">
              <span className="text-[#38BDF8] font-bold mt-0.5">✓</span>
              <div><strong className="text-[#000000]">RESPONSIVE DESIGN:</strong> Your website is designed to work smoothly across desktops, tablets and mobile devices.</div>
            </li>
            <li className="flex items-start gap-3 text-[14px] text-[#333333]">
              <span className="text-[#38BDF8] font-bold mt-0.5">✓</span>
              <div><strong className="text-[#000000]">BRAND CONSISTENCY:</strong> The visual language reflects your brand and creates a consistent experience.</div>
            </li>
            <li className="flex items-start gap-3 text-[14px] text-[#333333]">
              <span className="text-[#38BDF8] font-bold mt-0.5">✓</span>
              <div><strong className="text-[#000000]">CONVERSION-FOCUSED:</strong> Calls to action, forms and key information are positioned with customer journey in mind.</div>
            </li>
            <li className="flex items-start gap-3 text-[14px] text-[#333333]">
              <span className="text-[#38BDF8] font-bold mt-0.5">✓</span>
              <div><strong className="text-[#000000]">SEO-FRIENDLY STRUCTURE:</strong> Planned so the website provides a strong foundation for search visibility.</div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

