"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import GlassNavbar from '@/components/GlassNavbar';
import Footer from '@/components/Footer';

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-white">
      <GlassNavbar />

      {/* Hero Header Section */}
      <section className="relative pt-32 pb-16 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80" 
            alt="background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/20 rounded-full text-orange-500 font-bold text-[10px] uppercase tracking-[0.3em] mb-6"
          >
            <MessageSquare className="w-3 h-3" />
            Get In Touch
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white tracking-tighter"
          >
            Let’s Plan Your <br />
            <span className="text-orange-500 font-serif italic font-medium">Next Adventure</span>
          </motion.h1>
        </div>
      </section>

      {/* Contact Content */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Side: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight mb-4">Contact Information</h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                Have questions about our tours or need a custom itinerary? Our travel experts are here to help you 24/7.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { icon: <Phone className="text-orange-500" />, title: "Call Us", detail: "+91 9810-655-656", sub: "Mon-Fri from 9am to 6pm" },
                { icon: <Mail className="text-orange-500" />, title: "Email Us", detail: " travel@qcdtravels.com", sub: "Online support 24/7" },
                { icon: <MapPin className="text-orange-500" />, title: "Visit Office", detail: "1301, Pearl Best Heights 1, Netaji Subhash Place, Pitampura, New Delhi, Delhi, 110034", sub: "Global HQ" },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-black text-gray-900 uppercase text-sm tracking-widest">{item.title}</h3>
                    <p className="text-xl font-bold text-gray-800">{item.detail}</p>
                    <p className="text-gray-500 text-sm">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Contact Form (Glassmorphism card) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-2xl relative overflow-hidden"
          >
            <form className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-2">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-2">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-2">Interested Destination</label>
                <select className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:border-orange-500 outline-none transition-all bg-white appearance-none">
                  <option>Indonesia</option>
                  <option>Thailand</option>
                  <option>New York</option>
                  <option>Europe</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-2">Your Message</label>
                <textarea rows="4" placeholder="Tell us about your dream trip..." className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:border-orange-500 outline-none transition-all resize-none"></textarea>
              </div>

              <button className="w-full py-5 bg-orange-500 hover:bg-black text-white rounded-2xl font-black uppercase tracking-[0.2em] text-xs transition-all duration-500 flex items-center justify-center gap-3 group shadow-xl shadow-orange-500/20">
                Send Message
                <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ContactPage;