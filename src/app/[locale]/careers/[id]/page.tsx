'use client';

import axios from 'axios';
import { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import RippleButton from '@/components/RippleButton';
import { notFound, useRouter } from 'next/navigation';

interface Job {
    _id: string;
    title: string;
    description: string;
    location: string;
    type: string;
}

interface JobApplication {
    name: string;
    email: string;
    resume: File[];
}

export default function JobPage({ params }: { params: { id: string } }) {
    const [jobData, setJobData] = useState<Job | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [formLoading, setFormLoading] = useState<boolean>(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm<JobApplication>();
    const router = useRouter();

    // Fetch job data from API
    useEffect(() => {
        const fetchJobData = async () => {
            try {
                const response = await axios.get(`/api/jobs/${params.id}`);
                setJobData(response.data);
            } catch (error) {
                console.error("Error fetching job data:", error);
                toast.error("Failed to load job details.");
            } finally {
                setLoading(false);
            }
        };

        fetchJobData();
    }, [params.id]);

    const onSubmit: SubmitHandler<JobApplication> = async (data) => {
        setFormLoading(true);
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("email", data.email);

        // Ensure the file is included in the form data
        if (data.resume && data.resume.length > 0) {  // Check if FileList is not empty
            formData.append("resume", data.resume[0]);  // Access the first file from FileList
        } else {
            toast.error("Please upload a resume.");
            return;
        }

        try {
            const response = await axios.post(`/api/jobs/${params.id}/apply`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",  // This is essential for file uploads
                },
            });
            toast.success(response.data.message);
            reset();
        } catch (error) {
            console.error("Error applying to the job:", error);

            // Extract error message from error object (if available)
            const errorMessage = "Failed to submit your application.";
            toast.error(errorMessage);
        } finally {
            setFormLoading(false);
        }
    };


    if (loading) {
        return (
            <div className='flex justify-center items-center h-56'>
                <div className='loader'></div>
            </div>
        );
    }

    if (!jobData) {
        notFound();
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900 my-20">
            <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-lg">
                {/* Job Details Section */}
                <h2 className="text-3xl font-bold text-gray-700 mb-4">{jobData.title}</h2>
                <p className="text-lg mb-1">Location: {jobData.location}</p>
                <p className="text-lg mb-4">Type: {jobData.type}</p>
                <div
                    className="mb-6 prose prose-lg text-black"
                    dangerouslySetInnerHTML={{ __html: jobData.description }}
                />

                {/* Application Form Section */}
                <h3 className="text-2xl font-bold text-gray-700 mb-4">Apply for this Job</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    {/* Name Field */}
                    <div>
                        <input
                            {...register('name', { required: 'Name is required' })}
                            placeholder="Full Name*"
                            className="w-full p-4 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                    </div>

                    {/* Email Field */}
                    <div>
                        <input
                            {...register('email', { required: 'Email is required' })}
                            placeholder="Email*"
                            className="w-full p-4 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>

                    {/* Resume Upload Field */}
                    <div>
                        <input
                            {...register('resume')}
                            type="file"
                            className="w-full p-4 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    {/* Submit Button */}
                    {
                        formLoading ? (
                            <button className='mt-4 py-4 px-10 w-fit bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 flex items-center justify-center'>
                                <span className='loader-button w-6 h-6 border-4 border-t-transparent border-white border-solid rounded-full animate-spin'></span>
                            </button>
                        ) : (
                            <RippleButton
                                component="button"
                                buttonText="Submit Application"
                                buttonCss="mt-4 py-4 px-10 w-fit bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700"
                            />
                        )
                    }

                </form>
            </div>

            <Toaster />
        </div>
    );
}
