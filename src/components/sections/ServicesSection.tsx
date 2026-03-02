import React from "react";
import { motion } from "motion/react";
import { Target, Banknote, Hammer, LineChart } from "lucide-react";

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

  return (
    <section
      id="services"
      className="w-full bg-[#f2f1eb] sm:pt-32 sm:pb-16 "
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-24">
          <h2 className="text-4xl sm:text-5xl font-serif text-gray-900 mb-6">
            What We Even Do
          </h2>
          <p className="text-gray-600 text-lg">
            Explore our range of services to discover the perfect solution
            tailored to your project's unique needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-[#fafafa] rounded-[32px] p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#eef4e6] flex items-center justify-center mb-8">
                <service.icon
                  className="w-7 h-7 text-[#0f291e]"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-10 leading-relaxed min-h-[80px]">
                {service.description}
              </p>
              <div className="grid grid-cols-2 gap-4 h-[200px] sm:h-[240px]">
                <img
                  src={service.images[0]}
                  alt=""
                  className="w-full h-full object-cover rounded-2xl"
                />
                <img
                  src={service.images[1]}
                  alt=""
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
