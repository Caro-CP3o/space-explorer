"use client";
import { useEffect, useState } from 'react';
import { Roboto, Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { metadata } from './metadata';
import Head from 'next/head';

const robotoSans = Roboto({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});
const spaceMono = Space_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

// export const metadata = {
//   title: {
//     default: "Space Explorer",
//     template: "%s | Space-Explorer",
//   },
//   description: "Welcome ! Explore the beauty of the deep space !",
// };

export default function RootLayout({ children }) {
  const [isOverflowHidden, setIsOverflowHidden] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerHeight <= 705 || window.innerWidth <= 820) {
        setIsOverflowHidden(false);
      } else {
        setIsOverflowHidden(true);
      }
    };

    // Initial check
    handleResize();

    // Add event listener to resize
    window.addEventListener('resize', handleResize);

    // Clean up event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <html lang="en" className={`${robotoSans.variable} ${spaceMono.variable} antialiased`}>
      <Head>
        <title>{metadata.title.default}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body className={`flex flex-col bg-indigo-950 text-white min-h-screen ${isOverflowHidden ? 'overflow-hidden' : 'overflow-auto'}`}>
        <header className="z-50">
          <Navbar />
        </header>
        <main className="flex-1 flex flex-grow items-center justify-center w-full mx-auto overflow-x-hidden">
          <PageTransition>{children}</PageTransition>
        </main>
        <footer className="z-50 fixed w-full bg-indigo-900 text-center text-xs px-3 py-3 bottom-0">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
