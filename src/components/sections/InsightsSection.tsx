import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight, ArrowRight, CheckCircle2, Cloud } from "lucide-react";

const InsightsSection = () => {
  const insights = [
    {
      title: "Why Good Architecture is Business",
      description:
        "Good architecture goes beyond code—it builds trust, strengthens branding, and drives growth. Discover how architecture can turn into a powerful business...",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "The Rise of Scalable Systems",
      description:
        "Scalable platforms are transforming how businesses build. Learn how scalable systems save time, reduce costs, and fuel innovation.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Future of Cloud Computing",
      description:
        "Cloud infrastructure is evolving rapidly. Explore the latest trends and how they can optimize your business operations and reduce overhead.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section
      id="blog"
      className="w-full bg-white py-24 sm:py-32 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-250 h-250 bg-linear-to-b from-[#f4f7f0] to-transparent rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      {/* Wavy Background Pattern */}
      <svg
        className="absolute top-20 left-0 w-full h-150 text-[#f4f7f0] pointer-events-none z-0"
        preserveAspectRatio="none"
        viewBox="0 0 1440 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-100 300 C 300 100, 800 500, 1540 200"
          stroke="currentColor"
          strokeWidth="80"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <div className="max-w-350 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl font-serif text-gray-900 mb-6">
            Insights That Drive Growth
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Stay ahead with expert resources, practical strategies, and industry
            insights designed to help your business make smarter decisions.
          </p>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="relative w-full max-w-275 mx-auto mb-20 z-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {insights.slice(0, 2).map((insight, idx) => (
            <motion.div
              key={idx}
              initial={{
                opacity: 0,
                y: 100,
                scale: 0.9,
                rotate: idx === 0 ? -5 : 5,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
                rotate: 0,
              }}
              viewport={{ once: false, margin: "-10%" }}
              transition={{
                duration: 0.8,
                delay: idx * 0.1,
                type: "spring",
                stiffness: 45,
                damping: 15,
              }}
              className="w-full bg-[#f8f9f5] rounded-3xl p-2 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05),0_4px_20px_rgba(0,0,0,0.05)] border border-white group"
            >
              <div className="bg-[#f2f1eb] rounded-[20px] p-6 h-full flex flex-col border border-gray-200/50 shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)]">
                {/* Top Bar */}
                <div className="flex justify-between items-center mb-6">
                  <div className="w-16 h-1 bg-gray-300 rounded-full"></div>
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                  </div>
                </div>

                {/* Image */}
                <img
                  src={insight.image}
                  alt={insight.title}
                  className="w-full h-60 object-cover rounded-xl mb-8 shadow-sm"
                />

                {/* Content */}
                <h3 className="text-2xl font-serif text-gray-900 mb-4">
                  {insight.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-8 grow">
                  {insight.description}
                </p>

                {/* Button */}
                <button className="w-full py-4 rounded-xl bg-[#f8f9f5] text-gray-800 font-medium flex items-center justify-center gap-2 hover:bg-white transition-colors border border-gray-200/50 shadow-sm">
                  Learn More About This
                  <ArrowUpRight className="w-4 h-4 text-gray-500" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="max-w-350 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Stats/Badges Row */}
        <div className="flex flex-wrap justify-center items-center gap-x-6 sm:gap-x-8 gap-y-4 text-sm font-medium text-gray-700 mb-12 relative">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-200 -z-10"></div>

          <div className="flex items-center gap-2 bg-white px-3 sm:px-4 py-2">
            <CheckCircle2 className="w-5 h-5 text-gray-400 shrink-0" />
            <span className="whitespace-nowrap">Worked With 100+ Clients</span>
          </div>
          <div className="hidden md:block w-px h-4 bg-gray-300"></div>

          <div className="flex items-center gap-2 bg-white px-3 sm:px-4 py-2">
            <CheckCircle2 className="w-5 h-5 text-gray-400 shrink-0" />
            <span className="whitespace-nowrap">Industry Expert</span>
          </div>
          <div className="hidden md:block w-px h-4 bg-gray-300"></div>

          <div className="flex items-center gap-2 bg-white px-3 sm:px-4 py-2">
            <CheckCircle2 className="w-5 h-5 text-gray-400 shrink-0" />
            <span className="whitespace-nowrap">Engineering Experts</span>
          </div>
          <div className="hidden md:block w-px h-4 bg-gray-300"></div>

          <div className="flex items-center gap-2 bg-white px-3 sm:px-4 py-2">
            <CheckCircle2 className="w-5 h-5 text-gray-400 shrink-0" />
            <span className="whitespace-nowrap">Software Design</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button className="relative flex items-center justify-center gap-2 px-8 py-5 rounded-2xl bg-[#0e3a27] text-white font-bold text-sm transition-all cursor-pointer overflow-hidden shadow-[0_0.6px_1.1px_-1.25px_rgba(61,61,61,0.72),0_2.3px_4.1px_-2.5px_rgba(61,61,61,0.64),0_10px_18px_-3.75px_rgba(61,61,61,0.25),0_0.7px_0.7px_-0.58px_rgba(22,51,32,0.35),0_1.8px_1.8px_-1.17px_rgba(22,51,32,0.34),0_3.6px_3.6px_-1.75px_rgba(22,51,32,0.33),0_6.9px_6.9px_-2.33px_rgba(22,51,32,0.3),0_13.6px_13.7px_-2.92px_rgba(22,51,32,0.26),0_30px_30px_-3.5px_rgba(22,51,32,0.15)] group">
            Contact Us
            <ArrowUpRight className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-2 bg-brand-light text-[#0f291e] px-8 py-5 rounded-2xl border border-gray-200 font-bold text-sm hover:bg-[#e2ead9] transition-all">
            See All Posts
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
