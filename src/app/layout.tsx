import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const publicSans = localFont({
  src: "../assets/fonts/PublicSans-VariableFont_wght.ttf",
  variable: "--font-public-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${publicSans.variable} antialiased bg-beige-100`}>
        {children}
      </body>
    </html>
  );
}
