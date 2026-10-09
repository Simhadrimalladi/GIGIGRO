import type { Metadata, Viewport } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-urbanist",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://dijigro.com"),
  title: {
    default: "DIJIGRO | Digital Marketing, Web Design & Development",
    template: "%s | DIJIGRO",
  },
  description:
    "DIJIGRO helps businesses grow online through digital marketing, SEO, web design, web development, social media and performance marketing.",
  keywords: [
    "Digital Marketing",
    "Web Design",
    "Web Development",
    "SEO Services",
    "AEO Services",
    "GEO Services",
    "PPC Agency",
    "Performance Marketing",
    "Social Media Marketing",
    "DIJIGRO",
  ],
  authors: [{ name: "DIJIGRO Agency" }],
  openGraph: {
    title: "DIJIGRO | Digital Marketing, Web Design & Development",
    description:
      "DIJIGRO helps businesses grow online through digital marketing, SEO, web design, web development, social media and performance marketing.",
    url: "https://dijigro.com",
    siteName: "DIJIGRO",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DIJIGRO | Digital Marketing, Web Design & Development",
    description:
      "DIJIGRO helps businesses grow online through digital marketing, SEO, web design, web development, social media and performance marketing.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.png?v=3",
    shortcut: "/favicon.ico?v=3",
    apple: "/apple-icon.png?v=3",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "DIJIGRO",
  url: "https://dijigro.com",
  logo: "https://dijigro.com/icon.png",
  description:
    "DIJIGRO helps businesses grow online through digital marketing, SEO, web design, web development, social media and performance marketing.",
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
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth" className={`${urbanist.variable} font-urbanist scroll-smooth`}>
      <body suppressHydrationWarning className="min-h-screen bg-[#000000] text-[#FFFFFF] antialiased selection:bg-[#38BDF8] selection:text-[#000000]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <CustomCursor />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
