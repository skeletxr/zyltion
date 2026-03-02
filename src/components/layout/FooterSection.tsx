import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Hammer, Command, Home, Layers } from 'lucide-react';

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
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center gap-6">
          <a href="mailto:hello@altoscript.com" className="text-gray-900 font-medium underline underline-offset-4 hover:text-gray-600 transition-colors">
            hello@altoscript.com
          </a>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>
      </div>

      {/* Huge Center Text */}
      <div className="flex-grow flex items-center justify-center relative z-10">
        <h1 className="text-[18vw] sm:text-[15vw] leading-none font-serif text-gray-900 tracking-tight select-none">
          AltoScript
        </h1>
      </div>

      {/* Bottom Content */}
      <div className="relative z-10 flex flex-col items-center pb-32">
        {/* Navigation Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10 w-full px-4">
          <div className="hidden sm:block w-8 sm:w-12 h-px bg-gray-300"></div>
          <button className="px-5 py-2.5 sm:px-6 sm:py-3 bg-white rounded-xl text-gray-800 text-sm sm:text-base font-medium shadow-sm hover:bg-gray-50 transition-colors">Home</button>
          <button className="px-5 py-2.5 sm:px-6 sm:py-3 bg-white rounded-xl text-gray-800 text-sm sm:text-base font-medium shadow-sm hover:bg-gray-50 transition-colors">Testimonials</button>
          <button className="px-6 py-3 sm:px-8 sm:py-4 bg-[var(--color-brand-dark)] text-white rounded-xl text-sm sm:text-base font-medium shadow-lg shadow-[var(--color-brand-dark)]/20 hover:bg-gray-800 transition-colors flex items-center gap-2">
            Get Started <ArrowRight className="w-4 h-4" />
          </button>
          <button className="px-5 py-2.5 sm:px-6 sm:py-3 bg-white rounded-xl text-gray-800 text-sm sm:text-base font-medium shadow-sm hover:bg-gray-50 transition-colors">Resources Blog</button>
          <button className="px-5 py-2.5 sm:px-6 sm:py-3 bg-white rounded-xl text-gray-800 text-sm sm:text-base font-medium shadow-sm hover:bg-gray-50 transition-colors">Privacy</button>
          <div className="hidden sm:block w-8 sm:w-12 h-px bg-gray-300"></div>
        </div>

        {/* Copyright */}
        <div className="flex items-center justify-center gap-4 text-gray-600 font-medium text-sm sm:text-base">
          <span>© 2025 AltoScript</span>
          <div className="w-12 sm:w-16 h-px bg-gray-300"></div>
          <span>All Rights Reserved</span>
        </div>
      </div>

      {/* Floating Icons */}
      <div className="absolute bottom-0 left-0 right-0 h-48 sm:h-64 z-0 flex justify-center items-end overflow-hidden pointer-events-none">
        {floatingIcons.map((item, idx) => (
          <motion.div
            key={idx}
            className="absolute bottom-[-20px]"
            style={{ left: item.left, x: '-50%' }}
            animate={{ 
              y: [0, -20, 0],
              rotate: [item.rotate, item.rotate + 5, item.rotate]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 5, 
              ease: "easeInOut",
              delay: item.delay
            }}
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white/80 backdrop-blur-sm rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-white flex items-center justify-center">
              <item.Icon className="w-8 h-8 sm:w-10 sm:h-10 text-gray-800" strokeWidth={1.5} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Blur Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-48 bg-gradient-to-t from-[#f2f1eb] via-[#f2f1eb]/80 to-transparent z-20 pointer-events-none"></div>
    </footer>
  );
};

export default FooterSection;
