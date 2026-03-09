import React from "react";
import { CheckCircle2, Check } from "lucide-react";

const ComparisonSection = () => {
  const benefits = [
    "Needs constant maintenance and updates.",
    "Subject to human error and mistakes.",
    "Months to build—weeks to fail.",
    "Fragile and breaks easily.",
    "Costs money in wasted hours.",
    "Silent failures—no one notices until it's broken.",
  ];

  return (
    <section className="w-full min-h-fit sm:min-h-[115vh] bg-white py-16 sm:py-20 flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-b from-[#f4f7f0] to-transparent rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col justify-center h-full">
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-5xl font-serif text-gray-900 mb-4 tracking-tight">
            Manual vs. Automation
          </h2>
          <p className="text-gray-600 text-base sm:text-lg lg:text-lg leading-relaxed max-w-2xl mx-auto">
            Manual work is slow and drains your team. Automation works 24/7
            without errors.
          </p>
        </div>

        <div className="w-full">
          <div className="w-full border border-gray-200 rounded-2xl overflow-hidden shadow-md">
            {/* Table Header */}
            <div className="grid grid-cols-[2fr_1.5fr_1.5fr] bg-[#f2f1eb] border-b border-gray-200">
              <div className="p-2 sm:p-4 lg:p-6 font-medium text-gray-900 border-r border-gray-200 flex items-center text-sm sm:text-base lg:text-lg">
                Building In-House
              </div>
              <div className="p-2 sm:p-4 lg:p-6 font-medium text-gray-900 border-r border-gray-200 flex items-center justify-center text-center text-sm sm:text-base lg:text-lg leading-tight">
                Cheap Freelancers & Tools
              </div>
              <div className="p-2 sm:p-4 lg:p-6 font-medium text-white bg-[var(--color-brand-dark)] flex items-center justify-center text-center text-sm sm:text-base lg:text-lg leading-tight">
                Zyltion
              </div>
            </div>

            {/* Table Body */}
            <div className="bg-[#f2f1eb]">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className={`grid grid-cols-[2fr_1.5fr_1.5fr] ${idx !== benefits.length - 1 ? "border-b border-gray-200" : ""}`}
                >
                  <div className="p-2 sm:p-3 lg:p-5 text-gray-800 border-r border-gray-200 flex items-center text-sm sm:text-base lg:text-lg">
                    {benefit}
                  </div>
                  <div className="p-2 sm:p-3 lg:p-5 border-r border-gray-200 flex items-center justify-center">
                    <span className="text-gray-400 text-lg sm:text-xl">—</span>
                  </div>
                  <div className="p-2 sm:p-3 lg:p-5 flex items-center justify-center">
                    <Check
                      className="w-5 sm:w-6 h-5 sm:h-6 text-[var(--color-brand-dark)]"
                      strokeWidth={2.5}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats/Badges Row */}
        <div className="mt-8 sm:mt-12 flex flex-wrap justify-center items-center gap-x-2 sm:gap-x-6 gap-y-3 text-xs sm:text-sm lg:text-base font-medium text-gray-700 max-w-full sm:max-w-7xl mx-auto relative px-4">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-200 -z-10 hidden sm:block"></div>

          <div className="flex items-center gap-1.5 sm:gap-2 bg-white px-2 sm:px-4 py-1.5 sm:py-2">
            <CheckCircle2 className="w-4 sm:w-5 h-4 sm:h-5 text-gray-400 flex-shrink-0" />
            <span className="whitespace-nowrap">40+ Projects </span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-gray-300"></div>

          <div className="flex items-center gap-1.5 sm:gap-2 bg-white px-2 sm:px-4 py-1.5 sm:py-2">
            <CheckCircle2 className="w-4 sm:w-5 h-4 sm:h-5 text-gray-400 flex-shrink-0" />
            <span className="whitespace-nowrap">Custom Built</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-gray-300"></div>

          <div className="flex items-center gap-1.5 sm:gap-2 bg-white px-2 sm:px-4 py-1.5 sm:py-2">
            <CheckCircle2 className="w-4 sm:w-5 h-4 sm:h-5 text-gray-400 flex-shrink-0" />
            <span className="whitespace-nowrap">On Autopilot</span>
          </div>
          <div className="hidden lg:block w-px h-4 bg-gray-300"></div>

          <div className="flex items-center gap-1.5 sm:gap-2 bg-white px-2 sm:px-4 py-1.5 sm:py-2">
            <CheckCircle2 className="w-4 sm:w-5 h-4 sm:h-5 text-gray-400 flex-shrink-0" />
            <span className="whitespace-nowrap">Full Support</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
