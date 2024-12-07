import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/utils/db';
import Job from '@/models/Job';

export async function GET() {
    try {
        await connectDB();
        const jobs = await Job.find({});
        return NextResponse.json(jobs);
    } catch (error) {
        return NextResponse.json({ message: "Failed to fetch jobs" }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
        await connectDB();
        const { title, description, location, type } = await req.json();

        if (!title || !description || !location || !type) {
            return NextResponse.json({ message: "All fields are required" }, { status: 400 });
        }

        const job = new Job({ title, description, location, type });
        await job.save();

        return NextResponse.json({ message: "Job created successfully" });
    } catch (error) {
        return NextResponse.json({ message: "Error creating job" }, { status: 500 });
    }
}
