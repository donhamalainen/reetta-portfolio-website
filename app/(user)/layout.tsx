import type { Metadata } from "next";
import type { Viewport } from "next";
import "@/styles/globals.css";

import { Darker_Grotesque } from "next/font/google";
import Navbar from "@/components/NavbarComponent";

const DarkerGrotesque = Darker_Grotesque({
  subsets: ["latin"],
  preload: true,
  display: "swap",
});
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: {
      default: "Reetta Salmela",
      template: "%s | Reetta Salmela",
    },
    description: "",
    keywords: "",
    openGraph: {
      type: "website",
      locale: "fi-FI",
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fi" suppressHydrationWarning>
      <body className={`${DarkerGrotesque.className}`}>
        <Navbar />
        <main className="">{children}</main>
      </body>
    </html>
  );
}
