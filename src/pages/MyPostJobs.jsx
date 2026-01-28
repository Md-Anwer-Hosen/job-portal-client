import { useQuery } from "@tanstack/react-query";
import React from "react";
import JobCartAdmin from "../Shared/JobCartAdmin";
import useAuth from "../hooks/useAuth";
import useJobApi from "../api/useJobsApi";

const MyPostJobs = () => {
  const { myJobs } = useJobApi();
  const { user } = useAuth();
  const {
    data = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["jobs", "all"],

    queryFn: () => myJobs(user.email),
  });

  if (isLoading)
    return (
      <div className="flex justify-center py-20">
        <span className="loading loading-ring loading-xl"></span>
      </div>
    );

  if (isError)
    return (
      <div className="max-w-md mx-auto mt-20 alert alert-error">
        <span>Failed to load jobs</span>
      </div>
    );

  return (
    <div>
      <section className="bg-white text-black my-12 md:my-20 px-4 md:px-8 min-h-screen mx-auto">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-blue-700">
            My Post Jobs
          </h1>

          <p className="text-center font-semibold text-sm sm:text-md text-gray-600 mt-4 max-w-2xl mx-auto">
            Search and connect with the right candidates faster.
          </p>

          <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  mt-10 md:mt-16 gap-5">
            {data.map((job) => (
              <JobCartAdmin key={job.id || job._id} data={job} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyPostJobs;
