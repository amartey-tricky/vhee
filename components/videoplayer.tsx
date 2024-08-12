import { Suspense } from "react";

export default function VideoPlayer() {
  
  return (
    <section className="w-full max-w-3xl mx-auto mt-6">
      <h2 className="p-4 md:p-6 text-center text-2xl font-bold">Message from the Founder</h2>
      <Suspense
        fallback={
          <p className="flex items-center justify-evenly">Loading...</p>
        }
      >
        <iframe className="w-full aspect-video" src="https://www.youtube.com/embed/OIxFhVtalxo?si=ULMbmaxGg2Fabo0e" width={640} height={390} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
        Your browser does not support the video tag.
        </iframe>
      </Suspense>
    </section>
  );
}