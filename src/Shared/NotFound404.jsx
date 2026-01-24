import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaArrowLeft, FaExclamationTriangle } from "react-icons/fa";

const NotFound404 = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-2xl text-center">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="p-6 bg-blue-100 rounded-full">
            <FaExclamationTriangle className="text-4xl text-blue-600" />
          </div>
        </div>

        {/* Text */}
        <h1 className="text-6xl font-extrabold text-gray-900">404</h1>
        <h2 className="mt-3 text-2xl font-semibold text-gray-800">
          Page Not Found
        </h2>

        <p className="mt-4 text-gray-600">
          Sorry, the page you are trying to visit does not exist or has been
          moved.
        </p>

        <p className="mt-2 text-sm text-gray-400 break-all">
          Requested URL:{" "}
          <span className="text-gray-500">{location.pathname}</span>
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            <FaHome />
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition"
          >
            <FaArrowLeft />
            Go Back
          </button>
        </div>

        {/* Footer */}
        <p className="mt-10 text-xs text-gray-400">
          © {new Date().getFullYear()} Your Project — All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default NotFound404;
