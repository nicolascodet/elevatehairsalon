import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Elevate Hair Salon - Redefining Beauty",
  description: "Where innovation meets intuition. Experience luxury hair services at Elevate Hair Salon - precision architecture, color alchemy, and transformative experiences.",
  keywords: "luxury hair salon, premium hairstyling, hair color, hair transformation, beauty salon",
  authors: [{ name: "Elevate Hair Salon" }],
  openGraph: {
    title: "Elevate Hair Salon - Redefining Beauty",
    description: "Where innovation meets intuition. Experience luxury hair services at Elevate Hair Salon.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-inter antialiased`}>
        {children}
      </body>
    </html>
  );
}
