"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Award, Globe, Users, Calendar } from 'lucide-react';

// Next.js handles these imports as static objects with dimensions
import image1 from '../../../public/assets/hero/image-1.webp'; 
import image2 from '../../../public/assets/hero/image-2.avif';
import image3 from '../../../public/assets/hero/image-3.jpg';

const About = () => {
  return (
    <section className="max-w-full mx-auto px-6 py-24 relative overflow-hidden bg-white">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-white to-orange-500/10 pointer-events-none" />
      
      {/* Decorative floating particles */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-orange-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
      <div className="absolute bottom-32 left-24 w-96 h-96 bg-teal-400/5 rounded-full mix-blend-multiply filter blur-2xl animate-pulse delay-1000" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">

        {/* LEFT SIDE: OVERLAPPING IMAGES */}
        <div className="relative h-[550px] w-full max-w-[550px] mx-auto lg:mx-0">
          
          {/* Main Large Image */}
          <motion.div 
            className="absolute top-6 left-0 w-[65%] h-[90%] rounded-[3rem] overflow-hidden shadow-2xl z-20 border-8 border-white/80 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ y: -8 }}
          >
            <Image 
              src={image1} 
              alt="Venice" 
              placeholder="blur"
              className="object-cover transition-transform duration-500 hover:scale-110"
              fill
              sizes="(max-width: 768px) 60vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          </motion.div>
          
          {/* Top Right Small Image */}
          <motion.div 
            className="absolute top-8 right-6 w-[42%] h-[42%] rounded-[2.5rem] overflow-hidden shadow-2xl z-30 border-8 border-white/90"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.08, rotate: 2 }}
          >
            <Image 
              src={image2} 
              alt="Beach" 
              placeholder="blur"
              className="object-cover"
              fill
              sizes="20vw"
            />
          </motion.div>

          {/* Bottom Right Medium Image */}
          <motion.div 
            className="absolute bottom-4 right-12 w-[52%] h-[60%] rounded-[2.5rem] overflow-hidden shadow-2xl z-40 border-8 border-white/90"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.06, rotate: -2 }}
          >
            <Image 
              src={image3} 
              alt="Hot air balloons" 
              placeholder="blur"
              className="object-cover"
              fill
              sizes="30vw"
            />
          </motion.div>

          {/* Decorative shine effect */}
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-orange-200/20 rounded-full blur-xl -z-10 animate-pulse" />
        </div>

        {/* RIGHT SIDE: CONTENT */}
        <motion.div 
          className="flex flex-col lg:pl-12"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-100 rounded-full text-orange-600 font-bold text-[11px] uppercase tracking-[0.2em] mb-8 self-start shadow-sm">
            <Award className="w-3.5 h-3.5" />
            Our Story
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-black text-gray-900 leading-tight tracking-tight mb-8">
            Experience The <br />
            <span className="text-orange-500 font-serif italic font-medium">Beautiful</span> Destinations
          </h2>
          
          <p className="text-xl text-gray-700 leading-relaxed max-w-xl mb-12">
            Let's choose your dream destinations here. We provide the best curated spots and exclusive offers every week for our global travelers.
          </p>
          
          {/* Stats Cards */}
          <div className="flex flex-wrap md:flex-nowrap gap-4">
            {[
              { label: 'Explorers', value: '2000+', icon: Users },
              { label: 'Destinations', value: '100+', icon: Globe },
              { label: 'Experience', value: '20+', icon: Calendar },
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                className="group flex-1 min-w-[140px] p-6 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-orange-200/30 hover:border-orange-200 transition-all duration-500"
                whileHover={{ y: -10 }}
              >
                <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-500 flex items-center justify-center mb-5 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                  <stat.icon size={22} />
                </div>
                <h4 className="text-3xl font-black text-gray-900 mb-1 leading-none group-hover:text-orange-600 transition-colors">
                  {stat.value}
                </h4>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;