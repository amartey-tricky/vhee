"use client"

import { CldVideoPlayer } from "next-cloudinary"

export default function Page() {
  return (
    <main className="container mx-auto py-8 px-12 md:px-24">
      <h1 className="text-3xl font-bold mb-8">Our Projects</h1>
      <div className="aspect-w-16 aspect-h-9">
        {/* <CldVideoPlayer
          src="street/VID-20251110-WA0097_tddfz5"
          width={1920}
          height={1080}
          className="rounded-lg shadow-md"
          controls
          loop={false}
          autoplay={false}
          muted={false}
        /> */}
        <video
          className="rounded-lg shadow-md"
          controls
          loop={false}
          autoPlay={true}
          muted={false}
        >
          {/* <source src="https://asset.cloudinary.com/dbgxgfsbl/bfbd4821ef19910b0a5fd117c269f888" type="video/mp4" /> */}
          <source src="street.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </main>
  )
}