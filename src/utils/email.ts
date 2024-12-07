import nodemailer from 'nodemailer';

export const sendVerificationEmail = async (email: string, name: string, verificationUrl: string) => {
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
        subject: 'Verify New Admin',
        html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <h2 style="color: #4CAF50;">New Admin Registration</h2>
                <p>Admin Name: ${name}</p>
                <p>Email: ${email}</p>
                <p>Thank you for registering. Please click the link below to verify:</p>
                <a href="${verificationUrl}" style="background-color: #4CAF50; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Verify Email</a>
                <p style="margin-top: 20px;">If you did not register for an account, please ignore this email.</p>
            </div>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.error("Error sending verification email:", error);
    }
};
