import Footer from "@/components/Footer";
import Navbar from "@/components/Navigation/Navbar";
import type { Metadata } from "next";
import { Gothic_A1, Inter } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import HexagonNavigation from "@/components/Navigation/HexagonNavigation";

const inter = Inter({ subsets: ["latin"] });
const gothicA1 = Gothic_A1({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    display: "swap",
    variable: "--font-gothic-a1",
});

export const metadata: Metadata = {
    title: "INIT @ FIU",
    description: "Generated by create next app",
};

interface LayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.className,
          gothicA1.className,
          "max-w-screen-2xl mx-auto"
        )}
      >
        <Navbar />

        <main>{children}</main>

        <HexagonNavigation />
        <Footer />
      </body>
    </html>
  );
}