import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
// import clsx from "clsx";
import {twMerge} from "tailwind-merge"

import { Navbar } from "@/components/layout/Header"
import Footer from "@/components/layout/Footer";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "I-Gene | Inspiring Genetics Education Network for Everyone",
  description: "Empowering Africa's next generation of life scientists through innovative genetics education, hands-on workshops, research opportunities, and mentorship programs. Join our mission to transform science education across the continent.",
  keywords: "genetics education, life sciences, Africa, biotechnology, DNA workshops, science education, STEM, research opportunities, mentorship, scientific innovation",
  authors: [{ name: "I-Gene Team" }],
  openGraph: {
    title: "I-Gene | Inspiring Genetics Education Network for Everyone",
    description: "Empowering Africa's next generation of life scientists through innovative genetics education and hands-on programs.",
    url: "https://igene.org",
    siteName: "I-Gene",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "I-Gene | Inspiring Genetics Education Network for Everyone",
    description: "Empowering Africa's next generation of life scientists through innovative genetics education and hands-on programs.",
    creator: "@igene_africa",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className={twMerge(dmSans.className, "antialiased bg-primary-100")}>
				<Navbar/>
        {children}
				<Footer/>
      </body>

    </html>
  );
}
