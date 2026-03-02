import React from 'react';
import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Home } from 'lucide-react';

const FloatingDock = () => {
  const location = useLocation();
  
  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', damping: 20, stiffness: 100, delay: 0.5 }}
      className="fixed bottom-6 sm:bottom-8 left-0 right-0 z-50 flex justify-center pointer-events-none px-4"
    >
      <div className="bg-white/90 backdrop-blur-lg p-2 rounded-full shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-gray-100 flex items-center gap-2 sm:gap-4 pointer-events-auto">
        <nav className="hidden sm:flex items-center px-6 gap-8">
          {['Home', 'Services', 'Testimonials', 'Blog', 'Contact'].map((item) => {
            const path = item === 'Home' ? '/' : item === 'Contact' ? '/contact' : `/#${item.toLowerCase()}`;
            return (
              <Link 
                key={item} 
                to={path}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item}
              </Link>
            );
          })}
        </nav>
        {/* Mobile Nav Toggle */}
        <div className="sm:hidden px-6 text-sm font-medium text-gray-600">
          Menu
        </div>
        <button className="bg-[var(--color-brand-dark)] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors shadow-md whitespace-nowrap">
          Get Started
        </button>
      </div>
    </motion.div>
  );
};

export default FloatingDock;
