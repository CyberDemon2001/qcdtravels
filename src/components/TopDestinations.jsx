"use client"
import React from 'react';
import Image from 'next/image';
import { MapPin, Star, Clock, ArrowRight, Award } from 'lucide-react';
import { motion } from 'framer-motion';
  import Link from 'next/link';

const destinations = [
  {
    id: 1,
    name: "Varanasi, Uttar Pradesh",
    description: "The spiritual heart of India, famous for its ancient ghats and evening Ganga Aarti.",
    image: "https://images.unsplash.com/photo-1561361058-c24cecae35ca?auto=format&fit=crop&w=800&q=80",
    category: "Spiritual",
    rating: 4.9,
    duration: "3-4 Days"
  },
  {
    id: 2,
    name: "Leh-Ladakh, Himalayas",
    description: "A high-altitude desert offering breathtaking landscapes and vibrant Buddhist culture.",
    image: "https://images.unsplash.com/photo-1617824077360-7a77db40aae1?auto=format&fit=crop&w=800&q=80",
    category: "Adventure",
    rating: 4.8,
    duration: "6-8 Days"
  },
  {
    id: 3,
    name: "Munnar, Kerala",
    description: "Rolling tea plantations and misty hills in 'God's Own Country'. Perfect for nature lovers.",
    image: "https://images.unsplash.com/photo-1592726129893-0b0ff79c8a2b?auto=format&fit=crop&w=800&q=80",
    category: "Nature",
    rating: 4.7,
    duration: "4-5 Days"
  }
];

const TopDestinations = () => {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-10 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          
          {/* Left Side: Sticky Content */}
          <motion.div 
            className="w-full lg:w-1/4 lg:sticky lg:top-32"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 rounded-full text-orange-600 font-bold text-[10px] uppercase tracking-[0.2em] mb-6">
              <Award className="w-3 h-3" />
              Top Picked
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-black mb-6 leading-tight text-gray-900 tracking-tight">
              Explore The <br />
              <span className="text-orange-500 font-serif italic font-medium">Beauty</span> of India
            </h2>
            
            <p className="text-gray-500 text-base leading-relaxed mb-10 max-w-xs">
              From snow-capped peaks to tropical shores, discover locations handpicked for the traveler in you.
            </p>

            {/* <Link href="/destinations">
            <motion.button 
              className="hidden lg:flex items-center gap-3 text-sm font-black text-gray-900 hover:text-orange-500 transition-all group"
              whileHover={{ x: 5 }}
            >
              VIEW ALL DESTINATIONS
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-all">
                <ArrowRight className="w-5 h-5" />
              </div>
            </motion.button>
            </Link> */}
          </motion.div>

          {/* Right Side: Animated Grid */}
          <div className="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-8">
            {destinations.map((dest, index) => (
              <motion.div 
                key={dest.id} 
                className="group bg-white rounded-[2.5rem] p-3 border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-orange-100/40 hover:border-orange-100 transition-all duration-500"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10 }}
              >
                {/* Image Container */}
                <div className="relative h-72 overflow-hidden rounded-[2rem]">
                  <Image 
                    src={dest.image} 
                    alt={dest.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-black text-orange-600 uppercase tracking-widest shadow-lg z-10">
                    {dest.category}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-5">
                  <div className="flex items-center text-gray-400 text-[10px] font-black uppercase tracking-[0.15em] mb-2">
                    <MapPin size={14} className="mr-1 text-orange-500" />
                    <span>{dest.name.split(',')[1]}</span>
                  </div>
                  
                  <h3 className="text-xl font-black text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                    {dest.name.split(',')[0]}
                  </h3>
                  
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2">
                    {dest.description}
                  </p>

                  {/* Footer Stats */}
                  <div className="flex items-center justify-between pt-5 border-t border-gray-50">
                    <div className="flex items-center text-[11px] font-black text-gray-700 uppercase">
                      <Clock size={16} className="mr-2 text-orange-500" />
                      {dest.duration}
                    </div>
                    <div className="flex items-center bg-gray-900 px-3 py-1 rounded-lg text-white text-xs font-black">
                      <Star size={14} className="mr-1 fill-yellow-500 text-yellow-500" />
                      {dest.rating}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default TopDestinations;