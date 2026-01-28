"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Search, SlidersHorizontal, Award, Plane, X } from 'lucide-react';
import Image from 'next/image';
import GlassNavbar from '@/components/GlassNavbar';
import Footer from '@/components/Footer';
import ToursCard from '@/components/ToursCard';

const AllToursPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
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
  
  const filteredTours = tours.filter(tour => 
    tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tour.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-white">
      <GlassNavbar />

      {/* --- HEADER SECTION WITH BACKGROUND IMAGE --- */}
      <section className="relative h-[60vh] min-h-112.5 w-full overflow-hidden flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1920&q=80" 
            alt="All Tours Background"
            fill
            priority
            className="object-cover brightness-[0.45]"
          />
          {/* Bottom Gradient Fade */}
          <div className="absolute inset-0 " />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-8">
            <div className="text-center md:text-left">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-600 text-white rounded-full font-black text-[10px] uppercase tracking-[0.2em] mb-6 shadow-xl shadow-red-600/20"
              >
                <Award className="w-3 h-3" />
                World-Class Experiences
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none"
              >
                Explore All <br />
                <span className="text-red-600 font-serif italic font-medium">Tours</span>
                <Plane className="inline-block ml-4 w-12 h-12 text-red-600 animate-pulse" />
              </motion.h1>
            </div>

            {/* Search Bar - Positioned over the header */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="w-full md:w-112.5 relative mb-4"
            >
              <div className="bg-white/10 backdrop-blur-xl p-2 rounded-4xl border border-white/20 shadow-2xl">
                <div className="relative">
                  <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-red-600 w-5 h-5" />
                  <input 
                    type="text"
                    placeholder="Where do you want to go?"
                    className="w-full pl-14 pr-6 py-5 rounded-3xl bg-white text-gray-900 font-bold outline-none shadow-inner"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  {searchQuery && (
                    <button 
                      onClick={() => setSearchQuery("")}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-100 p-1 rounded-full text-gray-400 hover:text-red-500"
                    >
                      <X size={16} />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- FILTER & GRID SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        
        {/* Filter Chips */}
        {/* <div className="flex flex-wrap items-center gap-3 mb-10">
          <button className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-red-600 transition-all active:scale-95 shadow-lg shadow-black/10">
            <SlidersHorizontal size={14} /> Filter Results
          </button>
          {['Europe', 'Asia', 'America', 'Budget', 'Luxury'].map((cat) => (
            <button key={cat} className="px-6 py-3 bg-gray-50 border border-gray-100 rounded-xl text-[10px] font-black uppercase tracking-widest text-gray-500 hover:border-red-600 hover:text-red-600 transition-all active:scale-95">
              {cat}
            </button>
          ))}
        </div> */}

        {/* Results Info */}
        <div className="mb-12 flex items-center gap-4">
          <div className="h-px flex-1 bg-gray-100"></div>
          <p className="text-gray-400 text-xs font-black uppercase tracking-widest">
            Showing <span className="text-red-600">{filteredTours.length}</span> Premium Experiences
          </p>
          <div className="h-px flex-1 bg-gray-100"></div>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-12">
          {filteredTours.map((item, index) => (
            <ToursCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* Empty State */}
        {filteredTours.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-32 bg-gray-50 rounded-[3rem] border-2 border-dashed border-gray-200"
          >
            <div className="inline-flex p-6 bg-white rounded-full shadow-xl mb-6">
              <Search size={48} className="text-orange-200" />
            </div>
            <h3 className="text-3xl font-black text-gray-900 uppercase tracking-tight">No adventures found</h3>
            <p className="text-gray-500 mt-2">Try adjusting your search to find your perfect getaway.</p>
            <button 
              onClick={() => setSearchQuery("")}
              className="mt-8 text-red-600 font-black uppercase tracking-widest text-xs border-b-2 border-red-600 pb-1"
            >
              Clear all filters
            </button>
          </motion.div>
        )}
      </section>

      <Footer />
    </main>
  );
};

export default AllToursPage;