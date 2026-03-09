import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Hammer, Command, Home, Layers } from "lucide-react";

const FooterSection = () => {
  const floatingIcons = [
    { Icon: Command, delay: 0, rotate: -10, left: "15%" },
    { Icon: Home, delay: 1, rotate: 5, left: "35%" },
    { Icon: Layers, delay: 0.5, rotate: -5, left: "65%" },
    { Icon: Hammer, delay: 1.5, rotate: 10, left: "85%" },
  ];

  return (
    <footer className="w-full min-h-screen bg-[#f2f1eb] relative flex flex-col justify-between overflow-hidden pt-12">
      {/* Top Bar */}
      <div className="w-full max-w-350 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center gap-6">
          <a
            href="mailto:contact.zyltion@gmail.com"
            className="text-gray-900 font-medium underline underline-offset-4 hover:text-gray-600 transition-colors"
          >
            contact.zyltion@gmail.com
          </a>
          <div className="grow h-px bg-gray-300"></div>
        </div>
      </div>

      {/* Huge Center Logo */}
      <div className="grow flex items-center justify-center relative z-10 px-4">
        <img
          src="/Zyltion-logo.png"
          alt="Zyltion Logo"
          className="h-40 sm:h-64 w-auto object-contain max-w-full"
        />
      </div>

      {/* Bottom Content */}
      <div className="relative z-10 flex flex-col items-center pb-24 sm:pb-32">
        {/* Navigation Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10 w-full px-4">
          <div className="hidden sm:block w-8 sm:w-12 h-px bg-gray-300"></div>
          <button className="px-5 py-2.5 sm:px-6 sm:py-3 bg-white rounded-xl text-gray-800 text-sm sm:text-base font-medium shadow-sm hover:bg-gray-50 transition-colors">
            Home
          </button>
          <button className="px-5 py-2.5 sm:px-6 sm:py-3 bg-white rounded-xl text-gray-800 text-sm sm:text-base font-medium shadow-sm hover:bg-gray-50 transition-colors">
            Testimonials
          </button>
          <button className="relative flex items-center justify-center gap-2 px-8 py-5 rounded-2xl bg-[#0e3a27] text-white font-bold text-sm transition-all cursor-pointer overflow-hidden shadow-[0_0.6px_1.1px_-1.25px_rgba(61,61,61,0.72),0_2.3px_4.1px_-2.5px_rgba(61,61,61,0.64),0_10px_18px_-3.75px_rgba(61,61,61,0.25),0_0.7px_0.7px_-0.58px_rgba(22,51,32,0.35),0_1.8px_1.8px_-1.17px_rgba(22,51,32,0.34),0_3.6px_3.6px_-1.75px_rgba(22,51,32,0.33),0_6.9px_6.9px_-2.33px_rgba(22,51,32,0.3),0_13.6px_13.7px_-2.92px_rgba(22,51,32,0.26),0_30px_30px_-3.5px_rgba(22,51,32,0.15)] group">
            Get Started <ArrowRight className="w-4 h-4" />
          </button>
          <button className="px-5 py-2.5 sm:px-6 sm:py-3 bg-white rounded-xl text-gray-800 text-sm sm:text-base font-medium shadow-sm hover:bg-gray-50 transition-colors">
            Resources Blog
          </button>
          <button className="px-5 py-2.5 sm:px-6 sm:py-3 bg-white rounded-xl text-gray-800 text-sm sm:text-base font-medium shadow-sm hover:bg-gray-50 transition-colors">
            Privacy
          </button>
          <div className="hidden sm:block w-8 sm:w-12 h-px bg-gray-300"></div>
        </div>

        {/* Copyright */}
        <div className="flex items-center justify-center gap-4 text-gray-600 font-medium text-sm sm:text-base">
          <span>© 2026 Zyltion</span>
          <div className="w-12 sm:w-16 h-px bg-gray-300"></div>
          <span>All Rights Reserved</span>
        </div>
      </div>

      {/* Floating Icons */}
      <div className="absolute bottom-0 left-0 right-0 h-48 sm:h-64 z-0 flex justify-center items-end overflow-hidden pointer-events-none">
        {floatingIcons.map((item, idx) => (
          <motion.div
            key={idx}
            className="absolute -bottom-5"
            style={{ left: item.left, x: "-50%" }}
            animate={{
              y: [0, -20, 0],
              rotate: [item.rotate, item.rotate + 5, item.rotate],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut",
              delay: item.delay,
            }}
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white/80 backdrop-blur-sm rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-white flex items-center justify-center">
              <item.Icon
                className="w-8 h-8 sm:w-10 sm:h-10 text-gray-800"
                strokeWidth={1.5}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Blur Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-48 bg-linear-to-t from-[#f2f1eb] via-[#f2f1eb]/80 to-transparent z-20 pointer-events-none"></div>
    </footer>
  );
};

export default FooterSection;
