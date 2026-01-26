"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/assets/logo2.png";

const GlassNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "Destinations", "Tours", "About", "Contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] px-6 lg:px-12 py-4 transition-all duration-500">
      <div className="max-w-7xl mx-auto">
        {/* Main Navbar Container */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`relative rounded-[2rem] p-4 lg:px-8 py-3 bg-white/40 flex items-center justify-between border transition-all duration-500 ${
            isScrolled
              ? "bg-white/80 backdrop-blur-xl border-gray-200 shadow-xl"
              : "bg-white/10 backdrop-blur-md border-white/20 shadow-lg"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={logo}
              alt="QCD Travels Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={`text-[13px] font-black uppercase tracking-widest transition hover:text-orange-500 ${
                  isScrolled ? "text-gray-600" : "text-white/80"
                }`}
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Desktop Button */}
          <div className="hidden md:flex">
            <button className="px-6 py-2 bg-orange-500 hover:bg-teal-700 text-white rounded-xl shadow-lg shadow-orange-500/20 text-xs font-black uppercase tracking-widest transition active:scale-95">
              Book Now
            </button>
          </div>

          {/* Hamburger Icon */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 transition-colors ${
              isScrolled ? "text-gray-900" : "text-white"
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </motion.div>

        {/* Mobile Menu (Glass Effect) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2 }}
              className={`md:hidden mt-4 rounded-3xl p-6 space-y-6 border transition-all duration-500 ${
                isScrolled
                  ? "bg-white/80 backdrop-blur-xl border-gray-200 shadow-xl"
                  : "bg-white/10 backdrop-blur-md border-white/20 shadow-lg"
              }`}
            >
              <div className="flex flex-col gap-6">
                {navItems.map((item) => (
                  <Link
                    key={item}
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className={`text-sm font-black uppercase tracking-widest transition hover:text-orange-500 ${
                      isScrolled ? "text-gray-700" : "text-white/90"
                    }`}
                  >
                    {item}
                  </Link>
                ))}
                <button className="w-full py-4 bg-orange-500 hover:bg-teal-700 text-white rounded-xl font-black uppercase tracking-widest text-xs transition shadow-lg shadow-orange-500/20 active:scale-[0.98]">
                  Book Now
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default GlassNavbar;