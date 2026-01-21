"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { MapPin, Star, Clock, Users, ShieldCheck, CheckCircle2, Plane } from 'lucide-react';
import Image from 'next/image';
import GlassNavbar from '@/components/GlassNavbar';
import Footer from '@/components/Footer';

const TourDetails = () => {
  const params = useParams();
  const slug = params.slug;

  // In a real app, you would fetch data here based on the slug. 
  // For now, we'll assume we have the data.
  return (
    <main className="min-h-screen bg-white">
      <GlassNavbar />
      
      {/* 1. Hero Image Header */}
      <section className="relative h-[60vh] w-full">
        <Image 
          src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80"
          alt="Tour Detail"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </section>

      {/* 2. Content Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Left Column: Details */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            <div className="flex items-center gap-2 text-orange-500 font-black text-xs uppercase tracking-widest mb-4">
              <Star size={14} fill="currentColor" /> 4.9 (2,612 Reviews)
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter uppercase leading-none">
              London <span className="text-orange-500 font-serif italic font-medium">Westminster</span> Experience
            </h1>
            <div className="flex items-center gap-2 mt-6 text-gray-500">
              <MapPin size={18} className="text-orange-500" />
              <span className="font-bold">Westminster, London, UK</span>
            </div>
          </div>

          {/* Quick Info Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 border-y border-gray-100">
            <div className="flex flex-col">
              <span className="text-gray-400 text-[10px] uppercase font-black tracking-widest">Duration</span>
              <span className="font-bold text-gray-900 flex items-center gap-2"><Clock size={16}/> 8 Hours</span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-400 text-[10px] uppercase font-black tracking-widest">Group Size</span>
              <span className="font-bold text-gray-900 flex items-center gap-2"><Users size={16}/> 15 People</span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-400 text-[10px] uppercase font-black tracking-widest">Tour Type</span>
              <span className="font-bold text-gray-900 flex items-center gap-2"><Plane size={16}/> Sightseeing</span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-400 text-[10px] uppercase font-black tracking-widest">Safety</span>
              <span className="font-bold text-gray-900 flex items-center gap-2"><ShieldCheck size={16}/> Verified</span>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-black uppercase tracking-tight">Overview</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              Explore the heart of London with our premium Westminster experience. From the historic Big Ben to the majesty of Westminster Abbey, this tour offers an intimate look at the city's most iconic landmarks.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-black uppercase tracking-tight">What's Included</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {['Expert Local Guide', 'Entry Fees to Abbey', 'Private Transport', 'Lunch & Drinks'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="text-orange-500" size={20} /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: Booking Card (Sticky) */}
        <div className="lg:col-span-1">
          <div className="sticky top-32 bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl p-8 space-y-6">
            <div className="flex justify-between items-end">
              <div>
                <span className="text-gray-400 text-xs font-black uppercase tracking-widest">From</span>
                <div className="text-4xl font-black text-orange-500">$72.00</div>
              </div>
              <span className="text-gray-400 text-sm font-bold pb-1">/ person</span>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <label className="block text-[10px] font-black uppercase text-gray-400 mb-1">Date</label>
                <input type="date" className="bg-transparent w-full font-bold outline-none" />
              </div>
              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <label className="block text-[10px] font-black uppercase text-gray-400 mb-1">Travelers</label>
                <input type="number" defaultValue="1" className="bg-transparent w-full font-bold outline-none" />
              </div>
            </div>

            <button className="w-full py-5 bg-orange-500 hover:bg-black text-white rounded-2xl font-black uppercase tracking-[0.2em] text-xs transition-all duration-500 shadow-xl shadow-orange-500/20">
              Book This Tour
            </button>
            <p className="text-center text-gray-400 text-[10px] font-bold uppercase tracking-widest">No hidden fees • Instant Confirmation</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default TourDetails;