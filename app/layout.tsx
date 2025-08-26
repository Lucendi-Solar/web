import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Lucendi Solar",
  description: "Soluciones en energía solar, bombas y maquinaria. Lucendi Solar ofrece proyectos y productos en energía solar, bombas sumergibles, maquinaria agrícola, herramientas eléctricas y generadores. Contáctanos para tu proyecto.",
  keywords: [
    "Lucendi Solar",
    "paneles solares",
    "bombas sumergibles",
    "maquinaria agrícola",
    "herramientas eléctricas",
    "generadores",
    "proyectos eléctricos",
    "energía renovable",
    "Colima México"
  ],
  authors: [{ name: "Lucendi Solar" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
