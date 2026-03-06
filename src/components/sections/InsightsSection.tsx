import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight, ArrowRight, CheckCircle2 } from "lucide-react";

const InsightsSection = () => {
  const projects = [
    {
      title: "Lead Picker",
      description:
        "Grabs new sales leads in milliseconds and routes them directly into your CRM — zero manual work required.",
      tag: "Automation",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "TapShopper",
      description:
        "A massive, automated online store system that handles inventory, orders, and fulfilment at scale.",
      tag: "Custom System",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Auto-Filer",
      description:
        "Moves data to state portals automatically — what used to take hours of manual filing now takes seconds.",
      tag: "Automation",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Fokal App",
      description:
        "Modern, intuitive software to control and program commercial lighting hardware from a single dashboard.",
      tag: "Web App",
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "GhostScraper",
      description:
        "Gathers live market data across the web without getting blocked — giving businesses a real-time competitive edge.",
      tag: "Data Tool",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Neural CRM",
      description:
        "A smart customer manager powered by AI that automatically sorts, scores, and prioritises your leads.",
      tag: "AI Tool",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
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
            Our Recent Work
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Real systems we've built for real businesses. Each one solved a
            specific problem with custom code, automation, or AI.
          </p>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="relative w-full max-w-275 mx-auto mb-20 z-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{
                opacity: 0,
                y: 60,
                scale: 0.95,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{
                duration: 0.6,
                delay: idx * 0.05,
                type: "spring",
                stiffness: 45,
                damping: 15,
              }}
              className="w-full bg-[#f8f9f5] rounded-3xl p-2 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05),0_4px_20px_rgba(0,0,0,0.05)] border border-white group"
            >
              <div className="bg-[#f2f1eb] rounded-[20px] p-6 h-full flex flex-col border border-gray-200/50 shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)]">
                {/* Top Bar */}
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#0f291e]/60">
                    {project.tag}
                  </span>
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                  </div>
                </div>

                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-xl mb-6 shadow-sm"
                />

                {/* Content */}
                <h3 className="text-xl font-serif text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 grow text-sm">
                  {project.description}
                </p>

                {/* Button */}
                <button className="w-full py-3 rounded-xl bg-[#f8f9f5] text-gray-800 font-medium flex items-center justify-center gap-2 hover:bg-white transition-colors border border-gray-200/50 shadow-sm text-sm">
                  View Project
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
            <span className="whitespace-nowrap">40+ Projects Built</span>
          </div>
          <div className="hidden md:block w-px h-4 bg-gray-300"></div>

          <div className="flex items-center gap-2 bg-white px-3 sm:px-4 py-2">
            <CheckCircle2 className="w-5 h-5 text-gray-400 shrink-0" />
            <span className="whitespace-nowrap">Automation Experts</span>
          </div>
          <div className="hidden md:block w-px h-4 bg-gray-300"></div>

          <div className="flex items-center gap-2 bg-white px-3 sm:px-4 py-2">
            <CheckCircle2 className="w-5 h-5 text-gray-400 shrink-0" />
            <span className="whitespace-nowrap">AI-Powered Builds</span>
          </div>
          <div className="hidden md:block w-px h-4 bg-gray-300"></div>

          <div className="flex items-center gap-2 bg-white px-3 sm:px-4 py-2">
            <CheckCircle2 className="w-5 h-5 text-gray-400 shrink-0" />
            <span className="whitespace-nowrap">Custom Software</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button className="relative flex items-center justify-center gap-2 px-8 py-5 rounded-2xl bg-[#0e3a27] text-white font-bold text-sm transition-all cursor-pointer overflow-hidden shadow-[0_0.6px_1.1px_-1.25px_rgba(61,61,61,0.72),0_2.3px_4.1px_-2.5px_rgba(61,61,61,0.64),0_10px_18px_-3.75px_rgba(61,61,61,0.25),0_0.7px_0.7px_-0.58px_rgba(22,51,32,0.35),0_1.8px_1.8px_-1.17px_rgba(22,51,32,0.34),0_3.6px_3.6px_-1.75px_rgba(22,51,32,0.33),0_6.9px_6.9px_-2.33px_rgba(22,51,32,0.3),0_13.6px_13.7px_-2.92px_rgba(22,51,32,0.26),0_30px_30px_-3.5px_rgba(22,51,32,0.15)] group">
            Contact Us
            <ArrowUpRight className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-2 bg-brand-light text-[#0f291e] px-8 py-5 rounded-2xl border border-gray-200 font-bold text-sm hover:bg-[#e2ead9] transition-all">
            See All Projects
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
