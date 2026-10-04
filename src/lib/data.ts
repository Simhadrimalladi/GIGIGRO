export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceDetail {
  title: string;
  desc: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  details: ServiceDetail[];
  icon: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: string;
  year: string;
  impact: string;
  description: string;
  image: string;
  tags: string[];
}

export interface Industry {
  name: string;
  category: string;
  growth: string;
}

export interface TeamMember {
  name: string;
  role: string;
  discipline: string;
  image: string;
  location: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  desc: string;
  deliverables: string[];
}

export interface OfficeLocation {
  city: string;
  country: string;
  address: string;
  timezone: string;
  ianaTimezone: string;
  email: string;
  phone: string;
  isHQ?: boolean;
}

export interface BlogPost {
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
}

export const NAV_LINKS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Industries", href: "/#industries" },
  { label: "Our Team", href: "/#team" },
  { label: "Insights", href: "/#insights" },
  { label: "Contact", href: "/contact" },
];

export const HERO_METRICS = [
  { value: "450+", label: "Clients Scaled in UK & Globally", sub: "Enterprise & SME Brands" },
  { value: "12+", label: "Years Industry Excellence", sub: "Mayfair London Headquarters" },
  { value: "98.7%", label: "Client Retention Rate", sub: "Long-term Strategic Growth" },
  { value: "£150M+", label: "Client Revenue Generated", sub: "Direct Tracked Attribution" },
];

export const PARTNER_LOGOS = [
  { id: "badge", src: "https://cdn.bird.marketing/wp-content/uploads/2023/11/badge.svg", alt: "Badge", width: 95 },
  { id: "clutch", src: "https://cdn.bird.marketing/wp-content/uploads/clutch-bird3x.png", alt: "Clutch", width: 170 },
  { id: "goodfirms", src: "https://cdn.bird.marketing/wp-content/uploads/goodfirms-bird3x.png", alt: "GoodFirms", width: 170 },
  { id: "designrush", src: "https://cdn.bird.marketing/wp-content/uploads/designrush-bird3x.png", alt: "DesignRush", width: 170 },
  { id: "topinteractive", src: "https://cdn.bird.marketing/wp-content/uploads/topinteractive-bird3x.png", alt: "Top Interactive", width: 170 },
  { id: "googlepartner", src: "https://cdn.bird.marketing/wp-content/uploads/googlepartner-bird3x.png", alt: "Google Partner", width: 170 },
  { id: "manifest", src: "https://cdn.bird.marketing/wp-content/uploads/manifest-bird3x.png", alt: "Manifest", width: 170 },
  { id: "trustpilot", src: "https://cdn.bird.marketing/wp-content/uploads/trustpilot-bird3x.png", alt: "Trustpilot", width: 170 },
  { id: "drum", src: "https://cdn.bird.marketing/wp-content/uploads/drum-bird3x.png", alt: "The Drum", width: 170 },
  { id: "dan", src: "https://cdn.bird.marketing/wp-content/uploads/dan-bird3x.png", alt: "DAN", width: 170 },
  { id: "nominet", src: "https://cdn.bird.marketing/wp-content/uploads/nominet-bird3x.png", alt: "Nominet", width: 170 },
  { id: "agencyspotter", src: "https://cdn.bird.marketing/wp-content/uploads/agencyspotter-bird3x.png", alt: "Agency Spotter", width: 170 },
  { id: "digital", src: "https://cdn.bird.marketing/wp-content/uploads/digital-bird3x.png", alt: "Digital", width: 170 },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "seo",
    title: "SEO Services",
    icon: "Search",
    details: [
      { title: "Organic Search", desc: "Help the right people discover your business through search." },
      { title: "Technical & Content", desc: "Our SEO approach focuses on technical health, useful content, search intent and sustainable organic visibility." }
    ]
  },
  {
    id: "ppc",
    title: "PPC & Paid Advertising",
    icon: "Target",
    details: [
      { title: "Targeted Campaigns", desc: "Reach potential customers when they are actively searching for your products or services." },
      { title: "Data-Driven ROI", desc: "We create targeted campaigns, manage budgets carefully and continually improve performance using real campaign data." }
    ]
  },
  {
    id: "social-media",
    title: "Social Media Marketing",
    icon: "MessageSquare",
    details: [
      { title: "Awareness & Growth", desc: "Turn social platforms into useful channels for awareness, engagement and business growth." },
      { title: "Campaign Strategy", desc: "We combine content, creative direction and campaign strategy to help your brand stay relevant and visible." }
    ]
  },
  {
    id: "performance-marketing",
    title: "Performance Marketing",
    icon: "PenTool",
    details: [
      { title: "Measurable Results", desc: "Make your marketing more measurable." },
      { title: "Ad Spend to Outcomes", desc: "We connect campaigns, audiences, landing pages and conversion goals to create a clearer path from advertising spend to business outcomes." }
    ]
  },
  {
    id: "web-design",
    title: "Web Design",
    icon: "Monitor",
    details: [
      { title: "Brand Representation", desc: "Create a website that represents your brand and makes it easy for visitors to find what they need." },
      { title: "Action-Guided UX", desc: "Our designs focus on clarity, usability, responsive layouts and experiences that guide users towards action." }
    ]
  },
  {
    id: "web-development",
    title: "Web Development",
    icon: "Wrench",
    details: [
      { title: "Scalable Platforms", desc: "Turn your website design into a fast, reliable and scalable digital platform." },
      { title: "Clean Structure", desc: "We develop websites with clean structure, practical functionality, responsive performance and future growth in mind." }
    ]
  },
];

