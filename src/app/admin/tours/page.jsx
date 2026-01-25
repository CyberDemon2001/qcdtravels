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
  CheckCircle,
  XCircle,
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
      setTours(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Failed to fetch tours", error);
    }
  };

  useEffect(() => {
    fetchTours().finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      {/* HEADER */}
      <section className="py-14 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl font-black text-blue-600">
              Manage Tours
            </h1>
            <p className="text-slate-500 mt-1">
              Create, edit, and control tour packages
            </p>
          </div>

          <button
            onClick={() => setOpenModal(true)}
            className="flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold shadow-xl active:scale-95"
          >
            <Plus className="w-5 h-5" />
            Add New Tour
          </button>
        </div>
      </section>

      {/* GRID */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {tours.map((tour) => (
            <div
              key={tour._id}
              className="group bg-white rounded-[2.5rem] overflow-hidden border shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all"
            >
              {/* IMAGE */}
              <div className="relative h-60">
                <img
                  src={tour.imageURL}
                  alt={tour.title}
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* PRICE */}
                <span className="absolute top-4 left-4 bg-white px-4 py-1.5 rounded-full text-xs font-black text-blue-600 shadow">
                  ₹{tour.startingPrice?.toLocaleString()}
                </span>

                {/* ACTIVE STATUS */}
                <span
                  className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold ${
                    tour.isActive
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {tour.isActive ? "Active" : "Inactive"}
                </span>
              </div>

              {/* CONTENT */}
              <div className="p-6">
                {/* DURATION */}
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500 mb-3">
                  <Clock size={14} className="text-blue-500" />
                  {tour.duration?.days}D / {tour.duration?.nights}N
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-black text-slate-900 mb-2 line-clamp-2 group-hover:text-blue-600">
                  {tour.title}
                </h3>

                {/* LOCATION */}
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <MapPin size={14} />
                  {tour.location}
                </div>

                {/* DATES */}
                <div className="flex items-center gap-2 text-xs text-slate-400 mt-2">
                  <Calendar size={14} />
                  {new Date(tour.startDate).toLocaleDateString()} →{" "}
                  {new Date(tour.endDate).toLocaleDateString()}
                </div>

                {/* INCLUDES */}
                {tour.includes?.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {tour.includes.slice(0, 2).map((item, i) => (
                      <span
                        key={i}
                        className="text-[10px] px-3 py-1 rounded-full bg-slate-100 font-bold text-slate-600"
                      >
                        {item}
                      </span>
                    ))}
                    {tour.includes.length > 2 && (
                      <span className="text-[10px] px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-bold">
                        +{tour.includes.length - 2} more
                      </span>
                    )}
                  </div>
                )}

                {/* FOOTER */}
                <div className="mt-6 flex items-center justify-between gap-3 border-t pt-5">
                  <button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-50 hover:bg-blue-50 text-xs font-black uppercase text-slate-600 hover:text-blue-600">
                    <Edit3 size={14} />
                    Edit
                  </button>

                  <button className="p-2.5 rounded-xl bg-red-50 text-red-500 hover:bg-red-500 hover:text-white">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* EMPTY */}
        {tours.length === 0 && (
          <div className="text-center py-32 bg-white rounded-[3rem] border-2 border-dashed">
            <Search className="mx-auto text-slate-300" size={36} />
            <h3 className="mt-4 text-xl font-bold text-slate-400">
              No tours found
            </h3>
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
