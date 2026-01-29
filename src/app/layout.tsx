import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from 'next/link';
import "./globals.css";   // ✅ must be here
import Header from "../components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ghar-se-Kaam",
  description: "Seamless Screen Sharing – Connect with your team instantly and securely.",
  icons: {
    icon: '/GharSeKaam.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
        />
      </head>
      <body className={`${inter.className} bg-black text-white`}>
        <div className="mt-20"> {/* Add margin key to avoid overlap with fixed header */}
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
