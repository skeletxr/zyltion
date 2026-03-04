import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="w-full bg-[#f2f1eb] pb-24 pt-0 relative z-10"
    >
      <div className="max-w-[1400px] mx-auto px-4 pt-0 sm:pt-0 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#f7f6f5] rounded-[16px] p-7 sm:p-14 text-center max-w-4xl mx-auto shadow-sm border border-white"
        >
          <h2 className="text-3xl sm:text-5xl font-serif text-gray-900 mb-5 sm:mb-6 tracking-tight">
            Reach Out for Consultancy Inquiries
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="relative flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-[#0e3a27] text-white font-bold text-xs transition-all cursor-pointer overflow-hidden shadow-[0_0.6px_1.1px_-1.25px_rgba(61,61,61,0.72),0_2.3px_4.1px_-2.5px_rgba(61,61,61,0.64),0_10px_18px_-3.75px_rgba(61,61,61,0.25),0_0.7px_0.7px_-0.58px_rgba(22,51,32,0.35),0_1.8px_1.8px_-1.17px_rgba(22,51,32,0.34),0_3.6px_3.6px_-1.75px_rgba(22,51,32,0.33),0_6.9px_6.9px_-2.33px_rgba(22,51,32,0.3),0_13.6px_13.7px_-2.92px_rgba(22,51,32,0.26),0_30px_30px_-3.5px_rgba(22,51,32,0.15)] group">
              Contact Us
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-2 bg-brand-light text-[#0f291e] px-6 py-4 rounded-2xl border border-gray-200 font-bold text-xs hover:bg-[#e2ead9] transition-all">
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