export const MEDIA_LOGOS = [
  { name: "GoDaddy", src: "https://cdn.bird.marketing/wp-content/uploads/2025/11/Godaddy-logo-1.png" },
  { name: "Business Matters", src: "https://cdn.bird.marketing/wp-content/uploads/2024/11/business-matters.png" },
  { name: "Tech Times", src: "https://cdn.bird.marketing/wp-content/uploads/2024/11/tech-times.png" },
  { name: "Digital Journal", src: "https://cdn.bird.marketing/wp-content/uploads/2024/11/digital-journal.png" },
  { name: "Cloudways", src: "https://cdn.bird.marketing/wp-content/uploads/2024/11/cloudways.png" },
  { name: "Teamwork", src: "https://cdn.bird.marketing/wp-content/uploads/2024/11/teamwork.png" },
  { name: "Influencer Marketing Hub", src: "https://cdn.bird.marketing/wp-content/uploads/2024/11/influencer-marketing-hub.png" },
  { name: "MSN", src: "https://cdn.bird.marketing/wp-content/uploads/2024/11/msn.png" },
  { name: "Ahrefs", src: "https://cdn.bird.marketing/wp-content/uploads/2024/11/ahrefs.png" },
  { name: "Yahoo Finance", src: "https://cdn.bird.marketing/wp-content/uploads/2024/11/yahoo-finance.png" },
];

