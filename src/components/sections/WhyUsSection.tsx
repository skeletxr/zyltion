import React from "react";
import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, animate } from "motion/react";
import { CheckCircle2, Target, Lightbulb, Users, Box } from "lucide-react";

const CARD_WIDTH = 320;
const GAP = 24;
const CARD_STRIDE = CARD_WIDTH + GAP;

const WhyUsSection = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const xMotion = useMotionValue(0);
  // currentSlot tracks which slot in displayCards is centered — lives in a ref so it
  // never triggers a re-render and the interval closure always reads the latest value.
  const currentSlot = useRef(4);
  const animatingRef = useRef(false);

  const cards = [
    {
      title: "Client-Centered",
      description:
        "We prioritize your goals and tailor every solution to your unique needs.",
      icon: Users,
    },
    {
      title: "Tailored Solutions",
      description: "We customize every aspect to suit your business needs.",
      icon: Box,
    },
    {
      title: "Expert Insights",
      description:
        "Our consultants bring deep industry knowledge to solve your challenges.",
      icon: Lightbulb,
    },
    {
      title: "Proven Results",
      description: "We deliver measurable outcomes that drive business growth.",
      icon: Target,
    },
  ];

  // Triple card set: [copy A][copy B][copy C]
  // We loop through copy B (slots 4-7). On advancing past slot 7 we animate to slot 8
  // (copy C card 0 — visually identical to copy B card 0), then instantly teleport to
  // slot 4 (copy B card 0). Because xMotion is a MotionValue the teleport skips React
  // rendering entirely, so it is completely invisible.
  const displayCards = [...cards, ...cards, ...cards];

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (containerWidth === 0) return;

    const xForSlot = (s: number) =>
      containerWidth / 2 - CARD_WIDTH / 2 - s * CARD_STRIDE;

    // Place the initial card (copy B, slot 4) in the center
    xMotion.set(xForSlot(currentSlot.current));
    setActiveIdx(currentSlot.current % cards.length);

    const advance = () => {
      if (animatingRef.current) return;
      animatingRef.current = true;

      const nextSlot = currentSlot.current + 1;
      setActiveIdx(nextSlot % cards.length);

      animate(xMotion, xForSlot(nextSlot), {
        duration: 0.55,
        ease: [0.4, 0, 0.2, 1],
        onComplete: () => {
          animatingRef.current = false;
          // If we've gone past the middle copy, silently teleport back
          if (nextSlot >= cards.length * 2) {
            // nextSlot === cards.length * 2 means we're now centred on copy C card 0.
            // Teleport to copy B card 0 (slot 4) — same visual, zero flash.
            const resetSlot = cards.length; // = 4
            currentSlot.current = resetSlot;
            xMotion.set(xForSlot(resetSlot));
          } else {
            currentSlot.current = nextSlot;
          }
        },
      });
    };

    const timer = setInterval(advance, 3000);
    return () => clearInterval(timer);
  }, [containerWidth]);

  return (
    <section
      className="w-full bg-white py-8 sm:py-10 relative overflow-hidden flex flex-col"
      style={{ height: "90vh" }}
    >
      {/* Background decorative elements */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-white to-transparent rounded-full blur-3xl opacity-50 -translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-white to-transparent rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col h-full justify-center gap-6">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-serif text-gray-900 mb-6">
            Why Even Us ?
          </h2>
          <p className="text-gray-600 text-lg">
            We go beyond surface-level advice — our consulting approach is built
            on data, strategy, and execution
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative w-full max-w-6xl mx-auto flex items-center"
          ref={containerRef}
        >
          {/* Blur Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w4-848 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none"></div>

          <div className="overflow-hidden py-4">
            <motion.div style={{ x: xMotion }} className="flex gap-6 w-fit">
              {displayCards.map((card, idx) => {
                const isActive = idx % cards.length === activeIdx;
                return (
                  <div
                    key={idx}
                    className={`w-[320px] bg-[#f8f9f5] rounded-3xl p-2 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05),0_4px_20px_rgba(0,0,0,0.05)] border border-white flex-shrink-0 transition-all duration-500 ${isActive ? "opacity-100 scale-100" : "opacity-40 scale-95"}`}
                  >
                    <div className="bg-[#f2f1eb] rounded-[20px] p-6 h-full flex flex-col border border-gray-200/50 shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)]">
                      <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6">
                        <card.icon
                          className="w-6 h-6 text-[#0f291e]"
                          strokeWidth={1.5}
                        />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {card.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-6">
                        {card.description}
                      </p>

                      {/* Decorative dots */}
                      <div className="flex gap-2 mt-auto justify-end items-center">
                        <div className="w-5 h-0.5 bg-gray-300 rounded-full"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Stats/Badges Row */}
        <div className="flex flex-nowrap justify-center items-center gap-x-6 text-sm font-medium text-gray-700 w-full mx-auto relative">
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

export default WhyUsSection;
