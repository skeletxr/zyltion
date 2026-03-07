import React from "react";
import { Map } from "lucide-react";
import { motion } from "framer-motion";
import FooterSection from "../components/layout/FooterSection";
import { RevealText } from "../components/animations/RevealText";

const ContactPage = () => {
  return (
    <>
      <main className="pt-2 sm:pt-3 h-[calc(100vh - 88px)] bg-[#fafafa] flex flex-col">
        <div className="max-w-400 mx-auto px-4 sm:px-6 lg:px-8 pb-16 flex-1 flex flex-col overflow-y-auto w-full">
          <div className="bg-[#f2f1eb] rounded-[40px] p-5 lg:p-8 relative overflow-hidden h-full flex flex-col">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-200 h-200 bg-white/40 rounded-full blur-3xl opacity-70 -translate-x-1/4 -translate-y-1/4 pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10 h-full">
              {/* Left Column */}
              <div>
                <RevealText
                  text="Get in Touch"
                  className="text-3xl sm:text-4xl lg:text-5xl font-serif text-gray-900 mb-3 leading-tight"
                  delay={0.1}
                  staggerDelay={0.08}
                />
                <RevealText
                  text="Whether you need clarity, strategy, or a fresh perspective, our team is ready to assist. Let's drive results together."
                  className="text-base text-gray-700 mb-6 max-w-md"
                  delay={0.3}
                  staggerDelay={0.04}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  {/* Reach Out */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                  >
                    <div className="w-10 h-10 bg-[#e6e5df] rounded-xl flex items-center justify-center mb-2">
                      <svg
                        className="w-5 h-5 text-brand-dark"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">
                      Reach Out to Us
                    </h3>
                    <p className="text-sm text-gray-700 mb-2">
                      {" "}
                      Drop us a message anytime.
                    </p>
                    <a
                      href="mailto:zyltion@gmail.com"
                      className="text-gray-900 underline underline-offset-4 hover:text-gray-600 transition-colors"
                    >
                      zyltion@gmail.com
                    </a>
                  </motion.div>

                  {/* Call Us */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                  >
                    <div className="w-10 h-10 bg-[#e6e5df] rounded-xl flex items-center justify-center mb-2">
                      <svg
                        className="w-5 h-5 text-brand-dark"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">
                      Call Us
                    </h3>
                    <p className="text-sm text-gray-700 mb-2">
                      Call us for support.
                    </p>
                    <a
                      href="tel:+919067692695"
                      className="text-gray-900 underline underline-offset-4 hover:text-gray-600 transition-colors"
                    >
                      +91 9067692695
                    </a>
                    <br />
                    <a
                      href="tel:+918767231476"
                      className="text-gray-900 underline underline-offset-4 hover:text-gray-600 transition-colors"
                    >
                      +91 8767231476
                    </a>
                  </motion.div>
                </div>

                {/* Availability Card */}
                <motion.div
                  className="bg-[#e6e5df] rounded-3xl p-5 border border-white/50 shadow-sm relative overflow-hidden shrink-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                    <div>
                      <h4 className="text-base font-medium text-gray-900 mb-3">
                        Always Available
                      </h4>
                      <div className="w-full h-px bg-gray-300 mb-3"></div>
                      <div className="space-y-2 text-sm text-gray-700 font-medium mb-3">
                        <p>We're available 24/7 to assist you</p>
                        <p>Reach out anytime, we'll get back to you promptly</p>
                      </div>
                      <div className="w-full h-px bg-gray-300 mb-3 relative">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 flex gap-1.5 bg-[#e6e5df] pl-2">
                          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                        </div>
                      </div>
                      <button className="bg-brand-dark text-white px-4 py-2 rounded-xl text-xs font-medium hover:bg-gray-800 transition-colors flex items-center gap-1">
                        Maps Location
                        <Map className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="h-48 overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=600&q=80"
                        alt="Office Interior"
                        className="w-full h-full object-cover rounded-xl shadow-sm"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right Column - Form */}
              <motion.div
                className="bg-[#e6e5df] rounded-4xl p-6 lg:p-7 border border-white/50 shadow-sm flex flex-col overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
              >
                <form className="space-y-3 grow">
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.75 }}
                  >
                    <label className="block text-xs font-medium text-gray-700 mb-1.5">
                      Name*
                    </label>
                    <input
                      type="text"
                      placeholder="Jane Smith"
                      className="w-full px-4 py-2 rounded-xl bg-white border-none focus:ring-2 focus:ring-brand-dark outline-none transition-shadow text-sm"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <label className="block text-xs font-medium text-gray-700 mb-1.5">
                      Email*
                    </label>
                    <input
                      type="email"
                      placeholder="jane@framer.com"
                      className="w-full px-4 py-2 rounded-xl bg-white border-none focus:ring-2 focus:ring-brand-dark outline-none transition-shadow text-sm"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.85 }}
                  >
                    <label className="block text-xs font-medium text-gray-700 mb-1.5">
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="+1234567890"
                      className="w-full px-4 py-2 rounded-xl bg-white border-none focus:ring-2 focus:ring-brand-dark outline-none transition-shadow text-sm"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                  >
                    <label className="block text-xs font-medium text-gray-700 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="enquiry about..."
                      className="w-full px-4 py-2 rounded-xl bg-white border-none focus:ring-2 focus:ring-brand-dark outline-none transition-shadow text-sm"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.95 }}
                  >
                    <label className="block text-xs font-medium text-gray-700 mb-1.5">
                      Message*
                    </label>
                    <textarea
                      placeholder="Message goes here"
                      rows={3}
                      className="w-full px-4 py-2 rounded-xl bg-white border-none focus:ring-2 focus:ring-brand-dark outline-none transition-shadow resize-none text-sm"
                    ></textarea>
                  </motion.div>
                  <motion.button
                    type="button"
                    className="w-full bg-brand-dark text-white py-2.5 rounded-xl font-medium hover:bg-gray-800 transition-colors shadow-md text-sm"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Submit
                  </motion.button>
                </form>

                {/* Footer of form */}
                <div className="mt-3 pt-3 border-t border-gray-300 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        zyltion@gmail.com
                      </p>
                      <p className="text-xs text-gray-500">
                        get a reply within 24 hrs
                      </p>
                    </div>
                  </div>
                  <div className="bg-white px-3 py-1.5 rounded-full flex items-center gap-2 shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-xs font-semibold text-gray-700">
                      AVAILABLE
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      <FooterSection />
    </>
  );
};

export default ContactPage;
