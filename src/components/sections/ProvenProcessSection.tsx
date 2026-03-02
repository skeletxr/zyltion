import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight, Star } from 'lucide-react';

const ProvenProcessSection = () => {
  const { scrollYProgress } = useScroll();
  
  // Transform scroll progress to vertical movement for the left content
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);

  const steps = [
    {
      number: "1",
      title: "Hassle-Free Scheduling",
      description: "Book your consultation in just a few clicks. We make it easy to connect and start addressing your business needs right away."
    },
    {
      number: "2",
      title: "Personalized Plan",
      description: "Every business is unique. We craft a strategy tailored to your goals, ensuring measurable progress and fresh opportunities for growth."
    },
    {
      number: "3",
      title: "Ongoing Partnership",
      description: "We stay with you beyond strategy offering continuous support, refinements, and guidance to help your business scale with confidence."
    }
  ];

  return (
    <section className="w-full bg-[#f2f1eb] py-24 sm:py-32 relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative">
          
          {/* Left Column - Sticky Content */}
          <div className="lg:col-span-5 relative h-full">
            <motion.div 
              style={{ y }}
              className="lg:sticky lg:top-32"
            >
              <h2 className="text-4xl sm:text-5xl font-serif text-gray-900 mb-6 leading-tight">
                Proven Process for Your Goals
              </h2>
              <p className="text-gray-700 text-lg mb-10 max-w-md leading-relaxed">
                Our step-by-step approach simplifies challenges, delivers tailored strategies, and drives measurable results.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 mb-12">
                <button className="flex items-center gap-2 bg-[var(--color-brand-dark)] text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition-all shadow-lg shadow-[var(--color-brand-dark)]/20">
                  Get Started
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <button className="flex items-center gap-2 bg-white text-[var(--color-brand-dark)] px-6 py-3 rounded-xl font-medium hover:bg-gray-50 transition-all border border-gray-200">
                  Our Services
                </button>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[var(--color-brand-dark)] text-[var(--color-brand-dark)]" />
                  ))}
                </div>
                <span className="text-gray-700 font-medium">Rated by loving Clients</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Scrolling Cards */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-[#f8f9f5] rounded-[32px] p-10 sm:p-16 text-center shadow-sm border border-white/50"
              >
                <div className="relative inline-block mb-8">
                  <span className="text-6xl sm:text-7xl font-serif text-gray-900 relative z-10">
                    {step.number}
                  </span>
                  {/* Decorative scribble/circle behind number */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-8 bg-gray-200/50 rounded-full blur-sm -z-0"></div>
                  <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-16 text-gray-300 -z-0" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 25 C 10 10, 90 10, 90 25 C 90 40, 10 40, 10 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M15 28 C 15 15, 85 15, 85 28 C 85 41, 15 41, 15 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ProvenProcessSection;
