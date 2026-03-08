import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
  "Home",
  "Services",
  "Testimonials",
  "Blog",
  "Contact",
] as const;

const FloatingDock = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scrolling to sections when navigating from other pages
  useEffect(() => {
    if (location.pathname === "/") {
      const scrollTarget = sessionStorage.getItem("scrollTo");
      if (scrollTarget) {
        setTimeout(() => {
          const element = document.getElementById(scrollTarget);
          if (element) {
            const rect = element.getBoundingClientRect();
            const scrollPosition = window.scrollY + rect.top;
            window.scrollTo({ top: scrollPosition, behavior: "smooth" });
          }
          sessionStorage.removeItem("scrollTo");
        }, 100);
      }
    }
  }, [location.pathname]);

  const handleNavigation = (target: string) => {
    if (target === "home") {
      navigate("/");
    } else if (target === "contact") {
      navigate("/contact");
    } else {
      // Check if we're on home page
      if (location.pathname === "/") {
        // Just scroll, no URL change
        const element = document.getElementById(target);
        if (element) {
          const rect = element.getBoundingClientRect();
          const scrollPosition = window.scrollY + rect.top;
          window.scrollTo({ top: scrollPosition, behavior: "smooth" });
        }
      } else {
        // Not on home page, navigate to home and mark where to scroll
        sessionStorage.setItem("scrollTo", target);
        navigate("/");
      }
    }
  };

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
                  item.target === "home"
                    ? location.pathname === "/"
                    : location.hash === `#${item.target}`;
                return (
                  <button
                    key={item.target}
                    onClick={() => {
                      handleNavigation(item.target);
                      setMobileOpen(false);
                    }}
                    className={`flex items-center justify-between px-4 py-3.5 rounded-2xl text-base font-medium transition-colors text-left w-full ${
                      isActive
                        ? "bg-[#0e3a27] text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight
                      className={`w-4 h-4 ${isActive ? "text-white/70" : "text-gray-400"}`}
                    />
                  </button>
                );
              })}
            </nav>
            <div className="px-4 pb-4">
              <button
                onClick={() => {
                  navigate("/contact");
                  setMobileOpen(false);
                }}
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
              <button
                key={item.target}
                onClick={() => handleNavigation(item.target)}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors cursor-pointer bg-none border-none padding-none"
              >
                {item.label}
              </button>
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

          <button
            onClick={() => navigate("/contact")}
            className="bg-brand-dark text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors shadow-md whitespace-nowrap"
          >
            Get Started
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default FloatingDock;
