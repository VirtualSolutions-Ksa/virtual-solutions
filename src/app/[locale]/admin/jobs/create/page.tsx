'use client'
import dynamic from 'next/dynamic';
const JobFormPage = dynamic(() => import('@/components/JobForm/JobForm'), { ssr: false });

export default function Page() {
    return <JobFormPage />;
}
