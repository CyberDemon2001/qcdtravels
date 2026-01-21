"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiTag, FiArrowRight, FiCompass } from 'react-icons/fi';
import { Plane } from 'lucide-react';

const Offers = () => {
  return (
    <section className="relative w-full py-24 px-6 bg-gradient-to-br from-orange-500/80 via-white/50 to-orange-500/90 overflow-hidden font-['Inter_Variable']">
      
      {/* Background Decorative Text - Drifting animation */}
      <motion.div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl -z-10 opacity-[0.03] select-none pointer-events-none"
        animate={{ x: ["-48%", "-52%", "-48%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      >
        <h1 className="text-[15vw] font-black text-orange-900 whitespace-nowrap">
          SPECIAL OFFERS • SPECIAL OFFERS
        </h1>
      </motion.div>

      {/* Background Gradients to match brand */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/80 via-white to-orange-500/80 -z-20" />

      <div className="max-w-6xl mx-auto">
        
        {/* Main Heading */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 backdrop-blur-sm rounded-full text-orange-600 font-bold text-[10px] uppercase tracking-[0.2em] mb-4 shadow-sm"
          >
            <FiTag className="w-3 h-3" />
            Limited Time Only
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight leading-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Summer <span className="text-orange-500 font-serif italic font-medium">Flash</span> Deals
          </motion.h2>
          
          <motion.p 
            className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Handpicked experiences at prices that make you want to pack your bags today.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center relative">
          
          {/* Floating Compass Icon */}
          <motion.div 
            animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="hidden xl:block absolute -left-20 top-1/2 -translate-y-1/2 z-20"
          >
            <div className="w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center text-orange-500 border border-orange-50">
              <FiCompass size={32} />
            </div>
          </motion.div>

          {/* Card 1: Discount Offer */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -10 }}
            className="relative group w-full lg:w-1/2 rounded-[2.5rem] p-3 bg-white border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500"
          >
            <div className="relative h-80 overflow-hidden rounded-[2rem]">
              <Image 
                src="https://plus.unsplash.com/premium_photo-1726812029363-8dfd0cfca223?auto=format&fit=crop&w=800&q=80" 
                alt="Traveler Discount" 
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
            </div>
            
            {/* Info Bar */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-2xl flex justify-between items-center border border-white/50">
              <div>
                <p className="text-[10px] font-black text-orange-500 uppercase tracking-widest mb-1">Exclusive Promotion</p>
                <h3 className="text-xl font-black text-gray-900">Up to 30% Off!</h3>
              </div>
              <motion.button 
                whileHover={{ x: 5 }}
                className="w-12 h-12 bg-gray-900 text-white rounded-xl flex items-center justify-center hover:bg-orange-500 transition-colors shadow-lg"
              >
                <FiArrowRight size={20} />
              </motion.button>
            </div>
          </motion.div>

          {/* Card 2: Guide Offer */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            whileHover={{ y: -10 }}
            className="relative group w-full lg:w-1/2 rounded-[2.5rem] p-3 bg-white border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500"
          >
            <div className="relative h-80 overflow-hidden rounded-[2rem]">
              <Image 
                src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&q=80&w=800" 
                alt="Expert Guides" 
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
            </div>

            {/* Info Bar */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-2xl flex justify-between items-center border border-white/50">
              <div>
                <p className="text-[10px] font-black text-orange-500 uppercase tracking-widest mb-1">Local Expertise</p>
                <h3 className="text-xl font-black text-gray-900">Expert Trip Guides</h3>
              </div>
              <motion.button 
                whileHover={{ x: 5 }}
                className="w-12 h-12 bg-gray-900 text-white rounded-xl flex items-center justify-center hover:bg-orange-500 transition-colors shadow-lg"
              >
                <FiArrowRight size={20} />
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Brand Plane Icon */}
        <motion.div 
          className="flex justify-center mt-12 text-orange-500/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <Plane size={32} className="rotate-45" />
        </motion.div>
      </div>
    </section>
  );
};

export default Offers;