import Link from "next/link";
import CldImage from "@/components/cldimage";

const blogPosts = [
  {
    id: 1,
    title: "Overcoming Homelessness: Stories of Hope and Resilience",
    author: "John Doe",
    date: "May 1, 2023",
    image: "blog/post1_zqxnvu",
    excerpt:
      "In this blog post, we share inspiring stories of individuals who have overcome the challenges of homelessness and rebuilt their lives.",
  },
  {
    id: 2,
    title: "The Impact of Education on Reducing Streetism",
    author: "Jane Smith",
    date: "April 15, 2023",
    image: "blog/post2_t8cjkl",
    excerpt:
      "Education plays a crucial role in empowering individuals and breaking the cycle of streetism. Learn about our educational initiatives and their impact.",
  },
  {
    id: 3,
    title: "Sustainable Solutions for Preventing Streetism",
    author: "Michael Johnson",
    date: "March 30, 2023",
    image: "blog/post3_a9b7cd",
    excerpt:
      "Discover sustainable solutions and long-term strategies implemented by VheeWorld Foundation to prevent streetism and promote social inclusion.",
  },
];

export default function BlogPage() {
  return (
    <main className="bg-gray-100 min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div>
                <CldImage
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={300}
                  className="w-full h-auto"
                  priority={false}
                  aspectRatio="16:9"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-2">
                  By {post.author} | {post.date}
                </p>
                <p className="text-gray-600">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}