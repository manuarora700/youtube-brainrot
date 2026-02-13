import type { Metadata } from "next";
import {
  Baskervville,
  Baskervville_SC,
  Delius,
  Geist,
  Geist_Mono,
  Inter,
  Signika,
} from "next/font/google";
import "./globals.css";

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

const baskervville = Baskervville_SC({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-baskervville",
});

const signika = Signika({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-signika",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${baskervville.variable} ${signika.variable}  antialiased`}>{children}</body>
    </html>
  );
}
