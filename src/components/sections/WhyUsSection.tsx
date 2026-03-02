import React from 'react';
import { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Target, Lightbulb, Users, Box } from 'lucide-react';

const WhyUsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const cards = [
    {
      title: 'Client-Centered',
      description: 'We prioritize your goals and tailor every solution to your unique needs.',
      icon: Users
    },
    {
      title: 'Tailored Solutions',
      description: 'We customize every aspect to suit your business needs.',
      icon: Box
    },
    {
      title: 'Expert Insights',
      description: 'Our consultants bring deep industry knowledge to solve your challenges.',
      icon: Lightbulb
    },
    {
      title: 'Proven Results',
      description: 'We deliver measurable outcomes that drive business growth.',
      icon: Target
    }
  ];

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [cards.length]);

  const handleDragEnd = (e: any, { offset, velocity }: any) => {
    const swipe = offset.x;
    if (swipe < -50) {
      setCurrentIndex((prev) => Math.min(prev + 1, cards.length - 1));
    } else if (swipe > 50) {
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  const cardWidth = 320;
  const gap = 24;
  const xOffset = containerWidth > 0 ? (containerWidth / 2) - (cardWidth / 2) - (currentIndex * (cardWidth + gap)) : 0;

  return (
    <section className="w-full bg-white py-24 sm:py-32 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#f4f7f0] to-transparent rounded-full blur-3xl opacity-50 -translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-[#f4f7f0] to-transparent rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-24">
          <h2 className="text-4xl sm:text-5xl font-serif text-gray-900 mb-6">Why Even Us ?</h2>
          <p className="text-gray-600 text-lg">
            We go beyond surface-level advice — our consulting approach is built on data, strategy, and execution
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full max-w-6xl mx-auto" ref={containerRef}>
          {/* Blur Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none"></div>

          <div className="overflow-hidden py-4">
            <motion.div 
              drag="x" 
              dragConstraints={{ right: 0, left: 0 }}
              onDragEnd={handleDragEnd}
              animate={{ x: xOffset }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="flex gap-6 w-fit cursor-grab active:cursor-grabbing"
            >
              {cards.map((card, idx) => (
                <div 
                  key={idx} 
                  className={`w-[320px] bg-[#f8f9f5] rounded-[32px] p-8 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05)] flex-shrink-0 transition-all duration-400 ${currentIndex === idx ? 'opacity-100 scale-100' : 'opacity-40 scale-95'}`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6">
                    <card.icon className="w-6 h-6 text-[#0f291e]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{card.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {card.description}
                  </p>
                  
                  {/* Decorative dots */}
                  <div className="flex gap-1.5 mt-auto justify-end">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-200"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-200"></div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Stats/Badges Row */}
        <div className="mt-20 sm:mt-24 flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-sm font-medium text-gray-700 max-w-4xl mx-auto relative">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-200 -z-10"></div>
          
          <div className="flex items-center gap-2 bg-white px-4 py-2">
            <CheckCircle2 className="w-5 h-5 text-gray-400" />
            <span>Worked With 100+ Clients</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-gray-300"></div>
          
          <div className="flex items-center gap-2 bg-white px-4 py-2">
            <CheckCircle2 className="w-5 h-5 text-gray-400" />
            <span>Industry Expert</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-gray-300"></div>
          
          <div className="flex items-center gap-2 bg-white px-4 py-2">
            <CheckCircle2 className="w-5 h-5 text-gray-400" />
            <span>Trusted Advisors</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-gray-300"></div>
          
          <div className="flex items-center gap-2 bg-white px-4 py-2">
            <CheckCircle2 className="w-5 h-5 text-gray-400" />
            <span>Proven Results</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
