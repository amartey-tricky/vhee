import Link from "next/link";
import CldImage from "@/components/cldimage";

const projects = [
  {
    id: 1,
    image: "projects/IMG_4698_lmza5r",
    location: "New Haven School",
    date: "Donation",
    galleryLink: "/projects/kofi-project/donation",
  },
  {
    id: 2,
    image: "projects/IMG_4698_lmza5r",
    location: "Perez Chapel",
    date: "Fund Raising & Seminar",
    galleryLink: "/projects/kofi-project/fund-raising",
  },
];

export default function Projects() {
  return (
    <main className="bg-gray-100 min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Our Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={project.galleryLink}
              className="block bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative">
                <CldImage
                  src={project.image}
                  alt={`Project ${project.id}`}
                  width={500}
                  height={300}
                  className="w-full h-auto"
                  aspectRatio="16:9"
                  priority={false}
                  crop="fill"
                />
                <div className="absolute bottom-0 left-0 p-4 bg-gray-800 bg-opacity-75 text-white">
                  <p className="text-sm">{project.location}</p>
                  <p className="text-sm">{project.date}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
