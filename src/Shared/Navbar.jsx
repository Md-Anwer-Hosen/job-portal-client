import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContexts } from "../contexts/AuthContexts";

const Navbar = () => {
  const { user, loading, signOutUser } = useContext(AuthContexts);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const displayName =
    user?.displayName || (user?.email ? user.email.split("@")[0] : "User");

  const avatarLetter = (displayName?.[0] || "U").toUpperCase();

  const handleLogout = async () => {
    try {
      await signOutUser();
      setOpen(false);
    } catch (err) {
      console.log(err);
    }
  };

  // close dropdown on outside click

  useEffect(() => {
    const handler = (e) => {
      if (!dropdownRef.current) return;
      if (!dropdownRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const navLinks = (
    <>
      <li className="text-black">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
      </li>
      <li className="text-black">
        <NavLink
          to="/myApplications"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          My Applications
        </NavLink>
      </li>
      <li className="text-black">
        <NavLink
          to="/createJob"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Post a Job
        </NavLink>
      </li>
      <li className="text-black">
        <NavLink
          to="/myPostJobs"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          My Post Jobs
        </NavLink>
      </li>
      <li className="text-black">
        <NavLink
          to="/blog"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Blog
        </NavLink>
      </li>
      <li className="text-black">
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="navbar px-0">
          {/* LEFT */}
          <div className="navbar-start">
            {/* Mobile menu */}
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h12M4 18h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-56 border border-blue-100"
              >
                {navLinks}
              </ul>
            </div>

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
                JB
              </div>
              <span className="text-xl font-extrabold text-[#0b1b3f]">
                JobBox
              </span>
            </Link>
          </div>

          {/* CENTER */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-semibold text-[15px]">
              {navLinks}
            </ul>
          </div>

          {/* RIGHT */}
          <div className="navbar-end gap-2">
            {loading ? (
              <div className="w-24 flex justify-end">
                <span className="loading loading-spinner loading-sm text-black" />
              </div>
            ) : !user ? (
              <Link to="/login" className="btn btn-primary">
                Login
              </Link>
            ) : (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setOpen((p) => !p)}
                  className="btn bg-white border border-blue-600 gap-2"
                >
                  {/* avatar */}
                  {/* <div className="avatar placeholder">
                    <div className="bg-blue-100 text-blue-700 rounded-full w-9">
                      <span className="text-sm font-bold">{avatarLetter}</span>
                    </div>
                  </div> */}

                  {/* name (hide on very small) */}
                  <div className="hidden sm:flex flex-col items-start leading-tight">
                    <span className="font-semibold text-[#0b1b3f]">
                      {displayName}
                    </span>
                    <span className="text-xs text-gray-500">Account</span>
                  </div>

                  {/* caret */}
                  <svg
                    className={`h-4 w-4 transition text-black ${
                      open ? "rotate-180" : "rotate-0"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* dropdown */}
                {open && (
                  <div className="absolute right-0 mt-2 w-72 rounded-2xl bg-white shadow-xl border border-blue-100 overflow-hidden">
                    {/* header */}
                    <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50">
                      <p className="font-bold text-[#0b1b3f]">{displayName}</p>
                      <p className="text-sm text-gray-600 break-all">
                        {user?.email}
                      </p>
                    </div>

                    {/* actions */}
                    <div className="p-2 bg-white text-black">
                      {/* extra info 1 */}
                      <Link
                        to="/myApplications"
                        onClick={() => setOpen(false)}
                        className="btn btn-ghost justify-start w-full"
                      >
                        My Applications
                      </Link>

                      {/* extra info 2 */}
                      <Link
                        to="/myPostJobs"
                        onClick={() => setOpen(false)}
                        className="btn btn-ghost justify-start w-full"
                      >
                        My Posted Jobs
                      </Link>

                      <div className="my-2 border-t" />

                      <button
                        onClick={handleLogout}
                        className="btn btn-error text-white w-full"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
