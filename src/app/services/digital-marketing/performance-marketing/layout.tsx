import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Performance Marketing Services | DIJIGRO',
  description: 'DIJIGRO delivers performance marketing services focused on targeted campaigns, measurable results, conversion optimisation and smarter digital advertising.',
  openGraph: {
    title: 'Performance Marketing Services | DIJIGRO',
    description: 'DIJIGRO delivers performance marketing services focused on targeted campaigns, measurable results, conversion optimisation and smarter digital advertising.',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
