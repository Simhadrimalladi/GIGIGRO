"use client";

import React, { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Share2 } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getBlogBySlug } from "@/lib/blog-data";

export default function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const blog = getBlogBySlug(resolvedParams.slug);

  if (!blog) {
    return (
      <main className="min-h-screen bg-[#000000] text-[#F5F5F5] flex flex-col items-center justify-center">
        <Header />
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog not found</h1>
          <Link href="/blog" className="text-[#38BDF8] hover:underline">
            Return to all blogs
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#000000] text-[#F5F5F5] selection:bg-[#38BDF8] selection:text-[#000000]">
      <Header />
      
      <article className="pb-24">
        {/* Cinematic Header */}
        <div className="relative w-full h-[60vh] min-h-[500px] flex items-end">
          <div className="absolute inset-0 z-0">
            <Image 
              src={blog.image} 
              alt={blog.title} 
              fill 
              className="object-cover"
              priority
            />
            {/* Gradient Overlay to make text readable */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-[#000000]"></div>
          </div>

          <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-12 pb-16">
            <div className="flex items-center gap-4 text-[11px] font-mono tracking-widest uppercase mb-6">
              <Link href="/blog" className="text-[#38BDF8] hover:text-white transition-colors flex items-center group">
                <span className="w-8 h-8 rounded-full border border-[#38BDF8]/30 flex items-center justify-center mr-3 group-hover:bg-[#38BDF8] group-hover:text-black transition-colors">
                  <ArrowLeft className="w-4 h-4" />
                </span>
                Back to blogs
              </Link>
            </div>
            
            <div className="flex items-center gap-3 text-[11px] font-mono tracking-widest uppercase mb-6">
              <span className="text-black bg-[#38BDF8] px-3 py-1 rounded-full">{blog.category}</span>
              <span className="text-[#888]">{blog.date}</span>
              <span className="text-[#555]">•</span>
              <span className="text-[#888]">{blog.readTime}</span>
            </div>

            <h1 className="text-[40px] md:text-[52px] lg:text-[64px] font-bold tracking-tight leading-[1.12] max-w-[900px]">
              {blog.title}
            </h1>
          </div>
        </div>

        {/* Article Content & Sidebar */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-16 mt-16 relative">
          
          {/* Left Sticky Sidebar (Social Share) */}
          <div className="hidden md:block w-16 shrink-0 relative">
            <div className="sticky top-32 flex flex-col gap-4 items-center">
              <div className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center text-[#555] mb-2 bg-[#050505]">
                <Share2 className="w-4 h-4" />
              </div>
              <button className="w-12 h-12 rounded-full bg-[#050505] border border-white/5 flex items-center justify-center text-[#888] hover:text-[#1DA1F2] hover:border-[#1DA1F2] hover:bg-[#1DA1F2]/10 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </button>
              <button className="w-12 h-12 rounded-full bg-[#050505] border border-white/5 flex items-center justify-center text-[#888] hover:text-[#0A66C2] hover:border-[#0A66C2] hover:bg-[#0A66C2]/10 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </button>
              <button className="w-12 h-12 rounded-full bg-[#050505] border border-white/5 flex items-center justify-center text-[#888] hover:text-[#1877F2] hover:border-[#1877F2] hover:bg-[#1877F2]/10 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </button>
            </div>
          </div>

          {/* Main Prose Content */}
          <div className="flex-1 max-w-[800px]">
            {/* Direct HTML rendering without hacky regex replaces */}
            <div 
              className="text-[#D1D5DB] text-[19px] leading-[1.9] font-light [&>h2]:text-white [&>h2]:text-[36px] [&>h2]:font-bold [&>h2]:mt-20 [&>h2]:mb-8 [&>h2]:leading-tight [&>h2]:tracking-tight [&>h3]:text-white [&>h3]:text-[24px] [&>h3]:font-bold [&>h3]:mt-12 [&>h3]:mb-6 [&>p]:mb-8 [&>ul]:list-none [&>ul]:pl-0 [&>ul]:mb-12 [&>ul>li]:mb-4 [&>ul>li]:relative [&>ul>li]:pl-7 [&>ul>li::before]:content-[''] [&>ul>li::before]:absolute [&>ul>li::before]:left-0 [&>ul>li::before]:top-[12px] [&>ul>li::before]:w-1.5 [&>ul>li::before]:h-1.5 [&>ul>li::before]:bg-[#38BDF8] [&>ul>li::before]:rounded-full [&>ul>li]:text-[#C4C4C4] [&>ul>li>strong]:text-white [&>ul>li>strong]:font-semibold [&>strong]:text-white [&>strong]:font-semibold [&>blockquote]:border-l-4 [&>blockquote]:border-[#38BDF8] [&>blockquote]:pl-8 [&>blockquote]:py-2 [&>blockquote]:my-12 [&>blockquote]:text-[24px] [&>blockquote]:italic [&>blockquote]:text-white [&>blockquote]:font-medium [&>blockquote]:leading-relaxed [&>blockquote]:bg-gradient-to-r [&>blockquote]:from-[#38BDF8]/10 [&>blockquote]:to-transparent [&>blockquote]:rounded-r-xl"
              dangerouslySetInnerHTML={{ __html: blog.content }} 
            />
            
            {/* Mobile Share (Bottom) */}
            <div className="mt-16 pt-8 border-t border-white/10 md:hidden">
              <h3 className="text-xl font-bold mb-6 text-white">Share this article</h3>
              <div className="flex gap-4">
                <button className="w-12 h-12 rounded-full bg-[#111] border border-white/5 flex items-center justify-center text-[#888] hover:text-[#1DA1F2] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                </button>
                <button className="w-12 h-12 rounded-full bg-[#111] border border-white/5 flex items-center justify-center text-[#888] hover:text-[#0A66C2] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </button>
                <button className="w-12 h-12 rounded-full bg-[#111] border border-white/5 flex items-center justify-center text-[#888] hover:text-[#1877F2] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </button>
              </div>
            </div>
          </div>

        </div>
      </article>

      <Footer />
    </main>
  );
}
