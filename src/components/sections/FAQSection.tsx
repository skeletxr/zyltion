import React from 'react';
import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ArrowRight, ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "What services do you offer?",
      a: "We provide end-to-end business consulting, including strategy development, market positioning, process optimization, and performance improvement."
    },
    {
      q: "How long does a typical consultation process take?",
      a: "The duration varies depending on the complexity of your needs. A standard strategic review takes 2-4 weeks, while comprehensive transformations may take several months."
    },
    {
      q: "Do you work with startups or established businesses?",
      a: "We work with both. We help startups build scalable foundations and assist established businesses in optimizing operations and navigating digital transformations."
    },
    {
      q: "What can I expect in the first consultation?",
      a: "Our first meeting is a discovery session. We'll discuss your current challenges, business goals, and determine if our expertise aligns with your needs."
    },
    {
      q: "Do you offer ongoing support after the consultation?",
      a: "Absolutely. We provide continuous advisory sessions and performance reviews to ensure strategies are successfully implemented and delivering results."
    }
  ];

  return (
    <section className="w-full bg-[#f2f1eb] py-24 sm:py-32 relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl font-serif text-gray-900 mb-6">
            Your Questions, Answered Clearly
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Whether you're seeking strategic direction or improving business performance, here are answers to the most common questions clients ask.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Image & Quote */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-[32px] overflow-hidden h-[500px] flex flex-col justify-center items-center p-10 text-center shadow-lg"
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center z-0"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80")' }}
            ></div>
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60 z-10"></div>
            
            {/* Content */}
            <div className="relative z-20 flex flex-col items-center">
              <span className="text-7xl font-serif text-white/80 leading-none mb-4">“</span>
              <h3 className="text-3xl sm:text-4xl font-serif text-white leading-tight mb-10 max-w-md">
                "Our main goal is to turn complex challenges into clear strategies that drive growth."
              </h3>
              
              <div className="flex items-center gap-4">
                <img src="https://i.pravatar.cc/150?img=12" alt="Co-founder" className="w-12 h-12 rounded-full object-cover border-2 border-white/20" />
                <span className="text-white/90 font-medium">Co-founder of Archio</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - FAQs */}
          <div className="flex flex-col gap-4">
            {faqs.map((faq, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-[#f8f9f5] rounded-2xl overflow-hidden border border-white/50 shadow-sm"
              >
                <button 
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-medium text-gray-900 pr-8">{faq.q}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ${openIdx === idx ? 'rotate-180' : ''}`} 
                  />
                </button>
                
                <motion.div 
                  initial={false}
                  animate={{ height: openIdx === idx ? 'auto' : 0, opacity: openIdx === idx ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {faq.a}
                  </div>
                </motion.div>
              </motion.div>
            ))}

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <button className="flex items-center gap-2 bg-[var(--color-brand-dark)] text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition-all shadow-lg shadow-[var(--color-brand-dark)]/20">
                Get Started
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-2 bg-[#eef4e6] text-[var(--color-brand-dark)] px-6 py-3 rounded-xl font-medium hover:bg-[#e2ead9] transition-all">
                Our Services
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="hidden sm:block flex-grow h-px bg-gray-200 ml-4"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
