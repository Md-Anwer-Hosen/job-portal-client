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
    <footer className="bg-white mt-16 sm:mt-20">
      {/* ===== Newsletter Section (Overlapping Card) ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative -top-10 sm:-top-12">
          <div className="bg-[#4f6cff] rounded-2xl px-5 sm:px-8 md:px-16 py-10 sm:py-12 md:py-16 text-center text-white overflow-hidden">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 sm:mb-8 leading-tight">
              New Things Will Always <br className="hidden sm:block" /> Update
              Regularly
            </h2>

            {/* input */}
            <div className="max-w-xl mx-auto bg-white rounded-lg overflow-hidden flex flex-col sm:flex-row">
              <div className="hidden sm:flex items-center px-4 text-gray-400">
                <FaEnvelope />
              </div>
              <input
                type="email"
                placeholder="Enter your email here"
                className="flex-1 px-4 py-3 outline-none text-gray-700"
              />
              <button className="bg-[#4f6cff] text-white px-6 py-3 sm:m-1 sm:rounded-md">
                Subscribe
              </button>
            </div>

            {/* optional small note */}
            <p className="mt-4 text-xs sm:text-sm text-white/80">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>

      {/* ===== Main Footer ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 pb-14 sm:pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* logo + text */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-[#0b1b3f] mb-4">JobBox</h3>
            <p className="text-gray-500 mb-6 text-sm leading-relaxed">
              JobBox is the heart of the design community and the best resource
              to discover and connect with designers and jobs worldwide.
            </p>

            {/* social icons */}
            <div className="flex gap-3">
              <span className="w-9 h-9 rounded-full bg-[#eef2ff] flex items-center justify-center text-blue-600 cursor-pointer hover:bg-blue-50 transition">
                <FaFacebookF />
              </span>
              <span className="w-9 h-9 rounded-full bg-[#eef2ff] flex items-center justify-center text-blue-600 cursor-pointer hover:bg-blue-50 transition">
                <FaTwitter />
              </span>
              <span className="w-9 h-9 rounded-full bg-[#eef2ff] flex items-center justify-center text-blue-600 cursor-pointer hover:bg-blue-50 transition">
                <FaLinkedinIn />
              </span>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-[#0b1b3f] mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li className="hover:text-blue-600 cursor-pointer">About us</li>
              <li className="hover:text-blue-600 cursor-pointer">Our Team</li>
              <li className="hover:text-blue-600 cursor-pointer">Products</li>
              <li className="hover:text-blue-600 cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-semibold text-[#0b1b3f] mb-4">Community</h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li className="hover:text-blue-600 cursor-pointer">Feature</li>
              <li className="hover:text-blue-600 cursor-pointer">Pricing</li>
              <li className="hover:text-blue-600 cursor-pointer">Credit</li>
              <li className="hover:text-blue-600 cursor-pointer">FAQ</li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-[#0b1b3f] mb-4">Quick links</h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li className="hover:text-blue-600 cursor-pointer">iOS</li>
              <li className="hover:text-blue-600 cursor-pointer">Android</li>
              <li className="hover:text-blue-600 cursor-pointer">Microsoft</li>
              <li className="hover:text-blue-600 cursor-pointer">Desktop</li>
            </ul>
          </div>

          {/* Download */}
          <div>
            <h4 className="font-semibold text-[#0b1b3f] mb-4">Download App</h4>
            <p className="text-gray-500 text-sm mb-4 leading-relaxed">
              Download our Apps and get extra 15% Discount on your first
              Order..!
            </p>

            <div className="flex flex-col gap-3">
              <button className="flex items-center justify-center gap-2 bg-[#0b1b3f] text-white px-4 py-2 rounded-lg hover:opacity-90 transition">
                <FaApple />
                <span>App Store</span>
              </button>

              <button className="flex items-center justify-center gap-2 bg-[#0b1b3f] text-white px-4 py-2 rounded-lg hover:opacity-90 transition">
                <FaGooglePlay />
                <span>Google Play</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Bottom Bar ===== */}
      <div className="border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 gap-3">
          <p className="text-center md:text-left">
            Copyright © 2022. JobBox all right reserved
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <span className="hover:text-blue-600 cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-blue-600 cursor-pointer">
              Terms & Conditions
            </span>
            <span className="hover:text-blue-600 cursor-pointer">Security</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
