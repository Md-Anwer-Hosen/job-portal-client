import { useQuery } from "@tanstack/react-query";
import React from "react";
import UseAuth from "../hooks/UseAuth";

const MyApplications = () => {
  const { user } = UseAuth();

  const {
    data = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["applications", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:3000/applications?email=${user.email}`,
      );
      return res.json();
    },
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
        <span>Failed to load applications</span>
      </div>
    );

  return (
    <div className="max-w-7xl mx-auto my-10 px-4">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-blue-600">
        My Applications
      </h1>

      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-blue-100 text-blue-700 uppercase text-sm sm:text-base">
            <tr>
              <th className="py-3 px-4 text-left">#</th>
              <th className="py-3 px-4 text-left">Job ID</th>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">LinkedIn</th>
              <th className="py-3 px-4 text-left">GitHub</th>
              <th className="py-3 px-4 text-left">Resume</th>
            </tr>
          </thead>

          <tbody>
            {data.length > 0 ? (
              data.map((app, index) => (
                <tr
                  key={app._id}
                  className="border-b border-gray-100 hover:bg-gray-50 transition"
                >
                  <td className="py-3 px-4 text-sm sm:text-base">
                    {index + 1}
                  </td>
                  <td className="py-3 px-4 text-sm sm:text-base font-medium text-gray-700">
                    {app.jobId}
                  </td>
                  <td className="py-3 px-4 text-sm sm:text-base text-black">
                    {app.name}
                  </td>
                  <td className="py-3 px-4 text-sm sm:text-base text-black">
                    {app.applicant}
                  </td>

                  <td className="py-3 px-4 text-sm sm:text-base">
                    <a
                      href={app.linkedin}
                      target="_blank"
                      className="text-blue-500 hover:underline"
                    >
                      View
                    </a>
                  </td>

                  <td className="py-3 px-4 text-sm sm:text-base">
                    <a
                      href={app.github}
                      target="_blank"
                      className="text-blue-500 hover:underline"
                    >
                      View
                    </a>
                  </td>

                  <td className="py-3 px-4 text-sm sm:text-base">
                    <a
                      href={app.resume}
                      target="_blank"
                      className="text-green-600 hover:underline"
                    >
                      Download
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="7"
                  className="py-6 text-center text-gray-500 text-sm sm:text-base"
                >
                  No applications found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplications;
