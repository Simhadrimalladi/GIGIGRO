import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://dijigro.com";

  const routes = [
    "",
    "/about",
    "/portfolio",
    "/blog",
    "/contact",
    "/quote",
    "/services/web",
    "/services/web/web-design",
    "/services/web/web-development",
    "/services/web/ecommerce",
    "/services/web/pay-monthly",
    "/services/web/web-hosting",
    "/services/web/website-support",
    "/services/digital-marketing",
    "/services/digital-marketing/seo",
    "/services/digital-marketing/ppc",
    "/services/digital-marketing/social-media",
    "/services/digital-marketing/performance-marketing",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route.startsWith("/services") ? 0.8 : 0.7,
  }));
}
