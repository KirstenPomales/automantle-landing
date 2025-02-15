import "./globals.css";

import type { Metadata } from "next";
import { Inter, Kanit } from "next/font/google";

import { cn } from "@/lib/utils";

const fontSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontHeading = Kanit({
  variable: "--font-heading",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Automantle AI",
  description: "fully autonamous ai trading agent on Mantle",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen font-sans antialiased",
          fontSans.variable,
          fontHeading.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
