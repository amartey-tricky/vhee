import CldImage from "./cldimage";
import Link from "next/link";

const ideas = [
  {
    id: 1,
    image: "VHEEWORLD - WEBSITE/Vheeworld/Vision_x4izqi",
    title: "Vision picture",
    link: "/about",
  },
  {
    id: 2,
    image: "VHEEWORLD - WEBSITE/Vheeworld/Mission..Statement_uq7hdd",
    title: "Mission picture",
    link: "/about",
  },
];

export function About() {
  return (
    <section className="mt-20 px-12 md:px-24">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">About Us</h2>
      <div className="mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ideas.map((idea) => {
            return (
              <div
                key={idea.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <CldImage
                  src={idea.image}
                  alt={idea.title}
                  width={500}
                  height={450}
                  className="w-full h-auto"
                  crop="fill"
                />
                <div className="p-6">
                  <Link
                    href={idea.link}
                    className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
