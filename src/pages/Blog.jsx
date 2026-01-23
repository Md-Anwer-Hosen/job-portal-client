import React, { useMemo, useState } from "react";
import {
  FiChevronLeft,
  FiChevronRight,
  FiMapPin,
  FiClock,
} from "react-icons/fi";
import {
  FaStar,
  FaRegStar,
  FaStarHalfAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const StarRating = ({ value = 4.5, countText = "(65)" }) => {
  const stars = [];
  const full = Math.floor(value);
  const hasHalf = value - full >= 0.5;
  const empty = 5 - full - (hasHalf ? 1 : 0);

  for (let i = 0; i < full; i++) stars.push(<FaStar key={`f-${i}`} />);
  if (hasHalf) stars.push(<FaStarHalfAlt key="h" />);
  for (let i = 0; i < empty; i++) stars.push(<FaRegStar key={`e-${i}`} />);

  return (
    <div className="flex items-center gap-2 text-[13px]">
      <div className="flex items-center gap-1 text-amber-400">
        {stars.map((s, i) => (
          <span key={i} className="text-[14px]">
            {s}
          </span>
        ))}
      </div>
      <span className="text-slate-500">{countText}</span>
    </div>
  );
};

const SectionLabel = ({ children }) => (
  <div className="text-[11px] tracking-widest font-semibold text-slate-400 uppercase">
    {children}
  </div>
);

const PrimaryButton = ({ children, className = "", ...props }) => (
  <button
    className={
      "inline-flex items-center justify-center rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 active:scale-[0.99] transition " +
      className
    }
    {...props}
  >
    {children}
  </button>
);

const IconCircle = ({ children, href = "#", label = "social" }) => (
  <a
    href={href}
    aria-label={label}
    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-slate-800 transition"
  >
    {children}
  </a>
);

const TeamCard = ({ member }) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_10px_30px_rgba(15,23,42,0.06)] hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)] transition">
      <div className="flex flex-col items-center text-center">
        <div className="relative">
          <div className="h-28 w-28 rounded-full bg-slate-100" />
          <img
            src={member.avatar}
            alt={member.name}
            className="absolute inset-0 h-28 w-28 rounded-full object-cover"
            loading="lazy"
          />
        </div>

        <h3 className="mt-5 text-lg font-extrabold text-slate-900">
          {member.name}
        </h3>
        <p className="text-xs text-slate-500">{member.role}</p>

        <div className="mt-3">
          <StarRating value={member.rating} countText={member.reviews} />
        </div>

        <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
          <FiMapPin className="text-slate-400" />
          <span>{member.location}</span>
        </div>

        <div className="mt-5 flex items-center justify-center gap-3">
          <IconCircle label="facebook">
            <FaFacebookF className="text-[14px]" />
          </IconCircle>
          <IconCircle label="twitter">
            <FaTwitter className="text-[14px]" />
          </IconCircle>
          <IconCircle label="instagram">
            <FaInstagram className="text-[14px]" />
          </IconCircle>
          <IconCircle label="linkedin">
            <FaLinkedinIn className="text-[14px]" />
          </IconCircle>
        </div>
      </div>
    </div>
  );
};

