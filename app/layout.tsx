import type { Metadata } from "next";
import type { Viewport } from "next";
import "@/styles/globals.css";

import localFont from "next/font/local";
import Navbar from "@/components/navbar/navbar";
import { ThemeProvider } from "@/components/providers/ThemeProviders";

const AuthorVariable = localFont({
  src: "../public/fonts/Author-Variable.woff2",
  display: "swap",
  variable: "--font-AuthorVariable",
});
const AuthorVariableItalic = localFont({
  src: "../public/fonts/Author-VariableItalic.woff2",
  display: "swap",
  variable: "--font-AuthorVariableItalic",
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
        className={`${AuthorVariable.variable} ${AuthorVariableItalic.variable} scroll-smooth`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="pt-20 h-[200vh]">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
