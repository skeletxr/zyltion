import React from 'react';
import { Map } from 'lucide-react';
import FooterSection from '../components/layout/FooterSection';


const ContactPage = () => {
  return (
    <>
      <main className="pt-4 sm:pt-8 min-h-screen bg-[#fafafa]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-[#f2f1eb] rounded-[40px] p-8 lg:p-16 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-white/40 rounded-full blur-3xl opacity-70 -translate-x-1/4 -translate-y-1/4 pointer-events-none"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
              {/* Left Column */}
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-gray-900 mb-6 leading-tight">
                  Get in Touch with Our Experts
                </h1>
                <p className="text-lg text-gray-700 mb-12 max-w-md">
                  Whether you need clarity, strategy, or a fresh perspective, our team is ready to assist. Let's drive results together.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                  {/* Reach Out */}
                  <div>
                    <div className="w-12 h-12 bg-[#e6e5df] rounded-xl flex items-center justify-center mb-6">
                      <svg className="w-6 h-6 text-[var(--color-brand-dark)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-medium text-gray-900 mb-3">Reach Out to Us</h3>
                    <p className="text-gray-700 mb-4">Need assistance? Drop us a message anytime.</p>
                    <a href="mailto:archio@mail.com" className="text-gray-900 underline underline-offset-4 hover:text-gray-600 transition-colors">archio@mail.com</a>
                  </div>

                  {/* Call Us */}
                  <div>
                    <div className="w-12 h-12 bg-[#e6e5df] rounded-xl flex items-center justify-center mb-6">
                      <svg className="w-6 h-6 text-[var(--color-brand-dark)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-medium text-gray-900 mb-3">Call Us</h3>
                    <p className="text-gray-700 mb-4">Need help? Give us a call—we're here for you.</p>
                    <a href="tel:+1234567890" className="text-gray-900 underline underline-offset-4 hover:text-gray-600 transition-colors">+1234567890</a>
                  </div>
                </div>

                {/* Business Hours Card */}
                <div className="bg-[#e6e5df] rounded-[24px] p-8 border border-white/50 shadow-sm relative overflow-hidden">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
                    <div>
                      <h4 className="text-xl font-medium text-gray-900 mb-4">Business Hours</h4>
                      <div className="w-full h-px bg-gray-300 mb-6"></div>
                      <div className="space-y-4 text-sm text-gray-700 font-medium mb-6">
                        <p>MON - FRI - 9:00am-7:00pm</p>
                        <p>SAT - 9:00am-5:00pm</p>
                        <p>SUN- 9:00am-12:30pm</p>
                      </div>
                      <div className="w-full h-px bg-gray-300 mb-6 relative">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 flex gap-1.5 bg-[#e6e5df] pl-2">
                          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                        </div>
                      </div>
                      <button className="bg-[var(--color-brand-dark)] text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors flex items-center gap-2">
                        Maps Location
                        <Map className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="h-full">
                      <img 
                        src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=600&q=80" 
                        alt="Office Interior" 
                        className="w-full h-full object-cover rounded-xl shadow-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="bg-[#e6e5df] rounded-[32px] p-8 lg:p-10 border border-white/50 shadow-sm flex flex-col">
                <form className="space-y-6 flex-grow">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name*</label>
                    <input type="text" placeholder="Jane Smith" className="w-full px-4 py-3 rounded-xl bg-white border-none focus:ring-2 focus:ring-[var(--color-brand-dark)] outline-none transition-shadow" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email*</label>
                    <input type="email" placeholder="jane@framer.com" className="w-full px-4 py-3 rounded-xl bg-white border-none focus:ring-2 focus:ring-[var(--color-brand-dark)] outline-none transition-shadow" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input type="tel" placeholder="+1234567890" className="w-full px-4 py-3 rounded-xl bg-white border-none focus:ring-2 focus:ring-[var(--color-brand-dark)] outline-none transition-shadow" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <input type="text" placeholder="enquiry about..." className="w-full px-4 py-3 rounded-xl bg-white border-none focus:ring-2 focus:ring-[var(--color-brand-dark)] outline-none transition-shadow" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message*</label>
                    <textarea placeholder="Message goes here" rows={4} className="w-full px-4 py-3 rounded-xl bg-white border-none focus:ring-2 focus:ring-[var(--color-brand-dark)] outline-none transition-shadow resize-none"></textarea>
                  </div>
                  <button type="button" className="w-full bg-[var(--color-brand-dark)] text-white py-4 rounded-xl font-medium hover:bg-gray-800 transition-colors shadow-md">
                    Submit
                  </button>
                </form>

                {/* Footer of form */}
                <div className="mt-8 pt-6 border-t border-gray-300 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src="https://i.pravatar.cc/150?img=11" alt="Avatar" className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">archio@mail.com</p>
                      <p className="text-xs text-gray-500">reply with in 24 hrs</p>
                    </div>
                  </div>
                  <div className="bg-white px-3 py-1.5 rounded-full flex items-center gap-2 shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-xs font-semibold text-gray-700">AVAILABLE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <FooterSection />
    </>
  );
};

export default ContactPage;
