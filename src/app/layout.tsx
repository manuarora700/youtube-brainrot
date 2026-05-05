import type { Metadata } from "next";
import {
  Baskervville,
  Delius,
  Geist,
  Geist_Mono,
  Inter, Roboto_Slab, Manrope,
  Schibsted_Grotesk
} from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const robotoSlab = Roboto_Slab({ subsets: ['latin'], variable: '--font-serif' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aceternity Code Tutorials",
  description: "Learn to code with Aceternity",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const schibsted = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-schibsted",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn(robotoSlab.variable, "font-sans", geist.variable, schibsted.variable)}>
      <body className={`${inter.className}  antialiased`}>{children}</body>
    </html>
  );
}
