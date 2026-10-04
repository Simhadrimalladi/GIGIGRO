import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Full-Service Digital Marketing Agency Services | DIJIGRO',
  description: 'Data-driven digital marketing solutions covering SEO, PPC, Google Ads, social media management, and performance marketing campaigns.',
  openGraph: {
    title: 'Full-Service Digital Marketing Agency Services | DIJIGRO',
    description: 'Data-driven digital marketing solutions covering SEO, PPC, Google Ads, social media management, and performance marketing campaigns.',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
