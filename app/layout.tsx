import "./globals.css";
import type { Metadata } from "next";

import HeaderConnectionComponent from "@/components/HeaderConnectionComponent";
import HeaderComponent from "@/components/HeaderComponent";
import FooterComponent from "@/components/FooterComponent";

export const metadata: Metadata = {
  title: "Berb",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <HeaderConnectionComponent />
        <HeaderComponent />
        <main>{children} </main>
        <FooterComponent />
      </body>
    </html>
  );
}
