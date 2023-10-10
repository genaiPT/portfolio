import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavigationBar from "@/components/navigation/navi/NavigationBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ricardo Linhares Front-end Developer",
  description: "Página pessoal de portfólio para os trabalhos de programação.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavigationBar
          link1="Sobre Mim"
          link1To="/"
          link2="Projectos"
          link2To="#projectos"
          link3="Contactos"
          link3To="#contactos"
        />
        {children}
      </body>
    </html>
  );
}
