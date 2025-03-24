import type { Metadata } from "next";
import { Lobster, Spicy_Rice, Rock_Salt, Work_Sans } from "next/font/google";
import "../../styles/globals.css";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

const rock = Rock_Salt({
  variable: "--font-rock",
  subsets: ["latin"],
  weight: "400",
});

const work = Work_Sans({
  variable: "--font-work",
  subsets: ["latin"],
  // weight: "400",
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
        className={`${rock.variable} ${lobster.variable} ${spicy.variable} ${work.variable} antialiased`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
