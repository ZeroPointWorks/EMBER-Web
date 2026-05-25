import type { Metadata } from "next";
import { Syne, JetBrains_Mono } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "EMBER — Anti-Farm Protocol",
  description:
    "EMBER is a privacy-focused cryptocurrency with an asymptotic reward curve that disincentivizes mining farms and promotes true decentralization.",
  openGraph: {
    title: "EMBER — Anti-Farm Protocol",
    description:
      "Asymptotic reward curve. Anti-Sybil. Anti-Bot. True decentralization.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
