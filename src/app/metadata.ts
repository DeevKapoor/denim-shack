import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DENIM SHACK | Modern Fashion for the Bold",
  description: "Discover premium streetwear and denim essentials for the modern generation",
  viewport: { width: 'device-width', initialScale: 1 },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "DENIM SHACK",
    description: "Modern Fashion for the Bold",
    url: "https://your-site.com",
    type: "website",
    images: [
      {
        url: "https://your-site.com/og-image.jpg",
        width: 800,
        height: 600,
        alt: "DENIM SHACK",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DENIM SHACK",
    description: "Modern Fashion for the Bold",
    images: ["https://your-site.com/twitter-image.jpg"],
  },
};