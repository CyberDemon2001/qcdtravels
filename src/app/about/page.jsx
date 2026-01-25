"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Globe, Heart, Users, ShieldCheck, Zap } from 'lucide-react';
import Image from 'next/image';
import GlassNavbar from '@/components/GlassNavbar';
import Footer from '@/components/Footer';

const STATS = [
  { label: "Destinations", value: "50+", icon: <Globe className="w-5 h-5" /> },
  { label: "Happy Travelers", value: "120K", icon: <Users className="w-5 h-5" /> },
  { label: "Tour Experts", value: "85", icon: <Award className="w-5 h-5" /> },
  { label: "Safety Rating", value: "100%", icon: <ShieldCheck className="w-5 h-5" /> },
];

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-white font-['Inter_Variable']">
      <GlassNavbar />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-40 pb-20 bg-black overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
           <Image 
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1920&q=80"
            alt="Adventure background"
            fill
            className="object-cover"
           />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/20 rounded-full text-orange-500 font-black text-[10px] uppercase tracking-[0.3em] mb-6"
          >
            <Zap className="w-3 h-3 fill-current" />
            The QCD Story
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.85]"
          >
            Redefining <br />
            <span className="text-orange-500 font-serif italic font-medium">Adventure</span>
          </motion.h1>
        </div>
      </section>

      {/* --- VISION & MISSION SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-10 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[400px] lg:h-[600px] w-full rounded-[3rem] overflow-hidden z-10">
              <Image 
                src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&w=800&q=80"
                alt="Traveler looking at mountains"
                fill
                className="object-cover"
              />
            </div>
            {/* Glassmorphism Floating Badge */}
            <div className="absolute -bottom-10 -right-10 hidden md:block z-20 bg-white/80 backdrop-blur-2xl border border-white p-10 rounded-[2.5rem] shadow-2xl max-w-xs">
              <Heart className="text-orange-500 w-10 h-10 mb-4" />
              <p className="font-bold text-gray-900 leading-relaxed">
                "We don't just book trips; we craft core memories that stay with you forever."
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:space-y-8 space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter">
              Why We <span className="text-orange-500">Started</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Founded in 2025, QCD Travels emerged from a simple realization: the travel industry was becoming too robotic. We wanted to bring the **soul** back to exploration.
            </p>
            <p className="text-gray-500 text-lg leading-relaxed">
              Our team consists of lifelong nomads, cultural experts, and logistics masters. Together, we ensure that every itinerary is as unique as the person traveling it.
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-6">
              {STATS.map((stat, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex items-center gap-2 text-orange-500">
                    {stat.icon}
                    <span className="text-2xl font-black text-gray-900">{stat.value}</span>
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- CORE VALUES --- */}
      <section className="bg-gray-50 py-10 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-8 lg:mb-16">
            <h2 className="text-4xl font-black text-gray-900 uppercase tracking-tighter">Our Core <span className="text-orange-500">Values</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Authenticity", desc: "No tourist traps. We take you to the places where locals actually go.", color: "bg-blue-50 text-blue-600" },
              { title: "Safety First", desc: "Premium insurance and 24/7 on-ground support for every single guest.", color: "bg-orange-50 text-orange-600" },
              { title: "Sustainability", desc: "We partner with eco-conscious stays and local communities.", color: "bg-emerald-50 text-emerald-600" }
            ].map((value, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-[2.5rem] border border-gray-100 shadow-xl"
              >
                <div className={`w-12 h-12 ${value.color} rounded-2xl flex items-center justify-center mb-6 font-black`}>
                  0{idx + 1}
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight mb-4 text-gray-900">{value.title}</h3>
                <p className="text-gray-500 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TEAM SECTION --- */}
      {/* <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
             <h2 className="text-4xl md:text-6xl font-black text-gray-900 uppercase tracking-tighter leading-none">
                The Minds Behind <br /> <span className="text-orange-500 italic font-serif">The Magic</span>
             </h2>
          </div>
          <p className="text-gray-400 font-bold uppercase text-xs tracking-[0.2em]">Based in London • Operating Worldwide</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "Gunjan Bhardwaj", role: "Founder & CEO", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80" },
            { name: "Sarah Jenkins", role: "Head of Tours", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" },
            { name: "Michael Chen", role: "Logistics Lead", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80" },
            { name: "Elena Rossi", role: "Culture Scout", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80" }
          ].map((member, i) => (
            <motion.div key={i} className="group">
              <div className="relative h-80 rounded-[2rem] overflow-hidden mb-4">
                <Image src={member.img} alt={member.name} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
              <h4 className="text-xl font-black text-gray-900 uppercase tracking-tight">{member.name}</h4>
              <p className="text-orange-500 text-xs font-black uppercase tracking-widest">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section> */}

      <Footer />
    </main>
  );
};

export default AboutPage;