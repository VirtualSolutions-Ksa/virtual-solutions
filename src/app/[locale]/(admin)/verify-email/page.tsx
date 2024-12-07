'use client'

import RippleButton from '@/components/RippleButton';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from "react";
import toast from "react-hot-toast";

const VerifyEmailPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isVerified, setIsVerified] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [countdown, setCountdown] = useState(5);
    const router = useRouter();

    const searchParams = useSearchParams();
    const token = searchParams.get("token");

    useEffect(() => {
        if (!token) return; // Exit if no token is present

        const verifyEmail = async () => {
            try {
                const response = await fetch(`/api/auth/verify-email?token=${token}`);
                const data = await response.json();

                if (response.status === 200) {
                    setIsVerified(true);
                    toast.success(data.message);
                    startRedirectCountdown();
                } else {
                    setError("An error occurred. Please try again later.");
                    startRedirectCountdown();
                }
            } catch (err) {
                setError("An error occurred. Please try again later.");
                startRedirectCountdown();
            } finally {
                setIsLoading(false);
            }
        };

        verifyEmail();
    }, [token]); // Only run when token changes

    const startRedirectCountdown = () => {
        const interval = setInterval(() => {
            setCountdown((prevCountdown) => {
                if (prevCountdown <= 1) {
                    clearInterval(interval);
                    router.push("/login");
                }
                return prevCountdown - 1;
            });
        }, 1000);
    };

    if (isLoading) {
        return <div className='min-h-52 flex items-center justify-center'>Loading...</div>;
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <div className="w-full max-w-md p-6 bg-primary rounded-lg shadow-lg">
                {isVerified ? (
                    <div className="text-white text-center">
                        <h2 className="text-2xl font-bold mb-4">Email Verified!</h2>
                        <p>Your email has been successfully verified. You can now log in.</p>
                        <RippleButton
                            component="link"
                            buttonText="Login"
                            href='/login'
                            buttonCss="mt-7 py-4 px-10 w-fit font-kurb text-base font-medium text-white bg-primary before:bg-secondary hover:before:w-[200px] hover:text-primary hover:before:h-[200px]"
                        />
                    </div>
                ) : (
                    <div className="text-white text-center">
                        <h2 className="text-2xl font-bold mb-4">Email Verification</h2>
                        {error ? (
                            <p className="text-red-500">{error}</p>
                        ) : (
                            <p>Please wait while we verify your email...</p>
                        )}
                        <p className="text-gray-400">Redirecting in {countdown} seconds...</p>
                    </div>
                )}
            </div>
        </div>
    );
};

const VerifyEmailPageWithSuspense = () => {
    return (
        <Suspense fallback={<div className='min-h-52 flex items-center justify-center'>Loading...</div>}>
            <VerifyEmailPage />
        </Suspense>
    );
};

export default VerifyEmailPageWithSuspense;
