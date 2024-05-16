import Image from "next/image";
import Link from "next/link";
import CldImage from "./cldimage";

export function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center px-12 md:px-24 h-[calc(100vh-208px)] mt-20">
      <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Empowering Lives, Transforming Communities
        </h1>
        <p className="text-lg text-gray-600 text-center max-w-2xl mb-8">
          VheeWorld Foundation is dedicated to tackling streetism and providing
          sustainable solutions for those living on the streets. Join our
          mission and make a difference.
        </p>
        <Link
          href="/get-involved"
          className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors duration-300"
        >
          Get Involved
        </Link>
      </div>
      <div className="hidden lg:block lg:w-1/2">
        <CldImage
          src="VHEEWORLD - WEBSITE/IMG_5537_dky8om"
          alt="Outreach"
          aspectRatio={1.7777778}
          width={600}
          height={400}
          className="rounded-lg shadow-md"
        />
      </div>
    </section>
  );
}
