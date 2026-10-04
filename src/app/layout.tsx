import type { Metadata, Viewport } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/ui/CustomCursor";

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
  title: "DIJIGRO™ — Digital Marketing Agency in UK That Delivers Results",
  description:
    "Accelerate your business growth with our multi award-winning, Full Service Digital Marketing Agency in UK, offering a broad spectrum of tailored digital solutions. With headquarters in the UK and branches worldwide.",
  keywords: [
    "Digital Marketing Agency in UK",
    "Full Service Digital Marketing Agency UK",
    "DIJIGRO Marketing Agency",
    "SEO Agency UK",
    "PPC Agency London",
    "Web Design Agency UK",
  ],
  authors: [{ name: "DIJIGRO Digital Marketing Agency" }],
  openGraph: {
    title: "DIJIGRO™ — Digital Marketing Agency in UK That Delivers Results",
    description:
      "Accelerate your business growth with our multi award-winning, Full Service Digital Marketing Agency in UK.",
    url: "https://dijigro.com",
    siteName: "DIJIGRO Marketing",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DIJIGRO™ — Digital Marketing Agency in UK That Delivers Results",
    description:
      "Accelerate your business growth with our multi award-winning, Full Service Digital Marketing Agency in UK.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${urbanist.variable} font-urbanist scroll-smooth`}>
      <body suppressHydrationWarning className="min-h-screen bg-[#000000] text-[#FFFFFF] antialiased selection:bg-[#38BDF8] selection:text-[#000000]">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
