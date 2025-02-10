"use client";
import { useEffect, useState } from "react";
import { Roboto, Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { metadata } from "./metadata";
import Head from "next/head";

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

export default function RootLayout({ children }) {
  // State pour contrôler l'affichage de l'overflow
  const [isOverflowHidden, setIsOverflowHidden] = useState(false);

  useEffect(() => {
    /**
     * Gère la visibilité du débordement vertical en fonction de la taille de l'écran.
     * Masque l'overflow si la hauteur de la fenêtre est supérieure à 705px
     * et la largeur supérieure à 820px, sinon l'affiche.
     */
    const handleResize = () => {
      if (window.innerHeight <= 705 || window.innerWidth <= 820) {
        setIsOverflowHidden(false);
      } else {
        setIsOverflowHidden(true);
      }
    };

    // Vérification initiale au montage du composant
    handleResize();

    // Ajoute un écouteur d'événement pour détecter les changements de taille de fenêtre
    window.addEventListener("resize", handleResize);

    // Nettoyage de l'écouteur d'événement lors du démontage du composant
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <html
      lang="en"
      className={`${robotoSans.variable} ${spaceMono.variable} antialiased`}
    >
      <Head>
        <title>{metadata.title.default}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body
        className={`flex flex-col bg-indigo-950 text-white min-h-screen ${
          isOverflowHidden ? "overflow-y-hidden" : "overflow-y-visible"
        }`}
      >
        <header className="z-50">
          <Navbar />
        </header>
        {/* Contenu principal avec animation transition des pages */}
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
