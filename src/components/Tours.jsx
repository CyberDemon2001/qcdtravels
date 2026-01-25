"use client"
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { Heart, MapPin, Star, ChevronLeft, ChevronRight, Award, Plane } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ToursCard from './ToursCard';

import 'swiper/css';
import 'swiper/css/navigation';


const Tours = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
      try {
        const res = await fetch("/api/tours", { cache: "no-store" });
        const data = await res.json();
        console.log("Fetched tours data:", data);
        setTours(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Failed to fetch tours", error);
      }
    };
    
    useEffect(() => {
      fetchTours();
    }, []);

  return (
    <div className="max-w-full mx-auto px-6 md:px-12 lg:px-24 py-24 font-['Inter_Variable'] relative bg-white">
      
      {/* Header Section */}
      <motion.div 
        className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full md:w-2/3">
          <motion.div 
            className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 rounded-full text-orange-500 font-bold text-[10px] uppercase tracking-[0.2em] mb-4"
          >
            <Award className="w-3 h-3" />
            Handpicked For You
          </motion.div>
          
          <motion.h2 
            className="text-4xl lg:text-6xl font-black text-gray-900 tracking-tight leading-tight flex items-center gap-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Our <span className="text-orange-500 font-serif italic font-medium">Top</span> Tours
            <Plane className="w-10 h-10 text-orange-500 hidden sm:block" />
          </motion.h2>
          
          <motion.p 
            className="text-gray-500 mt-4 text-lg leading-relaxed max-w-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Discover amazing destinations that travelers love. Book now and save up to 30% on your next trip!
          </motion.p>
        </div>
        
        <Link href="/tours">
        <motion.button 
          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl flex items-center gap-4 transition-all duration-300 text-xs font-black shadow-lg uppercase tracking-widest"
          whileHover={{ y: -5 }}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          View All Tours
          <ChevronRight size={18} />
        </motion.button>
        </Link>
      </motion.div>
      

      {/* Slider Section */}
      <div className="relative">
        <div className="flex gap-3 mb-6 justify-end">
          <button className="prev-btn w-12 h-12 bg-white hover:bg-orange-500 hover:text-white shadow-md rounded-xl flex items-center justify-center text-gray-900 transition-all border border-gray-100">
            <ChevronLeft size={20} strokeWidth={3} />
          </button>
          <button className="next-btn w-12 h-12 bg-white hover:bg-orange-500 hover:text-white shadow-md rounded-xl flex items-center justify-center text-gray-900 transition-all border border-gray-100">
            <ChevronRight size={20} strokeWidth={3} />
          </button>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          navigation={{ prevEl: '.prev-btn', nextEl: '.next-btn' }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="pb-12"
        >
          {tours.map((item, index) => (
            <SwiperSlide key={item.id}>
              <ToursCard item={item} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom Pagination Dots */}
      <div className="flex justify-center gap-3 mt-4">
        {TOURS.map((_, index) => (
          <motion.div
            key={index}
            className={`h-2.5 rounded-full transition-all duration-500 ${
              index === activeIndex ? 'w-10 bg-orange-500' : 'w-2.5 bg-gray-200'
            }`}
            layoutId="activeDot"
          />
        ))}
      </div>
    </div>
  );
};

export default Tours;