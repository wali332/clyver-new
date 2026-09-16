import type { Metadata } from "next";
import { DM_Sans, Newsreader } from "next/font/google";
import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/navigation/footer";
import { siteConfig } from "@/lib/content/navigation";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://clyverdigital.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Clyver Digital — Lean software studio for growing businesses",
    template: "%s · Clyver Digital",
  },
  description:
    "Clyver Digital is a lean software studio helping international B2B businesses turn real problems into digital solutions—research, design, and build under one roof.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: siteConfig.name,
    title: "Clyver Digital — Lean software studio",
    description:
      "Problem-first software studio for growing businesses. Research, design, and build under one roof.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clyver Digital — Lean software studio",
    description:
      "Problem-first software studio for growing businesses. Research, design, and build under one roof.",
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/icon.svg",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteUrl,
  description:
    "Lean software studio helping businesses turn business problems into digital solutions.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <Navbar />
        <main className="flex-1 min-w-0 w-full overflow-x-clip">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
