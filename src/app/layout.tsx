import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";

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
      <header>
        <link rel="shortcut icon" type="image/x-icon" />
      </header>
      <body className={`flex flex-col mx-auto w-[calc(min(1352px,94vw)-2rem)] ${inter.className}`}>
      <header className="h-24 flex justify-end z-10 pt-7">
        <ul className="flex gap-8">
          <li>
            <a className="text-menu-header" href="/#section-about">ABOUT</a>
          </li>
          <li>
            <a className="text-menu-header" href="/#section-services">SERVICES</a>
          </li>
          <li>
            <a className="text-menu-header" href="/#section-works">WORKS</a>
          </li>
          <li>
            <a className="text-menu-header" href="/#section-contact">CONTACT</a>
          </li>
        </ul>
      </header>
        {children}
        <footer className="text-white mb-44 mt-24">
          <div className="flex flex-col items-center">
            <Image src='/image/logo.svg' width={263} height={60} alt="" />
            <small className="text-sm mt-6">Made with ♥ by Roberto and <span className="text-purple">Hypesoft</span></small>
          </div>
        </footer>
      </body>
    </html>
  );
}
