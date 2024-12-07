import { NextRequest, NextResponse } from "next/server";
import User from "@/models/User";
import connectDB from "@/utils/db";
import bcrypt from "bcryptjs";
import { generateToken } from "@/utils/auth";

export async function POST(req: NextRequest) {
    try {
        await connectDB();
        const { email, password } = await req.json();
        

        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
        }

        if (!user.isVerified) {
            return NextResponse.json({ message: "Not verified" }, { status: 401 });
        }

        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
        }

        // Await the token generation
        const token = await generateToken({ id: user._id, email: user.email });
        
        const response = NextResponse.json({ message: "Login successful" });
        response.cookies.set("token", token, { httpOnly: true });

        return response;
    } catch (error) {
        return NextResponse.json({ message: "Error during login" }, { status: 500 });
    }
}
