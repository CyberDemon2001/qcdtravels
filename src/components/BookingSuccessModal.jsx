"use client";
import React from "react";
import { CheckCircle2, X } from "lucide-react";

const BookingSuccessModal = ({ isOpen, onClose, title = "Inquiry Sent!", message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
      {/* Glassmorphism Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity" 
        onClick={onClose} 
      />
      
      {/* Modal Card */}
      <div className="relative bg-white rounded-[2.5rem] p-8 md:p-12 max-w-lg w-full text-center shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] transform transition-all animate-in fade-in zoom-in duration-300">
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-6 right-6 text-gray-400 hover:text-orange-500 transition-colors"
        >
          <X size={24} />
        </button>
        
        {/* Success Icon */}
        <div className="w-24 h-24 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-lg shadow-orange-500/40">
            <CheckCircle2 size={32} className="text-white" />
          </div>
        </div>
        
        {/* Text Content */}
        <h2 className="text-3xl font-black uppercase tracking-tighter text-gray-900 mb-4">
          {title}
        </h2>
        <p className="text-gray-600 font-medium leading-relaxed mb-8">
          {message || "Thank you for choosing us. Our travel experts will contact you shortly to finalize your booking details."}
        </p>
        
        {/* Action Button */}
        <button 
          onClick={onClose}
          className="w-full py-4 bg-black text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-orange-500 transition-all duration-300 shadow-xl"
        >
          Got it, Thanks!
        </button>
      </div>
    </div>
  );
};

export default BookingSuccessModal;