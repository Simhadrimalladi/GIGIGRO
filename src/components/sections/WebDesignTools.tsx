import React from "react";

interface WebDesignToolsProps {
  variant?: "design" | "development";
}

export function WebDesignTools({ variant = "design" }: WebDesignToolsProps) {
  const designTools = [
    "Figma", 
    "Adobe XD", 
    "Framer", 
    "Illustrator", 
    "Photoshop", 
    "Spline 3D", 
    "TailwindCSS", 
    "CSS Grid", 
    "Canva", 
    "Proto.io", 
    "Rive", 
    "GSAP"
  ];

  const devTools = [
    "Next.js 16", 
    "React 19", 
    "TypeScript", 
    "Node.js", 
    "GraphQL", 
    "PostgreSQL", 
    "Vercel", 
    "Docker", 
    "TailwindCSS", 
    "Prisma", 
    "AWS", 
    "Git"
  ];

  const tools = variant === "development" ? devTools : designTools;
  const title = variant === "development" ? (
    <>
      Web Development <span className="bg-[#38BDF8] px-2 py-1">Stack & Technologies</span>
    </>
  ) : (
    <>
      Web Design <span className="bg-[#38BDF8] px-2 py-1">Tools & Platforms</span>
    </>
  );

  const description = variant === "development" 
    ? "At DIJIGRO, our Web Development team leverages cutting-edge frameworks, serverless architectures, cloud infrastructure, and modern database technologies to engineer high-performing web platforms."
    : "At DIJIGRO, our Web Design team utilizes a premier suite of industry-leading design tools, prototyping software, and UI design systems to craft stunning digital experiences tailored to your brand.";

  return (
    <section className="bg-[#FFFFFF] text-[#000000] py-24 border-b border-gray-200">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 text-center">
        <h2 className="text-[32px] md:text-[42px] font-bold tracking-tight leading-[1.1] mb-6">
          {title}
        </h2>
        <p className="text-[#333333] text-[15px] leading-[1.6] font-light max-w-3xl mx-auto mb-16">
          {description}
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

