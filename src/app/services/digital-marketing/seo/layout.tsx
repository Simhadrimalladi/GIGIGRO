import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'SEO, AEO & GEO Services | DIJIGRO',
  description: "Improve your online visibility with DIJIGRO's SEO, AEO and GEO services, helping your business get discovered across search engines and AI-powered search experiences.",
  openGraph: {
    title: 'SEO, AEO & GEO Services | DIJIGRO',
    description: "Improve your online visibility with DIJIGRO's SEO, AEO and GEO services, helping your business get discovered across search engines and AI-powered search experiences.",
  },
};

const serviceSchema = {"@context": "https://schema.org", "@type": "Service", "name": "SEO, AEO & GEO Services", "description": "Improve your online visibility with DIJIGRO's SEO, AEO and GEO services, helping your business get discovered across search engines and AI-powered search experiences.", "provider": {"@type": "Organization", "name": "DIJIGRO", "url": "https://dijigro.com"}, "url": "https://dijigro.com/services/digital-marketing/seo", "serviceType": "Search Engine Optimization"};
const faqSchema = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "What is the difference between SEO, AEO, and GEO?", "acceptedAnswer": {"@type": "Answer", "text": "SEO targets standard search engines like Google. AEO optimizes for voice/answer engines like Siri and Alexa. GEO optimizes for Generative AI search engines like ChatGPT and Gemini."}}, {"@type": "Question", "name": "How long does it take to see SEO results?", "acceptedAnswer": {"@type": "Answer", "text": "Organic SEO results typically start showing noticeable improvement within 3 to 6 months of active optimization."}}]};
const crumbSchema = {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://dijigro.com/"}, {"@type": "ListItem", "position": 2, "name": "Services", "item": "https://dijigro.com/services/digital-marketing"}, {"@type": "ListItem", "position": 3, "name": "SEO", "item": "https://dijigro.com/services/digital-marketing/seo"}]};

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
