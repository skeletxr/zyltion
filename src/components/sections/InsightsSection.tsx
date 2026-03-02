import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ArrowRight, CheckCircle2, Cloud } from 'lucide-react';

const InsightsSection = () => {
  const insights = [
    {
      title: "Why Good Architecture is Business",
      description: "Good architecture goes beyond code—it builds trust, strengthens branding, and drives growth. Discover how architecture can turn into a powerful business...",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "The Rise of Scalable Systems",
      description: "Scalable platforms are transforming how businesses build. Learn how scalable systems save time, reduce costs, and fuel innovation.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Future of Cloud Computing",
      description: "Cloud infrastructure is evolving rapidly. Explore the latest trends and how they can optimize your business operations and reduce overhead.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="blog" className="w-full bg-white py-24 sm:py-32 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-to-b from-[#f4f7f0] to-transparent rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      
      {/* Wavy Background Pattern */}
      <svg className="absolute top-20 left-0 w-full h-[600px] text-[#f4f7f0] pointer-events-none z-0" preserveAspectRatio="none" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M-100 300 C 300 100, 800 500, 1540 200" stroke="currentColor" strokeWidth="80" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl font-serif text-gray-900 mb-6">
            Insights That Drive Growth
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Stay ahead with expert resources, practical strategies, and industry insights designed to help your business make smarter decisions.
          </p>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="relative w-full max-w-[1100px] mx-auto mb-20 z-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {insights.slice(0, 2).map((insight, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="w-full bg-[#f8f9f5] rounded-3xl p-2 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05),0_4px_20px_rgba(0,0,0,0.05)] border border-white"
            >
              <div className="bg-[#f2f1eb] rounded-[20px] p-6 h-full flex flex-col border border-gray-200/50 shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)]">
                {/* Top Bar */}
                <div className="flex justify-between items-center mb-6">
                  <div className="w-16 h-1 bg-gray-300 rounded-full"></div>
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                  </div>
                </div>
                
                {/* Image */}
                <img src={insight.image} alt={insight.title} className="w-full h-[240px] object-cover rounded-xl mb-8 shadow-sm" />
                
                {/* Content */}
                <h3 className="text-2xl font-serif text-gray-900 mb-4">{insight.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                  {insight.description}
                </p>
                
                {/* Button */}
                <button className="w-full py-4 rounded-xl bg-[#f8f9f5] text-gray-800 font-medium flex items-center justify-center gap-2 hover:bg-white transition-colors border border-gray-200/50 shadow-sm">
                  Learn More About This
                  <ArrowUpRight className="w-4 h-4 text-gray-500" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Stats/Badges Row */}
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-sm font-medium text-gray-700 mb-12 relative">
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
            <span>Engineering Experts</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-gray-300"></div>
          
          <div className="flex items-center gap-2 bg-white px-4 py-2">
            <CheckCircle2 className="w-5 h-5 text-gray-400" />
            <span>Software Design</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button className="flex items-center gap-2 bg-[var(--color-brand-dark)] text-white px-8 py-4 rounded-xl font-medium hover:bg-gray-800 transition-all shadow-lg shadow-[var(--color-brand-dark)]/20">
            Contact Us
            <ArrowUpRight className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-2 bg-[#eef4e6] text-[var(--color-brand-dark)] px-8 py-4 rounded-xl font-medium hover:bg-[#e2ead9] transition-all">
            See All Posts
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
