import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/utils/db';
import Job from '@/models/Job';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    
    try {
        await connectDB();
        const job = await Job.findById(params.id);

        if (!job) {
            return NextResponse.json({ message: "Job not found" }, { status: 404 });
        }

        return NextResponse.json(job);
    } catch (error) {
        return NextResponse.json({ message: "Error fetching job" }, { status: 500 });
    }
}

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        await connectDB();
        const { title, description, location, type } = await req.json();

        if (!title || !description || !location || !type) {
            return NextResponse.json({ message: "All fields are required" }, { status: 400 });
        }

        const updatedJob = await Job.findByIdAndUpdate(
            params.id,
            { title, description, location, type },
            { new: true } // Return the updated document
        );

        if (!updatedJob) {
            return NextResponse.json({ message: "Job not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Job updated successfully" });
    } catch (error) {
        return NextResponse.json({ message: "Error updating job" }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        await connectDB();
        const deletedJob = await Job.findByIdAndDelete(params.id);

        if (!deletedJob) {
            return NextResponse.json({ message: "Job not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Job deleted successfully" });
    } catch (error) {
        return NextResponse.json({ message: "Error deleting job" }, { status: 500 });
    }
}
