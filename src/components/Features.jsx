"use client"
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { FiUsers, FiCalendar, FiGlobe, FiAward, FiChevronRight } from "react-icons/fi"

const features = [
  {
    title: "Unlimited Destinations",
    desc: "Explore 1000+ destinations worldwide with exclusive deals and curated travel itineraries.",
    icon: FiGlobe,
    color: "from-orange-500 to-orange-600",
    stats: "1.2k+",
    label: "Destinations"
  },
  {
    title: "Expert Local Guides",
    desc: "Professional guides who know every hidden cultural secret and the best local cuisines.",
    icon: FiUsers,
    color: "from-blue-500 to-indigo-600",
    stats: "5k+",
    label: "Happy Travelers"
  },
  {
    title: "Instant Booking",
    desc: "Book flights, hotels & activities in one tap securely with our verified payment partners.",
    icon: FiCalendar,
    color: "from-indigo-500 to-emerald-600",
    stats: "24/7",
    label: "Live Support"
  }
]

const Features = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  // Auto-switch interval
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="px-6 md:px-12 lg:px-24 py-24 bg-white overflow-hidden font-['Inter_Variable']">
      
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 via-white to-orange-100/20 -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          
          {/* Left Side: Sticky Content */}
          <motion.div 
            className="w-full lg:w-[45%] lg:sticky lg:top-32"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 rounded-full text-orange-600 font-bold text-[10px] uppercase tracking-[0.2em] mb-6 shadow-sm">
              <FiAward className="w-3.5 h-3.5" />
              The TravelDidi Edge
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-black mb-6 leading-tight text-gray-900 tracking-tight">
              Crafting Your <br />
              <span className="text-orange-500 font-serif italic font-medium">Perfect</span> Escape
            </h2>
            
            <p className="text-gray-500 text-lg leading-relaxed max-w-sm mb-12">
              We focus on the details so you can focus on the journey. Discover why thousands choose us for their global adventures.
            </p>

            {/* Stats with Staggered Fade-in */}
            <div className="flex gap-10 border-t border-gray-100 pt-8">
              {features.map((f, idx) => (
                <motion.div 
                  key={idx} 
                  className="flex flex-col"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                >
                  <span className="text-2xl font-black text-gray-900">{f.stats}</span>
                  <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">{f.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Interactive Card Stack */}
          <div className="w-full lg:w-[55%] flex flex-col gap-5">
            {features.map((feature, idx) => {
              const isActive = idx === activeIndex
              return (
                <motion.div
                  key={idx}
                  onMouseEnter={() => setActiveIndex(idx)}
                  className={`group relative p-6 lg:p-8 rounded-[2.5rem] transition-all duration-500 cursor-pointer border-2 ${
                    isActive 
                    ? "bg-white border-orange-500 shadow-2xl shadow-orange-200/40 scale-[1.02]" 
                    : "bg-gray-50/50 border-transparent hover:bg-gray-50"
                  }`}
                  layout
                >
                  {/* Subtle Background Glow for active card */}
                  {isActive && (
                    <motion.div 
                      layoutId="activeGlow"
                      className="absolute inset-0 bg-orange-50/30 rounded-[2.5rem] -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}

                  <div className="flex items-center gap-6">
                    {/* Icon with Floating Animation if active */}
                    <motion.div 
                      className={`shrink-0 w-16 h-16 rounded-[1.5rem] bg-gradient-to-br ${feature.color} flex items-center justify-center text-white shadow-lg`}
                      animate={isActive ? { y: [0, -6, 0] } : {}}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <feature.icon size={28} />
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className={`text-xl font-black transition-colors duration-300 ${isActive ? 'text-gray-900' : 'text-gray-500'}`}>
                        {feature.title}
                      </h3>
                      
                      {/* Smooth description reveal */}
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.p 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="text-gray-600 text-sm leading-relaxed mt-2 pr-4"
                          >
                            {feature.desc}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Minimal Arrow Indicator */}
                    <div className={`transition-all duration-500 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                       <FiChevronRight className="text-orange-500" size={28} strokeWidth={3} />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Features