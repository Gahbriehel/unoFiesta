import type { Metadata } from "next";
import { Playfair_Display, Outfit, Parisienne, Bebas_Neue, Anton } from "next/font/google";

import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});


const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
});

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton',
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const parisienne = Parisienne({
  variable: "--font-script",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "First Birthday Celebration",
  description: "Join us as we celebrate a wonderful first year.",
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "180x180", type: "image/png" },
    ],
    apple: "/favicon.png",
  },
};

import { PasswordGuard } from "@/components/PasswordGuard";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${outfit.variable} ${parisienne.variable} ${bebasNeue.variable} ${anton.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body">
        <PasswordGuard>{children}</PasswordGuard>
      </body>
    </html>
  );
}
