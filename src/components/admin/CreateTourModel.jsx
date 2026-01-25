"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, IndianRupee, Image as ImageIcon, Sparkles } from "lucide-react";

export default function CreateTourModal({ open, onClose, onCreated }) {
  const [form, setForm] = useState({
    title: "",
    location: "",
    overview: "",
    days: "",
    nights: "",
    startDate: "",
    endDate: "",
    startingPrice: "",
    imageURL: "",
    includes: [],
    itinerary: [],
  });

  const [includeInput, setIncludeInput] = useState("");
  const [itineraryInput, setItineraryInput] = useState({
    city: "",
    days: "",
  });
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  /* ---------- Includes ---------- */
  const addInclude = () => {
    if (!includeInput.trim() || form.includes.includes(includeInput.trim()))
      return;

    setForm((prev) => ({
      ...prev,
      includes: [...prev.includes, includeInput.trim()],
    }));
    setIncludeInput("");
  };

  const removeInclude = (index) => {
    setForm((prev) => ({
      ...prev,
      includes: prev.includes.filter((_, i) => i !== index),
    }));
  };

  /* ---------- Itinerary ---------- */
  const addItinerary = () => {
    if (!itineraryInput.city || !itineraryInput.days) return;

    setForm((prev) => ({
      ...prev,
      itinerary: [
        ...prev.itinerary,
        {
          city: itineraryInput.city,
          days: Number(itineraryInput.days),
        },
      ],
    }));

    setItineraryInput({ city: "", days: "" });
  };

  const removeItinerary = (index) => {
    setForm((prev) => ({
      ...prev,
      itinerary: prev.itinerary.filter((_, i) => i !== index),
    }));
  };

  /* ---------- Submit ---------- */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      title: form.title,
      location: form.location,
      overview: form.overview,
      duration: {
        days: Number(form.days),
        nights: Number(form.nights),
      },
      startDate: form.startDate,
      endDate: form.endDate,
      itinerary: form.itinerary,
      includes: form.includes,
      startingPrice: Number(form.startingPrice),
      imageURL: form.imageURL,
    };

    console.log("Submitting payload:", payload);

    try {
      const res = await fetch("/api/tours", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed");
      onCreated?.();
      onClose();
    } catch (err) {
      alert("Failed to create tour");
    } finally {
      setLoading(false);
    }
  };

  const inputStyles =
    "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all placeholder:text-gray-400 font-medium";
  const labelStyles =
    "text-[10px] font-black uppercase tracking-[0.15em] text-gray-400 mb-1.5 block ml-1";

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-4xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden"
        >
          <div className="h-2 bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-600" />

          <div className="p-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="flex items-center gap-2 text-blue-600 mb-1">
                  <Sparkles size={16} className="animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                    Inventory
                  </span>
                </div>
                <h2 className="text-3xl font-black">
                  New{" "}
                  <span className="font-serif italic font-medium text-blue-600">
                    Adventure
                  </span>
                </h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left */}
                <div className="space-y-4">
                  <div>
                    <label className={labelStyles}>Tour Name</label>
                    <input
                      name="title"
                      className={inputStyles}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label className={labelStyles}>Location</label>
                    <input
                      name="location"
                      className={inputStyles}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label className={labelStyles}>Overview</label>
                    <textarea
                      name="overview"
                      rows={5}
                      className={inputStyles}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label className={labelStyles}>Image URL</label>
                    <div className="relative">
                      <ImageIcon
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                        size={14}
                      />
                      <input
                        name="imageURL"
                        className={`${inputStyles} pl-10`}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Right */}
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className={labelStyles}>Days / Nights</label>
                      <div className="flex gap-2">
                        <input
                          name="days"
                          type="number"
                          placeholder="D"
                          className={inputStyles}
                          onChange={handleChange}
                          required
                        />
                        <input
                          name="nights"
                          type="number"
                          placeholder="N"
                          className={inputStyles}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className={labelStyles}>Starting Price</label>
                      <div className="relative">
                        <IndianRupee
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                          size={14}
                        />
                        <input
                          name="startingPrice"
                          type="number"
                          className={`${inputStyles} pl-10`}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className={labelStyles}>Start Date</label>
                      <input
                        name="startDate"
                        type="date"
                        className={inputStyles}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label className={labelStyles}>End Date</label>
                      <input
                        name="endDate"
                        type="date"
                        className={inputStyles}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* Itinerary */}
                  <div className="p-4 bg-blue-50/50 rounded-2xl border border-blue-100/50">
                    <label className={labelStyles}>Itinerary</label>

                    <div className="grid grid-cols-3 gap-2 mb-3">
                      <input
                        placeholder="City"
                        className={inputStyles}
                        value={itineraryInput.city}
                        onChange={(e) =>
                          setItineraryInput({
                            ...itineraryInput,
                            city: e.target.value,
                          })
                        }
                      />
                      <input
                        type="number"
                        placeholder="Days"
                        className={inputStyles}
                        value={itineraryInput.days}
                        onChange={(e) =>
                          setItineraryInput({
                            ...itineraryInput,
                            days: e.target.value,
                          })
                        }
                      />
                      <button
                        type="button"
                        onClick={addItinerary}
                        className="bg-blue-600 text-white rounded-xl text-xs font-black"
                      >
                        Add
                      </button>
                    </div>

                    <div className="space-y-2 max-h-32 overflow-y-auto">
                      {form.itinerary.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between bg-white px-3 py-2 rounded-xl text-xs font-bold border"
                        >
                          <span>
                            {item.city} — {item.days} Days
                          </span>
                          <button
                            type="button"
                            onClick={() => removeItinerary(i)}
                          >
                            <X size={12} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Includes */}
                  <div>
                    <label className={labelStyles}>Includes</label>
                    <div className="flex gap-2 mb-2">
                      <input
                        value={includeInput}
                        onChange={(e) => setIncludeInput(e.target.value)}
                        className={inputStyles}
                        placeholder="Hotel, Wifi..."
                      />
                      <button
                        type="button"
                        onClick={addInclude}
                        className="bg-blue-600 text-white px-4 rounded-xl text-xs font-black"
                      >
                        Add
                      </button>
                    </div>

                    <div className="flex flex-wrap gap-2 max-h-24 overflow-y-auto p-1">
                      {form.includes.map((item, i) => (
                        <span
                          key={i}
                          className="flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-[10px] font-bold"
                        >
                          {item}
                          <button
                            type="button"
                            onClick={() => removeInclude(i)}
                          >
                            <X size={10} />
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex justify-end gap-4 pt-4 border-t border-gray-100">
                <button
                  type="button"
                  onClick={onClose}
                  className="text-sm font-bold text-gray-500 hover:text-gray-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-blue-600 text-white px-10 py-3 rounded-xl font-black shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all disabled:opacity-50"
                >
                  {loading ? "Publishing..." : "Publish Tour"}
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
