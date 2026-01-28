"use client"
import React from 'react';
import Image from 'next/image'; // Optimized Image Component
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight, ArrowRight, Plane, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { DESTINATIONS } from '@/data/destinations';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const PopularDestinations = () => {
  return (
    <section className="max-w-full mx-auto px-6 md:px-12 lg:px-24 py-10 lg:py-24 bg-white overflow-hidden">
      
      {/* Header Row */}
      <motion.div 
        className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full md:w-2/3">
          <motion.div 
            className="inline-flex items-center gap-2 px-3 py-1 bg-red-100 rounded-full text-red-600 font-bold text-[10px] uppercase tracking-[0.2em] mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Award className="w-3 h-3" />
            Global Hotspots
          </motion.div>
          
          <motion.h2 
            className="text-4xl lg:text-6xl font-black text-gray-900 tracking-tight leading-tight flex items-center gap-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Popular <span className="text-red-600 font-serif italic font-medium">Getaways</span>
            <Plane className="w-9 h-9 text-red-600 hidden sm:block" strokeWidth={2.5} />
          </motion.h2>
          
          <motion.p 
            className="text-gray-500 mt-4 text-lg leading-relaxed max-w-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Join thousands of travelers exploring these top-rated world-class destinations this season.
          </motion.p>
        </div>
        <Link href="/destinations">
        <motion.button 
          className="bg-red-600 hover:bg-red-600 text-white px-8 py-4 rounded-2xl flex items-center gap-4 transition-all duration-300 text-xs font-black shadow-lg uppercase tracking-widest"
          whileHover={{ y: -5 }}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          View All
          <ArrowRight size={18} />
        </motion.button>
        </Link>

      </motion.div>

      {/* Slider Container */}
      <div className="relative group">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: '.popular-prev',
            nextEl: '.popular-next',
          }}
          pagination={{ 
            clickable: true,
            el: '.popular-pagination'
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="pb-12 !overflow-visible" // Added overflow visible for the hover lift effect
        >
          {DESTINATIONS.map((city, index) => (
            <SwiperSlide key={city.id}>
              <Link key={city.id} href={`/destinations/${city.slug}`}>
              <motion.div 
                className="relative h-[450px] rounded-[2.5rem] overflow-hidden group/card cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -15 }}
              >
                {/* Background Image using Next.js Image */}
                <Image 
                  src={city.image} 
                  alt={city.name} 
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover/card:scale-110"
                />
                
                {/* Label Overlay */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[85%] z-10">
                  <motion.div 
                    className="bg-red-600 hover:bg-red-600 transition-colors text-white text-center py-3 rounded-2xl font-bold text-xl shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {city.name}
                  </motion.div>
                </div>

                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover/card:opacity-80 transition-opacity duration-500" />
              </motion.div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Controls */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button className="popular-prev p-2 text-gray-900 hover:text-red-600 transition-colors disabled:opacity-30">
            <ChevronLeft size={32} strokeWidth={2.5} />
          </button>
          
          <div className="popular-pagination !static flex gap-2 w-auto"></div>
          
          <button className="popular-next p-2 text-gray-900 hover:text-red-600 transition-colors disabled:opacity-30">
            <ChevronRight size={32} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      <style jsx global>{`
        .popular-pagination .swiper-pagination-bullet {
          background: #cbd5e1;
          opacity: 1;
          width: 8px;
          height: 8px;
          transition: all 0.3s;
        }
        .popular-pagination .swiper-pagination-bullet-active {
          background: #f97316; /* Matches red-600 */
          width: 24px;
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
};

export default PopularDestinations;