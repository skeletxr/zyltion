import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import { motion } from "motion/react";
import { ArrowUpRight, ArrowRight, CheckCircle2, X } from "lucide-react";

const InsightsSection = () => {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Fokal Lamps",
      description:
        "We engineered a custom website with automated inquiry responses and a full-scale catalog management system for seamless operations.",
      tag: "Web App",
      image: "/fokal.png",
      url: "https://fokallamps.com",
    },
    {
      title: "TapShoper",
      description:
        "A massive, automated online store system that handles inventory, orders, and fulfilment at scale. Handles thousands of products and customers.",
      tag: "Web App",
      image: "/tapshoper.png",
      url: "https://tapshoper.com",
    },
    {
      title: "Createathon",
      description:
        "A high-conversion landing page built to onboard thousands of creators with a backend system that handles new creator applications and inquiries",
      tag: "Web App",
      image: "/createathon.png",
      url: "https://createathon.co",
    },
    {
      title: "FlowEngine",
      description:
        "AI Lead Qualification & Follow-Up Automation software along with an integrated CrRM system to manage and nurture leads effectively.",
      tag: "Automation",
      image: "/flowengine.png",
    },
    {
      title: "Nero Bot",
      description:
        "Browser Workflow Automation Platform. The platform uses Playwright automation bots to perform browser actions on web apps.",
      tag: "Automation",
      image: "/nero.png",
    },
    {
      title: "AgentKB",
      description:
        "A smart customer manager powered by AI that automatically sorts and prioritises your leads. Integrated with platforms like whatsapp and email.",
      tag: "AI Tool",
      image: "/agentkb.png",
    },
  ];

  return (
    <>
      <section id="projects" className="w-full bg-white py-16 relative">
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
                  <div className="w-full aspect-video bg-gray-100 rounded-xl mb-6 shadow-sm overflow-hidden flex items-center justify-center">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-serif text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 grow text-sm">
                    {project.description}
                  </p>

                  {/* Button */}
                  {project.url ? (
                    <button
                      onClick={() => window.open(project.url, "_blank")}
                      className="w-full py-3 rounded-xl bg-[#f8f9f5] text-gray-800 font-medium flex items-center justify-center gap-2 hover:bg-white transition-colors border border-gray-200/50 shadow-sm text-sm cursor-pointer"
                    >
                      View Project
                      <ArrowUpRight className="w-4 h-4 text-gray-500" />
                    </button>
                  ) : (
                    <button
                      onClick={() => setSelectedProject(idx)}
                      className="w-full py-3 rounded-xl bg-[#f8f9f5] text-gray-800 font-medium flex items-center justify-center gap-2 hover:bg-white transition-colors border border-gray-200/50 shadow-sm text-sm cursor-pointer"
                    >
                      Get Overview
                      <ArrowRight className="w-4 h-4 text-gray-500" />
                    </button>
                  )}
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
            <button
              onClick={() => navigate("/contact")}
              className="relative flex items-center justify-center gap-2 px-8 py-5 rounded-2xl bg-[#0e3a27] text-white font-bold text-sm transition-all cursor-pointer overflow-hidden shadow-[0_0.6px_1.1px_-1.25px_rgba(61,61,61,0.72),0_2.3px_4.1px_-2.5px_rgba(61,61,61,0.64),0_10px_18px_-3.75px_rgba(61,61,61,0.25),0_0.7px_0.7px_-0.58px_rgba(22,51,32,0.35),0_1.8px_1.8px_-1.17px_rgba(22,51,32,0.34),0_3.6px_3.6px_-1.75px_rgba(22,51,32,0.33),0_6.9px_6.9px_-2.33px_rgba(22,51,32,0.3),0_13.6px_13.7px_-2.92px_rgba(22,51,32,0.26),0_30px_30px_-3.5px_rgba(22,51,32,0.15)] group"
            >
              Contact Us
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {selectedProject !== null
        ? createPortal(
            <div>
              {/* Backdrop */}
              <div
                onClick={() => setSelectedProject(null)}
                className="fixed top-0 left-0 right-0 bottom-0 bg-black/40 z-40 backdrop-blur-sm"
              />

              {/* Modal */}
              <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-[90vw] lg:max-w-4xl h-[90vh] px-4">
                <div className="bg-white rounded-3xl shadow-2xl w-full h-full overflow-hidden flex flex-col">
                  {/* Header with Close Button */}
                  <div className="flex justify-between items-center px-6 sm:px-8 py-4 sm:py-6 border-b border-gray-100 flex-shrink-0">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif text-gray-900">
                      {projects[selectedProject]?.title}
                    </h3>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <X className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8 space-y-6 overflow-y-auto flex-1">
                    {/* Image */}
                    <div className="w-full aspect-video bg-gray-100 rounded-2xl shadow-sm overflow-hidden flex items-center justify-center">
                      <img
                        src={projects[selectedProject]?.image}
                        alt={projects[selectedProject]?.title}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Description */}
                    <div>
                      <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                        {projects[selectedProject]?.description}
                      </p>
                      <div className="inline-block">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#0f291e]/60 bg-[#f4f7f0] px-4 py-2 rounded-lg">
                          {projects[selectedProject]?.tag}
                        </span>
                      </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-gradient-to-br from-[#f4f7f0] to-[#ecebe4] border border-gray-200/50 rounded-2xl p-4 sm:p-6">
                      <div className="flex gap-3 sm:gap-4">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-[#0f291e]/10">
                            <CheckCircle2 className="h-5 w-5 text-[#0f291e]" />
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-gray-900 mb-2">
                            Private Admin Project
                          </h4>
                          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                            This is an internal admin-based system built for
                            private use. Live preview is not available as this
                            is a custom backend solution. For more information
                            about what we built, reach out through our contact
                            form.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Footer Button */}
                  <div className="px-6 sm:px-8 py-4 sm:py-6 border-t border-gray-100 flex-shrink-0">
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="w-full py-3 px-6 rounded-xl bg-[#0e3a27] text-white font-medium hover:bg-[#0d2e1f] transition-colors shadow-sm text-sm sm:text-base"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
};

export default InsightsSection;
