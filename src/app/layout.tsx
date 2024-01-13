import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavigationBar from "@/components/navigation/navi/NavigationBar";
import { ScrollProvider } from "@/context/ScrollContext";
import text from "@/data/text.json";
import { language } from "@/utils/language";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Ricardo Linhares Developer</title>
        <meta name="description" content="Personal portfolio website for showcasing development work." />
      </head>
      <body className={inter.className}>
        <ScrollProvider>
          <NavigationBar
            link1={text[language].nav.sobre}
            link1To="/"
            link2={text[language].nav.projectos}
            link2To="#projectos"
            link3={text[language].nav.contactos}
            link3To="#contactos"
          />
          {children}
        </ScrollProvider>
      </body>
    </html>
  );
}
