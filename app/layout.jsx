import { Roboto, Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

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

export const metadata = {
  title: {
    default: "Space Explorer",
    template: "%s | Space-Explorer",
  },
  description: "Welcome ! Explore the beauty of the deep space !",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${robotoSans.variable} ${spaceMono.variable} antialiased`}>
      <body className="flex flex-col min-h-screen bg-indigo-950 text-white min-h-screen overflow-hidden">
        <header className="z-50">
          <Navbar />
        </header>
        <main className="flex items-center justify-center grow w-full mx-auto">
          <PageTransition>{children}</PageTransition>
        </main>
        <footer className="z-50 fixed w-full bg-indigo-900 text-center text-xs px-3 py-3 bottom-0">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
