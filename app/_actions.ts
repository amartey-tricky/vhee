"use server";

import { contactSchema } from "@/lib/schema";
import type { contactFormData } from "@/lib/schema";
import { Resend } from "resend";
import { ContactFormEmail } from "@/emails/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(data: contactFormData) {
  const result = contactSchema.safeParse(data);

  if (result.success) {
    const { name, email, subject, message } = result.data;
    try {
      const data = await resend.emails.send({
        from: "VheeWorld Website <info@vheeworld.org>",
        to: ["vheeworld@gmail.com"],
        subject: "Contact From Submission",
        text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
        react: ContactFormEmail({ name, email, subject, message }),
      });
      return { success: true, data };
    } catch (error) {
      return { success: false, error };
    }
  }

  if (result.error) {
    return { success: false, error: result.error.format() };
  }
}