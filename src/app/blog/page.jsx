"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Calendar, User, ArrowRight, Bookmark } from "lucide-react";
import GlassNavbar from "@/components/GlassNavbar";
import Footer from "@/components/Footer";

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Destinations", "Travel Tips", "Heritage", "Luxury"];

  const posts = [
    {
      id: 1,
      title: "The Golden Sands: A Guide to Royal Rajasthan",
      excerpt: "Explore the majestic forts and hidden palaces of India's most vibrant state...",
      category: "Heritage",
      author: "Arjun Singh",
      date: "Jan 24, 2026",
      image: "https://images.unsplash.com/photo-1599661046289-e318878567c4?auto=format&fit=crop&q=80",
    },
    {
      id: 2,
      title: "10 Essential Tips for Solo Travelers in Bali",
      excerpt: "Traveling solo doesn't have to be daunting. Here's how to navigate Indonesia safely...",
      category: "Travel Tips",
      author: "Sarah Jenkins",
      date: "Jan 22, 2026",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80",
    },
    {
      id: 3,
      title: "Why Dubai is the Ultimate Luxury Stopover",
      excerpt: "From underwater suites to desert glamping, discover the height of luxury...",
      category: "Luxury",
      author: "Michael Chen",
      date: "Jan 18, 2026",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <GlassNavbar />

      {/* Hero Header Section */}
      <section className="relative pt-32 pb-20 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80"
            alt="travel background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-red-600/20 rounded-full text-red-600 font-bold text-[10px] uppercase tracking-[0.3em] mb-6"
          >
            <Bookmark className="w-3 h-3" />
            Travel Journal
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none"
          >
            Stories from <br />
            <span className="text-red-600 font-serif italic font-medium">
              Around the World
            </span>
          </motion.h1>

          {/* Search Bar UI */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             className="mt-12 max-w-2xl relative"
          >
            <input 
              type="text" 
              placeholder="Search destinations or stories..." 
              className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl py-5 px-14 text-white placeholder-gray-400 outline-none focus:border-red-600 transition-all"
            />
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-gray-100 sticky top-20 bg-white/80 backdrop-blur-xl z-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center gap-4 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-6 py-2 rounded-full font-black text-[10px] uppercase tracking-widest transition-all ${
                activeCategory === cat 
                ? "bg-red-600 text-white" 
                : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Blog Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col h-full bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-red-600 shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col grow">
                <div className="flex items-center gap-4 text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-4">
                  <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                  <span className="flex items-center gap-1"><User size={12} /> {post.author}</span>
                </div>
                
                <h3 className="text-2xl font-black text-gray-900 leading-tight mb-4 group-hover:text-red-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-500 leading-relaxed mb-6 grow">
                  {post.excerpt}
                </p>

                <button className="flex items-center gap-2 text-red-600 font-black uppercase text-[10px] tracking-widest group/btn">
                  Read More 
                  <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Pagination/Load More */}
        <div className="mt-20 text-center">
            <button className="px-12 py-5 border-2 border-gray-900 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-black hover:text-white transition-all duration-300">
                Load More Stories
            </button>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default BlogPage;