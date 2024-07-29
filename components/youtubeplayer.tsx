export default function YoutubePlayer() {
  return (
    <section className="mt-20 px-12 md:px-24">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Social Impact</h2>
      <div className="flex items-center justify-center sm:min-w-fit">
        <iframe title="Youtube Player" width={560} height={315} src="https://www.youtube.com/embed/1MczTdSN3GY?si=sgH0UdE-vrvgfTee" allowFullScreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" className="w-fit" />
      </div>
    </section>
  )
}