// app/get-involved/page.tsx
import Link from 'next/link';

export default function Page() {
  return (
    <main className="min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Get Involved</h1>

        <p className="text-gray-600 mb-12">
          At VheeWorld Foundation, we believe that every individual can make a difference in the fight against streetism. There are numerous ways you can get involved and contribute to our mission of empowering lives and transforming communities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Donate</h2>
            <p className="text-gray-600 mb-4">
              Your financial contributions play a crucial role in supporting our programs and initiatives. Every donation, no matter the amount, makes a meaningful impact.
            </p>
            <Link
              href="/donate"
              className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
            >
              Donate Now
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Volunteer</h2>
            <p className="text-gray-600 mb-4">
              Join our dedicated team of volunteers and lend your time and skills to support our outreach, rehabilitation, and community programs.
            </p>
            <Link
              href="/volunteer"
              className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
            >
              Volunteer
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Ways to Give</h2>
            <p className="text-gray-600 mb-4">
              Explore various ways to support our cause, including in-kind donations, corporate partnerships, and fundraising campaigns.
            </p>
            <Link
              href="/ways-to-give"
              className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}