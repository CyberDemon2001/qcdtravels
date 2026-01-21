"use client"
import React from 'react';
import { MapPin, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ToursCard = ({ item, index }) => {
  return (
    <motion.div 
      className="group relative pt-8 pb-12 pr-4 md:pr-8"
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
        
        {/* Next.js Optimized Image */}
        <Image 
          src={item.image} 
          alt={item.title} 
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      </div>

      {/* Content Card */}
      <motion.div 
        className="relative z-20 -mt-16 ml-6 w-[92%] bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-xl border border-white/50"
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

export default ToursCard;