import { NextRequest, NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, message, level } = await req.json();

    const msg = {
      to: "your-email@example.com", // Your email address to receive the form submission
      from: "no-reply@example.com", // Use your verified SendGrid sender email
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nLevel: ${level}\nMessage: ${message}`,
      html: `<strong>Name:</strong> ${name}<br><strong>Email:</strong> ${email}<br><strong>Phone:</strong> ${phone}<br><strong>Level:</strong> ${level}<br><strong>Message:</strong> ${message}`,
    };

    await sgMail.send(msg);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
