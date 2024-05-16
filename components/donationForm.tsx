"use client";

export function DonationForm() {
  return (
    <main className="bg-gray-100 min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Make a Donation
        </h1>
        <form>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-[70%] md:w-[60%] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              autoComplete="true"
              autoCapitalize="true"
              placeholder="Name"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-[70%] md:w-[60%] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              autoComplete="true"
              placeholder="email@email.com"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="amount"
              className="block text-gray-700 font-bold mb-2"
            >
              Donation Amount
            </label>
            <div className="flex items-center">
              <input
                type="number"
                id="amount"
                name="amount"
                min="5"
                step="5"
                className="w-[70%] md:w-[60%] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className="ml-2 text-gray-600">GH¢</span>
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            Donate Now
          </button>
        </form>
      </div>
    </main>
  );
}
