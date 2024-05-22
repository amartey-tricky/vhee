import type { Metadata } from "next";
import CldImage from "@/components/cldimage";

const title = "About || VheeWorld Foundation";
const description =
  "Learn more about VheeWorld Foundation, our activities and the team";

export const metadata: Metadata = {
  metadataBase: new URL("https://vheeworld.org"),
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    url: "https://vheeworld.org",
    siteName: "VheeWorld",
    locale: "en",
    type: "website",
    images: [
      "https://res.cloudinary.com/dbgxgfsbl/image/upload/v1714659410/VHEEWORLD%20-%20WEBSITE/IMG_4322_kvkfau.jpg",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: title,
    description: description,
    card: "summary",
    site: "@site",
    images:
      "https://res.cloudinary.com/dbgxgfsbl/image/upload/v1714659410/VHEEWORLD%20-%20WEBSITE/IMG_4322_kvkfau.jpg",
  },
};

const teamMembers = [
  {
    id: 1,
    name: "Violet Lawson",
    position: "President",
    image: "vhee-members/Violet_m1r2aj",
    bio: "",
  },
  {
    id: 2,
    name: "Sarah Hammond",
    position: "Secretary",
    image: "vhee-members/Sarah_cuuxon",
    bio: "",
  },
  {
    id: 3,
    name: "Grace Mawusi Agordzo",
    position: "PRO",
    image: "vhee-members/Mawusi_cprtvl",
    bio: "",
  },
  {
    id: 4,
    name: "Emmanuelle Dodoo",
    position: "Finance Officer",
    image: "vhee-members/Emmanuella_egibfq",
    bio: "",
  },
  {
    id: 5,
    name: "Stephan Adjei",
    position: "Transport and Logistics Officer",
    image: "vhee-members/STEPHAN_cusv9p",
    bio: "",
  },
  {
    id: 6,
    name: "Sylvester Adotey",
    position: "Marketing Manager",
    image: "vhee-members/Sylvester_vbqtzd",
    bio: "",
  },
  {
    id: 7,
    name: "Harriet Awuah",
    position: "Assistant Marketing Manager",
    image: "vhee-members/Harriet_shzcar",
    bio: "",
  },
  {
    id: 8,
    name: "Portia Ayikwei",
    position: "Research Manager",
    image: "vhee-members/Portia_o9me3v",
    bio: "",
  },
  {
    id: 9,
    name: "Joseph Darko",
    position: "Social Media Manager",
    image: "vhee-members/Joseph_tk0p48",
    bio: "",
  },
];

export default function Page() {
  return (
    <main className="bg-gray-100 min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-6">
              About VheeWorld Foundation
            </h1>
            <p className="text-gray-600 mb-6 text-justify">
              Vhee World Foundation is a nonprofit organization committed to
              tackling the issue of streetism and supporting vulnerable children
              in Ghana. Through a range of initiatives, including education,
              mentorship, and resource provision, the foundation aims to uplift
              and empower children who are at risk of living on the streets. By
              offering these children access to education and mentorship
              programs, the foundation seeks to equip them with the necessary
              skills and knowledge to break the cycle of poverty and create a
              better future for themselves.
            </p>
            <p className="text-gray-600 mb-6 text-justify">
              The Vheeworld foundation is a registered NGO founded by Miss
              Violet Lawson at the age of 19. The foundation was set up to help
              the less privileged in society, especially individuals who find
              themselves in the streets, thus coining the term “streetism” in
              their motto “streetism should not be an option”. Vheeworld is made
              up of 10 members who take up various roles within the
              organization.
            </p>
            <p className="text-gray-600 mb-6 text-justify">
              The foundation has been in existence for the past nine (9) years
              since 2015, successfully hosting annual charity projects and
              living up to their motto. The foundation raises the awareness on
              the less privileged in society who live in the streets with no one
              to turn to as well as the importance of a positive and healthy
              mental health. During their annual projects, they feed, educate
              and cloth these individuals with the hopes of making their lives a
              little less burdensome.
            </p>
          </div>
          <div>
            <CldImage
              src="VHEEWORLD - WEBSITE/IMG_5392_sxwnzn"
              alt="About VheeWorld Foundation"
              width={600}
              height={400}
              className="rounded-lg shadow-md md:mt-[104px]"
            />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Vision</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <CldImage
                src="VHEEWORLD - WEBSITE/IMG_5429_gqnzzg"
                alt="About VheeWorld Foundation"
                width={600}
                height={400}
                className="rounded-lg shadow-md md:mt-[104px]"
              />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <p className="text-gray-600 mb-6">
                Our vision is to break the cycle of homelessness and echo the importance of a healthy mind, empowering vulnerable individuals, providing them with opportunities, resources and mental health support to build healthy lives and contribute positively to society.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Mission</h2>
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <CldImage
                src="VHEEWORLD - WEBSITE/IMG_4988_bvozgv"
                alt="About VheeWorld Foundation"
                width={600}
                height={400}
                className="rounded-lg shadow-md md:mt-[104px]"
              />
            </div>
            <div className="md:w-1/2 md:pr-8">
              <p className="text-gray-600 mb-6">
                Our mission is to minimize the streetism and address the mental health challenges through community engagement, donations and advocacy.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <CldImage
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={300}
                  className="w-full h-auto"
                  priority={false}
                  aspectRatio="16:9"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 mb-2">{member.position}</p>
                  {/* <p className="text-gray-600">{member.bio}</p> */}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Compassion
              </h3>
              <p className="text-gray-600">
                We approach our work with empathy and understanding, recognizing
                the unique challenges faced by those affected by streetism.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Empowerment
              </h3>
              <p className="text-gray-600">
                Our programs are designed to provide individuals with the tools
                and support they need to become self-sufficient and regain
                control over their lives.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Sustainability
              </h3>
              <p className="text-gray-600">
                We aim to create lasting change by addressing the root causes of
                streetism and promoting long-term solutions for individuals and
                communities.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Collaboration
              </h3>
              <p className="text-gray-600">
                We believe in the power of partnerships and work closely with
                various stakeholders, including government agencies, businesses,
                and local communities, to maximize our impact.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
