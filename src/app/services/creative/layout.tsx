import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Creative & Brand Strategy Agency Services | DIJIGRO',
  description: 'Transform your brand identity through custom graphic design, creative storytelling, branding strategies, and modern UI/UX design.',
  openGraph: {
    title: 'Creative & Brand Strategy Agency Services | DIJIGRO',
    description: 'Transform your brand identity through custom graphic design, creative storytelling, branding strategies, and modern UI/UX design.',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
