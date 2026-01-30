"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import GlassNavbar from "@/components/GlassNavbar";
import Footer from "@/components/Footer";
import BookingSuccessModal from "@/components/BookingSuccessModal"; // Reusable Modal
import { sendEmail } from "@/lib/emailjs";

const ContactPage = () => {
  // 1. States for Form, Loading, and Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    destination: "Indonesia",
    message: "",
  });

  // 2. Form Submission Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    try {
      await sendEmail({
        name: formData.name,
        email: formData.email,
        subject: `New Contact Inquiry: ${formData.destination}`,
        message: `
          CONTACT FORM INQUIRY
          ---------------------
          Full Name: ${formData.name}
          Email Address: ${formData.email}
          Interested Destination: ${formData.destination}
          
          User Message:
          ${formData.message}
        `,
      });
      setIsModalOpen(true); // Open the reusable modal on success
      // Reset form
      setFormData({ name: "", email: "", destination: "Indonesia", message: "" });
    } catch (error) {
      console.error("Email failed:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <GlassNavbar />
      
      {/* 3. Reusable Modal Implementation */}
      <BookingSuccessModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Message Sent!"
        message="Thank you for reaching out. Our travel experts will review your message and get back to you within 24 hours."
      />

      {/* Hero Header Section */}
      <section className="relative pt-32 pb-16 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-red-600/20 rounded-full text-red-600 font-bold text-[10px] uppercase tracking-[0.3em] mb-6"
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
            <span className="text-red-600 font-serif italic font-medium">
              Next Adventure
            </span>
          </motion.h1>
        </div>
      </section>

      {/* Contact Content */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-10 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight mb-4">
                Contact Information
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                Have questions about our tours or need a custom itinerary? Our
                travel experts are here to help you 24/7.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center shrink-0">
                  <Phone className="text-red-600" />
                </div>
                <div>
                  <h3 className="font-black text-gray-900 uppercase text-sm tracking-widest">Call Us</h3>
                  <a href="tel:+919810655656" className="text-lg lg:text-xl font-bold text-gray-800 hover:text-red-600 transition">
                    +91 9810-655-656
                  </a>
                  <p className="text-gray-500 text-sm">Mon–Fri from 9am to 6pm</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center shrink-0">
                  <Mail className="text-red-600" />
                </div>
                <div>
                  <h3 className="font-black text-gray-900 uppercase text-sm tracking-widest">Email Us</h3>
                  <a href="mailto:travel@qcdtravels.com" className="text-lg lg:text-xl font-bold text-gray-800 hover:text-red-600 transition">
                    travel@qcdtravels.com
                  </a>
                  <p className="text-gray-500 text-sm">Online support 24/7</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center shrink-0">
                  <MapPin className="text-red-600" />
                </div>
                <div>
                  <h3 className="font-black text-gray-900 uppercase text-sm tracking-widest">Visit Office</h3>
                  <p className="text-lg lg:text-xl font-bold text-gray-800">
                    1301, Pearl Best Heights 1, Netaji Subhash Place, Pitampura,
                    New Delhi, Delhi, 110034
                  </p>
                  <p className="text-gray-500 text-sm">Global HQ</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-2xl relative overflow-hidden"
          >
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-2">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:border-red-600 outline-none transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-2">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:border-red-600 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-2">Interested Destination</label>
                <select 
                  value={formData.destination}
                  onChange={(e) => setFormData({...formData, destination: e.target.value})}
                  className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:border-red-600 outline-none bg-white"
                >
                  <option value="Indonesia">Indonesia</option>
                  <option value="Thailand">Thailand</option>
                  <option value="Europe">Europe</option>
                  <option value="Dubai">Dubai</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-2">Your Message</label>
                <textarea
                  rows="4"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Tell us about your dream trip..."
                  className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:border-red-600 outline-none resize-none"
                />
              </div>

              <button 
                type="submit"
                disabled={loading}
                className="w-full py-5 bg-linear-to-r from-red-600 to-blue-700 hover:cursor-pointer hover:bg-black text-white rounded-2xl font-black uppercase tracking-[0.2em] text-xs transition-all duration-500 flex items-center justify-center gap-3 group shadow-xl shadow-red-600/20 disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
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