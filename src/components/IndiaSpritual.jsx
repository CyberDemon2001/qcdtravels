"use client"
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { MapPin, ChevronLeft, ChevronRight, Flower2 } from 'lucide-react';

const spiritualDestinations = [
  { id: 1, name: "Char Dham Uttrakhand", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80", tag: "Most Sacred" },
  { id: 2, name: "12 Jyotirlinga", image: "https://images.unsplash.com/photo-1620021516086-44474932069b?auto=format&fit=crop&w=800&q=80", tag: "Shiva Tour" },
  { id: 3, name: "Ayodhya & Kashi", image: "https://images.unsplash.com/photo-1616081729003-8869c4f74676?auto=format&fit=crop&w=800&q=80", tag: "Ram Janmabhoomi" },
  { id: 4, name: "Vaishno Devi", image: "https://images.unsplash.com/photo-1596395349424-6447781f8f70?auto=format&fit=crop&w=800&q=80", tag: "Mata Rani" },
  { id: 5, name: "Devi Darshan", image: "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?auto=format&fit=crop&w=800&q=80", tag: "Power Shakti" },
  { id: 6, name: "Golden Temple", image: "https://images.unsplash.com/photo-1514222139-b776f2acf07d?auto=format&fit=crop&w=800&q=80", tag: "Peace" },
];

const IndiaSpiritual = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsVisible, setItemsVisible] = useState(5);

  // Responsive logic: Update visible items based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsVisible(1.2); // Mobile: show 1 full card + peek at next
      else if (window.innerWidth < 1024) setItemsVisible(3); // Tablet: 3 cards
      else setItemsVisible(5); // Desktop: 5 cards
    };

    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = spiritualDestinations.length - Math.floor(itemsVisible);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Auto-scroll logic (2 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 2000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="min-h-screen font-sans py-12 text-[#2d333f] bg-white overflow-x-hidden">
      <main className="w-full mx-auto relative">
        
        {/* Hero Banner - Height adjusted for mobile */}
        <div className="relative h-[400px] md:h-[480px] mx-4 md:mx-10 lg:mx-20 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl">
          <Image 
            src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=2000&q=80"
            alt="Himalayas"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/70 md:from-red-900/50 to-transparent" />
          
          <div className="absolute bottom-10 md:top-20 left-6 md:left-12 text-white z-10 pr-6">
            <div className="flex items-center gap-2 mb-2 md:mb-4 text-orange-200">
               <Flower2 className="w-4 h-4 md:w-5 md:h-5" />
               <span className="uppercase tracking-widest text-[10px] md:text-sm font-bold">Divine Journeys</span>
            </div>
            <h2 className="text-3xl md:text-6xl font-serif font-bold mb-4 leading-tight">
              Char Dham Yatra <br className="hidden md:block"/>
              <span className="text-orange-400">& India Spiritual</span>
            </h2>
            <button className="bg-red-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-xs md:text-sm hover:bg-red-700 transition-all active:scale-95">
              Book Darshan Now
            </button>
          </div>

          {/* Controls - Positioned differently on mobile */}
          <div className="absolute right-4 md:right-8 bottom-4 md:bottom-48 flex gap-2 md:gap-3 z-20">
             <button onClick={prevSlide} className="p-2 md:p-3 bg-white/90 rounded-full text-red-600 shadow-lg active:scale-90 transition-transform">
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
             </button>
             <button onClick={nextSlide} className="p-2 md:p-3 bg-white/90 rounded-full text-red-600 shadow-lg active:scale-90 transition-transform">
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
             </button>
          </div>
        </div>

        {/* Slider Section */}
        <div className="relative mt-6 md:-mt-32 px-4 md:px-10 lg:px-20 overflow-hidden pb-10">
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ 
                transform: `translateX(-${currentIndex * (100 / itemsVisible)}%)` 
            }}
          >
            {spiritualDestinations.map((dest) => (
              <div 
                key={dest.id} 
                className="px-2 box-border flex-shrink-0"
                style={{ width: `${100 / itemsVisible}%` }}
              >
                <div className="relative aspect-[4/5] rounded-xl md:rounded-2xl overflow-hidden shadow-lg border-b-4 border-red-600 group cursor-pointer">
                  <Image 
                    src={dest.image} 
                    alt={dest.name} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                  <div className="absolute top-2 left-2 md:top-3 md:left-3">
                    <span className="bg-red-600 text-[8px] md:text-[10px] text-white px-2 py-1 rounded-md font-bold uppercase">
                      {dest.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 text-white">
                    <div className="flex items-center gap-1 mb-1">
                      <MapPin className="w-3 h-3 text-red-600" />
                      <span className="text-[8px] md:text-[10px] opacity-80 uppercase font-bold">Sacred</span>
                    </div>
                    <p className="font-bold text-sm md:text-lg leading-tight">{dest.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
};

export default IndiaSpiritual;