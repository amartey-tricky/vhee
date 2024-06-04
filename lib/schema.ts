import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Mesasge is required"),
});

export type contactFormData = z.infer<typeof contactSchema>;

export const volunteerSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .min(10, "Invalid phone number")
    .max(10, "Invalid phone number"),
  message: z.string().min(1, "Message is required"),
});

export type volunteerFormData = z.infer<typeof volunteerSchema>;

export const donationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  amount: z.number().min(1, "Amount is required"),
})

export type donationFormData = z.infer<typeof donationSchema>;
