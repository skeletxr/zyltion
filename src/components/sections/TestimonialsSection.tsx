import React from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  ArrowRight,
  Star,
  Box,
  Map,
  TrendingUp,
} from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Wan Mitchell",
      role: "CEO of Virtual Realty",
      quote:
        "From the first consultation, they impressed me with professionalism and insight. They transformed our business plan into a focused, inspiring roadmap that I actually look forward to following.",
      location: "San Francisco, CA",
      service: "Growth Consultation",
      image: "https://i.pravatar.cc/150?img=11",
    },
    {
      name: "Olia Thompson",
      role: "Nurse, NY",
      quote:
        "They completely reshaped how I approached my career—it's now clear, motivating, and full of direction. They blended strategy with personal guidance so well. My peers can't stop noticing the change.",
      location: "Austin, TX",
      service: "Coaching Consultation",
      image: "https://i.pravatar.cc/150?img=5",
    },
    {
      name: "John Hanbert",
      role: "Software Developer",
      quote:
        "They made my complex career decisions feel simple and structured. The team took time to understand my challenges, and turned uncertainty into a clear, confident path forward that feels uniquely mine.",
      location: "Brooklyn, NY",
      service: "Strategy Consultation",
      image: "https://i.pravatar.cc/150?img=8",
    },
  ];

  return (
    <section
      id="testimonials"
      className="w-full bg-[#f2f1eb] py-24 sm:py-32 relative overflow-hidden"
    >
      <div className="max-w-350 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl font-serif text-gray-900 mb-6">
            What Our Loving Clients Say
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We've helped businesses of all sizes unlock growth, refine their
            strategies, and achieve lasting results. Here's what our clients
            say.
          </p>
        </div>
      </div>

      {/* Scrolling Testimonials */}
      <div className="relative w-full max-w-400 mx-auto mb-20">
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
                className="w-[min(320px,85vw)] sm:w-87.5 lg:w-112.5 bg-[#f8f9f5] rounded-3xl p-5 sm:p-8 flex flex-col shadow-sm border border-white/50 shrink-0"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-xl object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-8 grow">
                  "{testimonial.quote}"
                </p>

                <div className="flex flex-wrap items-center justify-between gap-4 mt-auto pt-6 border-t border-gray-200/60">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg text-xs font-medium text-gray-600 shadow-sm">
                      <Map className="w-3.5 h-3.5" />
                      {testimonial.location}
                    </div>
                    <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg text-xs font-medium text-gray-600 shadow-sm">
                      <TrendingUp className="w-3.5 h-3.5" />
                      {testimonial.service}
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-4 h-4 fill-gray-800 text-gray-800"
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
        <div className="bg-[#f8f9f5] rounded-4xl p-10 sm:p-16 shadow-sm border border-white/50 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div className="text-center md:px-8 py-4 md:py-0">
              <div className="text-5xl sm:text-6xl font-serif text-gray-900 mb-2">
                40+
              </div>
              <p className="text-gray-600 font-medium">Projects completed.</p>
            </div>
            <div className="text-center md:px-8 py-4 md:py-0">
              <div className="text-5xl sm:text-6xl font-serif text-gray-900 mb-2">
                96%
              </div>
              <p className="text-gray-600 font-medium">
                Client satisfaction rate.
              </p>
            </div>
            <div className="text-center md:px-8 py-4 md:py-0">
              <div className="text-5xl sm:text-6xl font-serif text-gray-900 mb-2">
                3+
              </div>
              <p className="text-gray-600 font-medium">Years of experience</p>
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
