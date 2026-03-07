import React, { useRef, useLayoutEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { ArrowUpRight, Star } from "lucide-react";

const ProvenProcessSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const [sectionTop, setSectionTop] = useState(0);
  const [maxY, setMaxY] = useState(0);

  const { scrollY } = useScroll();

  // Match the exact spring params used in SmoothScroll
  const smoothY = useSpring(scrollY, {
    stiffness: 100,
    damping: 30,
    mass: 1,
  });

  useLayoutEffect(() => {
    const measure = () => {
      if (!containerRef.current || !leftRef.current) return;
      // getBoundingClientRect().top gives visual pos, add smoothY to get page pos
      const top =
        containerRef.current.getBoundingClientRect().top + smoothY.get();
      const scrollable =
        containerRef.current.offsetHeight - leftRef.current.offsetHeight;
      setSectionTop(top);
      setMaxY(Math.max(0, scrollable));
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const y = useTransform(
    smoothY,
    [sectionTop - 20, sectionTop + maxY - 20],
    [0, maxY],
    {
      clamp: true,
    },
  );

  const steps = [
    {
      number: "1",
      title: "Hassle-Free Scheduling",
      description:
        "Book your consultation in just a few clicks. We make it easy to connect and start addressing your business needs right away.",
    },
    {
      number: "2",
      title: "Personalized Plan",
      description:
        "Every business is unique. We craft a strategy tailored to your goals, ensuring measurable progress and fresh opportunities for growth.",
    },
    {
      number: "3",
      title: "Ongoing Partnership",
      description:
        "We stay with you beyond strategy offering continuous support, refinements, and guidance to help your business scale with confidence.",
    },
  ];

  return (
    <section className="w-full bg-[#f2f1eb] py-24 sm:py-32 relative">
      <div className="max-w-350 mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={containerRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative"
        >
          {/* Left Column - Sticky Content */}
          <div className="lg:col-span-5 relative h-full">
            <motion.div ref={leftRef} style={{ y }}>
              <h2 className="text-4xl sm:text-5xl font-serif text-gray-900 mb-6 leading-tight">
                Proven Process for Your Goals
              </h2>
              <p className="text-gray-700 text-lg mb-10 max-w-md leading-relaxed">
                Our step-by-step approach simplifies challenges, delivers
                tailored strategies, and drives measurable results.
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-12">
                <button className="relative flex items-center justify-center gap-2 px-8 py-5 rounded-2xl bg-[#0e3a27] text-white font-bold text-sm transition-all cursor-pointer overflow-hidden shadow-[0_0.6px_1.1px_-1.25px_rgba(61,61,61,0.72),0_2.3px_4.1px_-2.5px_rgba(61,61,61,0.64),0_10px_18px_-3.75px_rgba(61,61,61,0.25),0_0.7px_0.7px_-0.58px_rgba(22,51,32,0.35),0_1.8px_1.8px_-1.17px_rgba(22,51,32,0.34),0_3.6px_3.6px_-1.75px_rgba(22,51,32,0.33),0_6.9px_6.9px_-2.33px_rgba(22,51,32,0.3),0_13.6px_13.7px_-2.92px_rgba(22,51,32,0.26),0_30px_30px_-3.5px_rgba(22,51,32,0.15)] group">
                  Get Started
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <button className="flex items-center gap-2 bg-brand-light text-[#0f291e] px-8 py-5 rounded-2xl font-bold text-sm hover:bg-[#e2ead9] transition-all border border-gray-200/50 shadow-sm">
                  Our Services
                </button>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-5 h-5 fill-brand-dark text-brand-dark"
                    />
                  ))}
                </div>
                <span className="text-gray-700 font-medium">
                  Rated by loving Clients
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Scrolling Cards */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-[#f6f4ed] rounded-2xl p-6 sm:p-10 lg:p-16 text-center shadow-sm border-2 border-white relative overflow-hidden group"
              >
                {/* Irregular Organic Background Pattern */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.08] group-hover:opacity-[0.12] transition-opacity duration-700">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 400 400"
                    preserveAspectRatio="none"
                  >
                    <motion.path
                      d="M-50,200 Q100,50 250,200 T550,200"
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      animate={{
                        d: [
                          "M-50,200 Q100,50 250,200 T550,200",
                          "M-50,200 Q100,350 250,200 T550,200",
                          "M-50,200 Q100,50 250,200 T550,200",
                        ],
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <motion.path
                      d="M-50,250 Q150,100 300,250 T650,250"
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2.5"
                      animate={{
                        d: [
                          "M-50,250 Q150,100 300,250 T650,250",
                          "M-50,250 Q150,400 300,250 T650,250",
                          "M-50,250 Q150,100 300,250 T650,250",
                        ],
                      }}
                      transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2,
                      }}
                    />
                  </svg>
                </div>

                <motion.div
                  className="absolute -right-12 -top-12 w-48 h-48 bg-brand-dark/10 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 20, 0],
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute -left-12 -bottom-12 w-48 h-48 bg-brand-dark/10 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.3, 1],
                    x: [0, -30, 0],
                    y: [0, 30, 0],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />

                <div className="relative z-10">
                  <div className="relative inline-block mb-8">
                    <span className="text-6xl sm:text-7xl font-serif text-gray-900 relative z-10">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProvenProcessSection;
