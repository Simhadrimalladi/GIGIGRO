import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pay Monthly Web Design Services | DIJIGRO',
  description: 'Affordable pay monthly web design packages with zero upfront costs, continuous maintenance, hosting, and full support for growing businesses.',
  openGraph: {
    title: 'Pay Monthly Web Design Services | DIJIGRO',
    description: 'Affordable pay monthly web design packages with zero upfront costs, continuous maintenance, hosting, and full support for growing businesses.',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
