export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
}

export const CATEGORIES = [
  { name: "Digital Marketing", count: 12 },
  { name: "Web Development", count: 8 },
  { name: "SEO Strategies", count: 15 },
  { name: "Case Studies", count: 5 },
  { name: "Company News", count: 3 }
];

export const DUMMY_BLOGS: BlogPost[] = [];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return DUMMY_BLOGS.find((blog) => blog.slug === slug);
}
