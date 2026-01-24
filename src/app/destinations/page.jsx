"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plane, Map, Compass, ArrowUpRight, Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import GlassNavbar from '@/components/GlassNavbar';
import Footer from '@/components/Footer';

const DESTINATIONS = [
  {
    id: 1,
    name: "Indonesia",
    count: "42 Tours",
    image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80",
    slug: "indonesia",
    description: "Tropical paradise with over 17,000 islands."
  },
  {
    id: 2,
    name: "Thailand",
    count: "38 Tours",
    image: "https://images.unsplash.com/photo-1583491470869-ca0b9fa90216?auto=format&fit=crop&w=800&q=80",
    slug: "thailand",
    description: "The land of smiles, temples, and turquoise waters."
  },
  {
    id: 3,
    name: "India",
    count: "56 Tours",
    image: "https://images.unsplash.com/photo-1733805569810-36f5bad3fbad?auto=format&fit=crop&w=800&q=80",
    slug: "india",
    description: "A land of cultural heritage and vibrant diversity."
  },
  {
    id: 4,
    name: "London",
    count: "24 Tours",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80",
    slug: "london",
    description: "Classic European charm meets modern global culture."
  },
  {
    id: 5,
    name: "Dubai",
    count: "31 Tours",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80",
    slug: "dubai",
    description: "Unmatched luxury and futuristic architecture."
  },
];

const DestinationsPage = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <main className="min-h-screen bg-white">
      <GlassNavbar />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-40 pb-20 bg-black overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
             {/* Decorative Map Element */}
             <Map className="w-full h-full text-orange-500 stroke-[0.5]" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/20 rounded-full text-orange-500 font-bold text-[10px] uppercase tracking-[0.3em] mb-6"
          >
            <Compass className="w-3 h-3 animate-spin-slow" />
            Where to next?
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.9]"
          >
            Our World <br />
            <span className="text-orange-500 font-serif italic font-medium">Destinations</span>
          </motion.h1>
          <p className="text-gray-400 mt-8 max-w-xl text-lg leading-relaxed">
            From the bustling streets of London to the serene beaches of Bali, choose your next chapter across our global network.
          </p>
        </div>
      </section>

      {/* --- GRID LAYOUT --- */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DESTINATIONS.map((dest, idx) => (
            <Link key={dest.id} href={`/destinations/${dest.slug}`}>
              <motion.div 
                className="group relative h-[500px] rounded-[3rem] overflow-hidden cursor-pointer shadow-2xl"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onMouseEnter={() => setHoveredId(dest.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Background Image */}
                <Image 
                  src={dest.image} 
                  alt={dest.name} 
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
                
                {/* Content */}
                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-orange-500 text-[10px] font-black uppercase tracking-widest mb-4">
                        {dest.count}
                      </span>
                      <h3 className="text-4xl font-black text-white tracking-tighter uppercase group-hover:text-orange-500 transition-colors">
                        {dest.name}
                      </h3>
                      <p className="text-gray-300 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                        {dest.description}
                      </p>
                    </div>
                    
                    <div className="bg-orange-500 p-4 rounded-2xl text-white transform translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <ArrowUpRight size={24} />
                    </div>
                  </div>
                </div>

                {/* Subtle border glow on hover */}
                <div className="absolute inset-0 border-0 group-hover:border-[12px] border-white/5 transition-all duration-500 rounded-[3rem]" />
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-24">
        <div className="bg-orange-500 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden group">
          <Plane className="absolute -top-10 -right-10 w-64 h-64 text-white/10 group-hover:rotate-12 transition-transform duration-700" />
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase mb-6 relative z-10">
            Don't see your <br /> destination?
          </h2>
          <p className="text-orange-100 font-bold mb-10 relative z-10 max-w-lg mx-auto">
            We offer custom private tours to any country in the world. Contact our advisors to plan your specific dream.
          </p>
          <Link href="/contact" className="inline-block px-10 py-5 bg-black text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all relative z-10 active:scale-95">
            Request Custom Trip
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default DestinationsPage;