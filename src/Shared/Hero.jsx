import React from "react";
import { motion } from "motion/react";
import hero1 from "../assets/images/hero1.jpg";
import hero2 from "../assets/images/hero2.jpg";

const Hero = () => {
  return (
    <div className="text-black max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-10 md:py-14 lg:py-16 min-h-[80vh] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center w-full">
          {/* LEFT CONTENT */}
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
              The{" "}
              <motion.span
                className="inline-block text-blue-600"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                Easiest Way
              </motion.span>{" "}
              to get Your New{" "}
              <motion.span
                className="inline-block bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 bg-[length:200%_200%] bg-clip-text text-transparent"
                animate={{
                  scale: [1, 1.06, 1],
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Job
              </motion.span>
            </h1>

            <p className="mt-5 sm:mt-6 text-sm sm:text-base text-slate-600 max-w-xl">
              Each month, more than 3 million job seekers turn to website in
              their search for work, making over 140,000 applications every
              single day
            </p>

            {/* SEARCH SECTION */}
            <div className="mt-6 sm:mt-8 bg-white shadow-2xl rounded-xl p-4 sm:p-5 flex flex-col lg:flex-row gap-3 items-stretch lg:items-center max-w-2xl">
              <input
                type="text"
                placeholder="Industry"
                className="input input-bordered w-full bg-white border-blue-400"
              />
              <input
                type="text"
                placeholder="Location"
                className="input input-bordered w-full bg-white border-blue-400"
              />
              <input
                type="text"
                placeholder="Your keyword..."
                className="input input-bordered w-full bg-white border-blue-400"
              />
              <button className="btn btn-primary w-full lg:w-auto px-8">
                Search
              </button>
            </div>
          </div>

          {/* RIGHT IMAGES */}
          <div className="order-1 lg:order-2">
            {/* Mobile/Tablet: normal flow */}
            <div className="lg:hidden grid grid-cols-2 gap-4">
              <motion.img
                src={hero1}
                alt="Hero 1"
                className="w-full h-44 sm:h-56 object-cover rounded-xl shadow-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.img
                src={hero2}
                alt="Hero 2"
                className="w-full h-44 sm:h-56 object-cover rounded-xl shadow-2xl"
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>

            {/* Desktop: absolute layered */}
            <div className="hidden lg:block relative h-[420px]">
              <motion.img
                src={hero1}
                alt="Hero 1"
                className="absolute top-0 left-0 w-[360px] rounded-xl shadow-2xl"
                animate={{ y: [0, -30, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.img
                src={hero2}
                alt="Hero 2"
                className="absolute bottom-0 right-0 w-[360px] rounded-2xl shadow-2xl z-50"
                animate={{ x: [0, 30, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
