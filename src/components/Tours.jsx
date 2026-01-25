"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { Heart, MapPin, Star, ChevronLeft, ChevronRight, Award, Plane } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ToursCard from './ToursCard';

import 'swiper/css';
import 'swiper/css/navigation';

const TOURS = [
  {
    id: 1,
    title: "London Westminster Experience",
    overview:
      "Explore the heart of London with our premium Westminster experience. From the historic Big Ben to the majesty of Westminster Abbey, this tour offers an intimate look at the city's most iconic landmarks.",
    imageURL:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80",
    duration: {
      days: 4,
      nights: 3,
    },
    startDate: "2026-05-10T00:00:00.000Z",
    endDate: "2026-05-14T00:00:00.000Z",
    startingPrice: 7200,
    itinerary: [
      { city: "Westminster", days: 1 },
      { city: "London City", days: 2 },
    ],
    available: true,
    isActive: true,
  },

  {
    id: 2,
    title: "Paris Romantic Getaway",
    overview:
      "Indulge in the romance of Paris with a carefully curated getaway featuring the Eiffel Tower, charming cafés, and unforgettable city views. Perfect for couples seeking elegance and culture.",
    imageURL:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
    duration: {
      days: 3,
      nights: 2,
    },
    startDate: "2026-06-01T00:00:00.000Z",
    endDate: "2026-06-04T00:00:00.000Z",
    startingPrice: 8900,
    itinerary: [{ city: "Paris", days: 3 }],
    available: true,
    isActive: true,
  },

  {
    id: 3,
    title: "New York City Adventure",
    overview:
      "Experience the energy of New York City with an action-packed adventure through Manhattan. From iconic skyscrapers to vibrant neighborhoods, this tour captures the true NYC spirit.",
    imageURL:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80",
    duration: {
      days: 5,
      nights: 4,
    },
    startDate: "2026-07-15T00:00:00.000Z",
    endDate: "2026-07-20T00:00:00.000Z",
    startingPrice: 12900,
    itinerary: [{ city: "Manhattan", days: 5 }],
    available: true,
    isActive: true,
  },

  {
    id: 4,
    title: "Tokyo Modern Escape",
    overview:
      "Dive into the future-forward charm of Tokyo with a modern escape through Shibuya and the city’s cultural hotspots. A perfect blend of tradition, technology, and urban excitement.",
    imageURL:
      "https://images.unsplash.com/photo-1551882547-ff43c61f3c33?auto=format&fit=crop&w=800&q=80",
    duration: {
      days: 6,
      nights: 5,
    },
    startDate: "2026-09-10T00:00:00.000Z",
    endDate: "2026-09-16T00:00:00.000Z",
    startingPrice: 19900,
    itinerary: [
      { city: "Shibuya", days: 3 },
      { city: "Tokyo City", days: 3 },
    ],
    available: true,
    isActive: true,
  },
];


const Tours = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

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
          {TOURS.map((item, index) => (
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