const BlogCard = ({ post }) => {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.06)] overflow-hidden hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)] transition">
      <div className="p-5 pb-0">
        <div className="rounded-2xl overflow-hidden bg-slate-100">
          <img
            src={post.image}
            alt={post.title}
            className="h-56 w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      <div className="p-6">
        <span className="inline-flex items-center rounded-md bg-indigo-50 px-3 py-1 text-[11px] font-semibold text-indigo-600">
          {post.category}
        </span>

        <h3 className="mt-4 text-lg font-extrabold leading-snug text-slate-900">
          {post.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          {post.excerpt}
        </p>

        <div className="mt-6 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <img
              src={post.authorAvatar}
              alt={post.author}
              className="h-10 w-10 rounded-full object-cover"
              loading="lazy"
            />
            <div>
              <p className="text-sm font-semibold text-slate-900">
                {post.author}
              </p>
              <p className="text-xs text-slate-500">{post.date}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-500">
            <FiClock className="text-slate-400" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default function Blog() {
  const team = useMemo(
    () => [
      {
        name: "Arlene McCoy",
        role: "Frontend Developer",
        rating: 4.5,
        reviews: "(65)",
        location: "New York, US",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      },
      {
        name: "Floyd Miles",
        role: "UI/UX Designer",
        rating: 4.5,
        reviews: "(28)",
        location: "Chicago, US",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      },
      {
        name: "Devon Lane",
        role: "Frontend Developer",
        rating: 4.5,
        reviews: "(65)",
        location: "New York, US",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      },
      {
        name: "Jerome Bell",
        role: "Frontend Developer",
        rating: 4.5,
        reviews: "(65)",
        location: "New York, US",
        avatar: "https://randomuser.me/api/portraits/men/46.jpg",
      },
      {
        name: "Theresa",
        role: "Frontend Developer",
        rating: 4.5,
        reviews: "(65)",
        location: "New York, US",
        avatar: "https://randomuser.me/api/portraits/women/12.jpg",
      },
      {
        name: "Cameron",
        role: "Frontend Developer",
        rating: 4.5,
        reviews: "(65)",
        location: "New York, US",
        avatar: "https://randomuser.me/api/portraits/men/12.jpg",
      },
      {
        name: "Jacob Jones",
        role: "Frontend Developer",
        rating: 4.5,
        reviews: "(65)",
        location: "New York, US",
        avatar: "https://randomuser.me/api/portraits/men/77.jpg",
      },
      {
        name: "Court Henry",
        role: "Frontend Developer",
        rating: 4.5,
        reviews: "(65)",
        location: "New York, US",
        avatar: "https://randomuser.me/api/portraits/women/22.jpg",
      },
    ],
    [],
  );

  const posts = useMemo(
    () => [
      {
        category: "News",
        title: "21 Job Interview Tips: How To Make a Great Impression",
        excerpt:
          "Our mission is to create the world’s most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.",
        author: "Sarah Harding",
        authorAvatar: "https://randomuser.me/api/portraits/women/31.jpg",
        date: "06 September",
        readTime: "8 mins to read",
        image:
          "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
      },
      {
        category: "Events",
        title: "39 Strengths and Weaknesses To Discuss in a Job Interview",
        excerpt:
          "Our mission is to create the world’s most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.",
        author: "Steven Jobs",
        authorAvatar: "https://randomuser.me/api/portraits/men/15.jpg",
        date: "06 September",
        readTime: "6 mins to read",
        image:
          "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80",
      },
      {
        category: "News",
        title: "Interview Question: Why Don't You Have a Degree?",
        excerpt:
          "Learn how to respond if an interviewer asks you why you don't have a degree, and read example answers that can help you craft.",
        author: "William Kend",
        authorAvatar: "https://randomuser.me/api/portraits/men/52.jpg",
        date: "06 September",
        readTime: "9 mins to read",
        image:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80",
      },
    ],
    [],
  );

  // simple demo "carousel" behavior for the right top arrows
  const [index, setIndex] = useState(0);
  const visiblePosts = useMemo(() => {
    // Keep 3 cards visible (like your screenshot); index just changes the order.
    const rotated = [...posts.slice(index), ...posts.slice(0, index)];
    return rotated.slice(0, 3);
  }, [index, posts]);

  const next = () => setIndex((p) => (p + 1) % posts.length);
  const prev = () => setIndex((p) => (p - 1 + posts.length) % posts.length);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* ABOUT SECTION */}
      <section className="px-4">
        <div className="mx-auto max-w-6xl py-20">
          <div className="text-center">
            <SectionLabel>OUR COMPANY</SectionLabel>
            <h1 className="mt-2 text-3xl md:text-4xl font-extrabold">
              About Our Company
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-sm md:text-base text-slate-500 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisque
              ligula ante, dictum non aliquet eu, dapibus ac quam. Morbi vel
              ante viverra orci tincidunt tempor eu id ipsum.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="rounded-2xl overflow-hidden bg-slate-100 shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
                alt="Team meeting"
                className="h-[360px] md:h-[420px] w-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="lg:pl-4">
              <h2 className="text-2xl md:text-3xl font-extrabold">
                What we can do?
              </h2>

              <div className="mt-5 space-y-4 text-sm md:text-base text-slate-600 leading-relaxed">
                <p>
                  Aenean sollicitudin, lorem quis bibendum auctor nisi elit
                  consequat ipsum sagittis sem nibh id elit. Duis sed odio sit
                  amet nibh vulputate cursus a sit amet mauris.
                </p>
                <p>
                  Aenean sollicitudin, lorem quis bibendum auctor nisi elit
                  consequat ipsum sagittis sem nibh id elit. Duis sed odio sit
                  amet nibh vulputate cursus a sit amet mauris.
                </p>
                <p>
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Duis non nisi purus.
                </p>
                <p>
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Integer sit nostra.
                </p>
              </div>

              <PrimaryButton className="mt-8">Read More</PrimaryButton>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="px-4">
        <div className="mx-auto max-w-6xl py-16">
          <div className="text-center">
            <SectionLabel>OUR COMPANY</SectionLabel>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold">
              Meet Our Team
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-sm md:text-base text-slate-500 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisque
              ligula ante, dictum non aliquet eu, dapibus ac quam. Morbi vel
              ante viverra orci tincidunt tempor eu id ipsum.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m) => (
              <TeamCard key={m.name} member={m} />
            ))}
          </div>
        </div>
      </section>

      {/* BLOG SECTION */}
      <section className="px-4">
        <div className="mx-auto max-w-6xl py-20">
          <div className="flex items-start justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold">
                News and Blog
              </h2>
              <p className="mt-2 text-sm md:text-base text-slate-500">
                Get the latest news, updates and tips
              </p>
            </div>

            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={prev}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition"
                aria-label="Previous"
              >
                <FiChevronLeft />
              </button>
              <button
                onClick={next}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition"
                aria-label="Next"
              >
                <FiChevronRight />
              </button>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {visiblePosts.map((p) => (
              <BlogCard key={p.title} post={p} />
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <PrimaryButton className="gap-2">
              <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/50 border-t-white" />
              Load More Posts
            </PrimaryButton>
          </div>
        </div>
      </section>
    </div>
  );
}
