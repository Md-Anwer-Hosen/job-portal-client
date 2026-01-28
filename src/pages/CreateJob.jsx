import axios from "axios";
import UseAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const JobCreateForm = () => {
  const { user } = UseAuth();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    //process salary-->
    const { min, max, currency, ...newData } = data;
    newData.salaryRange = { min, max, currency };
    //process requirements-->
    newData.requirements = newData.requirements.split(",").map((d) => d.trim());
    // console.log(newData);
    //process responsibilities-->
    newData.responsibilities = newData.responsibilities
      .split(",")
      .map((d) => d.trim());

    axios
      .post("https://job-portal-server-bau7.onrender.com/jobs", newData)
      .then(() => {
        navigate("/MyPostJobs");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Create your Job successful!",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({
          icon: "error",
          title: " failed",
          text: err.message,
        });
      });
  };

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg">
        {/* Header */}
        <div className="bg-blue-600 text-white p-6 rounded-t-xl">
          <h1 className="text-2xl font-bold">Create Job Post</h1>
          <p className="text-sm text-blue-100">
            Fill all information carefully
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-8 text-black">
          {/* Job Info */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Job Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="title"
                placeholder="Job Title"
                className="input-style"
                required
              />

              <input
                name="company"
                placeholder="Company Name"
                className="input-style"
                required
              />

              <input
                name="location"
                placeholder="Location"
                className="input-style"
                required
              />

              <select name="category" className="input-style" required>
                <option value="">Select Category</option>
                <option>Engineering</option>
                <option>Software Development</option>
                <option>Web Development</option>
                <option>Mobile App Development</option>
                <option>Data Science</option>
                <option>AI / Machine Learning</option>
                <option>Cyber Security</option>
                <option>DevOps</option>
                <option>Marketing</option>
                <option>Design</option>
              </select>

              <select name="jobType" className="input-style" required>
                <option value="">Job Type</option>
                <option>Remote</option>
                <option>Hybrid</option>
                <option>Onsite</option>
              </select>

              {/* Calendar */}
              <input
                type="date"
                name="applicationDeadline"
                className="input-style"
                required
              />
            </div>
          </div>

          {/* Salary */}

          <div>
            <h2 className="text-lg font-semibold mb-4">Salary Range</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="number"
                name="min"
                placeholder="Minimum Salary"
                className="input-style"
                required
              />

              <input
                type="number"
                name="max"
                placeholder="Maximum Salary"
                className="input-style"
                required
              />

              <select name="currency" className="input-style" required>
                <option>BDT</option>
                <option>USD</option>
                <option>EUR</option>
              </select>
            </div>
          </div>

          {/* Job Details */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Job Details</h2>

            <textarea
              name="description"
              placeholder="Job Description"
              rows="4"
              className="input-style"
              required
            />

            <textarea
              name="requirements"
              placeholder="Requirements (comma separated)"
              rows="3"
              className="input-style"
              required
            />

            <textarea
              name="responsibilities"
              placeholder="Responsibilities (comma separated)"
              rows="3"
              className="input-style"
              required
            />
          </div>

          {/* HR Info */}
          <div>
            <h2 className="text-lg font-semibold mb-4">HR Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="hr_name"
                placeholder="HR Name"
                className="input-style"
                required
                defaultValue={user.displayName}
              />

              <input
                type="email"
                name="hr_email"
                placeholder="HR Email"
                className="input-style"
                required
                defaultValue={user.email}
              />

              <input
                name="company_logo"
                placeholder="Company Logo URL"
                className="input-style"
                required
              />

              <select name="status" className="input-style" required>
                <option value="active">Active</option>
                <option value="closed">Closed</option>
              </select>
            </div>
          </div>

          {/* Submit */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold"
            >
              Publish Job
            </button>
          </div>
        </form>
      </div>

      <style>
        {`
          .input-style {
            width: 100%;
            border: 1px solid #d1d5db;
            border-radius: 8px;
            padding: 10px 14px;
            outline: none;
          }
          .input-style:focus {
            border-color: #2563eb;
            box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
          }
        `}
      </style>
    </div>
  );
};

export default JobCreateForm;
