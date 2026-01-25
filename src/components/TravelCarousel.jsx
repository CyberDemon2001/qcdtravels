"use client";
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Navigation } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiAward } from 'react-icons/fi';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/effect-coverflow';

const SLIDES = [
  {
    id: 1,
    title: "INDONESIA",
    description: "As the largest archipelagic country in the world, Indonesia is blessed with so many different people, cultures, and landscapes.",
    image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80",
    location: "Broken Beach, Bali"
  },
  {
    id: 2,
    title: "THAILAND",
    description: "Thailand is a Southeast Asian country known for tropical beaches, opulent royal palaces, and ancient ruins.",
    image: "https://www.theluxurysignature.com/wp-content/uploads/2015/06/Wat-Phra-Yai-Big-Buddha-Temple-The-Luxury-Signature.jpg",
    location: "Buddha Temple, Thailand"
  },
  {
    id: 3,
    title: "KERALA",
    description: "Known as God's Own Country, Kerala is famous for its backwaters, palm-lined beaches, and spice plantations.",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80",
    location: "Backwaters, Kerala"
  }
];

const TravelCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white">
      
      {/* 1. Background Layer - Using Next.js Image */}
      <AnimatePresence mode='wait'>
        <motion.div
          key={SLIDES[activeIndex].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <Image 
            src={SLIDES[activeIndex].image} 
            alt="background"
            fill
            priority // Important for Hero sections
            className="object-cover brightness-[0.4]"
          />
        </motion.div>
      </AnimatePresence>

      {/* 2. Left Side Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-14 lg:px-24 w-full lg:w-1/2">
        <AnimatePresence mode='wait'>
          <motion.div
            key={SLIDES[activeIndex].id}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 rounded-full text-orange-500 font-bold text-[10px] uppercase tracking-[0.3em] mb-6">
              <FiAward className="w-3 h-3" />
              World Class
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] mb-8">
              {SLIDES[activeIndex].title}
              <span className="block text-orange-500 font-serif italic font-medium opacity-90 text-[0.5em] tracking-normal mt-4">
                Grand Adventure
              </span>
            </h1>

            <p className="text-lg max-w-md text-gray-300 leading-relaxed mb-6 lg:mb-10">
              {SLIDES[activeIndex].description}
            </p>

            <button className="px-10 py-4 bg-orange-500 hover:bg-orange-600 transition-all rounded-2xl flex items-center gap-4 w-fit shadow-xl shadow-orange-500/20 font-black uppercase tracking-widest text-xs">
              Explore Now <FiArrowRight size={18} />
            </button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 3. Swiper logic remains mostly the same, but use <Image /> for cards too */}
      <div className="absolute right-0 bottom-24 lg:bottom-12 z-20 w-1/2 lg:w-9/20 overflow-visible">
        <Swiper
          modules={[EffectCoverflow, Navigation, Autoplay]}
          effect={'coverflow'}
          slidesPerView={2.5}
          spaceBetween={-60}
          autoplay={{ delay: 4000 }}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 80,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="mySwiper !overflow-visible"
        >
          {SLIDES.map((slide) => (
            <SwiperSlide key={slide.id} className="rounded-3xl overflow-hidden group">
              <div className="relative aspect-[13/20] lg:aspect-[3/4] rounded-3xl overflow-hidden border border-white/20 shadow-2xl transition-transform duration-500 group-hover:scale-105">
                <Image 
                  src={slide.image} 
                  alt={slide.location}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <p className="text-xs font-black text-orange-500 uppercase tracking-widest mb-1">{slide.location}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      {/* 4. Brand-Aligned Progress Bar */}
      <div className="absolute lg:left-10 left-1 top-1/2 -translate-y-1/2 flex flex-col items-center gap-8 z-20">
        <span className="lg:text-[12px] text-[10xl] font-black text-orange-500 uppercase tracking-widest rotate-90 mb-4">
            0{activeIndex + 1} / 0{SLIDES.length}
        </span>
        <div className="w-[1.5px] h-32 bg-white/10 relative rounded-full">
          <motion.div 
            className="absolute top-0 w-full bg-orange-500"
            animate={{ height: `${((activeIndex + 1) / SLIDES.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default TravelCarousel;