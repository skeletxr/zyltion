import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowUpRight, ArrowRight, Star } from "lucide-react";
import { useCounter } from "../../hooks/useCounter";
import { RevealText } from "../animations/RevealText";

const Hero = () => {
  const navigate = useNavigate();
  const clientsCount = useCounter({ to: 30, duration: 2, delay: 0.5 });

  // Container and item animation variants for staggered effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, filter: "blur(10px)", x: -30 },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="hero"
      className="w-full max-w-384 mx-auto min-h-auto sm:min-h-[90vh] px-3 sm:px-6 lg:px-12.5 pt-3 sm:pt-5 pb-6 sm:pb-10 bg-[#fafafa] relative z-2 overflow-hidden flex justify-center items-center box-border transition-all"
    >
      <div className="relative overflow-hidden max-w-359 w-full min-h-auto lg:h-[calc(100vh-80px)] flex items-center box-border z-4 transition-all p-6 sm:p-8 lg:p-16 rounded-[28px] lg:rounded-[36px]">
        {/* Card Background Layers */}
        <div className="absolute inset-0 -z-10 bg-linear-to-b from-[#ecebe4]/50 to-[#ecebe4]/25"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/2 backdrop-blur-2xl -z-10 mask-[linear-gradient(to_bottom,transparent,black)] pointer-events-none"></div>

        {/* White glow effect on the left */}
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[120%] bg-white/40 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-11 gap-4 lg:gap-12 items-center w-full min-h-auto">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-center relative z-2 w-full min-w-0 font-sans text-[12px] pt-6 pb-4 lg:py-0"
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col gap-6"
            >
              {/* Badge */}
              <motion.div
                variants={itemVariants}
                className="relative flex items-center gap-2 h-10.5 px-6 py-2.5 rounded-[17px] bg-white shadow-[0_8px_24px_rgba(173,173,173,0.08)] w-fit box-border"
              >
                <img
                  src="/assets/verified-badge-svgrepo-com.svg"
                  alt="Verified Badge"
                  className="w-6 h-6 text-gray-700"
                />
                <span className="text-[12px] font-bold uppercase tracking-wider text-black font-sans leading-none">
                  Effortless Engineering
                </span>
              </motion.div>

              {/* Heading */}
              <RevealText
                text="Custom automation and software built to scale."
                className="text-[38px] sm:text-[48px] lg:text-[56px] xl:text-[68px] font-light leading-tight lg:leading-[1.1] tracking-[-0.5px] sm:tracking-[-1.5px] lg:tracking-[-2px] font-serif text-black block"
                delay={0.15}
                staggerDelay={0.06}
              />

              {/* Description */}
              <RevealText
                text="Stop wasting time on manual work. We build custom software, high-speed automation, and AI tools that help your business grow faster without the headaches."
                className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-md font-medium"
                delay={0.35}
                staggerDelay={0.04}
              />

              {/* Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap items-center gap-4"
              >
                <button
                  onClick={() => navigate("/contact")}
                  className="relative flex items-center justify-center gap-2 px-8 py-5 rounded-2xl bg-[#0e3a27] text-white font-bold text-sm transition-all cursor-pointer overflow-hidden shadow-[0_0.6px_1.1px_-1.25px_rgba(61,61,61,0.72),0_2.3px_4.1px_-2.5px_rgba(61,61,61,0.64),0_10px_18px_-3.75px_rgba(61,61,61,0.25),0_0.7px_0.7px_-0.58px_rgba(22,51,32,0.35),0_1.8px_1.8px_-1.17px_rgba(22,51,32,0.34),0_3.6px_3.6px_-1.75px_rgba(22,51,32,0.33),0_6.9px_6.9px_-2.33px_rgba(22,51,32,0.3),0_13.6px_13.7px_-2.92px_rgba(22,51,32,0.26),0_30px_30px_-3.5px_rgba(22,51,32,0.15)] group"
                >
                  Get Started
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
                <button
                  onClick={() => navigate("/contact")}
                  className="flex items-center gap-2 bg-brand-light text-[#0f291e] px-8 py-5 rounded-2xl border border-gray-200 font-bold text-sm hover:bg-[#e2ead9] transition-all"
                >
                  Our Services
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>

              {/* Ratings */}
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-4 pt-6 border-t border-black/15 w-full max-w-100"
              >
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-5 h-5 fill-[#0f291e] text-[#0f291e]"
                    />
                  ))}
                </div>
                <div className="w-px h-5 bg-black/15"></div>
                <span className="text-gray-900 font-semibold text-sm">
                  Rated 5 stars by our partners
                </span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-6 flex items-center justify-center min-w-0"
          >
            <img
              src="/zyltion-hero-right.png"
              alt="Zyltion Hero"
              className="w-full h-auto max-w-lg lg:max-w-lg object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
