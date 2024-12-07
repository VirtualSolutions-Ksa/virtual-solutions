import mongoose from "mongoose";

const connectDB = async () => {
    // Check if there is an active connection, return early if true
    if (mongoose.connections[0].readyState) {
        console.log("MongoDB already connected");
        return;
    }

    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.MONGODB_URI!);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        throw new Error("Database connection failed");
    }
};

export default connectDB;
