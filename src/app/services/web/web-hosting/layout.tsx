import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Web Hosting & Server Management Services | DIJIGRO',
  description: 'High-performance managed web hosting, ultra-fast cloud server setup, SSL encryption, daily backups, and 99.9% uptime SLA.',
  openGraph: {
    title: 'Web Hosting & Server Management Services | DIJIGRO',
    description: 'High-performance managed web hosting, ultra-fast cloud server setup, SSL encryption, daily backups, and 99.9% uptime SLA.',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
