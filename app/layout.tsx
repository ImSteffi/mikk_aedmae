import type { Metadata } from "next";
import { Bebas_Neue, Manrope } from "next/font/google";
import { brand } from "@/lib/brand";
import "./globals.css";

const display = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: brand.name,
  description:
    "Personaaltreening ja veebitreening. Individuaalne lähenemine, tehnika ja püsivad tulemused.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="et"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-fg">{children}</body>
    </html>
  );
}
