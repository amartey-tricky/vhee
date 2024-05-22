import BlogPost from "@/components/blogpost";

export default function Page() {
  return (
    <main className="min-h-screen py-24">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlogPost />
      </section>
    </main>
  )
}