'use client'
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import JobFormPage from "@/components/JobForm/JobForm";

export default function EditJobPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [jobData, setJobData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobData = async () => {
      try {
        const response = await axios.get(`/api/jobs/${params.id}`);
        setJobData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching job data:", error);
        toast.error("Failed to load job data");
        setLoading(false);
      }
    };

    fetchJobData();
  }, [params.id]);

  if (loading) return <div>Loading...</div>;

  return <JobFormPage jobData={jobData}  />;
}
