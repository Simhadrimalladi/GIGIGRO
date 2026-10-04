import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About DIJIGRO | Digital Marketing, Web Design & Development',
  description: 'Learn about DIJIGRO and our journey from digital marketing training and services to delivering web design, development and digital marketing solutions.',
  openGraph: {
    title: 'About DIJIGRO | Digital Marketing, Web Design & Development',
    description: 'Learn about DIJIGRO and our journey from digital marketing training and services to delivering web design, development and digital marketing solutions.',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
