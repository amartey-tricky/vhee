import Link from "next/link";
import CldImage from "@/components/cldimage";

const blogPosts = [
  {
    id: 1,
    title: "All You Need To Know About Vhee World Foundation",
    author: "Kumi Robert",
    date: "9th January, 2021",
    image: "VHEEWORLD - WEBSITE/IMG_4988_bvozgv",
    excerpt:
      "Vhee World Foundation is a registered, funding/non-profit charity organisation that was established in 2015 by an ambitious young lady, Ms. Violet Lawson at age 19.",
    link: "https://successafrica.info/all-you-need-to-know-about-vhee-world-foundation/",
  },
  {
    id: 2,
    title: "VHEEWORLD FOUNDATION: The Strive to Overcome 'Streetism'",
    author: "Sheen Magazine",
    date: "16th January, 2021",
    image: "VHEEWORLD - WEBSITE/Vheeworld/IMG_5379_xpheqm",
    excerpt:
      "Inspiring, empowering, and game-changing; these are a few terms that describe the essence of Vheeworld foundation. A not-for-profit organization established in 2015",
    link: "https://www.sheenmagazine.com/vheeworld-foundation-the-strive-to-overcome-streetism/",
  },
  {
    id: 3,
    title: "VheeWorld Foundation Triumphs at 2021 Humanitarian Awards: A Beacon of Hope and Change",
    author: "Violet Lawson",
    date: "March 30, 2022",
    image: "photo_2024-05-22_12-26-41_co7vr6",
    excerpt:
      "In a remarkable testament to its unwavering commitment to social change, VheeWorld Foundation recently shone brightly at the prestigious 2021 Humanitarian Awards.",
    link: "/blog/vheeworld-foundation-triumphs",
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
              href={`${post.link}`}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div>
                <CldImage
                  src={post.image}
                  alt={post.title}
                  width={400}
                  a
                  height={150}
                  className="h-auto w-full"
                  priority={false}
                  aspectRatio="9:16"
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
