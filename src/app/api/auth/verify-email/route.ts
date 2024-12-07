import { NextRequest, NextResponse } from "next/server";
import User from "@/models/User";
import connectDB from "@/utils/db";

export async function GET(req: NextRequest) {
    const token = req.nextUrl.searchParams.get('token'); // Correct way to get query parameter

    if (!token) {
        return NextResponse.json({ message: "Token is required" }, { status: 400 });
    }

    try {
        await connectDB();

        // Find the user by the token
        const user = await User.findOne({
            verificationToken: token,
            verificationTokenExpiration: { $gt: Date.now() },
        });

        if (!user) {
            return NextResponse.json({ message: "Invalid or expired token" }, { status: 400 });
        }

        // Mark the user as verified
        user.isVerified = true;
        user.verificationToken = undefined; // Clear the verification token
        user.verificationTokenExpiration = undefined; // Clear the expiration

        await user.save();

        return NextResponse.json({ message: "Email verified successfully!" }, { status: 200 });
    } catch (error) {
        console.error("Error verifying email:", error);
        return NextResponse.json({ message: "Error verifying email" }, { status: 500 });
    }
}
