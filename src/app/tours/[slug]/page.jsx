"use client";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { 
  CheckCircle2, Clock, Users, Plane, 
  ShieldCheck, Star, MapPin, Calendar, 
  ChevronRight, Info 
} from "lucide-react";
import Image from "next/image";
import GlassNavbar from "@/components/GlassNavbar";
import Footer from "@/components/Footer";
import BookingSuccessModal from "@/components/BookingSuccessModal";
import { sendEmail } from "@/lib/emailjs";

const TourDetails = () => {
  const searchParams = useSearchParams();
  const dataParam = searchParams.get("data");
  
  // Parse Tour Data
  const tour = dataParam ? JSON.parse(decodeURIComponent(dataParam)) : null;

  // Form & UI States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    travelers: "1",
  });

  if (!tour) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
        <Info size={48} className="text-red-600" />
        <h1 className="text-2xl font-black uppercase">Tour data not found!</h1>
        <a href="/tours" className="text-red-600 font-bold underline">Return to Tours</a>
      </div>
    );
  }

  const handleSubmit = async (e) => {
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill in your contact information.");
      return;
    }

    setLoading(true);
    try {
      await sendEmail({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: `Booking Inquiry: ${tour.title}`,
        message: `
          --- TOUR INFO ---
          Tour: ${tour.title}
          Price: ₹${tour.startingPrice}
          
          --- BOOKING DETAILS ---
          Travel Date: ${formData.date}
          Travelers: ${formData.travelers}
          
          --- CUSTOMER INFO ---
          Name: ${formData.name}
          Email: ${formData.email}
          Phone: ${formData.phone}
        `,
      });
      setIsModalOpen(true);
    } catch (error) {
      alert("Failed to send inquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white selection:bg-orange-100 selection:text-orange-600">
      <GlassNavbar />
      
      {/* Reusable Popup */}
      <BookingSuccessModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

      {/* --- HERO SECTION --- */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <Image 
          src={tour.imageURL} 
          alt={tour.title} 
          fill 
          priority
          className="object-cover scale-105 hover:scale-100 transition-transform duration-1000" 
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-12 left-0 w-full">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-2 text-orange-400 font-black text-xs uppercase tracking-[0.3em] mb-4">
              <Star size={14} fill="currentColor" /> Best Seller 2026
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.9]">
              {tour.title}
            </h1>
          </div>
        </div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 lg:grid-cols-3 gap-16">
        
        {/* LEFT: Details */}
        <div className="lg:col-span-2 space-y-12">
          
          {/* Destination Badges */}
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-gray-600">
              <MapPin size={18} className="text-red-600" />
              <span className="font-bold text-sm uppercase tracking-wider">
                {tour.itinerary.map((p) => p.city).join(" • ")}
              </span>
            </div>
            <div className="text-gray-400 font-bold text-sm">
              4.9 (2,612 Reviews)
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-gray-100">
            <StatBox icon={<Clock />} label="Duration" value={`${tour.duration.days} Days`} />
            <StatBox icon={<Users />} label="Group Size" value="15 Max" />
            <StatBox icon={<Plane />} label="Type" value="Leisure" />
            <StatBox icon={<ShieldCheck />} label="Safety" value="Verified" />
          </div>

          {/* Overview */}
          <div className="space-y-6">
            <h3 className="text-3xl font-black uppercase tracking-tighter">The Experience</h3>
            <p className="text-gray-600 leading-relaxed text-xl font-medium">
              {tour.overview || "Discover the hidden gems and iconic landmarks on this curated journey designed for modern travelers."}
            </p>
          </div>

          {/* What's Included */}
          <div className="space-y-6 bg-gray-50 p-8 rounded-4xl">
            <h3 className="text-2xl font-black uppercase tracking-tighter">What's Included</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tour.includes?.map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-700 font-bold">
                  <CheckCircle2 className="text-red-600" size={20} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: Booking Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-32 bg-white rounded-[3rem] border border-gray-100 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] p-8 md:p-10 space-y-8">
            <div>
              <span className="text-gray-400 text-xs font-black uppercase tracking-widest">Pricing Starts From</span>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-black text-red-600 tracking-tighter">₹{tour.startingPrice}</span>
                <span className="text-gray-400 font-bold uppercase text-xs">/ guest</span>
              </div>
            </div>

            {/* Form */}
            <div className="space-y-4">
              <InputField label="Your Name" type="text" placeholder="John Doe" 
                onChange={(v) => setFormData({...formData, name: v})} />
              
              <InputField label="Email Address" type="email" placeholder="john@example.com" 
                onChange={(v) => setFormData({...formData, email: v})} />
              
              <InputField label="Phone Number" type="tel" placeholder="+91 00000 00000" 
                onChange={(v) => setFormData({...formData, phone: v})} />

              <div className="grid grid-cols-2 gap-4">
                <InputField label="Travel Date" type="date" 
                  onChange={(v) => setFormData({...formData, date: v})} />
                
                <InputField label="Guests" type="number" defaultValue="1" 
                  onChange={(v) => setFormData({...formData, travelers: v})} />
              </div>
            </div>

            <button 
              onClick={handleSubmit}
              disabled={loading}
              className="group relative w-full py-6 bg-black hover:bg-red-600 text-white rounded-2xl font-black uppercase tracking-[0.2em] text-xs transition-all duration-500 shadow-2xl disabled:opacity-50"
            >
              <span className="relative z-10">{loading ? "Sending Inquiry..." : "Confirm Booking"}</span>
              <div className="absolute inset-0 bg-red-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 rounded-2xl" />
            </button>

            <div className="flex items-center justify-center gap-4 text-[10px] font-black uppercase tracking-widest text-gray-400">
              <span>Secure Payment</span>
              <span className="w-1 h-1 bg-gray-300 rounded-full" />
              <span>Instant Confirmation</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

// Helper Components for Cleaner JSX
const StatBox = ({ icon, label, value }) => (
  <div className="flex flex-col space-y-1">
    <div className="flex items-center gap-2 text-red-600 mb-1">
      {React.cloneElement(icon, { size: 18 })}
      <span className="text-[10px] uppercase font-black tracking-widest text-gray-400">{label}</span>
    </div>
    <span className="font-black text-gray-900 text-lg tracking-tight">{value}</span>
  </div>
);

const InputField = ({ label, type, placeholder, defaultValue, onChange }) => (
  <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 focus-within:border-red-600/50 transition-colors">
    <label className="block text-[10px] font-black uppercase text-gray-400 mb-1">{label}</label>
    <input 
      type={type} 
      placeholder={placeholder}
      defaultValue={defaultValue}
      className="bg-transparent w-full font-bold outline-none text-sm placeholder:text-gray-300"
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

export default TourDetails;