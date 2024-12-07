import { NextRequest, NextResponse } from "next/server";
import User from "@/models/User";
import connectDB from "@/utils/db";
import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from 'uuid';
import { sendVerificationEmail } from "@/utils/email";

export async function POST(req: NextRequest) {
    try {
        await connectDB();
        const { email, password, name } = await req.json();

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ message: "User already exists" }, { status: 400 });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a verification token
        const verificationToken = uuidv4();
        const verificationTokenExpiration = Date.now() + 3600000; // 1 hour expiration

        // Create the new user
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            verificationToken,
            verificationTokenExpiration,
            isVerified: false, // Initially, the user is not verified
        });

        // Save the user to the database
        await newUser.save();

        // Send verification email
        const verificationUrl = `${process.env.BASE_URL}/verify-email?token=${verificationToken}`;
        await sendVerificationEmail(email,name, verificationUrl);

        return NextResponse.json({ message: "User registered successfully. Please check your email to verify." }, { status: 201 });
    } catch (error) {
        console.error("Error registering user:", error);
        return NextResponse.json({ message: "Error registering user" }, { status: 500 });
    }
}
