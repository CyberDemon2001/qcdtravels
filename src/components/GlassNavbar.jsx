"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import logo from "../../public/assets/logo.png"; // Ensure logo is in /public/assets/

const GlassNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'Destinations', 'Tours', 'About', 'Contact'];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] px-6 lg:px-12 lg:py-6 py-4 transition-all duration-500">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`relative transition-all duration-500 rounded-[2rem] p-4 lg:px-8 py-3 flex items-center justify-between border ${
            isScrolled 
              ? "bg-white/80 backdrop-blur-xl border-gray-200 shadow-xl" 
              : "bg-white/10 backdrop-blur-md border-white/20 shadow-lg"
          }`}
        >
          <div className="flex items-center">
            <Link href="/">
              <Image
                src={logo}
                alt="QCD Travels Logo"
                width={120}
                height={40}
                className={`h-10 w-auto transition-all duration-500 ${
                  isScrolled ? "opacity-100" : "opacity-90"
                }`}
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link 
                key={item}
                // href={`#${item.toLowerCase()}`} 
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className={`text-[13px] font-black uppercase tracking-widest transition-all duration-300 hover:text-orange-500 ${
                  isScrolled ? "text-gray-600" : "text-white/80"
                }`}
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="px-6 py-2 bg-orange-500 hover:bg-teal-700 text-white rounded-xl shadow-lg shadow-orange-500/20 transition-all duration-300 text-xs font-black uppercase tracking-widest active:scale-95">
              Book Now
            </button>
          </div>

          <button className={`md:hidden p-2 transition-colors ${isScrolled ? "text-gray-900" : "text-white"}`}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </motion.div>
      </div>
    </nav>
  );
};

export default GlassNavbar;