import { inter } from "@/components/fonts";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import type { Metadata } from "next";
import Providers from "./provides";
import "./globals.css";

const title= "VheeWorld Foundation";
const description= "Vhee World foundation hopes to mitigate streetism or reduce it to the barest minimum";

export const metadata: Metadata = {
  metadataBase: new URL("https://vheeworld.org"),
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    url: "https://vheeworld.org",
    siteName: "VheeWorld",
    locale: "en",
    type: "website",
    images: ["https://res.cloudinary.com/dbgxgfsbl/image/upload/v1714659410/VHEEWORLD%20-%20WEBSITE/IMG_4322_kvkfau.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  twitter: {
    title: title,
    description: description,
    card: "summary",
    site: "@site",
    images: 'https://res.cloudinary.com/dbgxgfsbl/image/upload/v1714659410/VHEEWORLD%20-%20WEBSITE/IMG_4322_kvkfau.jpg'
  }
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
