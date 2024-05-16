import { inter } from "@/components/fonts";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import Providers from "./provides";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VheeWorld Foundation",
  description:
    "Vhee World foundation hopes to mitigate streetism or reduce it to the barest minimum",
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
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
