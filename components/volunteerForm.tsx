"use client";

import { useState } from "react";

/**
 * The VolunteerForm component is a React functional component that renders a form for users to volunteer with the organization.
 *
 * The form includes fields for the user's name, email, phone, and a message. When the form is submitted, the form data is logged to the console and the formSubmitted state is set to true, which displays a success message.
 *
 * The component uses the useState hook to manage the form data and the formSubmitted state. The handleChange function is used to update the form data as the user types, and the handleSubmit function is called when the form is submitted.
 *
 * The component also includes some basic styling using Tailwind CSS classes.
 */
export function VolunteerForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here, you can add your logic to handle the volunteer form submission
    // For example, you can send the form data to a server or an email service
    console.log("Form Data:", formData);
    setFormSubmitted(true);
  };

  return (
    <main className="bg-gray-100 min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Volunteer with Us
        </h1>

        <p className="text-gray-600 mb-8">
          Volunteers play a vital role in our mission to empower individuals and
          families affected by streetism. Join our dedicated team and make a
          difference in your community.
        </p>

        {formSubmitted ? (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-md mb-8">
            <p>
              Thank you for your interest in volunteering! We'll review your
              submission and get back to you soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
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
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
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
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="phone"
                className="block text-gray-700 font-bold mb-2"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray-700 font-bold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
                required
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
