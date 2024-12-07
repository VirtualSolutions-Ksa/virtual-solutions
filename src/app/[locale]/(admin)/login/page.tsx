'use client';
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import axios from 'axios';
import toast, { Toaster } from "react-hot-toast";
import RippleButton from "@/components/RippleButton";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface FormData {
    email: string;
    password: string;
    name?: string;
}

interface ApiResponse {
    message: string;
}

const loginValidationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().required("Password is required"),
});

const registerValidationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

export default function AuthPage() {
    const [isRegistering, setIsRegistering] = useState(false);
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>({
        resolver: yupResolver(isRegistering ? registerValidationSchema : loginValidationSchema),
    });

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        try {
            const endpoint = isRegistering ? '/api/auth/register' : '/api/auth/login';
            const response = await axios.post<ApiResponse>(endpoint, data);
            toast.success(response.data.message);
            reset();
            if (!isRegistering) {
                router.push('/admin');
            } else {
                router.push('/admin')
            }
        } catch (error) {
            
            toast.error("Failed to process your request. Try again later.");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="w-full max-w-md p-6 bg-primary rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center text-white">
                    {isRegistering ? "Admin Register" : "Admin Login"}
                </h2>
                <form onSubmit={handleSubmit(onSubmit)} className="text-white space-y-5 mt-5">
                    {isRegistering && (
                        <div className="space-y-3 w-full">
                            {/* Name Field */}
                            <input
                                {...register('name')}
                                placeholder="Name*"
                                className="border border-gray-700 p-4 bg-transparent outline-none ring-0 focus:ring-2 focus:ring-indigo-400 w-full placeholder-gray-400"
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                        </div>
                    )}
                    <div className="space-y-3 w-full">
                        {/* Email Field */}
                        <input
                            {...register('email')}
                            placeholder="Email*"
                            className="border border-gray-700 p-4 bg-transparent outline-none ring-0 focus:ring-2 focus:ring-indigo-400 w-full placeholder-gray-400"
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>
                    <div className="space-y-3 w-full">
                        {/* Password Field */}
                        <input
                            {...register('password')}
                            type="password"
                            placeholder="Password*"
                            className="border border-gray-700 p-4 bg-transparent outline-none ring-0 focus:ring-2 focus:ring-indigo-400 w-full placeholder-gray-400"
                        />
                        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                    </div>
                    <RippleButton
                        component="button"
                        buttonText={isRegistering ? "Register" : "Login"}
                        buttonCss="mt-4 py-4 px-10 w-fit bg-banner-button font-kurb text-base font-bold text-dark-blue before:bg-white hover:before:w-[300px] hover:before:h-[300px]"
                    />
                </form>
                <p className="mt-4 text-sm text-center text-gray-400">
                    {isRegistering ? "Already have an account?" : "Don't have an account?"}{' '}
                    <button
                        className="text-indigo-400 hover:underline"
                        onClick={() => setIsRegistering(!isRegistering)}
                    >
                        {isRegistering ? "Login here" : "Register here"}
                    </button>
                </p>
            </div>
            <Toaster />
        </div>
    );
}
