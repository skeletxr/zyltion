import React from "react";
import { motion } from "motion/react";
import { Target, Banknote, Hammer, LineChart, ArrowRight } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Business Strategy",
      description:
        "Crafting clear, actionable strategies that align with your vision, ensuring sustainable growth and a competitive edge.",
      icon: Target,
      images: [
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80",
      ],
    },
    {
      title: "Financial Advisory",
      description:
        "Providing expert financial planning, forecasting, and cost optimization to strengthen profitability and long-term stability.",
      icon: Banknote,
      images: [
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=400&q=80",
      ],
    },
    {
      title: "Operations & Process Optimization",
      description:
        "Our Operations and Process Optimization service is designed to help businesses eliminate inefficiencies and reduce costs.",
      icon: Hammer,
      images: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80",
      ],
    },
    {
      title: "Market Research & Analysis",
      description:
        "Our Market Research & Analysis service empowers businesses with the intelligence they need to navigate markets confidently.",
      icon: LineChart,
      images: [
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=400&q=80",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, filter: "blur(10px)", y: 30 },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="services"
      className="w-full bg-[#f2f1eb] sm:pt-32 sm:pb-16 relative overflow-hidden"
    >
      {/* Abstract background elements */}
      <div className="absolute top-[-20%] right-[-10%] w-125 h-125 bg-white/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-100 h-100 bg-[#0f291e]/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-350 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="inline-block mb-3"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#0f291e]/60">
              Our Expertise
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-serif text-gray-900 mb-3 font-light">
            What We Even Do
          </h2>
          <p className="text-gray-600 text-base leading-relaxed max-w-2xl mx-auto">
            Explore our comprehensive range of consulting services designed to
            transform your business and unlock sustainable growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-7"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group relative"
            >
              {/* Card Background with glassmorphism */}
              <div className="absolute inset-0 bg-linear-to-br from-white/40 to-white/20 rounded-[20px] backdrop-blur-xl border border-white/60 opacity-100 group-hover:opacity-0 transition-opacity duration-500"></div>

              <div className="relative bg-white/30 backdrop-blur-2xl rounded-[20px] p-5 sm:p-7 overflow-hidden border border-white/40 shadow-[0_8px_32px_rgba(31,38,135,0.1)] hover:shadow-[0_8px_32px_rgba(31,38,135,0.2)] transition-all duration-500">
                {/* Decorative gradient blob */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#0f291e]/5 to-transparent rounded-full blur-3xl -z-10 group-hover:scale-150 group-hover:from-[#0f291e]/10 transition-all duration-500"></div>

                {/* Icon Container */}
                <motion.div
                  className="w-14 h-14 rounded-2xl bg-linear-to-br from-brand-light to-[#d4e8c1] flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow duration-300"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <service.icon
                    className="w-7 h-7 text-[#0f291e]"
                    strokeWidth={1.5}
                  />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3 font-serif">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed min-h-17.5 text-sm">
                  {service.description}
                </p>

                {/* Images Grid with enhanced styling */}
                <div className="grid grid-cols-2 gap-2 h-35 sm:h-45 mb-4">
                  <motion.div
                    className="relative rounded-2xl overflow-hidden group/img shadow-md hover:shadow-lg transition-shadow duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <img
                      src={service.images[0]}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/10 transition-colors duration-300"></div>
                  </motion.div>
                  <motion.div
                    className="relative rounded-2xl overflow-hidden group/img shadow-md hover:shadow-lg transition-shadow duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <img
                      src={service.images[1]}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/10 transition-colors duration-300"></div>
                  </motion.div>
                </div>

                {/* Action Link */}
                <motion.button
                  className="flex items-center gap-2 text-[#0f291e] font-semibold text-sm group-hover:gap-3 transition-all opacity-0 group-hover:opacity-100"
                  whileHover={{ x: 4 }}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
