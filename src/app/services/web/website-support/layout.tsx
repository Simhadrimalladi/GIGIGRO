import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Website Support & Maintenance Services | DIJIGRO',
  description: 'Proactive website maintenance, bug fixes, security monitoring, plugin updates, and emergency web support to keep your site fast and secure.',
  openGraph: {
    title: 'Website Support & Maintenance Services | DIJIGRO',
    description: 'Proactive website maintenance, bug fixes, security monitoring, plugin updates, and emergency web support to keep your site fast and secure.',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
