import Image from "next/image";
import Link from "next/link";
import CldImage from "./cldimage";

const featuredPrograms = [
  {
    id: 1,
    title: "Outreach and Intervention",
    description:
      "Our outreach teams engage with individuals living on the streets, offering immediate assistance, counseling, and support services.",
    image: "anumle/d852270d-1e60-43f5-becb-ac219be94372_fptvyz",
  },
  {
    id: 2,
    title: "Seminars",
    description:
      "We organize seminars and workshops on various topics, such as life skills, personal development, and mental health awareness, to equip individuals with essential knowledge and tools for success.",
    image: "funderaising/vhee_world-13_of3lsx",
  },
  {
    id: 3,
    title: "Mental Health Support",
    description:
      "We provide comprehensive mental health services, including counseling, therapy, and support groups, to address the unique challenges faced by individuals affected by streetism.",
    image: "funderaising/vhee_world-69_wtsjuj",
  },
];

export function FeaturedPrograms() {
  return (
    <section className="mt-20 px-12 md:px-24">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">
        Featured Programs
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredPrograms.map((program) => (
          <div
            key={program.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <CldImage
              src={program.image}
              alt={program.title}
              width={500}
              height={300}
              className="w-full h-auto"
              crop="fill"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {program.title}
              </h3>
              <p className="text-gray-600">{program.description}</p>
              <Link
                href="/projects"
                className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
