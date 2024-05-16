"use client";

import { sendEmail } from "@/app/_actions";
import { contactSchema } from "@/lib/schema";
import type { contactFormData } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<contactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const processForm: SubmitHandler<contactFormData> = async (data) => {
    const result = await sendEmail(data);

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
    <section className="flex flex-col gap-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 capitalize">
        contact form
      </h2>
      <form
        onSubmit={handleSubmit(processForm)}
        className="flex flex-1 flex-col gap-4 sm:w-1/2 md:w-full"
      >
        <input
          placeholder="name"
          className="rounded-lg px-2 py-3"
          {...register("name")}
        />
        {errors.name?.message && (
          <p className="text-sm px-2 py-3 text-red-400">
            {errors.name.message}
          </p>
        )}

        <input
          placeholder="email"
          className="rounded-lg px-2 py-3"
          {...register("email")}
        />
        {errors.email?.message && (
          <p className="text-sm px-2 py-3 text-red-400">
            {errors.email.message}
          </p>
        )}

        <input
          placeholder="subject"
          className="rounded-lg px-2 py-3"
          {...register("subject")}
        />
        {errors.subject?.message && (
          <p className="text-sm px-2 py-3 text-red-400">
            {errors.subject.message}
          </p>
        )}

        <textarea
          rows={4}
          placeholder="message"
          className="rounded-lg px-2 py-3"
          {...register("message")}
        />
        {errors.message?.message && (
          <p className="text-sm px-2 py-3 text-red-400">
            {errors.message.message}
          </p>
        )}

        <button
          disabled={isSubmitting}
          type="submit"
          className="rounded-lg bg-black py-2 text-white"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </section>
  );
}
