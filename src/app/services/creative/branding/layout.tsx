import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Branding & Brand Identity Services | DIJIGRO',
  description: 'Build a memorable brand with DIJIGRO. Full brand identity, logo design, visual guidelines, typography, and brand positioning strategy.',
  openGraph: {
    title: 'Branding & Brand Identity Services | DIJIGRO',
    description: 'Build a memorable brand with DIJIGRO. Full brand identity, logo design, visual guidelines, typography, and brand positioning strategy.',
  },
};

const serviceSchema = {"@context": "https://schema.org", "@type": "Service", "name": "Branding & Brand Identity Services", "description": "Build a memorable brand with DIJIGRO. Full brand identity, logo design, visual guidelines, typography, and brand positioning strategy.", "provider": {"@type": "Organization", "name": "DIJIGRO", "url": "https://dijigro.com"}, "url": "https://dijigro.com/services/creative/branding", "serviceType": "Brand Identity Design"};
const faqSchema = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "What is included in a complete brand identity package?", "acceptedAnswer": {"@type": "Answer", "text": "A complete brand package includes core strategy positioning, logo design variations, brand color palette, typography hierarchy, verbal tone-of-voice guidelines, and full brand usage rulebooks."}}, {"@type": "Question", "name": "How long does a full rebranding process take?", "acceptedAnswer": {"@type": "Answer", "text": "A full brand identity strategy and visual redesign typically takes 4 to 8 weeks, including research, concept development, refinements, and final asset delivery."}}]};
const crumbSchema = {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://dijigro.com/"}, {"@type": "ListItem", "position": 2, "name": "Services", "item": "https://dijigro.com/services/creative"}, {"@type": "ListItem", "position": 3, "name": "Branding", "item": "https://dijigro.com/services/creative/branding"}]};

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
