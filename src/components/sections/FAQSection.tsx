import React from "react";
import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, ArrowRight, ChevronDown } from "lucide-react";

const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "What services do you offer?",
      a: "We provide end-to-end business consulting, including strategy development, market positioning, process optimization, and performance improvement.",
    },
    {
      q: "How long does a typical consultation process take?",
      a: "The duration varies depending on the complexity of your needs. A standard strategic review takes 2-4 weeks, while comprehensive transformations may take several months.",
    },
    {
      q: "Do you work with startups or established businesses?",
      a: "We work with both. We help startups build scalable foundations and assist established businesses in optimizing operations and navigating digital transformations.",
    },
    {
      q: "What can I expect in the first consultation?",
      a: "Our first meeting is a discovery session. We'll discuss your current challenges, business goals, and determine if our expertise aligns with your needs.",
    },
    {
      q: "Do you offer ongoing support after the consultation?",
      a: "Absolutely. We provide continuous advisory sessions and performance reviews to ensure strategies are successfully implemented and delivering results.",
    },
  ];

  return (
    <section className="w-full bg-[#f2f1eb] py-24 sm:py-32 relative">
      <div className="max-w-350 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl font-serif text-gray-900 mb-6">
            Your Questions, Answered Clearly
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Whether you're seeking strategic direction or improving business
            performance, here are answers to the most common questions clients
            ask.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Image & Quote */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-4xl overflow-hidden h-125 flex flex-col justify-center items-center p-10 text-center shadow-lg"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center z-0"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80")',
              }}
            ></div>
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60 z-10"></div>

            {/* Content */}
            <div className="relative z-20 flex flex-col items-center">
              <span className="text-7xl font-serif text-white/80 leading-none mb-4">
                “
              </span>
              <div className="text-3xl sm:text-4xl font-serif text-white leading-tight mb-10 max-w-md flex flex-wrap justify-center gap-2">
                {[
                  "Our",
                  "main",
                  "goal",
                  "is",
                  "to",
                  "turn",
                  "complex",
                  "challenges",
                  "into",
                  "clear",
                  "strategies",
                  "that",
                  "drive",
                  "growth.",
                ].map((word, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, filter: "blur(0px)" }}
                    viewport={{ once: false, margin: "0px" }}
                    transition={{
                      duration: 0.6,
                      delay: idx * 0.08,
                      ease: [0.34, 1.56, 0.64, 1],
                    }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </div>

              <motion.div
                className="flex items-center gap-4"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "0px" }}
                transition={{
                  duration: 0.8,
                  delay: 1.2,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
              >
                <img
                  src="https://i.pravatar.cc/150?img=12"
                  alt="Co-founder"
                  className="w-12 h-12 rounded-full object-cover border-2 border-white/20"
                />
                <span className="text-white/90 font-medium">
                  Co-founder of AltoScript
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - FAQs */}
          <div className="flex flex-col gap-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-[#f8f9f5] rounded-2xl overflow-hidden border border-white/50 shadow-sm"
              >
                <button
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-medium text-gray-900 pr-8">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 shrink-0 ${openIdx === idx ? "rotate-180" : ""}`}
                  />
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: openIdx === idx ? "auto" : 0,
                    opacity: openIdx === idx ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {faq.a}
                  </div>
                </motion.div>
              </motion.div>
            ))}

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <button className="relative flex items-center justify-center gap-2 px-8 py-5 rounded-2xl bg-[#0e3a27] text-white font-bold text-sm transition-all cursor-pointer overflow-hidden shadow-[0_0.6px_1.1px_-1.25px_rgba(61,61,61,0.72),0_2.3px_4.1px_-2.5px_rgba(61,61,61,0.64),0_10px_18px_-3.75px_rgba(61,61,61,0.25),0_0.7px_0.7px_-0.58px_rgba(22,51,32,0.35),0_1.8px_1.8px_-1.17px_rgba(22,51,32,0.34),0_3.6px_3.6px_-1.75px_rgba(22,51,32,0.33),0_6.9px_6.9px_-2.33px_rgba(22,51,32,0.3),0_13.6px_13.7px_-2.92px_rgba(22,51,32,0.26),0_30px_30px_-3.5px_rgba(22,51,32,0.15)] group">
                Get Started
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-2 bg-brand-light text-[#0f291e] px-8 py-5 rounded-2xl border border-gray-200 font-bold text-sm hover:bg-[#e2ead9] transition-all">
                Our Services
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="hidden sm:block grow h-px bg-gray-200 ml-4"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
