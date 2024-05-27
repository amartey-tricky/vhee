import { Counter } from "@/components/textTicker";

export function Impact() {
  return (
    <section className="mt-20 px-12 md:px-24">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Impact</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h3 className="text-4xl font-bold text-blue-500 mb-4">
            <Counter value={2500} direction="up" />
          </h3>
          <p className="text-gray-600">People Served</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h3 className="text-4xl font-bold text-blue-500 mb-4">
            <Counter value={18} direction="up" />
          </h3>
          <p className="text-gray-600">Programs</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h3 className="text-4xl font-bold text-blue-500 mb-4">
            <Counter value={18} direction="up" />
          </h3>
          <p className="text-gray-600">Communities Impacted</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <p className="text-gray-600">About</p>
          <h3 className="text-4xl font-bold text-blue-500 mb-4">
            <span>GH¢ 100,000</span>
          </h3>
          <p className="text-gray-600">Funds Raised</p>
        </div>
      </div>
    </section>
  );
}
