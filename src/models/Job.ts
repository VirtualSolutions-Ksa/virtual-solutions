import mongoose, { Schema, model, models } from 'mongoose';

const JobSchema = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        location: { type: String, required: true },
        type: { type: String, required: true },
    },
    { timestamps: true }
);

export default models.Job || model('Job', JobSchema);
