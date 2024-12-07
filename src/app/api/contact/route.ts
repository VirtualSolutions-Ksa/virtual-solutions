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
        to: process.env.COMPANY_EMAIL,
        subject: 'New Enquiry from Your Website',
        html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
            <h2 style="color: #4CAF50; text-align: center;">New Enquiry Received</h2>
            <p style="font-size: 1.1em; margin-bottom: 20px;">Hello, you have received a new enquiry from your website. Here are the details:</p>
            
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 6px; margin-bottom: 20px;">
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #4CAF50; text-decoration: none;">${email}</a></p>
                <p><strong>Phone:</strong> <a href="tel:${phone}" style="color: #4CAF50; text-decoration: none;">${phone}</a></p>
                <p><strong>City:</strong> ${city}</p>
            </div>

            <div style="background-color: #fff3cd; padding: 15px; border: 1px solid #ffeeba; border-radius: 6px;">
                <h3 style="margin-top: 0; color: #856404;">Message:</h3>
                <p>${message}</p>
            </div>

            <p style="text-align: center; margin-top: 30px;">
                <small style="color: #777;">This email was generated by your website’s enquiry form.</small>
            </p>
        </div>
    `,
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
