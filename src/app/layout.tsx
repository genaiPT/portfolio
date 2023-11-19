import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavigationBar from "@/components/navigation/navi/NavigationBar";
import { ScrollProvider } from "@/context/ScrollContext";
import text from "@/data/text.json"


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ricardo Linhares Front-end Developer",
  description: "Página pessoal de portfólio para os trabalhos de programação.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const language = "en"
  return (
    <html lang="en">
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
