import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'UI/UX Design Services | Digital Product Design | DIJIGRO',
  description: 'User-centered UI/UX design services, wireframing, interactive prototyping, user research, and modern web & app interface design.',
  openGraph: {
    title: 'UI/UX Design Services | Digital Product Design | DIJIGRO',
    description: 'User-centered UI/UX design services, wireframing, interactive prototyping, user research, and modern web & app interface design.',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
