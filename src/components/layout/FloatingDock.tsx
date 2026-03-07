import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
  "Home",
  "Services",
  "Testimonials",
  "Work",
  "Contact",
] as const;

const getPath = (item: string) => {
  if (item === "Home") return "/";
  if (item === "Contact") return "/contact";
  return `/#${item.toLowerCase()}`;
};

const FloatingDock = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Mobile menu backdrop */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm sm:hidden"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile nav panel — slides up from bottom */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-panel"
            initial={{ y: 32, opacity: 0, scale: 0.97 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 32, opacity: 0, scale: 0.97 }}
            transition={{ type: "spring", damping: 24, stiffness: 200 }}
            className="fixed bottom-24 left-4 right-4 z-50 sm:hidden bg-linear-to-b from-white to-[#f6f4ed] rounded-3xl shadow-[0_8px_40px_rgba(22,51,32,0.18)] border border-white/60 overflow-hidden"
          >
            {/* Decorative top line */}
            <div className="h-1 w-10 bg-gray-300 rounded-full mx-auto mt-3 mb-1" />
            <nav className="flex flex-col px-4 py-3 gap-1">
              {navItems.map((item) => {
                const isActive =
                  item === "Home"
                    ? location.pathname === "/"
                    : location.pathname === getPath(item) ||
                      location.hash === `#${item.toLowerCase()}`;
                return (
                  <Link
                    key={item}
                    to={getPath(item)}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center justify-between px-4 py-3.5 rounded-2xl text-base font-medium transition-colors ${
                      isActive
                        ? "bg-[#0e3a27] text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <span>{item}</span>
                    <ArrowUpRight
                      className={`w-4 h-4 ${isActive ? "text-white/70" : "text-gray-400"}`}
                    />
                  </Link>
                );
              })}
            </nav>
            <div className="px-4 pb-4">
              <button
                onClick={() => setMobileOpen(false)}
                className="w-full py-4 rounded-2xl bg-[#0e3a27] text-white font-bold text-sm shadow-md"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* The floating dock pill */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", damping: 24, stiffness: 120, delay: 0.6 }}
        className="fixed bottom-6 sm:bottom-8 left-0 right-0 z-50 flex justify-center pointer-events-none px-4"
      >
        <div className="bg-linear-to-b from-white to-[#f6f4ed] py-2.5 px-3 sm:px-5 rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_0.7px_0.7px_-0.58px_rgba(22,51,32,0.17),0_1.8px_1.8px_-1.17px_rgba(22,51,32,0.17),0_3.6px_3.6px_-1.75px_rgba(22,51,32,0.16),0_6.9px_6.9px_-2.33px_rgba(22,51,32,0.15),0_13.6px_13.6px_-2.92px_rgba(22,51,32,0.13),0_30px_30px_-3.5px_rgba(22,51,32,0.08)] border border-white/40 flex items-center gap-2 sm:gap-4 pointer-events-auto backdrop-blur-sm h-15 sm:h-17">
          {/* Desktop nav links */}
          <nav className="hidden sm:flex items-center px-6 gap-8">
            {navItems.map((item) => (
              <Link
                key={item}
                to={getPath(item)}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Mobile: hamburger button */}
          <button
            className="sm:hidden flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            <motion.span
              key={String(mobileOpen)}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </motion.span>
            <span>Menu</span>
          </button>

          <button className="bg-brand-dark text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors shadow-md whitespace-nowrap">
            Get Started
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default FloatingDock;
