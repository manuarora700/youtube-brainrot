import type { Metadata } from "next";
import {
  Baskervville,
  Delius,
  Geist,
  Geist_Mono,
  Inter,
} from "next/font/google";
import "./globals.css";
import { DialRoot } from "dialkit";
import { Agentation } from "agentation";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}  antialiased`}>
        <DialRoot />
        {process.env.NODE_ENV === "development" && <Agentation />}
        {children}</body>
    </html>
  );
}
