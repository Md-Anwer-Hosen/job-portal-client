import { FaGithub, FaLinkedin, FaFileAlt, FaUser } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const ApplyForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const jobId = id;

  const { user } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const resume = form.resume.value;
    const github = form.github.value;
    const linkedin = form.linkedin.value;

    const application = {
      jobId,
      applicant: user.email,
      linkedin,
      github,
      name,
      resume,
    };

    axios
      .post(
        "https://job-portal-server-bau7.onrender.com/applications",
        application,
      )
      .then(() => {
        navigate("/MyApplications");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login successful!",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({
          icon: "error",
          title: "Login failed",
          text: err.message,
        });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 from-slate-100 to-slate-200 px-4 text-black">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8">
        {/* Header */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
          Job Application Form
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Please fill out the form carefully
        </p>

        {/* Form */}
        <form className="space-y-5 " onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <div className="flex items-center border rounded-lg px-3 focus-within:ring-2 focus-within:ring-blue-500">
              <FaUser className="text-gray-400" />
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full px-3 py-2 outline-none"
                name="name"
              />
            </div>
          </div>

          {/* GitHub */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              GitHub Profile
            </label>
            <div className="flex items-center border rounded-lg px-3 focus-within:ring-2 focus-within:ring-blue-500">
              <FaGithub className="text-gray-400" />
              <input
                type="url"
                placeholder="https://github.com/username"
                className="w-full px-3 py-2 outline-none"
                required
                name="github"
              />
            </div>
          </div>

          {/* Resume */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Resume Link
            </label>
            <div className="flex items-center border rounded-lg px-3 focus-within:ring-2 focus-within:ring-blue-500">
              <FaFileAlt className="text-gray-400" />
              <input
                type="url"
                placeholder="Google Drive / Dropbox link"
                className="w-full px-3 py-2 outline-none"
                required
                name="resume"
              />
            </div>
          </div>

          {/* LinkedIn */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              LinkedIn Profile
            </label>
            <div className="flex items-center border rounded-lg px-3 focus-within:ring-2 focus-within:ring-blue-500">
              <FaLinkedin className="text-gray-400" />
              <input
                type="url"
                placeholder="https://linkedin.com/in/username"
                className="w-full px-3 py-2 outline-none"
                required
                name="linkedin"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyForm;
