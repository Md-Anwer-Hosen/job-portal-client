import Lottie from "lottie-react";
import hiring from "../assets/hiring.json";
import hiring2 from "../assets/Call Center.json";
import {
  FaBullhorn,
  FaHeadset,
  FaUniversity,
  FaLaptopCode,
} from "react-icons/fa";

const categories = [
  {
    title: "Marketing & Sale",
    jobs: "1526 Jobs Available",
    icon: <FaBullhorn />,
  },
  { title: "Customer Help", jobs: "185 Jobs Available", icon: <FaHeadset /> },
  { title: "Finance", jobs: "168 Jobs Available", icon: <FaUniversity /> },
  { title: "Software", jobs: "1856 Jobs Available", icon: <FaLaptopCode /> },
  { title: "Design", jobs: "320 Jobs Available", icon: <FaLaptopCode /> },
];

export default function JobCategories() {
  return (
    <section className="bg-[#f6f8ff] py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* title */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0b1b3f]">
            Browse by category
          </h2>
          <p className="text-gray-500 mt-2 sm:mt-3 text-sm sm:text-base">
            Find the job that’s perfect for you. about 800+ new jobs everyday
          </p>
        </div>

        {/* cards grid */}
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {categories.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-[#e6ebff] rounded-xl px-4 py-4 flex items-center gap-4 hover:border-blue-500 transition"
            >
              {/* icon */}
              <div className="shrink-0 w-12 h-12 rounded-full bg-[#eef2ff] flex items-center justify-center text-blue-600 text-xl">
                {item.icon}
              </div>

              {/* text */}
              <div className="min-w-0">
                <h4 className="font-medium text-[#0b1b3f] truncate">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-500">{item.jobs}</p>
              </div>
            </div>
          ))}
        </div>

        {/* hiring banner */}
        <div className="mt-10 sm:mt-14 lg:mt-20 bg-white border border-[#e6ebff] rounded-xl px-5 sm:px-8 lg:px-10 py-6 sm:py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center justify-center md:justify-start gap-4 sm:gap-5 text-center md:text-left">
              <div className="hidden md:flex items-center justify-center">
                <Lottie
                  animationData={hiring}
                  loop={true}
                  className="w-20 lg:w-24"
                />
              </div>

              <div>
                <p className="text-xs tracking-widest text-gray-400">WE ARE</p>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#0b1b3f]">
                  HIRING
                </h3>
                <p className="text-gray-500 mt-2 text-sm sm:text-base">
                  Let’s Work Together & Explore Opportunities
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 sm:gap-6">
              <button className="bg-[#4f6cff] hover:bg-[#3f5ae0] text-white px-5 sm:px-6 py-3 rounded-lg flex items-center gap-2">
                Apply now
              </button>

              <div className="hidden md:flex items-center justify-center">
                <Lottie
                  animationData={hiring2}
                  loop={true}
                  className="w-20 lg:w-24"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
