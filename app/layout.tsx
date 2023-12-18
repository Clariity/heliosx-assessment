import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Navigation } from "@/components/organisms/Navigation";
import { Providers } from "./Providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MedExpress | Genovia",
  description: "A take home task for HeliosX",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navigation />
          <div className="px-6 md:px-16 max-w-[80rem] mx-auto">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
