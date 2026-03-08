import React from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  ArrowRight,
  Star,
  Box,
  Map,
  TrendingUp,
  User,
} from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "CEO of Virtual Realty",
      quote:
        "They took our messy business plan and turned it into an automated roadmap. I finally feel in control of where the company is going.",
      location: "San Francisco, CA",
      service: "Growth Consultation",
    },
    {
      name: "Priya Sharma",
      role: "Business Owner",
      quote:
        "The AI chatbot they built handles my customers perfectly. It's like having a 24/7 assistant who never sleeps and never makes mistakes.",
      location: "Austin, TX",
      service: "AI Chatbot Build",
    },
    {
      name: "Arjun Patel",
      role: "Founder",
      quote:
        "I needed a custom CRM that wasn't confusing. They built exactly what I asked for, and it's fast. My team was up and running in days.",
      location: "Brooklyn, NY",
      service: "Custom CRM",
    },
  ];

  return (
    <section
      id="testimonials"
      className="w-full bg-[#f2f1eb] py-16 sm:py-24 lg:py-32 relative overflow-hidden"
    >
      <div className="max-w-350 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-gray-900 mb-4 sm:mb-6">
            What Our Clients Say
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Real results from real businesses. Here's what the people we've
            built for have to say about working with Zyltion.
          </p>
        </div>
      </div>

      {/* Scrolling Testimonials */}
      <div className="relative w-full max-w-400 mx-auto mb-12 sm:mb-20">
        {/* Blur Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 sm:w-64 bg-linear-to-r from-[#f2f1eb] to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 sm:w-64 bg-linear-to-l from-[#f2f1eb] to-transparent z-20 pointer-events-none"></div>

        <motion.div
          animate={{ x: [0, -2000] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
          className="flex gap-6 sm:gap-8 px-4 w-fit"
        >
          {[...testimonials, ...testimonials, ...testimonials].map(
            (testimonial, idx) => (
              <div
                key={idx}
                className="w-[min(300px,85vw)] sm:w-87.5 lg:w-112.5 bg-[#f8f9f5] rounded-2xl sm:rounded-3xl p-4 sm:p-8 flex flex-col shadow-sm border border-white/50 shrink-0"
              >
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6 sm:mb-8 grow">
                  "{testimonial.quote}"
                </p>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mt-auto pt-4 sm:pt-6 border-t border-gray-200/60">
                  <div className="flex items-center gap-1 bg-white px-2 sm:px-3 py-1 sm:py-1.5 rounded text-[10px] sm:text-xs font-medium text-gray-600 shadow-sm w-fit">
                    <TrendingUp className="w-3 h-3 flex-shrink-0" />
                    <span>{testimonial.service}</span>
                  </div>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-3 h-3 sm:w-4 sm:h-4 fill-gray-800 text-gray-800"
                      />
                    ))}
                  </div>
                </div>
              </div>
            ),
          )}
        </motion.div>
      </div>

      {/* Stats Box */}
      <div className="max-w-250 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#f8f9f5] rounded-3xl p-6 sm:p-12 lg:p-16 shadow-sm border border-white/50 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div className="text-center md:px-6 lg:px-8 py-3 md:py-0">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-serif text-gray-900 mb-2">
                40+
              </div>
              <p className="text-sm sm:text-base text-gray-600 font-medium">
                Projects completed.
              </p>
            </div>
            <div className="text-center md:px-6 lg:px-8 py-3 md:py-0">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-serif text-gray-900 mb-2">
                96%
              </div>
              <p className="text-sm sm:text-base text-gray-600 font-medium">
                Client satisfaction rate.
              </p>
            </div>
            <div className="text-center md:px-6 lg:px-8 py-3 md:py-0">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-serif text-gray-900 mb-2">
                3+
              </div>
              <p className="text-sm sm:text-base text-gray-600 font-medium">
                Years of experience
              </p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button className="relative flex items-center justify-center gap-2 px-8 py-5 rounded-2xl bg-[#0e3a27] text-white font-bold text-sm transition-all cursor-pointer overflow-hidden shadow-[0_0.6px_1.1px_-1.25px_rgba(61,61,61,0.72),0_2.3px_4.1px_-2.5px_rgba(61,61,61,0.64),0_10px_18px_-3.75px_rgba(61,61,61,0.25),0_0.7px_0.7px_-0.58px_rgba(22,51,32,0.35),0_1.8px_1.8px_-1.17px_rgba(22,51,32,0.34),0_3.6px_3.6px_-1.75px_rgba(22,51,32,0.33),0_6.9px_6.9px_-2.33px_rgba(22,51,32,0.3),0_13.6px_13.7px_-2.92px_rgba(22,51,32,0.26),0_30px_30px_-3.5px_rgba(22,51,32,0.15)] group">
            Get Started
            <ArrowUpRight className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-2 bg-brand-light text-[#0f291e] px-8 py-5 rounded-2xl border border-gray-200 font-bold text-sm hover:bg-[#e2ead9] transition-all">
            Our Services
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
