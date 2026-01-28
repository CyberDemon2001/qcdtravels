"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { MapPin, Plane, Info, CheckCircle2, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import GlassNavbar from '@/components/GlassNavbar';
import Footer from '@/components/Footer';
import ToursCard from '@/components/ToursCard';
import { DESTINATIONS } from '@/data/destinations';


const DestinationDetail = () => {
  const params = useParams();
   const { slug } = useParams();
  const data = DESTINATIONS.find(dest => dest.slug === slug);

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
        <Info size={48} className="text-red-600" />
        <h1 className="text-2xl font-black uppercase">Destination not found!</h1>
        <a href="/destinations" className="text-red-600 font-bold underline">Return to Destinations</a>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <GlassNavbar />

      {/* --- CREATIVE HERO SECTION (Masked Text Effect) --- */}
      <section className="relative min-h-[50vh] lg:min-h-[60vh] w-full flex items-center justify-center overflow-hidden bg-black">
        {/* Background Layer: Blurred and Darkened */}
        <div className="absolute inset-0 z-0">
          <Image 
            src={data.image} 
            alt={data.name} 
            fill 
            className="object-cover blur-xs brightness-50 scale-105" 
          />
        </div>

        {/* Text Layer: Creative Image Mask */}
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* The "Masked" Heading */}
            <h1 
              className="text-[18vw] md:text-[16vw] font-black uppercase tracking-tighter leading-none select-none"
              style={{
                backgroundImage: `url(${data.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 20px 50px rgba(0,0,0,0.5))'
              }}
            >
              {data.name}
            </h1>
            
            {/* Tagline below the creative name */}
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-white text-lg md:text-2xl font-serif italic tracking-wide"
            >
              {data.tagline}
            </motion.p>
          </motion.div>
        </div>

        {/* Scroll Indicator Icon */}
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        >
          <div className="w-px h-12 bg-gradient-to-t from-red-600 to-transparent mx-auto" />
        </motion.div>
      </section>

      {/* --- ABOUT DESTINATION SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 rounded-full text-red-600 font-black text-[10px] uppercase tracking-[0.2em] mb-6">
              <Info className="w-3 h-3" />
              Know the region
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter uppercase mb-8">
              Experience <span className="text-red-600 font-serif italic font-medium">True</span> {data.name}
            </h2>
            <p className="text-gray-500 text-xl leading-relaxed mb-8">
              {data.about}
            </p>
            
            <div className="space-y-4">
              {data.highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 text-gray-800 font-bold">
                  <CheckCircle2 className="text-red-600 w-6 h-6" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Side Image with Border Design */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[500px] w-full rounded-[3rem] overflow-hidden border-[16px] border-gray-50 shadow-2xl">
               <Image src={data.image} alt="about" fill className="object-cover" />
            </div>
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-black text-white p-8 rounded-[2rem] shadow-2xl">
               <p className="text-4xl font-black text-red-600">42+</p>
               <p className="text-[10px] uppercase font-black tracking-widest text-gray-400">Handpicked Tours</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- TOURS IN THIS DESTINATION --- */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <h2 className="text-4xl font-black text-gray-900 uppercase tracking-tighter leading-none">
              Explore <span className="text-red-600">{data.name}</span> <br /> Tour Packages
            </h2>
            <Link href="/tours" className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-red-600 border-b-2 border-red-600 pb-1">
              View All Tours <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* You would filter your actual ALL_TOURS array here by destination */}
            {/* <ToursCard item={exampleTour} index={0} /> */}
            <p className="text-gray-400 italic">No tours available for this specific filter yet.</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default DestinationDetail;