import type { Metadata } from "next";
import type { Viewport } from "next";
import "@/styles/globals.css";

import localFont from "next/font/local";
import { Darker_Grotesque } from "next/font/google";
import Navbar from "@/components/NavbarComponent";

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

const DarkerGrotesque = Darker_Grotesque({ subsets: ["latin"] });
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fi" suppressHydrationWarning>
      <body
        className={`${AuthorVariable.variable} ${AuthorVariableItalic.variable} ${DarkerGrotesque.className} scroll-smooth overscroll-none`}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
