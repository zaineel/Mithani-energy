import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mithani Energy - Solar Panel Solutions",
  description:
    "Harness the power of the sun with Mithani Energy's premium solar solutions. Save money, reduce your carbon footprint, and invest in a sustainable future.",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        {/* Cal.com Embed Script */}
        <script src='https://cal.com/embed.js' async />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
