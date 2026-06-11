import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chapel of Praise | Modern Church",
  description: "Transforming lives through the love of Christ. Join us this Sunday!",
  icons: {
    icon: '/logo.png',
  },
  openGraph: {
    title: "Chapel of Praise | Modern Church",
    description: "Transforming lives through the love of Christ. Join us this Sunday!",
    images: ['/logo.png'],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chapel of Praise | Modern Church",
    description: "Transforming lives through the love of Christ. Join us this Sunday!",
    images: ['/logo.png'],
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
      className={`${montserrat.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
