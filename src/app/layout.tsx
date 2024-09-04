import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="pt-br">
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      <body className={`flex flex-col mx-auto w-[calc(min(1352px,94vw)-2rem)] ${inter.className}`}>
      <header className="h-24 flex justify-end z-10 pt-7">
        <ul className="flex gap-8">
          <li><a className="text-menu-header" href="##">ABOUT</a></li>
          <li><a className="text-menu-header" href="##">SERVICES</a></li>
          <li><a className="text-menu-header" href="##">WORKD</a></li>
          <li><a className="text-menu-header" href="##">CONTACT</a></li>
        </ul>
      </header>
        {children}
        <footer className="text-white mb-44">
          <div className="flex flex-col items-center">
            <Image src='/image/logo.svg' width={263} height={60} alt="" />
            <small className="text-sm mt-6">Made with ♥ by Roberto and <span className="text-purple">Hypesoft</span></small>
          </div>
        </footer>
      </body>
    </html>
  );
}
