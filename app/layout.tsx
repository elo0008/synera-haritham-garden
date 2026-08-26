import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Synera — Simple, Affordable Websites for Small Businesses",
  description:
    "Synera builds custom websites for small businesses — WhatsApp-based ordering, easy-to-manage dashboards, no monthly software fees. See a real live demo.",
  openGraph: {
    title: "Synera — Simple, Affordable Websites for Small Businesses",
    description:
      "See what a Synera-built site looks like in production. Custom ordering systems, simple dashboards, built for how your business really works.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${dmSans.variable} h-full antialiased bg-neutral-950 text-neutral-100`}>
      <body className="min-h-full flex flex-col bg-neutral-950 text-neutral-100">{children}</body>
    </html>
  );
}
