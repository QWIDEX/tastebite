import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin", "cyrillic"] });
const playfairDisplay = Playfair_Display({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "TasteBite",
  description: "App for sharing and searching recipes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} !font-sans ${playfairDisplay.className}`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
