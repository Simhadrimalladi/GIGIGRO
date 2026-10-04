import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const formattedTitle = slug
    .split("-")
    .map((word) => word ? word.charAt(0).toUpperCase() + word.slice(1) : "")
    .join(" ");

  return {
    title: `${formattedTitle} | DIJIGRO Insights`,
    description: `Read the latest insights and expert tips on ${formattedTitle} from DIJIGRO Digital Marketing & Web Development team.`,
    openGraph: {
      title: `${formattedTitle} | DIJIGRO Insights`,
      description: `Read the latest insights and expert tips on ${formattedTitle} from DIJIGRO Digital Marketing & Web Development team.`,
    },
  };
}

export default function DynamicBlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
