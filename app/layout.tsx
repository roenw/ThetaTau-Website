import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: "300",
});

export const metadata: Metadata = {
  title: "ASU Theta Tau - Delta Gamma Chapter",
  description:
    "Theta Tau, Delta Gamma chapter is a coed professional engineering fraternity at Arizona State University in Tempe, AZ.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
