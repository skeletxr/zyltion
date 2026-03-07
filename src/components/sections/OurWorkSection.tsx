import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, ArrowRight, CheckCircle2 } from "lucide-react";

const OurWorkSection = () => {
  const categories = [
    "Automation",
    "Web Dev",
    "Custom Solution",
    "AI Integration"
  ];

  const workData: Record<string, Array<{title: string, description: string, tag: string, image: string}>> = {
    "Automation": [
      {
        title: "Invoice Automation",
        description: "Automated invoice processing for a law firm, reducing manual entry by 90%.",
        tag: "Integromat",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "CRM Sync",
        description: "Real-time data synchronization between Salesforce and HubSpot for unified sales data.",
        tag: "n8n / Zapier",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Lead Scraper",
        description: "Custom lead extraction engine that identifies 1000+ targeted prospects daily.",
        tag: "Python / Playwright",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Email Triage AI",
        description: "Automated helpdesk system that categorizes and assigns tickets using NLP.",
        tag: "OpenAI / Node.js",
        image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Inventory Sync",
        description: "Connecting warehouse stock levels with Shopify and Amazon stores in real-time.",
        tag: "Custom API",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Report Orchestrator",
        description: "Generates complex weekly performance reports from 12 different data sources.",
        tag: "Full Automation",
        image: "https://images.unsplash.com/photo-1543286386-713bcd534a77?auto=format&fit=crop&w=800&q=80",
      },
    ],
    "Web Dev": [
      {
        title: "EcoShop Global",
        description: "A headless Shopify store built with Next.js for lightning fast performance.",
        tag: "E-Commerce",
        image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Pulse SaaS",
        description: "A subscription-based platform for managing remote teams with real-time tracking.",
        tag: "Web App",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Artisan Portfolio",
        description: "Ultra-modern portfolio with complex animations for a high-end design agency.",
        tag: "Creative",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "HealthPortal",
        description: "Secure medical appointment system with HIPAA-compliant data storage.",
        tag: "Full-Stack",
        image: "https://images.unsplash.com/photo-1504868584819-f8e90526354e?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "NewsFlow CMS",
        description: "A custom content management system built specifically for high-traffic news outlets.",
        tag: "Custom Backend",
        image: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "EduLink LMS",
        description: "Interactive learning management system with video streaming and progress tracking.",
        tag: "Platform",
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
      },
    ],
    "Custom Solution": [
      {
        title: "LogiTrack ERP",
        description: "Bespoke resource planning software for a global logistics conglomerate.",
        tag: "Enterprise",
        image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "IoT Dash",
        description: "Control center for 500+ industrial sensors monitoring factory temperature.",
        tag: "IoT Core",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Cloud Migration",
        description: "Architecting the transition of a decade-old system to AWS serverless.",
        tag: "Infrastructure",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "SecurAudit",
        description: "Automated pentesting tool that identifies vulnerabilities in web infrastructure.",
        tag: "Cybersecurity",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "InvSync RFID",
        description: "Real-time inventory management system using RFID and WebSocket technology.",
        tag: "Bespoke System",
        image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "SupplyChain Hub",
        description: "Transparent tracking system for global supply chains using distributed ledger.",
        tag: "Logistics",
        image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaad5b?auto=format&fit=crop&w=800&q=80",
      },
    ],
    "AI Integration": [
      {
        title: "Customer Support Llama",
        description: "Self-hosted LLM that handles customer queries with 95% accuracy.",
        tag: "GenAI",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Predictive Sales",
        description: "ML model that predicts lead conversion probability with high precision.",
        tag: "Machine Learning",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "AdCopy AI",
        description: "Neural network trained to generate high-converting social media ad copy.",
        tag: "NLP",
        image: "https://images.unsplash.com/photo-1676299081847-824916de030a?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "VisionInspect",
        description: "Computer vision system for automated defect detection on assembly lines.",
        tag: "Computer Vision",
        image: "https://images.unsplash.com/photo-1555255707-c07966488bc0?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "VoiceGen",
        description: "Custom TTS engine for creating unique brand voices in customer apps.",
        tag: "Deep Audio",
        image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Sentimind",
        description: "Aggregates and analyzes customer feedback across all social channels.",
        tag: "AI Analysis",
        image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=800&q=80",
      },
    ]
  };

  const [activeCategory, setActiveCategory] = useState("Automation");

  return (
    <section
      id="work"
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
            Our Work
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            Real systems we've built for real businesses. Each one solved a
            specific problem with custom code, automation, or AI.
          </p>

          {/* Pill Navigation Bar */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center gap-1 p-1 bg-[#f8f9f5] rounded-full border border-gray-100 shadow-sm">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    activeCategory === cat ? "text-white" : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  {activeCategory === cat && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-[#0e3a27] rounded-full shadow-md"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="relative w-full max-w-275 mx-auto mb-20 z-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {workData[activeCategory].map((project, idx) => (
              <motion.div
                key={`${activeCategory}-${idx}`}
                initial={{
                  opacity: 0,
                  y: 20,
                  scale: 0.98,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                  scale: 0.98,
                }}
                transition={{
                  duration: 0.4,
                  delay: idx * 0.05,
                  ease: "easeOut",
                }}
                className="w-full bg-[#f8f9f5] rounded-3xl p-2 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05),0_4px_20px_rgba(0,0,0,0.05)] border border-white group"
              >
                <div className="bg-[#f2f1eb] rounded-[20px] p-6 h-full flex flex-col border border-gray-200/50 shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)]">
                  {/* Top Bar */}
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#0f291e]/60">
                      {project.tag}
                    </span>
                    <div className="flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#0e3a27]/20"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-[#0e3a27]/20"></div>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="w-full aspect-video bg-gray-100 rounded-xl mb-6 shadow-sm overflow-hidden flex items-center justify-center relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-[#0e3a27]/0 group-hover:bg-[#0e3a27]/10 transition-colors duration-300" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-serif text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 grow text-sm">
                    {project.description}
                  </p>

                  {/* Button */}
                  <button className="w-full py-3 rounded-xl bg-[#f8f9f5] text-gray-800 font-medium flex items-center justify-center gap-2 hover:bg-[#0e3a27] hover:text-white transition-all duration-300 border border-gray-200/50 shadow-sm text-sm group-item">
                    View Project
                    <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
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
            Start Your Project
            <ArrowUpRight className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-2 bg-[#f4f7f0] text-[#0f291e] px-8 py-5 rounded-2xl border border-gray-200 font-bold text-sm hover:bg-[#e2ead9] transition-all">
            See Case Studies
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurWorkSection;
