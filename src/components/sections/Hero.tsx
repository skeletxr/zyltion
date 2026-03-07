import React, { useRef, useEffect } from "react";
import { motion, useAnimationControls } from "motion/react";
import {
  ArrowUpRight,
  ArrowRight,
  Star,
  CheckCircle2,
  Zap,
  Database,
  Activity,
  RefreshCw,
  GripVertical,
  MousePointer2,
} from "lucide-react";
import { useCounter } from "../../hooks/useCounter";
import { RevealText } from "../animations/RevealText";

const Hero = () => {
  const clientsCount = useCounter({ to: 30, duration: 2, delay: 0.5 });
  const constraintsRef = useRef<HTMLDivElement>(null);
  const cursorControls = useAnimationControls();
  const nodeControls = useAnimationControls();

  useEffect(() => {
    // Run the pick-up/place-back demo once after a short delay
    const run = async () => {
      await new Promise((r) => setTimeout(r, 1800));

      // 1. Cursor fades in right on top of the first node
      await cursorControls.start({
        opacity: 1,
        x: 0,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" },
      });

      // 2. Cursor "presses" — tiny scale down
      await cursorControls.start({
        scale: 0.85,
        transition: { duration: 0.15 },
      });

      // 3. Node lifts + cursor moves up with it
      await Promise.all([
        nodeControls.start({
          y: -28,
          rotate: -2,
          scale: 1.04,
          boxShadow: "0 12px 28px rgba(0,0,0,0.10)",
          transition: { duration: 0.45, ease: "easeOut" },
        }),
        cursorControls.start({
          x: 0,
          y: -28,
          scale: 0.85,
          transition: { duration: 0.45, ease: "easeOut" },
        }),
      ]);

      // 4. Hold for a beat
      await new Promise((r) => setTimeout(r, 400));

      // 5. Drop it back — node springs, cursor follows
      await Promise.all([
        nodeControls.start({
          y: 0,
          rotate: 0,
          scale: 1,
          boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
          transition: { type: "spring", stiffness: 300, damping: 22 },
        }),
        cursorControls.start({
          x: 0,
          y: 0,
          scale: 1,
          transition: { duration: 0.4, ease: "easeOut" },
        }),
      ]);

      // 6. Cursor fades out
      await cursorControls.start({
        opacity: 0,
        transition: { duration: 0.4, delay: 0.15 },
      });
    };

    run();
  }, [cursorControls, nodeControls]);

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
      className="w-full max-w-384 mx-auto min-h-auto sm:min-h-194 px-3 sm:px-6 lg:px-12.5 pt-3 sm:pt-5 pb-8 sm:pb-12 bg-[#fafafa] relative z-2 overflow-hidden flex justify-center items-center box-border transition-all"
    >
      <div className="relative overflow-hidden max-w-359 w-full min-h-auto lg:min-h-150 flex items-center box-border z-4 transition-all p-6 sm:p-8 lg:p-20 rounded-[28px] lg:rounded-[36px]">
        {/* Card Background Layers */}
        <div className="absolute inset-0 -z-10 bg-linear-to-b from-[#ecebe4]/50 to-[#ecebe4]/25"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/2 backdrop-blur-2xl -z-10 mask-[linear-gradient(to_bottom,transparent,black)] pointer-events-none"></div>

        {/* White glow effect on the left */}
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[120%] bg-white/40 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center w-full min-h-auto lg:min-h-120">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col justify-center relative z-2 w-full min-w-0 font-sans text-[12px] pt-6 pb-4 lg:py-0"
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
                  High-Performance Software
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
                <button className="relative flex items-center justify-center gap-2 px-8 py-5 rounded-2xl bg-[#0e3a27] text-white font-bold text-sm transition-all cursor-pointer overflow-hidden shadow-[0_0.6px_1.1px_-1.25px_rgba(61,61,61,0.72),0_2.3px_4.1px_-2.5px_rgba(61,61,61,0.64),0_10px_18px_-3.75px_rgba(61,61,61,0.25),0_0.7px_0.7px_-0.58px_rgba(22,51,32,0.35),0_1.8px_1.8px_-1.17px_rgba(22,51,32,0.34),0_3.6px_3.6px_-1.75px_rgba(22,51,32,0.33),0_6.9px_6.9px_-2.33px_rgba(22,51,32,0.3),0_13.6px_13.7px_-2.92px_rgba(22,51,32,0.26),0_30px_30px_-3.5px_rgba(22,51,32,0.15)] group">
                  Get Started
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
                <button className="flex items-center gap-2 bg-brand-light text-[#0f291e] px-8 py-5 rounded-2xl border border-gray-200 font-bold text-sm hover:bg-[#e2ead9] transition-all">
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

          {/* Right Content - Images */}
          <div className="lg:col-span-6 flex flex-col items-center gap-4 min-w-0">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="relative w-full aspect-4/3 sm:aspect-auto sm:w-full lg:w-full lg:h-120 flex items-center justify-center lg:justify-end shrink-0"
            >
              {/* Abstract light background blobs to match site aesthetic */}
              <div className="absolute top-10 right-10 w-64 h-64 bg-[#e2ead9]/80 rounded-full blur-[70px] pointer-events-none"></div>
              <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#ecebe4] rounded-full blur-[70px] pointer-events-none"></div>

              {/* Main Workflow/App UI Card */}
              <div
                ref={constraintsRef}
                className="relative w-full max-w-full sm:max-w-[560px] lg:max-w-full bg-white/90 backdrop-blur-xl rounded-4xl border border-gray-200 shadow-[0_20px_40px_rgba(0,0,0,0.04)] p-6 sm:p-8 flex flex-col gap-6 transform-gpu"
              >
                {/* Header */}
                <div className="flex justify-between items-center mb-2 pointer-events-none">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center shadow-sm">
                      <Activity className="w-5 h-5 text-[#0f291e]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-900">
                        Active Workflow
                      </h3>
                      <p className="text-[11px] text-gray-500 font-medium">
                        Drag nodes to rearrange
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f4f7f0] border border-[#d1dec2]">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-[10px] font-bold text-[#0f291e] uppercase tracking-wide">
                      Live
                    </span>
                  </div>
                </div>

                {/* Workflow Nodes */}
                <div className="relative flex flex-col gap-4 min-h-[220px]">
                  {/* Subtle Background Connector Line */}
                  <div className="absolute top-8 bottom-8 left-6 w-0.5 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 pointer-events-none"></div>

                  {/* Trigger Node */}
                  <motion.div
                    drag
                    dragConstraints={constraintsRef}
                    dragElastic={0.6}
                    dragMomentum={false}
                    animate={nodeControls}
                    whileHover={{ scale: 1.02 }}
                    whileDrag={{
                      scale: 1.05,
                      zIndex: 50,
                      rotate: -1,
                      cursor: "grabbing",
                    }}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
                    className="relative flex items-center gap-3 bg-white rounded-2xl p-3 border border-gray-100 shadow-sm z-10 cursor-grab hover:shadow-md transition-shadow"
                  >
                    <GripVertical className="w-4 h-4 text-gray-300 shrink-0 ml-1 transition-colors hover:text-gray-400" />
                    <div className="w-10 h-10 rounded-full bg-[#f6f4ed] border border-gray-200 flex items-center justify-center shrink-0 pointer-events-none">
                      <Zap className="w-4 h-4 text-gray-700" />
                    </div>
                    <div className="flex-1 pointer-events-none">
                      <div className="text-sm font-semibold text-gray-900">
                        Data Ingestion
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5">
                        Capturing sources
                      </div>
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mr-2 pointer-events-none" />
                  </motion.div>

                  {/* Process Node */}
                  <motion.div
                    drag
                    dragConstraints={constraintsRef}
                    dragElastic={0.6}
                    dragMomentum={false}
                    whileHover={{ scale: 1.02 }}
                    whileDrag={{
                      scale: 1.05,
                      zIndex: 50,
                      rotate: 1,
                      cursor: "grabbing",
                    }}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
                    className="relative flex items-center gap-3 bg-white rounded-2xl p-3 border border-gray-100 shadow-sm z-10 ml-8 cursor-grab hover:shadow-md transition-shadow"
                  >
                    <GripVertical className="w-4 h-4 text-gray-300 shrink-0 ml-1 transition-colors hover:text-gray-400" />
                    <div className="w-10 h-10 rounded-full bg-[#f4f7f0] border border-[#d1dec2] flex items-center justify-center shrink-0 pointer-events-none">
                      <RefreshCw className="w-4 h-4 text-[#0f291e] animate-[spin_4s_linear_infinite]" />
                    </div>
                    <div className="flex-1 pointer-events-none">
                      <div className="text-sm font-semibold text-gray-900">
                        Logic & Routing
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5">
                        Applying rules
                      </div>
                    </div>
                    <div className="flex gap-1 pr-3 pointer-events-none">
                      <div
                        className="w-1 h-1 rounded-full bg-gray-400 animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      ></div>
                      <div
                        className="w-1 h-1 rounded-full bg-gray-400 animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      ></div>
                      <div
                        className="w-1 h-1 rounded-full bg-gray-400 animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      ></div>
                    </div>
                  </motion.div>

                  {/* Output Node */}
                  <motion.div
                    drag
                    dragConstraints={constraintsRef}
                    dragElastic={0.6}
                    dragMomentum={false}
                    whileHover={{ scale: 1.02 }}
                    whileDrag={{
                      scale: 1.05,
                      zIndex: 50,
                      rotate: -1,
                      cursor: "grabbing",
                    }}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 }}
                    className="relative flex items-center gap-3 bg-white rounded-2xl p-3 border border-gray-100 shadow-sm z-10 cursor-grab hover:shadow-md transition-shadow"
                  >
                    <GripVertical className="w-4 h-4 text-gray-300 shrink-0 ml-1 transition-colors hover:text-gray-400" />
                    <div className="w-10 h-10 rounded-full bg-[#f6f4ed] border border-gray-200 flex items-center justify-center shrink-0 pointer-events-none">
                      <Database className="w-4 h-4 text-gray-700" />
                    </div>
                    <div className="flex-1 pointer-events-none">
                      <div className="text-sm font-semibold text-gray-900">
                        Sync Data
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5">
                        Updating central dbs
                      </div>
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-gray-300 shrink-0 mr-2 pointer-events-none" />
                  </motion.div>

                  {/* Teaching Cursor — plays once on load, anchored to first node */}
                  <motion.div
                    initial={{ opacity: 0, x: 0, y: 0, scale: 1 }}
                    animate={cursorControls}
                    style={{ opacity: 0 }}
                    className="absolute top-3 left-12 z-50 pointer-events-none filter drop-shadow-lg"
                  >
                    <MousePointer2 className="w-6 h-6 text-[#0f291e] fill-white" />
                  </motion.div>
                </div>

                {/* Bottom stats mini block */}
                <div className="mt-2 grid grid-cols-2 gap-3 pointer-events-none">
                  <div className="bg-[#fafafa] rounded-xl p-3.5 border border-gray-100 flex flex-col justify-center">
                    <span className="text-[10px] text-gray-500 font-medium uppercase tracking-wider mb-1">
                      Tasks Run
                    </span>
                    <span className="text-lg font-bold text-gray-900 tabular-nums">
                      24,592
                    </span>
                  </div>
                  <div className="bg-[#fafafa] rounded-xl p-3.5 border border-gray-100 flex flex-col justify-center relative overflow-hidden">
                    <div className="absolute right-0 bottom-0 top-0 w-16 bg-gradient-to-l from-[#e2ead9]/50 to-transparent pointer-events-none"></div>
                    <span className="text-[10px] text-gray-500 font-medium uppercase tracking-wider mb-1">
                      System Uptime
                    </span>
                    <div className="flex items-center gap-2 relative z-10">
                      <span className="text-lg font-bold text-[#0f291e] tabular-nums">
                        99.9%
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-green-600" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Avatar Group Grouped with text */}
            <motion.div
              initial={{ opacity: 0, y: 15, filter: "blur(1px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex items-center justify-center lg:justify-end gap-4 pt-6 border-t border-black/15 w-full"
            >
              <span className="text-sm font-bold text-gray-900">
                Join{" "}
                <motion.span className="inline-block" key={clientsCount}>
                  {clientsCount}
                </motion.span>{" "}
                + other awesome clients
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
