"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Clock, Users, Plane, ShieldCheck, Star, MapPin } from "lucide-react";
import Image from "next/image";
import GlassNavbar from "@/components/GlassNavbar";
import Footer from "@/components/Footer";

const TourDetails = () => {
  const searchParams = useSearchParams();
  const dataParam = searchParams.get("data");

  // Parse the passed tour data
  const tour = dataParam ? JSON.parse(decodeURIComponent(dataParam)) : null;

  if (!tour) return <div>Tour data not found!</div>;

  return (
    <main className="min-h-screen bg-white">
      <GlassNavbar />

      {/* HERO */}
      <section className="relative h-[60vh] w-full">
        <Image src={tour.imageURL} alt={tour.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/30" />
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* LEFT */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            <div className="flex items-center gap-2 text-orange-500 font-black text-xs uppercase tracking-widest mb-4">
              <Star size={14} fill="currentColor" /> 4.9 (2,612 Reviews)
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter uppercase leading-none">
              {tour.title}
            </h1>
            <div className="flex items-center gap-2 mt-6 text-gray-500">
              <MapPin size={18} className="text-orange-500" />
              <span className="font-bold">{tour.itinerary.map((p) => p.city).join(", ")}</span>
            </div>
          </div>

          {/* Quick Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 border-y border-gray-100">
            <div className="flex flex-col">
              <span className="text-gray-400 text-[10px] uppercase font-black tracking-widest">
                Duration
              </span>
              <span className="font-bold text-gray-900 flex items-center gap-2">
                <Clock size={16} /> {tour.duration.days} Days
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-400 text-[10px] uppercase font-black tracking-widest">
                Group Size
              </span>
              <span className="font-bold text-gray-900 flex items-center gap-2">
                <Users size={16} /> 15 People
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-400 text-[10px] uppercase font-black tracking-widest">
                Tour Type
              </span>
              <span className="font-bold text-gray-900 flex items-center gap-2">
                <Plane size={16} /> Sightseeing
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-400 text-[10px] uppercase font-black tracking-widest">
                Safety
              </span>
              <span className="font-bold text-gray-900 flex items-center gap-2">
                <ShieldCheck size={16} /> Verified
              </span>
            </div>
          </div>

          {/* Overview */}
          <div className="space-y-4">
            <h3 className="text-2xl font-black uppercase tracking-tight">Overview</h3>
            <p className="text-gray-600 leading-relaxed text-lg">{tour.overview || "No description available."}</p>
          </div>

          {/* Itinerary */}
          <div className="space-y-4">
            <h3 className="text-2xl font-black uppercase tracking-tight">Itinerary</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {tour.includes.map((include, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="text-orange-500" size={20} /> {include}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT: Booking Card */}
        <div className="lg:col-span-1">
          <div className="sticky top-32 bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl p-8 space-y-6">
            <div className="flex justify-between items-end">
              <div>
                <span className="text-gray-400 text-xs font-black uppercase tracking-widest">From</span>
                <div className="text-4xl font-black text-orange-500">₹{tour.startingPrice}</div>
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
            <p className="text-center text-gray-400 text-[10px] font-bold uppercase tracking-widest">
              No hidden fees • Instant Confirmation
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default TourDetails;
