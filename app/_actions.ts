"use server";

import { contactSchema } from "@/lib/schema";
import type { contactFormData } from "@/lib/schema";
import { Resend } from "resend";
import { ContactFormEmail } from "@/emails/contact-form-email";
import { VolunteerFormEmail } from "@/emails/volunteer-email-form";
import { volunteerSchema } from "@/lib/schema";
import type { volunteerFormData } from "@/lib/schema";

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

export async function sendVolunteer(data: volunteerFormData) {
  const result = volunteerSchema.safeParse(data);

  if (result.success) {
    const { name, email, phone, message } = result.data;
    try {
      const data = await resend.emails.send({
        from: "VheeWorld Website <info@vheeworld.org>",
        to: ["vheeworld@gmail.com"],
        subject: "Volunteer From Submission",
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
        react: VolunteerFormEmail({ name, email, phone, message }),
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