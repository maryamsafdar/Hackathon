import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Providers from "./providers";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MARIE ONLINE MARKET",
  description: "E-commerece Website",
};

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-myGray`}>
        <div className="max-w-[90%] mx-auto">
          <Providers>
          <Navbar />
          {children}
          <Footer />
          </Providers>
        </div>
      </body>
    </html>
  );
}
