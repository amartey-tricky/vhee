import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { ContactForm } from "@/components/contactForm";

export default function Contact() {
  return (
    <main className="min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-6">
              We'd love to hear from you! Feel free to reach out to us with any
              questions or inquiries.
            </p>
            <div className="mb-6 flex items-center">
              <PhoneIcon className="text-gray-600 mr-4 w-12" />
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Phone</h3>
                <p className="text-gray-600">+233 20 933 4967</p>
              </div>
            </div>
            <div className="mb-6 flex items-center">
              <EnvelopeIcon className="text-gray-600 mr-4 w-12" />
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Email</h3>
                <p className="text-gray-600">vheeworld@gmail.com</p>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
