import type { Metadata } from "next";
import { Suspense } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import DevNav from "@/components/DevNav";
import UtmCapture from "@/components/UtmCapture";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SumZero Energy Systems",
  description: "SumZero Energy Systems — HVAC services for Greater Boston & MetroWest.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <UtmCapture />
        {children}
        <Suspense fallback={null}>
          <DevNav />
        </Suspense>
      </body>
    </html>
  );
}
