import React from "react";
import { motion } from "motion/react";
import { Target, Banknote, Hammer, LineChart, ArrowRight } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Automation",
      description:
        "We build bots that handle your repetitive tasks in seconds — from picking up sales leads to filing paperwork — so you can focus on growth.",
      icon: Target,
      images: [
        "/automation-1.png",
        "/automation-2.png",
      ],
    },
    {
      title: "Custom Systems (CRM/ERP)",
      description:
        "We build private dashboards to manage your customers and operations. Everything you need to run your business in one clean, fast place.",
      icon: Banknote,
      images: [
        "/custom-1.png",
        "/custom-2.png",
      ],
    },
    {
      title: "AI & Chatbots",
      description:
        "We plug AI into your business to answer customers and handle data automatically — so your business stays awake and productive even when you aren't.",
      icon: Hammer,
      images: [
        "/ai-chatbot-1.png",
        "/ai-chatbot-2.png",
      ],
    },
    {
      title: "Web Development",
      description:
        "We build fast, modern websites and apps that look great and are easy for your customers to use — turning visitors into paying clients.",
      icon: LineChart,
      images: [
        "/web-1.png",
        "/web-2.png",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // increased stagger for smoothness
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 40,
        damping: 15,
        mass: 1,
      },
    },
  };

  return (
    <section
      id="services"
      className="w-full bg-[#f2f1eb] pt-12 sm:pt-20 pb-0 sm:pb-0 relative overflow-x-clip overflow-y-visible z-20"
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
            What We Do 
            {/* (Better Than Anyone Else) */}
          </h2>
          <p className="text-gray-600 text-base leading-relaxed max-w-2xl mx-auto">
            We build custom tools that solve your specific problems — no generic
            software, no bloat.
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
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <motion.div
                    className="relative rounded-2xl overflow-hidden group/img shadow-md hover:shadow-lg transition-shadow duration-300 aspect-video"
                    whileHover={{ scale: 1.02 }}
                  >
                    <img
                      src={service.images[0]}
                      alt=""
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/10 transition-colors duration-300"></div>
                  </motion.div>
                  <motion.div
                    className="relative rounded-2xl overflow-hidden group/img shadow-md hover:shadow-lg transition-shadow duration-300 aspect-video"
                    whileHover={{ scale: 1.02 }}
                  >
                    <img
                      src={service.images[1]}
                      alt=""
                      className="w-full h-full object-contain"
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
