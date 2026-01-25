"use client";

import { useEffect, useState } from "react";
import {
  Plus,
  Clock,
  Search,
  Trash2,
  Edit3,
  MapPin,
  Calendar,
  Layers,
  ArrowRight,
} from "lucide-react";
import CreateTourModal from "@/components/admin/CreateTourModel";

export default function ToursPage() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [editingTour, setEditingTour] = useState(null);

  const fetchTours = async () => {
    try {
      const res = await fetch("/api/tours", { cache: "no-store" });
      const data = await res.json();
      setTours(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Failed to fetch tours", error);
    }
  };

  const deleteTour = async (tourId) => {
    if (!confirm("Are you sure you want to delete this tour?")) return;
    try {
      const res = await fetch(`/api/tours?id=${tourId}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) setTours((prev) => prev.filter((t) => t._id !== tourId));
    } catch (error) {
      console.error("Failed to delete tour", error);
    }
  };

  const openEditModal = (tour) => {
    setEditingTour(tour);
    setOpenModal(true);
  };

  useEffect(() => {
    fetchTours().finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <div className="relative flex items-center justify-center">
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-blue-600/20 border-t-blue-600" />
          <div className="absolute h-8 w-8 animate-pulse rounded-full bg-blue-100" />
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#FDFDFF] text-slate-900">
      {/* HEADER SECTION */}
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-6 lg:px-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">Tour Inventory</h1>
            <p className="text-sm text-slate-500 font-medium">Manage your {tours.length} active destinations</p>
          </div>

          <button
            onClick={() => {
              setEditingTour(null);
              setOpenModal(true);
            }}
            className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 shadow-lg shadow-slate-200 active:scale-95"
          >
            <Plus className="w-4 h-4" />
            Create New Tour
          </button>
        </div>
      </header>

      {/* MAIN GRID */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-10">
        {tours.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <div
                key={tour._id}
                className="group flex flex-col bg-white rounded-3xl border border-slate-100 overflow-hidden hover:border-blue-100 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
              >
                {/* IMAGE CONTAINER */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={tour.imageURL}
                    alt={tour.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* OVERLAYS */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="absolute top-4 left-4 flex gap-2">
                    <div className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-bold text-slate-900 shadow-sm">
                      ₹{tour.startingPrice?.toLocaleString()}
                    </div>
                  </div>

                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md ${
                      tour.available 
                        ? "bg-emerald-500/90 text-white" 
                        : "bg-red-500/90 text-white"
                    }`}>
                      {tour.available ? "Live" : "Sold Out"}
                    </span>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1.5 text-blue-600 font-bold text-[10px] uppercase tracking-widest">
                      <Clock size={12} />
                      {tour.duration?.days}D / {tour.duration?.nights}N
                    </div>
                    <div className="flex items-center gap-1 text-slate-400 text-[11px]">
                      <MapPin size={12} />
                      {tour.location}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 line-clamp-1 group-hover:text-blue-600 transition-colors">
                    {tour.title}
                  </h3>

                  <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
                    <Calendar size={13} className="text-slate-400" />
                    <span>{new Date(tour.startDate).toLocaleDateString("en-IN", { month: 'short', day: 'numeric' })}</span>
                    <ArrowRight size={10} className="text-slate-300" />
                    <span>{new Date(tour.endDate).toLocaleDateString("en-IN", { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>

                  {/* CHIPS */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {tour.includes?.slice(0, 3).map((item, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-lg bg-slate-50 text-slate-500 text-[10px] font-medium border border-slate-100">
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* ACTIONS */}
                  <div className="mt-auto pt-6 flex items-center gap-2">
                    <button
                      onClick={() => openEditModal(tour)}
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-50 text-slate-600 text-xs font-bold hover:bg-blue-50 hover:text-blue-600 transition-all active:scale-95"
                    >
                      <Edit3 size={14} />
                      Edit
                    </button>
                    <button
                      onClick={() => deleteTour(tour._id)}
                      className="p-2.5 rounded-xl bg-slate-50 text-slate-400 hover:bg-red-50 hover:text-red-500 transition-all active:scale-95"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* EMPTY STATE */
          <div className="flex flex-col items-center justify-center py-24 px-6 text-center bg-slate-50/50 rounded-[3rem] border-2 border-dashed border-slate-200">
            <div className="w-20 h-20 bg-white rounded-3xl shadow-sm flex items-center justify-center mb-6">
              <Layers className="text-slate-300" size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Your inventory is empty</h3>
            <p className="text-slate-500 mt-2 max-w-xs mx-auto text-sm">
              Start adding beautiful tour packages to see them listed here in your dashboard.
            </p>
            <button
              onClick={() => setOpenModal(true)}
              className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-full text-sm font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all"
            >
              Add First Tour
            </button>
          </div>
        )}
      </section>

      <CreateTourModal
        open={openModal}
        tour={editingTour}
        onClose={() => setOpenModal(false)}
        onCreated={fetchTours}
      />
    </main>
  );
}