import type { Metadata } from "next";
import { siteContent } from "@/content/site";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: siteContent.seoDefaults.title,
    template: `%s | ${siteContent.identity.name}`,
  },
  description: siteContent.seoDefaults.description,
  icons: {
    icon: siteContent.identity.favicon,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-PT"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
