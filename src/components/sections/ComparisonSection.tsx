import React from 'react';
import { CheckCircle2, Check } from 'lucide-react';

const ComparisonSection = () => {
  const benefits = [
    "Direct answers and niche relevance.",
    "Answer any question.",
    "Real experience in niche.",
    "Track record of getting results.",
    "Experience in wide variety of industries.",
    "Experienced business owners."
  ];

  return (
    <section className="w-full bg-white py-24 sm:py-32 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-[#f4f7f0] to-transparent rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl font-serif text-gray-900 mb-6">
            Why consulting when I can figure it myself?
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            From complex digital transformations to scalable software architectures, we bring years of hands-on expertise, an eye for detail, and a deep passion for engineering.
          </p>
        </div>

        <div className="w-full overflow-x-auto pb-4">
          <div className="min-w-[768px] w-full border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
            {/* Table Header */}
            <div className="grid grid-cols-[2fr_1.5fr_1.5fr] bg-[#f2f1eb] border-b border-gray-200">
              <div className="p-6 font-medium text-gray-900 border-r border-gray-200 flex items-center">
                Benefits
              </div>
              <div className="p-6 font-medium text-gray-900 border-r border-gray-200 flex items-center justify-center text-center">
                Browsing The Internet
              </div>
              <div className="p-6 font-medium text-white bg-[var(--color-brand-dark)] flex items-center justify-center text-center">
                Expert Consulting
              </div>
            </div>

            {/* Table Body */}
            <div className="bg-[#f2f1eb]">
              {benefits.map((benefit, idx) => (
                <div 
                  key={idx} 
                  className={`grid grid-cols-[2fr_1.5fr_1.5fr] ${idx !== benefits.length - 1 ? 'border-b border-gray-200' : ''}`}
                >
                  <div className="p-6 text-gray-800 border-r border-gray-200 flex items-center">
                    {benefit}
                  </div>
                  <div className="p-6 border-r border-gray-200 flex items-center justify-center">
                    <span className="text-gray-400 text-xl">—</span>
                  </div>
                  <div className="p-6 flex items-center justify-center">
                    <Check className="w-6 h-6 text-[var(--color-brand-dark)]" strokeWidth={2} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats/Badges Row */}
        <div className="mt-16 sm:mt-20 flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-sm font-medium text-gray-700 max-w-4xl mx-auto relative">
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

export default ComparisonSection;
