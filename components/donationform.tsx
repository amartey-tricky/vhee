"use client";

import { donationSchema } from "@/lib/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePaystackPayment } from "react-paystack";
import { toast } from "sonner";
import type { donationFormData } from "@/lib/schema";
import type { SubmitHandler } from "react-hook-form";

interface PaystackConfig {
  reference: string;
  name: string;
  email: string;
  amount: number;
  currency: string;
  channels?: string[];
  callback_url?: string;
  publicKey: string;
}

const key = process.env.NEXT_PUBLIC_PAYSTACK_KEY as string;

export default function DonationForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<donationFormData>({
    resolver: zodResolver(donationSchema),
  });

  const result = donationSchema;

  const onSuccess = (reference: string) => {
    console.log(reference);
    toast.success("Donation successful!");
  };

  const onClose = () => {
    console.log("Payment closed");
    toast.error("Payment Closed");
  };

  const config: PaystackConfig = {
    reference: new Date().getTime().toString(),
    name: "",
    email: "",
    amount: 0,
    currency: "GHS",
    callback_url: "https:vheeworld.org/thank-you",
    channels: ["card", "mobile_money"],
    publicKey: key,
  };

  const initializePayment = usePaystackPayment(config);

  const onSubmit: SubmitHandler<donationFormData> = (data) => {
    config.email = data.email;
    config.amount = data.amount * 100;
    initializePayment({ onSuccess, onClose });
    reset();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-6">
      <h1 className="text-4xl font-bold mb-4">Make a Donation</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">
            Name
          </label>
          <input
            id="name"
            type="text"
            {...register("name")}
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="amount" className="block mb-2">
            Amount (GH¢)
          </label>
          <input
            id="amount"
            type="number"
            step="10"
            {...register("amount", { valueAsNumber: true })}
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
          {errors.amount && (
            <p className="text-red-500">{errors.amount.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Donate
        </button>
      </form>
    </div>
  );
}
