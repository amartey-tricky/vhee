import { FeaturedPrograms } from "@/components/featuredPrograms";
import { Hero } from "@/components/hero";
import { Impact } from "@/components/impact";
import { About } from "@/components/about";
import Link from "next/link";
import VideoPlayer from "@/components/videoplayer";

export default function Home() {
  return (
    <main className="flex flex-col justify-between items-center">
      <div className="absolute top-0 -z-10 h-full w-full bg-white">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]" />
      </div>
      <Hero />
      <VideoPlayer />
      <Impact />
      <About />
      <FeaturedPrograms />
      <section className="mt-20 bg-blue-500 text-white py-16 px-8 rounded-tl-lg rounded-tr-lg md:rounded-lg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Join Us in Making a Difference
          </h2>
          <p className="text-lg mb-8">
            Your support can help us empower lives and transform communities.
            Together, we can create a better future for those affected by
            streetism.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="/donate"
              className="bg-white text-blue-500 px-6 py-3 rounded-md hover:bg-blue-600 hover:text-white transition-colors duration-300"
            >
              Donate Now
            </Link>
            <Link
              href="/volunteer"
              className="bg-white text-blue-500 px-6 py-3 rounded-md hover:bg-blue-600 hover:text-white transition-colors duration-300"
            >
              Volunteer
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
