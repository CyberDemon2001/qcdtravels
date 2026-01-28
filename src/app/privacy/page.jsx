"use client";
import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, Eye, FileText, Globe } from "lucide-react";
import GlassNavbar from "@/components/GlassNavbar";
import Footer from "@/components/Footer";

const PrivacyPage = () => {
  const lastUpdated = "January 28, 2026";

  return (
    <main className="min-h-screen bg-white">
      <GlassNavbar />

      {/* Hero Header Section - Matches Contact Page Style */}
      <section className="relative pt-32 pb-16 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
            alt="security background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600/20 rounded-full text-blue-400 font-bold text-[10px] uppercase tracking-[0.3em] mb-6"
          >
            <ShieldCheck className="w-3 h-3" />
            Trust & Security
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white tracking-tighter"
          >
            Your Privacy is <br />
            <span className="text-red-600 font-serif italic font-medium">
              Our Priority
            </span>
          </motion.h1>
          <p className="text-gray-400 mt-4 font-medium uppercase tracking-widest text-xs">
            Last Updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Left Side: Policy Navigation/Quick Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-8"
          >
            <div className="sticky top-32">
              <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight mb-6">
                Data Protection Summary
              </h2>
              <div className="space-y-4">
                {[
                  { icon: Eye, text: "Transparent Data Usage", color: "bg-blue-100 text-blue-600" },
                  { icon: Lock, text: "End-to-End Encryption", color: "bg-red-100 text-red-600" },
                  { icon: Globe, text: "Global Compliance", color: "bg-orange-100 text-orange-600" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100 bg-gray-50/50">
                    <div className={`w-10 h-10 ${item.color} rounded-xl flex items-center justify-center shrink-0`}>
                      <item.icon size={20} />
                    </div>
                    <span className="font-bold text-gray-800 text-sm tracking-wide">{item.text}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 p-8 bg-gradient-to-br from-red-600 to-blue-700 rounded-[2rem] text-white shadow-xl shadow-red-600/20">
                <h3 className="font-black uppercase text-xs tracking-[0.2em] mb-2">Need Clarity?</h3>
                <p className="text-sm opacity-90 mb-6 font-medium">If you have questions regarding your data, our legal team is ready to assist.</p>
                <button className="w-full py-3 bg-white text-black rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-gray-100 transition-colors">
                  Contact Privacy Team
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Policy Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-12"
          >
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              
              <section className="space-y-6">
                <div className="flex items-center gap-3">
                    <div className="h-px w-8 bg-red-600"></div>
                    <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tighter">01. Information We Collect</h2>
                </div>
                <p className="text-lg">
                  To provide seamless travel arrangements, we collect personal details including your name, contact information, and payment details. For international tours, we securely store travel documents such as passport and visa information.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
                    {['Personal Identifiers', 'Booking History', 'Passport Details', 'Payment Tokens'].map((item) => (
                        <li key={item} className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100 font-bold text-gray-800 text-sm">
                            <div className="w-2 h-2 rounded-full bg-red-600"></div> {item}
                        </li>
                    ))}
                </ul>
              </section>

              <section className="space-y-6 pt-8">
                <div className="flex items-center gap-3">
                    <div className="h-px w-8 bg-red-600"></div>
                    <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tighter">02. Data Usage</h2>
                </div>
                <p className="text-lg">
                  We use your data strictly for fulfilling travel bookings, sending itinerary updates, and improving our services. We do not sell your personal information to third-party advertisers.
                </p>
              </section>

              <section className="space-y-6 pt-8">
                <div className="flex items-center gap-3">
                    <div className="h-px w-8 bg-red-600"></div>
                    <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tighter">03. Security Protocols</h2>
                </div>
                <div className="bg-gray-50 border-2 border-dashed border-gray-200 p-8 rounded-[2.5rem] relative overflow-hidden">
                    <Lock className="absolute -right-4 -bottom-4 w-24 h-24 text-gray-100" />
                    <p className="relative z-10 italic text-gray-700 font-medium">
                        "We employ military-grade AES-256 encryption to ensure that your sensitive payment information and personal documentation remain private during every step of your journey."
                    </p>
                </div>
              </section>

              <section className="space-y-6 pt-8">
                <div className="flex items-center gap-3">
                    <div className="h-px w-8 bg-red-600"></div>
                    <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tighter">04. Your Rights</h2>
                </div>
                <p className="text-lg">
                  Under global data protection laws, you have the right to request access to your data, demand corrections, or request complete deletion of your profile from our systems.
                </p>
              </section>

            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default PrivacyPage;