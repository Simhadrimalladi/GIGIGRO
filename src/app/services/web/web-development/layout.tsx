import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Web Development Services | DIJIGRO',
  description: 'DIJIGRO provides reliable web development services for business websites, ecommerce stores, custom web applications and scalable digital platforms.',
  openGraph: {
    title: 'Web Development Services | DIJIGRO',
    description: 'DIJIGRO provides reliable web development services for business websites, ecommerce stores, custom web applications and scalable digital platforms.',
  },
};

const serviceSchema = {"@context": "https://schema.org", "@type": "Service", "name": "Web Development Services", "description": "DIJIGRO provides reliable web development services for business websites, ecommerce stores, custom web applications and scalable digital platforms.", "provider": {"@type": "Organization", "name": "DIJIGRO", "url": "https://dijigro.com"}, "url": "https://dijigro.com/services/web/web-development", "serviceType": "Web Development"};
const faqSchema = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "What web technologies do you use for development?", "acceptedAnswer": {"@type": "Answer", "text": "We build with Next.js, React, TypeScript, Node.js, and modern CMS platforms tailored to your business needs."}}, {"@type": "Question", "name": "Do you provide custom web application development?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, we develop custom web applications, SaaS platforms, and enterprise business tools."}}]};
const crumbSchema = {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://dijigro.com/"}, {"@type": "ListItem", "position": 2, "name": "Services", "item": "https://dijigro.com/services/web"}, {"@type": "ListItem", "position": 3, "name": "Web Development", "item": "https://dijigro.com/services/web/web-development"}]};

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
