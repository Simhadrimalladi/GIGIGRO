import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'PPC Services | Google Ads & Paid Search Management | DIJIGRO',
  description: 'DIJIGRO provides PPC and Google Ads services focused on targeted traffic, better campaign management, conversion tracking and continuous optimisation.',
  openGraph: {
    title: 'PPC Services | Google Ads & Paid Search Management | DIJIGRO',
    description: 'DIJIGRO provides PPC and Google Ads services focused on targeted traffic, better campaign management, conversion tracking and continuous optimisation.',
  },
};

const serviceSchema = {"@context": "https://schema.org", "@type": "Service", "name": "PPC & Google Ads Management", "description": "DIJIGRO provides PPC and Google Ads services focused on targeted traffic, better campaign management, conversion tracking and continuous optimisation.", "provider": {"@type": "Organization", "name": "DIJIGRO", "url": "https://dijigro.com"}, "url": "https://dijigro.com/services/digital-marketing/ppc", "serviceType": "Pay Per Click Advertising"};
const faqSchema = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "How do you manage ad spend and budget?", "acceptedAnswer": {"@type": "Answer", "text": "We establish daily ad budgets, manage bidding strategies, and continuously optimize campaigns to maximize conversion ROI."}}, {"@type": "Question", "name": "Which platforms do you run PPC campaigns on?", "acceptedAnswer": {"@type": "Answer", "text": "We manage Google Search Ads, Google Shopping, Meta (Facebook & Instagram) Ads, LinkedIn Ads, and YouTube Video Ads."}}]};
const crumbSchema = {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://dijigro.com/"}, {"@type": "ListItem", "position": 2, "name": "Services", "item": "https://dijigro.com/services/digital-marketing"}, {"@type": "ListItem", "position": 3, "name": "PPC", "item": "https://dijigro.com/services/digital-marketing/ppc"}]};

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
