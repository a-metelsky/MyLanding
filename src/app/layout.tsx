import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: "Alek Metelsky | vCard",
  description: siteConfig.headline,
  openGraph: {
    title: "Alek Metelsky | vCard",
    description: siteConfig.headline,
    type: "website",
    url: siteConfig.siteUrl
  },
  twitter: {
    card: "summary_large_image",
    title: "Alek Metelsky | vCard",
    description: siteConfig.headline
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-body antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
