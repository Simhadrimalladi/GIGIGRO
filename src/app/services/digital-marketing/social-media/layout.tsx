import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Social Media Marketing Services | DIJIGRO',
  description: 'DIJIGRO provides social media marketing services including strategy, content creation, social media management, audience engagement and performance tracking.',
  openGraph: {
    title: 'Social Media Marketing Services | DIJIGRO',
    description: 'DIJIGRO provides social media marketing services including strategy, content creation, social media management, audience engagement and performance tracking.',
  },
};

const serviceSchema = {"@context": "https://schema.org", "@type": "Service", "name": "Social Media Marketing Services", "description": "DIJIGRO provides social media marketing services including strategy, content creation, social media management, audience engagement and performance tracking.", "provider": {"@type": "Organization", "name": "DIJIGRO", "url": "https://dijigro.com"}, "url": "https://dijigro.com/services/digital-marketing/social-media", "serviceType": "Social Media Marketing"};
const faqSchema = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Which social platforms do you manage?", "acceptedAnswer": {"@type": "Answer", "text": "We manage Instagram, Facebook, LinkedIn, Twitter/X, TikTok, and YouTube channels."}}, {"@type": "Question", "name": "Do you handle content creation and graphic design?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, we produce visual posts, video reels, ad banners, and strategic copy for all social channels."}}]};
const crumbSchema = {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://dijigro.com/"}, {"@type": "ListItem", "position": 2, "name": "Services", "item": "https://dijigro.com/services/digital-marketing"}, {"@type": "ListItem", "position": 3, "name": "Social Media", "item": "https://dijigro.com/services/digital-marketing/social-media"}]};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbSchema) }}
      />
      {children}
    </>
  );
}