export const INDUSTRIES: Industry[] = [
  { name: "E-Commerce & D2C", category: "Retail & Brands", growth: "+310% GMV" },
  { name: "Healthcare & Clinics", category: "Medical & Dental", growth: "4.2x Bookings" },
  { name: "Real Estate & Prime Property", category: "Developments", growth: "£85M Sold" },
  { name: "Legal & Barrister Chambers", category: "Professional Services", growth: "+180% Inquiries" },
  { name: "Finance & Wealth Management", category: "Fintech & Advisory", growth: "£42M AUM" },
  { name: "Automotive & Supercars", category: "Dealerships & Luxury", growth: "+240% Leads" },
  { name: "Higher Education & EdTech", category: "Institutes", growth: "+95% Enrollment" },
  { name: "B2B SaaS & Cloud Platforms", category: "Software & Tech", growth: "3.5x Demo Vol" },
  { name: "Luxury Fashion & Jewelry", category: "Haute Horlogerie", growth: "Sold Out Drops" },
  { name: "Hospitality & Boutique Hotels", category: "Travel & Leisure", growth: "96% Occupancy" },
  { name: "Architecture & Interior Design", category: "Spatial Agencies", growth: "High-Ticket Wins" },
  { name: "Construction & Engineering", category: "Infrastructure", growth: "£14M Tender Wins" },
  { name: "Beauty & Aesthetics Clinics", category: "Cosmetics", growth: "+350% Bookings" },
  { name: "Renewable Energy & CleanTech", category: "ESG & Solar", growth: "£18M Funded" },
  { name: "Recruitment & Executive Search", category: "Headhunting", growth: "2.8x Placements" },
  { name: "Food & Beverage Franchises", category: "Hospitality Brands", growth: "+210% Orders" },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "simplifying-design-flows",
    title: "Simplifying Design Flows",
    client: "Simplifying Design Flows",
    category: "Web & Product Design",
    year: "2025",
    impact: "Custom Interactive Platform",
    description: "Creative web design and interactive digital platform built for scale.",
    image: "/images/projects/simplifying-design-flows.png",
    tags: ["Web Design", "Digital Experience"],
  },
  {
    id: "inspiring-places-app",
    title: "Inspiring Places Mobile App",
    client: "Inspiring Places",
    category: "Mobile App & UI/UX",
    year: "2025",
    impact: "iOS & Android Platform",
    description: "User-centered mobile app experience designed for travel discovery and engagement.",
    image: "/images/projects/mobile-experience-app.jpg",
    tags: ["Mobile App", "UI/UX Design"],
  },
  {
    id: "creatvise-3d-design",
    title: "Creatvise 3D AI Design",
    client: "Creatvise",
    category: "3D Web Application",
    year: "2025",
    impact: "AI Powered Platform",
    description: "Next-generation 3D interactive web workspace with real-time design tools.",
    image: "/images/projects/creatvise-3d-design.png",
    tags: ["3D Web App", "AI Design"],
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  { name: "Alexander Vance", role: "Founder & Creative Director", discipline: "Brand & Creative", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80", location: "London HQ" },
  { name: "Elena Rostova", role: "Head of Growth & SEO", discipline: "Organic Strategy", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80", location: "London HQ" },
  { name: "Marcus Thorne", role: "Technical Director", discipline: "Next.js & Cloud", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80", location: "London HQ" },
  { name: "Claire Beaumont", role: "Lead Brand Strategist", discipline: "Luxury Narrative", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80", location: "London HQ" },
  { name: "Julian De Vries", role: "Head of Paid Media", discipline: "PPC & Acquisition", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80", location: "Manchester" },
  { name: "Dr. Soraya Mirani", role: "Head of CRO & Analytics", discipline: "Data & Funnels", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80", location: "London HQ" },
  { name: "Daisuke Tanaka", role: "Senior Motion Designer", discipline: "GSAP & 3D WebGL", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80", location: "London HQ" },
  { name: "Seraphina Lin", role: "Client Success Director", discipline: "Key Partnerships", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80", location: "London HQ" },
  { name: "Oliver Sterling", role: "Senior Digital PR Specialist", discipline: "Media & Outreach", image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=600&q=80", location: "London HQ" },
  { name: "Hannah Davies", role: "Senior Performance Buyer", discipline: "Meta & TikTok", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80", location: "Bristol" },
  { name: "James Callahan", role: "Lead Frontend Engineer", discipline: "React & Animation", image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80", location: "London HQ" },
  { name: "Aria Montgomery", role: "Art Director & UI/UX", discipline: "Design Systems", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80", location: "London HQ" },
  { name: "David Chen", role: "Technical SEO Architect", discipline: "Algorithmic Growth", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80", location: "London HQ" },
  { name: "Zoe Kensington", role: "Content Strategy Lead", discipline: "Editorial & Copy", image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=600&q=80", location: "London HQ" },
  { name: "Thomas Wright", role: "Full-Stack Engineer", discipline: "Next.js & APIs", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80", location: "London HQ" },
  { name: "Emily Watson", role: "Community & Social Lead", discipline: "Brand Engagement", image: "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=600&q=80", location: "London HQ" },
];

export const PRESS_FEATURES = [
  { outlet: "Bloomberg", quote: "The UK marketing agency delivering outsized returns through algorithmic SEO and technical engineering.", year: "2025" },
  { outlet: "Financial Times", quote: "How this London studio scaled British luxury and fintech brands into global revenue powerhouses.", year: "2025" },
  { outlet: "BBC News", quote: "A benchmark for transparency and technical excellence in modern digital advertising.", year: "2024" },
  { outlet: "TechCrunch", quote: "Fusing cutting-edge Next.js engineering with hyper-aggressive performance acquisition funnels.", year: "2025" },
  { outlet: "Forbes", quote: "VO demonstrates why custom bespoke digital strategy beats generic template agencies every time.", year: "2025" },
  { outlet: "Entrepreneur", quote: "A masterclass in client retention, ROI transparency, and premium brand perception.", year: "2024" },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "Why Your Website Traffic Is Not Turning Into Leads",
    category: "Digital Marketing",
    date: "May 2024",
    readTime: "5 min read",
    excerpt: "",
    image: "",
  },
  {
    title: "SEO Foundations Every Business Website Should Have",
    category: "SEO",
    date: "June 2024",
    readTime: "6 min read",
    excerpt: "",
    image: "",
  },
  {
    title: "What Makes a Business Website Easy to Use?",
    category: "Web Design",
    date: "July 2024",
    readTime: "4 min read",
    excerpt: "",
    image: "",
  },
  {
    title: "SEO vs Paid Advertising: Understanding the Difference",
    category: "PPC & SEO",
    date: "August 2024",
    readTime: "7 min read",
    excerpt: "",
    image: "",
  },
];

export const TESTIMONIALS = [
  {
    quote: "VO fundamentally changed the trajectory of our business. In under 9 months, their SEO and paid media team scaled our qualified pipeline by 380% while significantly lowering our customer acquisition cost.",
    author: "Sir Henry Montgomery",
    title: "Chief Executive Officer",
    company: "Aethel Group PLC",
    metric: "+380% Inbound Pipeline",
  },
  {
    quote: "Their team possesses an exceedingly rare capability: elite visual taste matched with clinical engineering and data precision. Zero layout shift, lightning speeds, and an immediate 48% checkout conversion lift.",
    author: "Dr. Beatrice Chevalier",
    title: "Chief Digital Officer",
    company: "Koto Atelier London",
    metric: "+48% Checkout Lift",
  },
  {
    quote: "Within 60 days of launching our campaign, investor enquiries surged and our platform assets reached £1.2B. VO is without question the premier digital marketing agency in the United Kingdom.",
    author: "Maximilian Von Bern",
    title: "Managing Partner",
    company: "Lumina Sovereign Index",
    metric: "£1.2B Capital Managed",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Deep Diagnostics & Market Discovery",
    desc: "We perform full technical telemetry, unit economics dissection, customer friction mapping, and competitor whitespace discovery.",
    deliverables: ["Full Ecosystem Audit", "Commercial ICP Blueprint", "Unit Economics Model"],
  },
  {
    step: "02",
    title: "Strategic Blueprint & Architecture",
    desc: "Synthesizing market intelligence into an uncompromising tactical roadmap spanning messaging, technology stack, and attribution modeling.",
    deliverables: ["Technical Architecture Spec", "Omnichannel Growth Model", "Brand Strategy Framework"],
  },
  {
    step: "03",
    title: "Editorial Design & Interactive Prototyping",
    desc: "Crafting bespoke design systems, 60fps micro-interactions, responsive typography, and tactile components that evoke luxury authority.",
    deliverables: ["Figma Design System", "High-Fidelity Motion Prototypes", "Responsive Typography Rules"],
  },
  {
    step: "04",
    title: "Next.js Production & Edge Engineering",
    desc: "Rigorous full-stack deployment with sub-second time-to-interactive, zero layout shift, headless data layers, and automated CI/CD.",
    deliverables: ["App Router Codebase", "Headless CMS Integration", "Automated Performance Tests"],
  },
  {
    step: "05",
    title: "Algorithmic Scale & Optimization Loops",
    desc: "Continuous multivariate conversion testing, multi-touch media attribution, and quarterly velocity compounding.",
    deliverables: ["Weekly Attribution Reports", "Bayesian A/B Test Cadence", "Scale Roadmap"],
  },
];

export const OFFICES: OfficeLocation[] = [
  {
    city: "London",
    country: "United Kingdom",
    address: "24 Berkeley Square, Mayfair, W1J 6HE",
    timezone: "GMT / BST",
    ianaTimezone: "Europe/London",
    email: "london@vo-agency.co.uk",
    phone: "+44 (0)20 7946 0912",
    isHQ: true,
  },
  {
    city: "New York",
    country: "United States",
    address: "540 Madison Avenue, 28th Floor, NY 10022",
    timezone: "EST / EDT",
    ianaTimezone: "America/New_York",
    email: "nyc@vo-agency.co.uk",
    phone: "+1 (212) 555-0198",
  },
  {
    city: "Tokyo",
    country: "Japan",
    address: "Roppongi Hills Mori Tower 34F, Minato-ku, 106-6108",
    timezone: "JST",
    ianaTimezone: "Asia/Tokyo",
    email: "tokyo@vo-agency.co.uk",
    phone: "+81 3 5555 0142",
  },
  {
    city: "Zurich",
    country: "Switzerland",
    address: "Bahnhofstrasse 45, 8001 Zürich",
    timezone: "CET / CEST",
    ianaTimezone: "Europe/Zurich",
    email: "zurich@vo-agency.co.uk",
    phone: "+41 44 215 5000",
  },
];

