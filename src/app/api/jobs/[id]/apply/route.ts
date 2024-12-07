import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";
import { promisify } from "util";

// Define upload directory and create a pump method
const pump = promisify(fs.writeFile);

export async function POST(req: NextRequest) {
    try {
        // Parse form data
        const formData = await req.formData();

        // Extract fields
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const fileList = formData.getAll("resume") as File[];  // FileList is now an array of File

        if (!name || !email || fileList.length === 0) {
            return NextResponse.json(
                { status: "fail", message: "All fields are required." },
                { status: 400 }
            );
        }

        // Access the first file from fileList
        const file = fileList[0];

        // Check if file is a valid object
        if (!file) {
            return NextResponse.json(
                { status: "fail", message: "No file uploaded." },
                { status: 400 }
            );
        }

        // Convert the file to a buffer
        const arrayBuffer = await file.arrayBuffer(); // This works on a single File object
        const buffer = Buffer.from(arrayBuffer);

        // Define upload directory
        const uploadDir = path.join(process.cwd(), "public/uploads");
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }

        // Define the file path
        const filePath = path.join(uploadDir, file.name);

        // Save the file to disk
        await promisify(fs.writeFile)(filePath, buffer);

        // Prepare email content
        const emailContent = `
            <h3>Job Application Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
        `;

        // Nodemailer transporter setup
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        // Send email with attachment
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.COMPANY_EMAIL,
            subject: "New Job Application",
            html: emailContent,
            attachments: [
                {
                    filename: file.name,
                    path: filePath,  // Path of the uploaded file
                },
            ],
        });

        // Cleanup: Delete the uploaded file after sending the email
        fs.unlinkSync(filePath);

        return NextResponse.json({
            status: "success",
            message: "Application submitted successfully.",
        });
    } catch (error) {
        console.error("Error processing the request:", error);
        return NextResponse.json(
            { status: "fail", message: "Failed to process the application.", error },
            { status: 500 }
        );
    }
}


