import DonationForm from "@/components/donationform";
import type { Metadata } from "next";

const title = "Donation || VheeWorld"
const description = "Donate to VheeWorld Foundation to help us minimize the effects of streetism on street children and their parents"

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
    images: [
      "https://res.cloudinary.com/dbgxgfsbl/image/upload/v1714659410/VHEEWORLD%20-%20WEBSITE/IMG_4322_kvkfau.jpg",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: title,
    description: description,
    card: "summary",
    site: "@site",
    images:
      "https://res.cloudinary.com/dbgxgfsbl/image/upload/v1714659410/VHEEWORLD%20-%20WEBSITE/IMG_4322_kvkfau.jpg",
  },
};


export default function Page() {
  return (
    <main className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <DonationForm />
      </div>
    </main>
  )
}