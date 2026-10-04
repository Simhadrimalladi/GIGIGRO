import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Graphic & Visual Design Services | DIJIGRO',
  description: 'Custom visual design services including marketing collateral, digital ad banners, print media, brand assets, and creative design.',
  openGraph: {
    title: 'Graphic & Visual Design Services | DIJIGRO',
    description: 'Custom visual design services including marketing collateral, digital ad banners, print media, brand assets, and creative design.',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
