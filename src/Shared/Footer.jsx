import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaEnvelope,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white pt-10 mt-20">
      {/* ===== Newsletter Section ===== */}
      <div className="max-w-7xl mx-auto px-4 -mt-24">
        <div className="bg-[#4f6cff] rounded-2xl px-6 md:px-16 py-16 text-center text-white relative overflow-hidden">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">
            New Things Will Always <br /> Update Regularly
          </h2>

          {/* input */}
          <div className="max-w-xl mx-auto flex bg-white rounded-lg overflow-hidden">
            <div className="flex items-center px-4 text-gray-400">
              <FaEnvelope />
            </div>
            <input
              type="email"
              placeholder="Enter your email here"
              className="flex-1 px-2 py-3 outline-none text-gray-700"
            />
            <button className="bg-[#4f6cff] text-white px-6 m-1 rounded-md">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* ===== Main Footer ===== */}
      <div className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-10">
        {/* logo + text */}
        <div className="md:col-span-2">
          <h3 className="text-2xl font-bold text-[#0b1b3f] mb-4">JobBox</h3>
          <p className="text-gray-500 mb-6 text-sm">
            JobBox is the heart of the design community and the best resource to
            discover and connect with designers and jobs worldwide.
          </p>

          {/* social icons */}
          <div className="flex gap-3">
            <span className="w-9 h-9 rounded-full bg-[#eef2ff] flex items-center justify-center text-blue-600 cursor-pointer">
              <FaFacebookF />
            </span>
            <span className="w-9 h-9 rounded-full bg-[#eef2ff] flex items-center justify-center text-blue-600 cursor-pointer">
              <FaTwitter />
            </span>
            <span className="w-9 h-9 rounded-full bg-[#eef2ff] flex items-center justify-center text-blue-600 cursor-pointer">
              <FaLinkedinIn />
            </span>
          </div>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold text-[#0b1b3f] mb-4">Resources</h4>
          <ul className="space-y-2 text-gray-500 text-sm">
            <li>About us</li>
            <li>Our Team</li>
            <li>Products</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Community */}
        <div>
          <h4 className="font-semibold text-[#0b1b3f] mb-4">Community</h4>
          <ul className="space-y-2 text-gray-500 text-sm">
            <li>Feature</li>
            <li>Pricing</li>
            <li>Credit</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-semibold text-[#0b1b3f] mb-4">Quick links</h4>
          <ul className="space-y-2 text-gray-500 text-sm">
            <li>iOS</li>
            <li>Android</li>
            <li>Microsoft</li>
            <li>Desktop</li>
          </ul>
        </div>

        {/* Download */}
        <div>
          <h4 className="font-semibold text-[#0b1b3f] mb-4">Download App</h4>
          <p className="text-gray-500 text-sm mb-4">
            Download our Apps and get extra 15% Discount on your first Order..!
          </p>

          <div className="">
            <button className="flex items-center gap-2 bg-blue-500 text-white px-2 py-2 rounded-lg ">
              <FaApple />
              <p>App Store</p>
            </button>
          </div>
        </div>
      </div>

      {/* ===== Bottom Bar ===== */}
      <div className="border-t">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 gap-3">
          <p>Copyright © 2022. JobBox all right reserved</p>
          <div className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms & Conditions</span>
            <span>Security</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
