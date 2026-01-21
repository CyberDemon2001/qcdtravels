"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, SlidersHorizontal, Award, Plane, ChevronRight } from 'lucide-react';
import GlassNavbar from '@/components/GlassNavbar';
import Footer from '@/components/Footer';
import ToursCard from '@/components/ToursCard'; // Ensure you export ToursCard separately

// Using the same data structure for consistency
const ALL_TOURS = [
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
  // ... (Add all your other tour objects here)
];

const AllToursPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // SEO Friendly Filtering
  const filteredTours = ALL_TOURS.filter(tour => 
    tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tour.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-white">
      <GlassNavbar />

      {/* Header Section - Matches Brand Identity */}
      <section className="pt-32 pb-12 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="max-w-2xl">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 rounded-full text-orange-500 font-bold text-[10px] uppercase tracking-[0.2em] mb-4"
              >
                <Award className="w-3 h-3" />
                World-Class Experiences
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter leading-none"
              >
                All <span className="text-orange-500 font-serif italic font-medium">Tours</span>
                <Plane className="inline-block ml-4 w-12 h-12 text-orange-500" />
              </motion.h1>
            </div>

            {/* Search Bar UI */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="w-full md:w-96 relative"
            >
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input 
                type="text"
                placeholder="Search destinations..."
                className="w-full pl-14 pr-6 py-4 rounded-2xl border border-gray-200 focus:border-orange-500 outline-none transition-all shadow-sm"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Grid Content */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        
        {/* Filter Controls (UI Only for now) */}
        <div className="flex flex-wrap items-center gap-4 mb-12">
          <button className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-orange-500 transition-colors">
            <SlidersHorizontal size={14} /> Filters
          </button>
          {['Europe', 'Asia', 'America', 'Budget', 'Luxury'].map((cat) => (
            <button key={cat} className="px-6 py-3 border border-gray-200 rounded-xl text-xs font-bold text-gray-600 hover:border-orange-500 hover:text-orange-500 transition-all">
              {cat}
            </button>
          ))}
        </div>

        {/* Results Info */}
        <div className="mb-8">
          <p className="text-gray-400 font-medium">
            Showing <span className="text-gray-900 font-bold">{filteredTours.length}</span> results found
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-2 gap-y-0">
          {filteredTours.map((item, index) => (
            <ToursCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* Empty State */}
        {filteredTours.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-2xl font-black text-gray-900">No tours found.</h3>
            <p className="text-gray-500">Try searching for a different destination.</p>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
};

export default AllToursPage;