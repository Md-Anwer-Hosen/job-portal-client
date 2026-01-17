import { FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";

const JobCart = ({ data }) => {
  const {
    _id,
    title,
    company,
    company_logo,
    location,
    jobType,
    description,
    requirements = [],
    salaryRange,
    applicationDeadline,
  } = data;

  return (
    <div className="bg-white border border-blue-200 rounded-xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between h-full">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <img
          src={company_logo}
          alt={company}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover"
        />
        <div className="flex flex-col">
          <h3 className="font-semibold text-sm sm:text-base">{company}</h3>
          <p className="text-xs sm:text-sm text-gray-500 flex items-center gap-1">
            <FaMapMarkerAlt className="text-xs" />
            {location}
          </p>
        </div>
      </div>

      {/* Job Title */}
      <h2 className="text-base sm:text-lg font-bold mb-2 line-clamp-2">
        {title}
      </h2>

      {/* Job Info */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500 mb-3">
        <span className="flex items-center gap-1">
          <FaClock />
          {jobType}
        </span>
        <span>Deadline: {applicationDeadline}</span>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-xs sm:text-sm mb-4 line-clamp-3">
        {description}
      </p>

      {/* Skills */}
      <div className="flex flex-wrap gap-2 mb-4">
        {requirements.map((skill, index) => (
          <span
            key={index}
            className="bg-blue-50 text-blue-600 text-xs px-2 sm:px-3 py-1 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-auto gap-2 sm:gap-0">
        <p className="text-blue-600 font-bold text-sm sm:text-base">
          ৳{salaryRange?.min} - ৳{salaryRange?.max}
        </p>
        <Link to={`jobs/${_id}`}>
          {" "}
          <button className="bg-blue-500 text-white text-xs sm:text-sm px-3 py-2 rounded-lg hover:bg-blue-600 mt-2 sm:mt-0">
            See Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JobCart;
