import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Ecommerce Website Design & Development | DIJIGRO',
  description: 'DIJIGRO creates ecommerce websites designed for easy shopping, clear product discovery, smooth checkout and a better online buying experience.',
  openGraph: {
    title: 'Ecommerce Website Design & Development | DIJIGRO',
    description: 'DIJIGRO creates ecommerce websites designed for easy shopping, clear product discovery, smooth checkout and a better online buying experience.',
  },
};

const serviceSchema = {"@context": "https://schema.org", "@type": "Service", "name": "Ecommerce Website Development", "description": "DIJIGRO creates ecommerce websites designed for easy shopping, clear product discovery, smooth checkout and a better online buying experience.", "provider": {"@type": "Organization", "name": "DIJIGRO", "url": "https://dijigro.com"}, "url": "https://dijigro.com/services/web/ecommerce", "serviceType": "Ecommerce Development"};
const faqSchema = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Which ecommerce platforms do you support?", "acceptedAnswer": {"@type": "Answer", "text": "We build custom online stores using Shopify, WooCommerce, Next.js Commerce, and custom headless platforms."}}, {"@type": "Question", "name": "Can you integrate payment gateways and inventory systems?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, we integrate Stripe, PayPal, Razorpay, ERPs, and inventory management systems."}}]};
const crumbSchema = {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://dijigro.com/"}, {"@type": "ListItem", "position": 2, "name": "Services", "item": "https://dijigro.com/services/web"}, {"@type": "ListItem", "position": 3, "name": "Ecommerce", "item": "https://dijigro.com/services/web/ecommerce"}]};

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
