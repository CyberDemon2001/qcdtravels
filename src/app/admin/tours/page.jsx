"use client";

import { useEffect, useState } from "react";
import {
  Plus,
  Clock,
  Search,
  Trash2,
  Edit3,
  MapPin,
  Navigation,
} from "lucide-react";
import CreateTourModal from "@/components/admin/CreateTourModel";

export default function ToursPage() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  const fetchTours = async () => {
    try {
      const res = await fetch("/api/tours", { cache: "no-store" });
      const data = await res.json();
      setTours(data);
    } catch (error) {
      console.error("Failed to fetch tours", error);
    }
  };

  useEffect(() => {
    fetchTours().finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50">
        <div className="relative flex h-20 w-20 items-center justify-center">
          <div className="absolute h-full w-full animate-ping rounded-full bg-blue-400 opacity-20"></div>
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
        </div>
        <p className="mt-4 font-medium text-slate-500 animate-pulse">
          Loading Tours...
        </p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      {/* --- HEADER SECTION --- */}
      <section className="relative overflow-hidden py-16 px-6 lg:px-12">
        <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
              Manage Tours
            </h1>
            <p className="text-sm text-slate-500">
              Create, edit, and manage your tour packages with ease.
            </p>
            </div>
          <button
            onClick={() => setOpenModal(true)}
            className="group flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-xl shadow-blue-500/20 active:scale-95"
          >
            <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform" />
            Add New Tour
          </button>
        </div>
      </section>

      {/* --- GRID --- */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {tours.map((tour, index) => (
            <div
              key={tour._id}
              className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-60 w-full overflow-hidden">
                <img
                  src={tour.imageURL}
                  alt={tour.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className="bg-white/95 backdrop-blur shadow-lg px-4 py-1.5 rounded-full text-xs font-black text-blue-600">
                    ₹{tour.startingPrice.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-100 rounded-lg text-slate-500">
                    <Clock size={12} className="text-blue-500" />
                    <span className="text-[10px] font-bold uppercase tracking-tight">
                      {tour.duration.days}D / {tour.duration.nights}N
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2 min-h-[3.5rem]">
                  {tour.title}
                </h3>

                <div className="mt-6 flex items-center justify-between gap-3 border-t border-slate-50 pt-5">
                  <button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-50 text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-all font-bold text-xs uppercase tracking-widest">
                    <Edit3 size={14} />
                    Edit
                  </button>
                  <button className="p-2.5 rounded-xl bg-red-50 text-red-400 hover:bg-red-500 hover:text-white transition-all">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {tours.length === 0 && (
          <div className="text-center py-32 bg-white rounded-[3rem] border-2 border-dashed border-slate-200">
            <div className="mx-auto w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-4">
              <Search className="text-slate-300" size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-400">
              No tours matching your search
            </h3>
            <p className="text-slate-400 text-sm mt-1">
              Try adjusting your filters or add a new package.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setOpenModal(true);
              }}
              className="mt-6 text-blue-600 font-black uppercase tracking-widest text-xs hover:underline"
            >
              Clear search or Add Tour +
            </button>
          </div>
        )}
      </section>

      <CreateTourModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onCreated={fetchTours}
      />
    </main>
  );
}
