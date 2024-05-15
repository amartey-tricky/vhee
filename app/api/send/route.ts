import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { Resend } from "resend";


export default async function GET() {
  const resend = new Resend(process.env.RESEND_API_KEY as string)

  try {
    const { data } = await resend.emails.send({
      from: "vheeworld@gmail.com",
      to: ["patrickannang23@gmail.com", "stephanadjei@gmail.com"],
      subject: "Test Email",
      html: "<h1>Test Email</h1>"
    });

    return NextResponse.json({data})
  } catch (error) {
    return NextResponse.json({ error })
  }
}