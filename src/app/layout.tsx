import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { Header } from "./components/ui/Header";
import { Footer } from "./components/ui/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portifólio Hypesoft",
  description: "Portifólio para maior conhecimento de meus trabalhos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="shortcut icon" type="image/x-icon" />
      </head>
      <body
        className={`grid grid-cols-6 gap-x-4 md:grid-cols-8 lg:grid-cols-12 grid-rows-[6rem_auto_27rem] mx-auto w-[calc(min(1352px,94vw)-2rem)] overflow-x-hidden ${inter.className}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
