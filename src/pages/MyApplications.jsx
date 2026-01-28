import { useQuery } from "@tanstack/react-query";
import UseAuth from "../hooks/useAuth";
import useApplicationsApi from "../api/useApplicationsApi";
import useAuth from "../hooks/useAuth";

const MyApplications = () => {
  const { user, loading } = useAuth();

  const myApplicationsPromise = useApplicationsApi();

  const {
    data = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["applications", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: () => myApplicationsPromise(user.email),
  });

  if (loading || isLoading)
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
    <div className="max-w-7xl mx-auto my-8 sm:my-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-center text-blue-600">
        My Applications
      </h1>

      {/* ✅ MOBILE VIEW (Cards) */}
      <div className="md:hidden space-y-4">
        {data.length > 0 ? (
          data.map((app, index) => (
            <div
              key={app._id}
              className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">#{index + 1}</p>
                <p className="text-xs px-2 py-1 rounded bg-blue-50 text-blue-600">
                  {app.jobId}
                </p>
              </div>

              <div className="mt-3 space-y-1">
                <p className="text-base font-semibold text-slate-900">
                  {app.name}
                </p>
                <p className="text-sm text-gray-600 break-all">
                  {app.applicant}
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={app.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-sm btn-outline text-black
                  "
                >
                  LinkedIn
                </a>
                <a
                  href={app.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-sm btn-outline text-black"
                >
                  GitHub
                </a>
                <a
                  href={app.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-sm btn-success text-white"
                >
                  Resume
                </a>
              </div>
            </div>
          ))
        ) : (
          <div className="py-10 text-center text-gray-500">
            No applications found
          </div>
        )}
      </div>

      {/* ✅ DESKTOP/TABLET VIEW (Table) */}
      <div className="hidden md:block overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-[900px] w-full bg-white border border-gray-200">
          <thead className="bg-blue-100 text-blue-700 uppercase text-sm">
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
                  <td className="py-3 px-4">{index + 1}</td>
                  <td className="py-3 px-4 font-medium text-gray-700">
                    {app.jobId}
                  </td>
                  <td className="py-3 px-4 text-black">{app.name}</td>
                  <td className="py-3 px-4 text-black">{app.applicant}</td>

                  <td className="py-3 px-4 ">
                    <a
                      href={app.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className=" hover:underline text-black"
                    >
                      <p> View</p>
                    </a>
                  </td>

                  <td className="py-3 px-4 text-black">
                    <a
                      href={app.github}
                      target="_blank"
                      rel="noreferrer"
                      className=" hover:underline text-black"
                    >
                      <p> View</p>
                    </a>
                  </td>

                  <td className="py-3 px-4">
                    <a
                      href={app.resume}
                      target="_blank"
                      rel="noreferrer"
                      className="text-green-600 hover:underline"
                    >
                      Download
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="py-6 text-center text-gray-500">
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
