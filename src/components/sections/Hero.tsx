import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight, ArrowRight, Star, CheckCircle2 } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="w-full max-w-[1536px] mx-auto min-h-[776px] px-[50px] pt-[20px] pb-[100px] bg-[#fafafa] relative z-[2] overflow-hidden flex justify-center items-center box-border transition-all"
    >
      <div className="relative overflow-hidden max-w-[1436px] w-full min-h-[656px] flex items-center box-border z-[4] transition-all p-8 lg:p-20 rounded-[36px]">
        {/* Card Background Layers */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#ecebe4]/50 to-[#ecebe4]/25"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/2 backdrop-blur-2xl -z-10 [mask-image:linear-gradient(to_bottom,transparent,black)] pointer-events-none"></div>

        {/* White glow effect on the left */}
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[120%] bg-white/40 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col justify-center relative z-[2] lg:w-[576px] lg:h-[425px] font-sans text-[12px]"
          >
            <div className="relative flex items-center gap-2 h-[42px] px-6 py-[10px] rounded-[17px] bg-white shadow-[0_8px_24px_rgba(173,173,173,0.08)] mb-10 w-fit box-border">
              <img src="/assets/verified-badge-svgrepo-com.svg" alt="Verified Badge" className="w-[24px] h-[24px] text-gray-700" />
              <span className="text-[12px] font-bold uppercase tracking-wider text-black font-sans leading-none">Award-Winning Firm</span>
            </div>
            
            <h1 className="text-[70px] font-[300] leading-[70px] tracking-[-2.8px] font-serif text-black mb-6 block">
              Business growth with<br />expert consultancy
            </h1>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-md font-medium">
              Achieve sustainable growth through expert insights, tailored solutions, and trusted support.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <button 
                className="relative flex items-center justify-center gap-2 px-8 py-5 rounded-2xl bg-[#0e3a27] text-white font-bold text-sm transition-all cursor-pointer overflow-hidden shadow-[0_0.6px_1.1px_-1.25px_rgba(61,61,61,0.72),0_2.3px_4.1px_-2.5px_rgba(61,61,61,0.64),0_10px_18px_-3.75px_rgba(61,61,61,0.25),0_0.7px_0.7px_-0.58px_rgba(22,51,32,0.35),0_1.8px_1.8px_-1.17px_rgba(22,51,32,0.34),0_3.6px_3.6px_-1.75px_rgba(22,51,32,0.33),0_6.9px_6.9px_-2.33px_rgba(22,51,32,0.3),0_13.6px_13.7px_-2.92px_rgba(22,51,32,0.26),0_30px_30px_-3.5px_rgba(22,51,32,0.15)] group"
              >
                Get Started
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              <button className="flex items-center gap-2 bg-[#eef4e6] text-[#0f291e] px-8 py-5 rounded-2xl font-bold text-sm hover:bg-[#e2ead9] transition-all">
                Our Services
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15, filter: "blur(1px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex items-center gap-4 pt-6 border-t border-black/15 w-full max-w-[400px]"
            >
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-5 h-5 fill-[#0f291e] text-[#0f291e]"
                  />
                ))}
              </div>
              <div className="w-px h-5 bg-black/15"></div>
              <span className="text-gray-900 font-semibold text-sm">
                Rated by loving Clients
              </span>
            </motion.div>
          </motion.div>

          {/* Right Content - Images */}
          <div className="lg:col-span-6 flex flex-col items-end gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(1px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative flex gap-6 w-full aspect-[4/3] lg:aspect-auto lg:w-[640px] lg:h-[480px] bg-transparent rounded-[40px] p-4 lg:p-8 box-border flex-shrink-0"
            >
              <img
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Expert Consultant"
                className="w-1/2 h-full object-cover rounded-[24px] shadow-sm"
              />
              <img
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Abstract 3D Design"
                className="w-1/2 h-full object-cover rounded-[24px] shadow-sm"
              />
            </motion.div>

            {/* Avatar Group Grouped with text */}
            <motion.div
              initial={{ opacity: 0, y: 15, filter: "blur(1px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex items-center justify-end gap-4 pt-6 border-t border-black/15 w-full lg:max-w-[640px]"
            >
              <div className="flex -space-x-2">
                <img
                  src="https://i.pravatar.cc/100?img=11"
                  alt="Client"
                  className="w-10 h-10 rounded-full border-2 border-[#ecebe4] object-cover"
                />
                <img
                  src="https://i.pravatar.cc/100?img=12"
                  alt="Client"
                  className="w-10 h-10 rounded-full border-2 border-[#ecebe4] object-cover"
                />
                <img
                  src="https://i.pravatar.cc/100?img=13"
                  alt="Client"
                  className="w-10 h-10 rounded-full border-2 border-[#ecebe4] object-cover"
                />
                <img
                  src="https://i.pravatar.cc/100?img=14"
                  alt="Client"
                  className="w-10 h-10 rounded-full border-2 border-[#ecebe4] object-cover"
                />
              </div>
              <span className="text-sm font-bold text-gray-900">
                Join 1,000 + other awesome clients
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
