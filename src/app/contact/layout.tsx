import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Contact DIJIGRO | Digital Marketing, Web Design & Development',
  description: 'Get in touch with DIJIGRO for digital marketing, SEO, web design, web development and ecommerce solutions tailored to your business.',
  openGraph: {
    title: 'Contact DIJIGRO | Digital Marketing, Web Design & Development',
    description: 'Get in touch with DIJIGRO for digital marketing, SEO, web design, web development and ecommerce solutions tailored to your business.',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
