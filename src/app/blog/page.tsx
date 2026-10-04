"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ChevronRight, ChevronLeft, ArrowUpRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { DUMMY_BLOGS, CATEGORIES } from "@/lib/blog-data";
import { Hero } from "@/components/sections/Hero";
import { ProjectModal } from "@/components/ui/ProjectModal";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [submittedUrl, setSubmittedUrl] = useState<string | undefined>(undefined);

  const filteredBlogs = DUMMY_BLOGS.filter(blog => 
    blog.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    blog.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[#000000] text-[#F5F5F5] selection:bg-[#38BDF8] selection:text-[#000000]">
      <Header />
      
      {/* Hero Section */}
      <Hero 
        eyebrow="INSIGHTS & IDEAS"
        titleMain="Digital Insights That Help You"
        titleSub="Move"
        titleHighlight="Forward"
        description="Practical articles, ideas and insights on digital marketing, SEO, AEO, GEO, web design, web development and online growth."
        onStartProject={(url) => {
          setSubmittedUrl(url);
          setProjectModalOpen(true);
        }}
        showFormAndLogos={false}
      />

      {/* Main Content Area */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-16 relative z-10">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-10">
          
          {/* Toolbar: Search and Categories */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-6 border-b border-white/5">
            {/* Categories Pills */}
            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
              <button className="px-5 py-2.5 rounded-full text-sm font-semibold bg-[#38BDF8] text-black">
                All Posts
              </button>
              {CATEGORIES.map((cat, idx) => (
                <button key={idx} className="px-5 py-2.5 rounded-full text-sm font-medium bg-[#080808] border border-white/10 text-[#888] hover:text-white hover:border-[#38BDF8]/50 transition-colors">
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-80 group">
              <input 
                type="text" 
                placeholder="Search articles..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#080808] border border-white/10 rounded-full py-3 pl-5 pr-12 text-sm text-white focus:outline-none focus:border-[#38BDF8] transition-colors placeholder:text-[#555]"
              />
              <Search className="absolute right-5 top-1/2 -translate-y-1/2 text-[#666] w-4 h-4 group-focus-within:text-[#38BDF8] transition-colors" />
            </div>
          </div>

          {/* Blog Grid (3 Columns) */}
          {filteredBlogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredBlogs.map((blog, idx) => (
                <Link href={`/blog/${blog.slug}`} key={idx} className="group flex flex-col bg-[#080808] border border-white/5 rounded-2xl overflow-hidden hover:border-[#38BDF8]/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(56,189,248,0.05)] hover:-translate-y-1">
                  {/* Image - reduced height */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image 
                      src={blog.image} 
                      alt={blog.title} 
                      fill 
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080808] to-transparent opacity-90"></div>
                  </div>
                  
                  {/* Card Content */}
                  <div className="p-6 flex flex-col flex-1 relative z-10 -mt-6 bg-gradient-to-b from-transparent to-[#080808]">
                    <div className="flex items-center gap-3 mb-3 text-[10px] font-bold tracking-widest uppercase font-mono">
                      <span className="text-[#38BDF8]">{blog.category}</span>
                      <span className="text-[#555]">•</span>
                      <span className="text-[#666]">{blog.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 leading-snug text-white group-hover:text-[#38BDF8] transition-colors duration-300">
                      {blog.title}
                    </h3>
                    <p className="text-[#888] text-sm leading-relaxed mb-6 flex-1 font-light line-clamp-3">
                      {blog.excerpt}
                    </p>
                    <div className="flex items-center text-xs font-bold tracking-widest uppercase text-white group-hover:text-[#38BDF8] transition-colors mt-auto">
                      READ ARTICLE 
                      <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-24 px-6 text-center bg-[#050505] rounded-3xl border border-white/5">
              <div className="relative w-[300px] h-[300px] mb-6 rounded-2xl overflow-hidden">
                <Image src="/empty-blog.jpg" alt="No blogs found illustration" fill className="object-contain" priority />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">No Insights Found</h3>
              <p className="text-[#888] text-lg max-w-md mx-auto leading-relaxed">
                We couldn&apos;t find any articles matching your search criteria. Check back later or clear your filters to see more.
              </p>
              <button 
                onClick={() => setSearchQuery("")}
                className="mt-8 px-6 py-3 rounded-full bg-[#38BDF8]/10 text-[#38BDF8] font-bold text-sm tracking-widest uppercase hover:bg-[#38BDF8] hover:text-black transition-all duration-300"
              >
                Clear Filters
              </button>
            </div>
          )}

          {/* Pagination */}
          <div className="mt-12 flex items-center justify-center gap-2">
            <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/5 hover:border-white/20 transition-all disabled:opacity-30 disabled:pointer-events-none">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-10 h-10 rounded-full bg-[#38BDF8] text-black font-bold flex items-center justify-center shadow-[0_0_15px_rgba(56,189,248,0.3)]">
              1
            </button>
            <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/5 hover:border-white/20 transition-all">
              2
            </button>
            <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/5 hover:border-white/20 transition-all">
              3
            </button>
            <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/5 hover:border-white/20 transition-all">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      <ProjectModal 
        open={projectModalOpen} 
        onOpenChange={setProjectModalOpen} 
        defaultUrl={submittedUrl}
      />

      <Footer />
    </main>
  );
}
