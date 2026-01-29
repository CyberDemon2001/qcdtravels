"use client";
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const destinations = [
  { id: 1, name: "Arunachal", suffix: "Pradesh", image: "https://images.unsplash.com/photo-1571401835393-8c5f35328320?auto=format&fit=crop&w=1200&q=80", desc: "The land of dawn-lit mountains." },
  { id: 2, name: "Assam", suffix: "Tea Hub", image: "https://images.unsplash.com/photo-1684249839530-70bc84358ab7?auto=format&fit=crop&w=1200&q=80", desc: "Gateway to the Northeast and wildlife." },
  { id: 3, name: "Meghalaya", suffix: "Clouds", image: "https://images.unsplash.com/photo-1552985721-bb190b807a1c?auto=format&fit=crop&w=1200&q=80", desc: "The wettest place on the planet." },
  { id: 4, name: "Manipur", suffix: "Jewel", image: "https://plus.unsplash.com/premium_photo-1697729690458-2d64ca777c04?auto=format&fit=crop&w=1200&q=80", desc: "Floating islands and vibrant culture." },
  { id: 5, name: "Mizoram", suffix: "Highlands", image: "https://images.unsplash.com/photo-1741972584467-bceac8944ac0?auto=format&fit=crop&w=1200&q=80", desc: "The land of the rolling hills." },
  { id: 6, name: "Nagaland", suffix: "Tribes", image: "https://images.unsplash.com/photo-1700042629181-e6b100894f6f?auto=format&fit=crop&w=1200&q=80", desc: "Ancient traditions and hornbill festivals." },
  { id: 7, name: "Tripura", suffix: "Palaces", image: "https://images.unsplash.com/photo-1695150854909-a00039a284b8?auto=format&fit=crop&w=1200&q=80", desc: "Rich history and architectural marvels." },
];

const SevenSistersBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === destinations.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? destinations.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const getVisibleCards = () => {
    const prev = (currentIndex - 1 + destinations.length) % destinations.length;
    const next = (currentIndex + 1) % destinations.length;
    return [
      { ...destinations[prev], pos: 'left' },
      { ...destinations[currentIndex], pos: 'middle' },
      { ...destinations[next], pos: 'right' }
    ];
  };

  return (
    <div className="w-full min-h-screen lg:h-screen bg-[#1a1310] overflow-hidden font-sans relative">
      
      {/* 1. DYNAMIC BACKGROUND ENGINE */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image 
              src={destinations[currentIndex].image}
              alt="Background"
              fill
              className="object-cover"
              priority
            />
            {/* Optimized overlays for mobile readability */}
            <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#1a1310] via-[#1a1310]/80 lg:via-[#1a1310]/60 to-transparent" />
            <div className="absolute inset-0 bg-black/40 lg:bg-black/20" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 2. NAVIGATION OVERLAY (Desktop Only) */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-8">
        <span className="text-white/40 font-bold rotate-90 tracking-widest text-xs uppercase">Scroll</span>
        <div className="w-px h-24 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
        <div className="text-white flex flex-col items-center">
            <span className="text-2xl font-black italic">0{currentIndex + 1}</span>
            <div className="w-8 h-[2px] bg-red-600 my-2" />
            <span className="text-white/40 text-xs font-bold">0{destinations.length}</span>
        </div>
      </div>

      <div className="relative z-30 h-full flex flex-col lg:flex-row pt-12 lg:pt-0">
        
        {/* 3. LEFT CONTENT: TEXT & STORY */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-12 lg:px-24 mb-12 lg:mb-0">
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             key={`text-${currentIndex}`}
          >
            <div className="relative">
              <span className="text-red-600 font-bold tracking-[0.3em] text-[10px] md:text-xs uppercase mb-2 md:mb-4 block">
                Northeast India
              </span>
              <h2 className="text-white text-4xl md:text-6xl lg:text-8xl font-black uppercase leading-tight lg:leading-none tracking-tighter mb-4">
                Explore <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40 italic font-serif lowercase">the</span> <br/>
                <span className="text-red-600">#Unexplored</span>
              </h2>
              
              <p className="text-white/70 max-w-xs md:max-w-sm text-xs md:text-sm leading-relaxed mb-6 md:mb-8 border-l-2 border-red-600 pl-4">
                {destinations[currentIndex].desc}
              </p>

              <button className="relative px-6 py-3 md:px-10 md:py-5 bg-black/40 border border-white/10 rounded-sm overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                <span className="relative text-sm md:text-xl font-bold uppercase tracking-[0.2em] text-white">
                  The <span className="text-red-600">Seven</span> Sisters
                </span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* 4. RIGHT CONTENT: THE INTERACTIVE FAN */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center relative pb-12 lg:pb-0">
          
          {/* Active State Name */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mb-6 lg:mb-12 text-center"
            >
              <h2 className="text-white text-3xl lg:text-6xl font-black uppercase tracking-tighter italic">
                {destinations[currentIndex].name}
              </h2>
            </motion.div>
          </AnimatePresence>

          {/* The Stack/Fan */}
          <div className="relative flex items-center justify-center w-full h-[320px] md:h-[400px]">
            {getVisibleCards().map((dest) => {
              const isMiddle = dest.pos === 'middle';
              return (
                <motion.div
                  key={dest.id}
                  className={`
                    absolute w-[180px] md:w-[240px] lg:w-[280px] h-[260px] md:h-[350px] lg:h-[420px] 
                    rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl
                    border border-white/10
                  `}
                  animate={{ 
                    // Reduced translation on mobile to keep cards on screen
                    x: dest.pos === 'left' ? '-45%' : dest.pos === 'right' ? '45%' : '0%',
                    rotate: dest.pos === 'left' ? -10 : dest.pos === 'right' ? 10 : 0,
                    scale: isMiddle ? 1 : 0.85,
                    opacity: isMiddle ? 1 : 0.3,
                    zIndex: isMiddle ? 30 : 10
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <Image src={dest.image} alt={dest.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  {isMiddle && (
                    <div className="absolute bottom-6 left-6 text-white">
                      <div className="flex items-center gap-2 mb-1">
                        <MapPin size={12} className="text-red-500" />
                        <span className="text-[8px] md:text-[10px] uppercase tracking-widest font-bold">Discover</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-black uppercase">{dest.name}</h3>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Controls */}
         {/* Controls */}
          <div className="flex gap-4 mt-8 lg:mt-12 z-50">
            <button 
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="p-3 md:p-4 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all"
            >
              {/* Use className for responsive sizing instead of the size prop */}
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button 
              onClick={nextSlide}
              aria-label="Next Slide"
              className="p-3 md:p-4 rounded-full bg-red-600 text-white hover:bg-red-700 transition-all shadow-lg"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default SevenSistersBanner;