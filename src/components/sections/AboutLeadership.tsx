import React from "react";
import Image from "next/image";

export function AboutLeadership() {
  const leaders = [
    {
      name: "Eleanor Vance",
      role: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
      bio: "With 15+ years in digital strategy, Eleanor leads our global vision, ensuring operational excellence and strategic growth across all our international hubs."
    },
    {
      name: "Marcus Thorne",
      role: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
      bio: "A former FAANG principal engineer, Marcus architects our most complex technical solutions and spearheads our R&D into AI and headless architectures."
    },
    {
      name: "Sarah Jenkins",
      role: "Head of Creative",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
      bio: "Sarah brings her award-winning background in luxury brand design to ensure every pixel we push meets the highest standard of modern aesthetics."
    }
  ];

  return (
    <section className="bg-[#000000] py-24 text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 mb-16 text-center">
        <h2 className="text-[42px] md:text-[52px] font-bold mb-6 tracking-tight text-white leading-tight">
          Executive Leadership
        </h2>
        <p className="text-[#A3A3A3] text-[15px] leading-[1.8] font-light max-w-2xl mx-auto">
          Guided by industry veterans, our leadership team sets the standard for technical mastery and creative vision.
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        {leaders.map((leader, idx) => (
          <div key={idx} className="group relative">
            <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden mb-6 border border-[#222222]">
              <Image 
                src={leader.image} 
                alt={leader.name} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <h3 className="text-[22px] font-bold text-white mb-1">{leader.name}</h3>
            <p className="text-[#38BDF8] text-[14px] font-semibold mb-4 uppercase tracking-wider">{leader.role}</p>
            <p className="text-[#A3A3A3] text-[14px] leading-[1.6] font-light">{leader.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
