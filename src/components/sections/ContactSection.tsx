import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="w-full bg-[#f2f1eb] pb-32 sm:pb-48 pt-12">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#fafafa] rounded-[40px] p-12 sm:p-24 text-center max-w-5xl mx-auto shadow-sm border border-white/50"
        >
          <h2 className="text-4xl sm:text-6xl font-serif text-gray-900 mb-10 tracking-tight">
            Reach Out for Consultancy Inquiries
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="flex items-center gap-2 bg-[var(--color-brand-dark)] text-white px-8 py-4 rounded-xl font-medium hover:bg-gray-800 transition-all shadow-lg shadow-[var(--color-brand-dark)]/20">
              Contact Us
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-2 bg-[var(--color-brand-light)] text-[var(--color-brand-dark)] px-8 py-4 rounded-xl font-medium hover:bg-[var(--color-brand-light-hover)] transition-all">
              Our Services
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
