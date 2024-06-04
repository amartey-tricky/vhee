"use client";

import { sendVolunteer } from "@/app/_actions";
import { volunteerSchema } from "@/lib/schema";
import type { volunteerFormData } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

export function VolunteerForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<volunteerFormData>({
    resolver: zodResolver(volunteerSchema),
  });

  const processForm: SubmitHandler<volunteerFormData> = async (data) => {
    const result = await sendVolunteer(data);

    if (result?.success) {
      console.log({ data: result.data });
      toast.success("Email sent successful");
      reset();
      return;
    }

    console.log(result?.error);
    toast.error("Something went wrong");
  };

  return (
    <main className="min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Volunteer with Us
        </h1>

        <p className="text-gray-600 mb-8">
          Volunteers play a vital role in our mission to empower individuals and
          families affected by streetism. Join our dedicated team and make a
          difference in your community.
        </p>

        <form onSubmit={handleSubmit(processForm)}>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Name
            </label>
            <input
              {...register("name")}
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {errors.name?.message && (
              <p className="text-sm px-2 py-3 text-red-400">
                {errors.name.message}
              </p>
            )}
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              {...register("email")}
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {errors.email?.message && (
              <p className="text-sm px-2 py-3 text-red-400">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="mb-6">
            <label
              htmlFor="phone"
              className="block text-gray-700 font-bold mb-2"
            >
              Phone
            </label>
            <input
              {...register("phone")}
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {errors.phone?.message && (
              <p className="text-sm px-2 py-3 text-red-400">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-700 font-bold mb-2"
            >
              Message
            </label>
            <textarea
              {...register("message")}
              id="message"
              name="message"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
              required
            />
            {errors.message?.message && (
              <p className="text-sm px-2 py-3 text-red-400">
                {errors.message.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </main>
  );
}
