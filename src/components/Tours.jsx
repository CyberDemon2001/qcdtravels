"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { Heart, MapPin, Star, ChevronLeft, ChevronRight, Award, Plane } from 'lucide-react';
import { motion } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/navigation';

const TOURS = [
  {
    id: 1,
    tag: "Best seller",
    tagColor: "bg-gradient-to-r from-blue-600 to-blue-800",
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80",
    title: "London Westminster Experience",
    location: "Westminster, London, UK",
    price: "72",
    rating: "4.9",
    reviews: "2,612",
  },
  {
    id: 2,
    tag: "Trending",
    tagColor: "bg-gradient-to-r from-emerald-400 to-emerald-600",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
    title: "Paris Romantic Getaway",
    location: "Eiffel Tower, Paris",
    price: "89",
    rating: "4.8",
    reviews: "3,124",
  },
  {
    id: 3,
    tag: "Best seller",
    tagColor: "bg-gradient-to-r from-blue-600 to-blue-800",
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80",
    title: "New York City Adventure",
    location: "Manhattan, NYC",
    price: "129",
    rating: "4.9",
    reviews: "5,892",
  },
  {
    id: 4,
    tag: "Premium",
    tagColor: "bg-gradient-to-r from-purple-500 to-purple-600",
    image: "https://images.unsplash.com/photo-1551882547-ff43c61f3c33?auto=format&fit=crop&w=800&q=80",
    title: "Tokyo Modern Escape",
    location: "Shibuya, Tokyo",
    price: "199",
    priceDiscount: "249",
    rating: "4.7",
    reviews: "1,847",
  }
];

const ToursCard = ({ item, index }) => {
  return (
    <motion.div 
      className="group relative pt-8 pb-12 pr-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Image Container */}
      <div className="relative h-[300px] w-full rounded-3xl overflow-hidden shadow-2xl z-0 bg-slate-100">
        {item.tag && (
          <div className={`absolute top-4 left-1/2 -translate-x-1/2 z-30 px-5 py-2 rounded-2xl text-white text-[10px] font-bold uppercase tracking-widest shadow-lg ${item.tagColor}`}>
            {item.tag}
          </div>
        )}
        <motion.img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.8 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      </div>

      {/* Content Card */}
      <motion.div 
        className="relative z-20 -mt-16 ml-6 w-[98%] bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-xl border border-white/50"
        whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 1)" }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <h3 className="font-bold text-base text-gray-900 leading-tight mb-2 line-clamp-2 group-hover:text-orange-500 transition-colors">
          {item.title}
        </h3>
        
        <div className="flex items-center gap-1 text-gray-500 mb-3">
          <MapPin size={14} className="text-orange-500" />
          <span className="text-xs font-medium">{item.location}</span>
        </div>

        <div className="mb-4">
          {item.priceDiscount && <span className="text-xs text-gray-400 line-through mr-1">US${item.priceDiscount}</span>}
          <div className="flex items-baseline gap-1">
            <span className="text-orange-500 font-black text-xl">US${item.price}</span>
            <span className="text-[10px] bg-orange-100 text-orange-600 px-2 py-0.5 rounded-lg font-bold uppercase tracking-wider">/night</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-gray-900 text-white px-2.5 py-1 rounded-lg text-xs font-bold">
            <Star size={12} fill="#fbbf24" className="text-yellow-400" />
            {item.rating}
          </div>
          <span className="text-gray-400 text-[11px] font-medium">({item.reviews} reviews)</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

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