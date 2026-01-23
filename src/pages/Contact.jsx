import React, { useState } from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiClock,
  FiArrowUpRight,
} from "react-icons/fi";
import { FaFacebookF, FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";

const Contact = () => {
  // optional: demo form state (you can connect it to backend later)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect with your API / EmailJS
    console.log("Contact Form:", formData);
    alert("Message prepared! (Connect to backend to send)");
  };

  // ====== YOUR INFO (edit these) ======
  const myInfo = {
    title: "Let’s Talk",
    subtitle:
      "Have a project in mind or want to collaborate? Send a message—I'll get back to you soon.",
    address: "Daffodil Smart City, Dhaka, Bangladesh",
    phone: "+880 1706027955",
    email: "nur.cnits@gmail.com",
    hours: "Sat–Thu: 10:00 AM – 8:00 PM",
    mapLink: "https://maps.google.com",
    socials: [
      {
        label: "Facebook",
        icon: <FaFacebookF />,
        href: "https://www.facebook.com/a.h.nur.707226",
      },
      { label: "LinkedIn", icon: <FaLinkedinIn />, href: "#" },
      {
        label: "GitHub",
        icon: <FaGithub />,
        href: "https://github.com/Md-Anwer-Hosen",
      },
      { label: "Twitter", icon: <FaTwitter />, href: "#" },
    ],
  };

  return (
    <section className="px-4 py-20 bg-white">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center">
          <p className="text-[11px] font-semibold tracking-widest text-slate-400 uppercase">
            CONTACT
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-slate-900">
            Contact Us
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm md:text-base text-slate-500 leading-relaxed">
            Feel free to reach out for work, freelance, collaboration, or any
            questions.
          </p>
        </div>

        {/* Main Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left: Info Card */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
            <h3 className="text-2xl font-extrabold text-slate-900">
              {myInfo.title}
            </h3>
            <p className="mt-2 text-slate-600 leading-relaxed">
              {myInfo.subtitle}
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex gap-4">
                <div className="h-11 w-11 shrink-0 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700">
                  <FiMapPin />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Address
                  </p>
                  <p className="text-sm text-slate-600">{myInfo.address}</p>
                  <a
                    href={myInfo.mapLink}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-slate-900 hover:underline"
                  >
                    View on map <FiArrowUpRight />
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="h-11 w-11 shrink-0 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700">
                  <FiPhone />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Phone</p>
                  <p className="text-sm text-slate-600">{myInfo.phone}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="h-11 w-11 shrink-0 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700">
                  <FiMail />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Email</p>
                  <p className="text-sm text-slate-600">{myInfo.email}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="h-11 w-11 shrink-0 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700">
                  <FiClock />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Working Hours
                  </p>
                  <p className="text-sm text-slate-600">{myInfo.hours}</p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="mt-8">
              <p className="text-sm font-semibold text-slate-900">
                Connect with me
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {myInfo.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Optional mini note */}
            <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm text-slate-600">
                ⚡ Typical reply time:{" "}
                <span className="font-semibold text-slate-900">
                  within 24 hours
                </span>
              </p>
            </div>
          </div>

          {/* Right: Form Card */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_10px_30ங்கு(15,23,42,0.06)]">
            <h3 className="text-2xl font-extrabold text-slate-900">
              Send a message
            </h3>
            <p className="mt-2 text-slate-600">
              Fill the form and I’ll get back to you.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-slate-900">
                    Your Name
                  </label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-slate-200"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-900">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-slate-200"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-900">
                  Subject
                </label>
                <input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What is this about?"
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-slate-200"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-900">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Write your message..."
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-slate-200 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white hover:bg-slate-800 transition active:scale-[0.99]"
              >
                Send Message <FiSend />
              </button>

              <p className="text-xs text-slate-500 text-center">
                By sending, you agree to be contacted back via email/phone.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
