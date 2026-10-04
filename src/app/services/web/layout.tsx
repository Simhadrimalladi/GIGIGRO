import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Web Design & Development Agency Services | DIJIGRO',
  description: 'Full-suite web solutions including custom web design, web development, ecommerce stores, pay-monthly sites, hosting and support.',
  openGraph: {
    title: 'Web Design & Development Agency Services | DIJIGRO',
    description: 'Full-suite web solutions including custom web design, web development, ecommerce stores, pay-monthly sites, hosting and support.',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
