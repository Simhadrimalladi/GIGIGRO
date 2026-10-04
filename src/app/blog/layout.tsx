import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Digital Marketing & Web Development Blog | DIJIGRO',
  description: 'Explore practical insights on digital marketing, SEO, AEO, GEO, web design, web development and online business growth from DIJIGRO.',
  openGraph: {
    title: 'Digital Marketing & Web Development Blog | DIJIGRO',
    description: 'Explore practical insights on digital marketing, SEO, AEO, GEO, web design, web development and online business growth from DIJIGRO.',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
