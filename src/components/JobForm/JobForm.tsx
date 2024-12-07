'use client';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import RippleButton from '@/components/RippleButton';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface JobFormData {
    _id?: string;
    title: string;
    description: string;
    location: string;
    type: string;
}

const jobValidationSchema = Yup.object().shape({
    title: Yup.string().required('Job title is required'),
    description: Yup.string().required('Job description is required'),
    location: Yup.string().required('Job location is required'),
    type: Yup.string().required('Job type is required'),
});

export default function JobFormPage({ jobData }: { jobData?: JobFormData }) {
    const isEditing = Boolean(jobData);
    const router = useRouter();
    const [description, setDescription] = useState<string>(jobData?.description || '');

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setValue,
    } = useForm<JobFormData>({
        resolver: yupResolver(jobValidationSchema),
        defaultValues: jobData,
    });

    const onSubmit: SubmitHandler<JobFormData> = async (data) => {
        try {
            const endpoint = isEditing ? `/api/jobs/${jobData?._id}` : '/api/jobs';
            const payload = { ...data, description };
            const response = await axios.post(endpoint, payload);
            toast.success(response.data.message);
            reset();
            router.push('/admin');
        } catch (error) {
            console.error(error);
            toast.error('Failed to process your request. Try again later.');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900 my-20 px-10">
            <div className="w-full p-6 bg-primary rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center text-white">
                    {isEditing ? 'Edit Job' : 'Add Job'}
                </h2>
                <form onSubmit={handleSubmit(onSubmit)} className="text-white space-y-5 mt-5">
                    <div className="space-y-3 w-full">
                        <input
                            {...register('title')}
                            placeholder="Job Title*"
                            className="border border-gray-700 p-4 bg-transparent outline-none ring-0 focus:ring-2 focus:ring-indigo-400 w-full placeholder-gray-400"
                        />
                        {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
                    </div>
                    <div className="space-y-3 w-full">
                        <ReactQuill
                            value={description}
                            onChange={(value) => {
                                setDescription(value); // Update local state
                                setValue('description', value); // Synchronize with react-hook-form
                            }}
                            className="bg-white text-black"
                            placeholder="Write job description here..."
                        />
                        {errors.description && (
                            <p className="text-red-500 text-sm">{errors.description.message}</p>
                        )}
                    </div>
                    <div className="space-y-3 w-full">
                        <input
                            {...register('location')}
                            placeholder="Job Location*"
                            className="border border-gray-700 p-4 bg-transparent outline-none ring-0 focus:ring-2 focus:ring-indigo-400 w-full placeholder-gray-400"
                        />
                        {errors.location && <p className="text-red-500 text-sm">{errors.location.message}</p>}
                    </div>
                    <div className="space-y-3 w-full">
                        <select
                            {...register('type')}
                            className="border border-gray-700 p-4 text-black bg-transparent outline-none ring-0 focus:ring-0 w-full placeholder-white"
                        >
                            <option value="">Select Job Type*</option>
                            <option value="Full-time">Full-time</option>
                            <option value="Part-time">Part-time</option>
                            <option value="Contract">Contract</option>
                            <option value="Internship">Internship</option>
                        </select>
                        {errors.type && <p className="text-red-500 text-sm">{errors.type.message}</p>}
                    </div>
                    <RippleButton
                        component="button"
                        buttonText={isEditing ? 'Save Changes' : 'Add Job'}
                        buttonCss="mt-4 py-4 px-10 w-fit bg-banner-button font-kurb text-base font-bold text-dark-blue before:bg-white hover:before:w-[300px] hover:before:h-[300px]"
                    />
                </form>
                <Toaster />
            </div>
        </div>
    );
}
