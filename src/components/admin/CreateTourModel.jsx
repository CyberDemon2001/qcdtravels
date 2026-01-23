"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, MapPin, Clock, IndianRupee, Image as ImageIcon, Sparkles } from "lucide-react";

export default function CreateTourModal({ open, onClose, onCreated }) {
  const [form, setForm] = useState({
    title: "",
    days: "",
    nights: "",
    startDate: "",
    endDate: "",
    city: "",
    cityDays: "",
    startingPrice: "",
    imageURL: "",
  });

  if (!open) return null;

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      title: form.title,
      duration: { days: Number(form.days), nights: Number(form.nights) },
      startDate: form.startDate,
      endDate: form.endDate,
      itinerary: [{ city: form.city, days: Number(form.cityDays) }],
      startingPrice: Number(form.startingPrice),
      imageURL: form.imageURL,
    };

    const res = await fetch("/api/tours", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      alert("Failed to create tour");
      return;
    }
    onCreated();
    onClose();
  };

  const inputStyles = "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all placeholder:text-gray-400 font-medium";
  const labelStyles = "text-[10px] font-black uppercase tracking-[0.15em] text-gray-400 mb-1.5 block ml-1";

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
        />

        {/* Modal Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-2xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden"
        >
          {/* Header Decor */}
          <div className="h-2 bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-600" />
          
          <div className="p-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <div className="flex items-center gap-2 text-blue-600 mb-1">
                  <Sparkles size={16} className="animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em]">Inventory Management</span>
                </div>
                <h2 className="text-3xl font-black text-gray-900 tracking-tight">Create <span className="font-serif italic font-medium text-blue-600">Adventure</span></h2>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-red-500"
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Title Section */}
              <div>
                <label className={labelStyles}>Tour Experience Name</label>
                <input name="title" placeholder="e.g. Himalayan Sunset Trek" className={inputStyles} onChange={handleChange} required />
              </div>

              {/* Grid: Duration & Dates */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelStyles}>Duration</label>
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                      <input name="days" type="number" placeholder="Days" className={`${inputStyles} pl-10`} onChange={handleChange} required />
                    </div>
                    <input name="nights" type="number" placeholder="Nights" className={inputStyles} onChange={handleChange} required />
                  </div>
                </div>
                <div>
                  <label className={labelStyles}>Price (INR)</label>
                  <div className="relative">
                    <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-600" size={14} />
                    <input name="startingPrice" type="number" placeholder="Starting from..." className={`${inputStyles} pl-10 font-bold text-gray-900`} onChange={handleChange} required />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelStyles}>Start Date</label>
                  <input name="startDate" type="date" className={inputStyles} onChange={handleChange} required />
                </div>
                <div>
                  <label className={labelStyles}>End Date</label>
                  <input name="endDate" type="date" className={inputStyles} onChange={handleChange} required />
                </div>
              </div>

              {/* Itinerary Snippet */}
              <div className="p-5 bg-blue-50/50 rounded-2xl border border-blue-100">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 mb-3 block">Primary Destination</label>
                <div className="grid grid-cols-3 gap-3">
                  <div className="col-span-2 relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400" size={14} />
                    <input name="city" placeholder="City Name" className={`${inputStyles} pl-10 bg-white`} onChange={handleChange} required />
                  </div>
                  <input name="cityDays" type="number" placeholder="Days" className={`${inputStyles} bg-white`} onChange={handleChange} required />
                </div>
              </div>

              {/* Visuals */}
              <div>
                <label className={labelStyles}>Display Image URL</label>
                <div className="relative">
                  <ImageIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                  <input name="imageURL" placeholder="https://images.unsplash.com/..." className={`${inputStyles} pl-10`} onChange={handleChange} required />
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-end gap-4 pt-4 border-t border-gray-100">
                <button 
                  type="button" 
                  onClick={onClose} 
                  className="text-xs font-black uppercase tracking-widest text-gray-400 hover:text-gray-600 transition-colors"
                >
                  Discard
                </button>
                <button 
                  type="submit" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-[0.2em] shadow-xl shadow-blue-500/20 active:scale-95 transition-all"
                >
                  Publish Tour
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}