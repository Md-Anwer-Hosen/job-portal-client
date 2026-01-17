import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

import counterImage1 from "../assets/images/counterImage1.jpg";
import counterImage2 from "../assets/images/counterImage-2.jpg";

const CounterSection = () => {
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect(); // run once only
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="max-w-11/12 mx-auto px-6 py-10 text-black"
    >
      {/* HERO */}
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* IMAGE SIDE */}
        <div className="relative">
          <motion.img
            src={counterImage1}
            alt="Team"
            className="rounded-3xl shadow-xl w-full max-w-md"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="absolute -bottom-10 right-0 bg-white rounded-2xl shadow-sm p-1 hidden md:block"
            animate={{ x: [0, 15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <img
              src={counterImage2}
              alt="Meeting"
              className="w-96 rounded-xl"
            />
          </motion.div>
        </div>

        {/* TEXT SIDE */}
        <div>
          <p className="text-gray-400 font-semibold mb-2">Millions Of Jobs.</p>

          <h1 className="text-5xl font-bold leading-tight mb-6">
            Find The One That’s{" "}
            <span className="text-blue-600">Right For You</span>
          </h1>

          <p className="text-gray-600 mb-8 max-w-lg">
            Search all the open positions on the web. Get your own personalized
            salary estimate. Read reviews on over 600,000 companies worldwide.
          </p>

          <div className="flex gap-4">
            <button className="btn btn-primary px-8">Search Jobs</button>
            <button className="btn btn-ghost border border-blue-400">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* COUNTERS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-40 py-10 text-blue-500">
        {[
          {
            end: 19,
            label: "Completed Cases",
            text: "We always provide people a complete solution upon focused of any business ",
          },
          {
            end: 46,
            label: "Our Office",
            text: "We always provide people a complete solution upon focused of any business ",
          },
          {
            end: 190,
            label: "Skilled People",
            text: "We always provide people a complete solution upon focused of any business ",
          },
          {
            end: 30,
            label: "CHappy Clients",
            text: "We always provide people a complete solution upon focused of any business ",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="items-center justify-center flex flex-col"
          >
            <div className="flex items-end gap-1 text-center">
              {startCount && (
                <CountUp
                  start={0}
                  end={item.end}
                  duration={2.5}
                  className="text-5xl font-bold"
                />
              )}
              <span className="text-5xl font-bold">+</span>
            </div>

            <p className="mt-3 text-gray-600 font-lg font-semibold">
              {item.label}
            </p>
            <p className="mt-3 text-gray-600 font-sm text-center">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CounterSection;
