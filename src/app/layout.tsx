import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pisos de Resina Epóxica",
  description:
    "Todo sobre pisos de resina epóxica: tipos, ventajas, aplicaciones y más.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*Google tag (gtag.js)*/}
      <Script
        src={
          "https://www.googletagmanager.com/gtag/js?id=" +
          process.env.NEXT_PUBLIC_GTAG
        }
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${process.env.NEXT_PUBLIC_GTAG}');
        `}
      </Script>
      {/*Google tag (gtag.js)*/}

      <body className={inter.className}>{children}</body>
      <Analytics />
    </html>
  );
}
