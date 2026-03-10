import type { Metadata } from "next";
import { Oswald, Space_Mono } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Ikram Afiq - Portfolio",
  description: "Cybersecurity Intern Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} ${spaceMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
