import type { Metadata } from "next";
import type { Viewport } from "next";
import "@/styles/globals.css";

import localFont from "next/font/local";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

const AuthorVariable = localFont({
  src: "../../public/fonts/Author-Variable.woff2",
  display: "swap",
  variable: "--font-AuthorVariable",
  preload: true,
  adjustFontFallback: "Arial",
});
const AuthorVariableItalic = localFont({
  src: "../../public/fonts/Author-VariableItalic.woff2",
  display: "swap",
  variable: "--font-AuthorVariableItalic",
  preload: true,
  adjustFontFallback: "Arial",
});
const MelodramaVariable = localFont({
  src: "../../public/fonts/Melodrama-Variable.woff2",
  display: "swap",
  variable: "--font-MelodramaVariable",
  preload: true,
  adjustFontFallback: "Arial",
});
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: {
      default: "Reetta Salmela",
      template: "%s | Reetta Salmela",
    },
    description: "",
    keywords: "",
  };
}
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fi" suppressHydrationWarning>
      <body
        className={`${AuthorVariable.variable} ${AuthorVariableItalic.variable} ${MelodramaVariable.variable} scroll-smooth`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
