
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { first_name, last_name, user_email, message, service } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${first_name}" <${user_email}>`,
      to: "tonoysharma58@gmail.com", 
      subject: `New Message from ${first_name} - Portfolio`,
      html: `
        <p><strong>Name:</strong> ${first_name} ${last_name}</p>
        <p><strong>Email:</strong> ${user_email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

 
    await transporter.sendMail({
      from: '"Tonoy Sharma" <tonoysharma58@gmail.com>',
      to: user_email, 
      subject: "Thank you for contacting me!",
      text: `Hi ${first_name}, I have received your message. I'll get back to you soon!`,
      html: `<h3>Hi ${first_name},</h3>
             <p>Thanks for reaching out! I have received your message regarding <strong>${service}</strong>.</p>
             <p>I will get back to you as soon as possible.</p>
             <br/>
             <p>Best Regards,</p>
             <p><strong>Tonoy Sharma</strong></p>`,
    });

    return NextResponse.json({ message: "Emails sent successfully!" }, { status: 200 });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
  }
}