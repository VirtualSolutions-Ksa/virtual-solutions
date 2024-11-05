import { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
    const { name, email, phone, city, message } = await req.json();

    // Set up transporter for sending email
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'anshif.ummer@virtualksa.com',
        subject: 'Enquiry Email',
        text: `You have a new enquiry:\n
        Name: ${name}\n
        Email: ${email}\n
        Phone: ${phone}\n
        City: ${city}\n
        Message: ${message}`,
    };

    try {
        // Send email
        await transporter.sendMail(mailOptions);
        return new Response(JSON.stringify({ message: 'Message sent successfully!' }), { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response(JSON.stringify({ message: 'Failed to send message' }), { status: 500 });
    }
}
