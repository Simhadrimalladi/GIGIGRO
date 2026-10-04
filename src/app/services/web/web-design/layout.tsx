import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Web Design Services | DIJIGRO',
  description: 'DIJIGRO creates professional, responsive and user-focused websites designed to communicate your brand, engage visitors and support business growth.',
  openGraph: {
    title: 'Web Design Services | DIJIGRO',
    description: 'DIJIGRO creates professional, responsive and user-focused websites designed to communicate your brand, engage visitors and support business growth.',
  },
};

const serviceSchema = {"@context": "https://schema.org", "@type": "Service", "name": "Web Design Services", "description": "DIJIGRO creates professional, responsive and user-focused websites designed to communicate your brand, engage visitors and support business growth.", "provider": {"@type": "Organization", "name": "DIJIGRO", "url": "https://dijigro.com"}, "url": "https://dijigro.com/services/web/web-design", "serviceType": "Web Design"};
const faqSchema = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "How long does it take to design and launch a new website?", "acceptedAnswer": {"@type": "Answer", "text": "Most custom web design projects take between 4 to 8 weeks depending on complexity and content scope."}}, {"@type": "Question", "name": "Will my website be mobile-friendly and responsive?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, every website we design is fully responsive and optimized for mobile, tablet, and desktop screens."}}]};
const crumbSchema = {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://dijigro.com/"}, {"@type": "ListItem", "position": 2, "name": "Services", "item": "https://dijigro.com/services/web"}, {"@type": "ListItem", "position": 3, "name": "Web Design", "item": "https://dijigro.com/services/web/web-design"}]};

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
