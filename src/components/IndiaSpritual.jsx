"use client"
import React from 'react';
import Image from 'next/image';
import { MapPin, ChevronLeft, ChevronRight, Flower2, Sunrise, Mountain } from 'lucide-react';

const spiritualDestinations = [
  { id: 1, name: "Char Dham Uttrakhand", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80", tag: "Most Sacred" },
  { id: 2, name: "12 Jyotirlinga", image: "https://images.unsplash.com/photo-1620021516086-44474932069b?auto=format&fit=crop&w=800&q=80", tag: "Shiva Tour" },
  { id: 3, name: "Ayodhya & Kashi", image: "https://images.unsplash.com/photo-1616081729003-8869c4f74676?auto=format&fit=crop&w=800&q=80", tag: "Ram Janmabhoomi" },
  { id: 4, name: "Vaishno Devi", image: "https://images.unsplash.com/photo-1596395349424-6447781f8f70?auto=format&fit=crop&w=800&q=80", tag: "Mata Rani" },
  { id: 5, name: "Devi Darshan", image: "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?auto=format&fit=crop&w=800&q=80", tag: "Power Shakti" },
];

const IndiaSpiritual = () => {
  return (
    <div className="min-h-screen font-sans text-[#2d333f]">
     
      {/* Spiritual Hero Banner */}
      <main className="max-w-full px-22 mx-auto relative">
        <div className="relative h-[480px] rounded-3xl overflow-hidden shadow-2xl">
          <Image 
            src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=2000&q=80"
            alt="Himalayas and Temple"
            fill
            className="object-cover"
          />
          {/* Saffron and Gold Gradient for spiritual feel */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/40 to-transparent" />
          
          <div className="absolute top-20 left-12 text-white max-w-xl">
            <div className="flex items-center gap-2 mb-4 text-orange-200">
               <Flower2 className="w-5 h-5" />
               <span className="uppercase tracking-widest text-sm font-bold">Divine Journeys</span>
            </div>
            <h2 className="text-6xl font-serif font-bold mb-4 leading-tight">Char Dham Yatra <span className="text-red-600">& India Spritual</span><br/></h2>
            {/* <p className="text-lg opacity-90 mb-8 font-medium">Experience peace and salvation with our meticulously planned spiritual circuits across India.</p> */}
            <div className="flex gap-4">
              <button className="bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-sm shadow-lg hover:bg-orange-700 transition-all flex items-center gap-2">
                Book Darshan Now
              </button>
              <button className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-white/30 transition-all">
                View Itinerary
              </button>
            </div>
          </div>

          <div className="absolute right-8 bottom-40 flex gap-3">
             <button className="p-3 bg-white/90 rounded-full text-red-600 hover:bg-white shadow-md">
                <ChevronLeft className="w-6 h-6" />
             </button>
             <button className="p-3 bg-white/90 rounded-full text-red-600 hover:bg-white shadow-md">
                <ChevronRight className="w-6 h-6" />
             </button>
          </div>
        </div>

        {/* Spiritual Destination Cards */}
        <div className="grid grid-cols-5 gap-6 -mt-32 relative z-10 px-8">
          {spiritualDestinations.map((dest) => (
            <div key={dest.id} className="cursor-pointer group">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-b-4 border-red-600">
                <Image 
                  src={dest.image} 
                  alt={dest.name} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="bg-red-600 text-[10px] text-white px-2 py-1 rounded-md font-bold uppercase tracking-tighter">
                    {dest.tag}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center gap-1 mb-1">
                    <MapPin className="w-3 h-3 text-red-600" />
                    <span className="text-[10px] opacity-80 uppercase tracking-widest font-bold">Sacred Place</span>
                  </div>
                  <p className="font-bold text-base leading-tight">{dest.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
};

export default IndiaSpiritual;