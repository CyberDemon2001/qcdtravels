"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/assets/logo2.png";
import { useRouter, usePathname } from "next/navigation";

const GlassNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["About", "Home", "Destinations", "Tours", "Contact"];

  const isLinkActive = (path) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  const toursActive = pathname.startsWith("/tours");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 lg:px-12 py-4 transition-all duration-500">
      <div className="max-w-7xl mx-auto">
        {/* Main Navbar */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`relative rounded-4xl p-4 lg:px-8 py-3 flex items-center justify-between border transition-all duration-500 ${
            isScrolled
              ? "bg-white/80 backdrop-blur-xl border-gray-200 shadow-xl"
              : "bg-white/50 backdrop-blur-md border-white/20 shadow-lg"
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
            {navItems.map((item) => {
              const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
              const active = isLinkActive(path);

              return (
                <Link
                  key={item}
                  href={path}
                  className={`text-[13px] font-black uppercase tracking-widest transition relative ${
                    active
                      ? "text-red-600"
                      : isScrolled
                      ? "text-gray-600 hover:text-red-600"
                      : "text-white/80 hover:text-red-400"
                  }`}
                >
                  {item}

                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-0 -bottom-1 h-0.5 w-full bg-red-600 rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop Button */}
          <div className="hidden md:flex">
            <button
              onClick={() => router.push("/tours")}
              className={`px-6 py-2 text-white rounded-xl shadow-lg text-xs font-black uppercase tracking-widest transition active:scale-95 ${
                toursActive
                  ? "bg-red-700 shadow-red-700/30"
                  : "bg-linear-to-r from-red-600 to-blue-700 shadow-red-600/20"
              }`}
            >
              Book Now
            </button>
          </div>

          {/* Hamburger */}
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

        {/* Mobile Menu */}
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
                {navItems.map((item) => {
                  const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
                  const active = isLinkActive(path);

                  return (
                    <Link
                      key={item}
                      href={path}
                      onClick={() => setIsOpen(false)}
                      className={`text-sm font-black uppercase tracking-widest transition ${
                        active
                          ? "text-red-600"
                          : isScrolled
                          ? "text-gray-700 hover:text-red-600"
                          : "text-white/90 hover:text-red-500"
                      }`}
                    >
                      {item}
                    </Link>
                  );
                })}

                <button
                  onClick={() => {
                    router.push("/tours");
                    setIsOpen(false);
                  }}
                  className={`w-full py-4 text-white rounded-xl font-black uppercase tracking-widest text-xs transition shadow-lg active:scale-[0.98] ${
                    toursActive
                      ? "bg-red-700 shadow-red-700/30"
                      : "bg-linear-to-r from-red-600 to-blue-700 shadow-red-600/20"
                  }`}
                >
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
