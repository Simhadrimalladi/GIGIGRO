import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Our Portfolio | Digital Marketing, Web Design & Development | DIJIGRO',
  description: 'Explore DIJIGRO projects across web design, web development, SEO and digital marketing, created to solve real business challenges.',
  openGraph: {
    title: 'Our Portfolio | Digital Marketing, Web Design & Development | DIJIGRO',
    description: 'Explore DIJIGRO projects across web design, web development, SEO and digital marketing, created to solve real business challenges.',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
