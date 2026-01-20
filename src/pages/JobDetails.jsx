import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const job = useLoaderData();

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 rounded-xl shadow-md my-10">
      {/* Job Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-blue-600">
        {job.title}
      </h1>

      {/* Basic Info */}
      <div className="text-gray-500 mb-4 space-y-1 sm:space-y-0 sm:flex sm:gap-6 flex-wrap">
        <p className="text-red-800 font-semibold">Company: {job.company}</p>
        <p>Location: {job.location}</p>
        <p>Job Type: {job.jobType}</p>
        <p>Deadline: {job.applicationDeadline}</p>
      </div>

      {/* Description */}
      <p className="text-gray-700 mb-4 text-sm sm:text-base">
        {job.description}
      </p>

      {/* Requirements */}
      <h3 className="font-semibold mb-2 text-sm sm:text-base text-blue-600">
        Requirements:
      </h3>
      <div className="flex flex-wrap gap-2 mb-4">
        {job.requirements.map((skill, i) => (
          <span
            key={i}
            className="bg-blue-50 text-blue-600 text-xs sm:text-sm px-2 py-1 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Salary */}
      <p className="font-bold text-blue-600 mb-4 text-sm sm:text-base">
        Salary: ৳{job.salaryRange.min} - ৳{job.salaryRange.max}
      </p>

      {/* Apply Button */}

      <Link to={`/apply/${job._id}`}>
        {" "}
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 text-sm sm:text-base">
          Apply Now
        </button>
      </Link>
    </div>
  );
};

export default JobDetails;
