import type { Metadata } from "next";
import { inter } from "@/components/fonts";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer"
import "./globals.css";

export const metadata: Metadata = {
  title: "VheeWorld Foundation",
  description: "Vhee World foundation hopes to mitigate streetism or reduce it to the barest minimum",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
