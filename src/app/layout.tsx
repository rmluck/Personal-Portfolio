import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "../components/ui/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rohan Mistry",
  description: "My personal portfolio",
};

// Navbar component
function Navbar() {
  return (
    <nav className="w-full bg-professional-light dark:bg-professional-dark text-professional-dark dark:text-professional-light font-sans p-4 shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Rohan Mistry</div>
        <div className="space-x-4">
          <a href="/" className="hover:underline">Home</a>
          <a href="/projects" className="hover:underline">Projects</a>
          <a href="/about" className="hover:underline">About</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </div>
      </div>
    </nav>
  );
}

// Footer component
function Footer() {
  return (
    <footer className="w-full bg-professional-light text-professional-dark dark:bg-professional-dark dark:text-professional-light font-sans p-4 mt-8 shadow-inner">
      <div className="max-w-7xl mx-auto text-center text-sm text-professional-gray200 dark:text-professional-gray400">
        &copy; {new Date().getFullYear()} Rohan Mistry. All rights reserved.
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
