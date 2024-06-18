import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import { inter } from "@/app/ui/fonts";

export const metadata: Metadata = {
  //The titel of the main page is my name and all the child pages have the suffix '| JG'
  title: { default: "Jonny Günther", template: "%s | JG" },
  description: "Eine Website über Jonny Günther",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${inter.className} antialiased`}>
        {/*NavBar to organise Tabs*/}
        <NavBar />
        <div>
          {/*Content*/}
          {children}
        </div>
        {/*Footer*/}
        <Footer />
      </body>
    </html>
  );
}
