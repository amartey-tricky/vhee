import Link from "next/link";
import CldImage from "@/components/cldimage";

const projects = [
  {
    id: 1,
    image: "projects/IMG-20251110-WA0098_bxlqgn",
    location: "Circle",
    date: "October 2025",
    galleryLink: "projects/street-food-drive",
  },
  {
    id: 2,
    image: "projects/IMG_7693_skgtcz",
    location: "Accra Mall",
    date: "December 2023",
    galleryLink: "/projects/i-win",
  },
  {
    id: 3,
    image: "projects/IMG_7692_beeglx",
    location: "Pantang Hospital",
    date: "December 2023",
    galleryLink: "/projects/i-win",
  },
  {
    id: 4,
    image: "projects/4d87396f-c2ff-484f-ba43-661f75e61164_r5f0ig",
    location: "Nakwabi",
    date: "December 2022",
    galleryLink: "/projects/charity-up-north",
  },
  {
    id: 5,
    image: "projects/IMG_4698_lmza5r",
    location: "Community 18",
    date: "November 2021",
    galleryLink: "/projects/kofi-project",
  },
  {
    id: 6,
    image: "projects/VWF_-_5th_rilqxs",
    location: "Ankaful Hospital",
    date: "December 2020",
    galleryLink: "/projects/we-dey-4-u",
  },
  {
    id: 7,
    image: "projects/5e5eacfc-73b1-4df4-a441-f4ab8521adc3_xmrac9",
    location: "Moore",
    date: "August 2019",
    galleryLink: "/projects/stay-safe",
  },
  {
    id: 8,
    image: "projects/WhatsApp_Image_2024-05-12_at_7.17.17_PM_cblwbj",
    location: "Anumle",
    date: "July 2018",
    collaboration: "Youngatheartgh",
    galleryLink: "/projects/we-came-back-for-u",
  },
  {
    id: 9,
    image: "projects/VWF_-_collab_sz9b6i",
    location: "Shiashie",
    date: "January 2018",
    collaboration: "Littlehearts Foundation",
    galleryLink: "/projects/fill-a-belly",
  },
  {
    id: 10,
    image: "projects/VWF_-_3_fvjq19",
    location: "Accra Central",
    date: "July 2017",
    galleryLink: "/projects/hand-from-the-heart",
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
                  <p className="text-sm">{project.collaboration}</p>
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
