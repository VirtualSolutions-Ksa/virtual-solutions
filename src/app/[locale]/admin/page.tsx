'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

interface Job {
  _id: string;
  title: string;
  location: string;
}

export default function AdminHome() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const router = useRouter();

  // Fetch jobs on component mount
  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await axios.get('/api/jobs');
      setJobs(response.data);
    } catch (error) {
      console.error('Error fetching jobs:', error);
      toast.error('Failed to load jobs');
    }
  };

  const handleDeleteJob = async (id: string) => {
    try {
      await axios.delete(`/api/jobs/${id}`);
      toast.success('Job deleted successfully');
      fetchJobs(); // Refresh the job list
    } catch (error) {
      console.error('Error deleting job:', error);
      toast.error('Failed to delete job');
    }
  };

  return (
    <div className="container my-20 mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Admin Job Management</h2>
        <button
          onClick={() => router.push('/admin/jobs/create')}
          className="px-6 py-2 bg-blue-500 text-white rounded-md"
        >
          Add Job
        </button>
      </div>

      {/* Job List */}
      <ul>
        {jobs.map((job) => (
          <li
            key={job._id}
            className="flex justify-between items-center bg-gray-100 p-4 mb-2 rounded-md hover:shadow-lg transition-shadow duration-200"
          >
            <div>
              <h4 className="font-semibold">{job.title}</h4>
              <p className="text-sm text-gray-600">{job.location}</p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => router.push(`/admin/jobs/edit/${job._id}`)}
                className="px-4 py-2 bg-yellow-500 text-white rounded-md"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteJob(job._id)}
                className="px-4 py-2 bg-red-500 text-white rounded-md"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
