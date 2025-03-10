import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
// import clsx from "clsx";
import {twMerge} from "tailwind-merge"

import { Navbar } from "@/components/layout/Header"
import Footer from "@/components/layout/Footer";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "I-gene website ",
  description: "Reawakening the genes",
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
