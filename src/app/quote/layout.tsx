import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Get a Quote | Digital Marketing, Web Design & Development | DIJIGRO',
  description: 'Request a quote from DIJIGRO for digital marketing, SEO, web design, web development, ecommerce and other digital services.',
  openGraph: {
    title: 'Get a Quote | Digital Marketing, Web Design & Development | DIJIGRO',
    description: 'Request a quote from DIJIGRO for digital marketing, SEO, web design, web development, ecommerce and other digital services.',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
