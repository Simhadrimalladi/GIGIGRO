export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DIJIGRO",
    url: "https://dijigro.com",
    logo: "https://dijigro.com/logo.png",
    description:
      "DIJIGRO helps businesses grow online through digital marketing, SEO, web design, web development, social media and performance marketing.",
    sameAs: [],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Flat No. JV202, JV Gardens, Employees Colony, Road No.1, Srinagar, Gajuwaka",
      addressLocality: "Visakhapatnam",
      addressRegion: "Andhra Pradesh",
      postalCode: "530026",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "support@dijigro.com",
      contactType: "customer service",
      availableLanguage: ["English", "Telugu", "Hindi"],
    },
  };
}

export function generateServiceSchema(
  name: string,
  description: string,
  url: string,
  serviceType: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: name,
    description: description,
    provider: {
      "@type": "Organization",
      name: "DIJIGRO",
      url: "https://dijigro.com",
    },
    url: `https://dijigro.com${url}`,
    serviceType: serviceType,
    areaServed: "Worldwide",
  };
}

export function generateFAQSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://dijigro.com${item.url}`,
    })),
  };
}
