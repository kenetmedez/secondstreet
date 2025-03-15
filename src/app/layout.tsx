import type { Metadata } from "next";
import { Geist, Lobster, Spicy_Rice } from "next/font/google";
import "../../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const lobster = Lobster({
  variable: "--font-lobster",
  subsets: ["latin"],
  weight: "400",
});

const spicy = Spicy_Rice({
  variable: "--font-spicy",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: "Second Street",
    template: "%s | Second Street",
  },
  description:
    "Explore our blog filled with unforgettable moments, events, and stories from our friendship circle. Stay connected and dive into the fun, laughter, and memories we share together.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${lobster.variable} ${spicy.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
