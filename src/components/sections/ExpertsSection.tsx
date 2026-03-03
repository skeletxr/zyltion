import React from "react";
import { ArrowUpRight, CheckCircle2, Linkedin } from "lucide-react";

const ExpertsSection = () => {
  const experts = [
    {
      name: "Gwen Chase",
      role: "Lead Engineer",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Olivia Aster",
      role: "Software Architect",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="w-full bg-white py-24 sm:py-32 relative overflow-hidden">
      {/* Wavy Background Pattern */}
      <svg
        className="absolute top-40 left-0 w-full h-[600px] text-[#f4f7f0] pointer-events-none z-0"
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

      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl font-serif text-gray-900 mb-6">
            Experts Behind the Strategy
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            At the heart of our work is a team of experienced engineers,
            architects, and developers who bring clarity, insight, and direction
            to every project.
          </p>
        </div>

        {/* Cards Grid - 2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-[800px] mx-auto mb-14 sm:mb-20">
          {experts.map((expert, idx) => (
            <div
              key={idx}
              className="w-full bg-[#f8f9f5] rounded-3xl p-2 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05),0_4px_20px_rgba(0,0,0,0.05)] border border-white"
            >
              <div className="bg-[#f2f1eb] rounded-[20px] p-6 h-full flex flex-col border border-gray-200/50 shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)]">
                {/* Image */}
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-full h-[200px] sm:h-[260px] lg:h-[300px] object-cover rounded-xl mb-6 shadow-sm"
                />

                {/* Content */}
                <h3 className="text-xl font-medium text-gray-900 mb-1">
                  {expert.name}
                </h3>
                <p className="text-gray-600 text-sm mb-6 flex-grow">
                  {expert.role}
                </p>

                {/* Button */}
                <button className="w-fit px-4 py-2.5 rounded-xl bg-white text-gray-800 text-sm font-medium flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors border border-gray-200 shadow-sm">
                  <Linkedin className="w-4 h-4" />
                  Linkedin Profile
                  <ArrowUpRight className="w-3.5 h-3.5 text-gray-500" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Stats/Badges Row */}
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-sm font-medium text-gray-700 relative">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-200 -z-10"></div>

          <div className="flex items-center gap-2 bg-white px-4 py-2">
            <CheckCircle2 className="w-5 h-5 text-gray-400" />
            <span>Worked With 100+ Clients</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-gray-300"></div>

          <div className="flex items-center gap-2 bg-white px-4 py-2">
            <CheckCircle2 className="w-5 h-5 text-gray-400" />
            <span>Industry Expert</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-gray-300"></div>

          <div className="flex items-center gap-2 bg-white px-4 py-2">
            <CheckCircle2 className="w-5 h-5 text-gray-400" />
            <span>Trusted Advisors</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-gray-300"></div>

          <div className="flex items-center gap-2 bg-white px-4 py-2">
            <CheckCircle2 className="w-5 h-5 text-gray-400" />
            <span>Proven Results</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertsSection;
