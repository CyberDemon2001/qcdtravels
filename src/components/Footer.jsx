"use client"
import React from 'react';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, Youtube, Award, Send } from 'lucide-react';
import logo from "../../public/assets/logo.png"; // Next.js optimizes this import automatically

const Footer = () => {
  const footerSections = [
    {
      title: "Company",
      links: ["About Us", "Careers", "Blog", "Magazine", "Travel Experts"]
    },
    {
      title: "Support",
      links: ["Contact", "Legal Notice", "Privacy Policy", "Terms", "Live Chat"]
    },
    {
      title: "Services",
      links: ["Hotel Booking", "Activity Finder", "Flight Finder", "Rentals", "Agents"]
    }
  ];

  const destinations = ["Varanasi", "Ladakh", "Munnar", "Goa", "Kerala"];

  return (
    <footer className="relative font-['Inter_Variable']">
      
      {/* 1. Decorative Floating Plane */}
      {/* <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-full flex justify-center z-20 pointer-events-none">
        <div className="relative w-48 md:w-72 h-32 animate-float">
          <Image 
            src="https://www.pngall.com/wp-content/uploads/2/Airplane-PNG-High-Quality-Image.png" 
            alt="Plane" 
            fill
            className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
            priority={false}
          />
        </div>
      </div> */}

      {/* 2. Main Footer Body */}
      <div 
        className="bg-gray-900 text-white pt-24 pb-12 relative overflow-hidden"
        style={{ 
          // clipPath: 'polygon(0 10%, 50% 0, 100% 10%, 100% 100%, 0 100%)',
          backgroundImage: `linear-gradient(to bottom, rgba(249, 115, 22, 0.1), rgba(17, 24, 39, 0.95)), url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2070&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          
          {/* Top Bar: Brand & Socials */}
          <div className="flex flex-col md:flex-row justify-between items-center py-10 border-b border-white/10">
            <div className="mb-8 md:mb-0 text-center md:text-left">
              <div className="mb-2 flex justify-center md:justify-start">
                <Image
                  src={logo}
                  alt="QCD Travels Logo"
                  width={150}
                  height={50}
                  className="h-12 w-auto object-contain"
                />
              </div>
              <p className="text-gray-400 text-sm flex items-center gap-2 justify-center md:justify-start">
                <Award size={14} className="text-orange-500" />
                Ek trip to banta hai! ✨
              </p>
            </div>

            <div className="flex flex-col items-center md:items-end gap-4">
              <div className="flex gap-3">
                {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                  <a key={i} href="#" className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300 group">
                    <Icon size={20} className="group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
              <p className="text-[10px] text-gray-500 font-black tracking-[0.2em] uppercase">Connect With Us</p>
            </div>
          </div>

          {/* Main Navigation Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 py-16">
            {footerSections.map((section, idx) => (
              <div key={idx}>
                <h4 className="text-white font-black text-xs uppercase tracking-widest mb-8 border-l-4 border-orange-500 pl-4">
                  {section.title}
                </h4>
                <ul className="space-y-4 text-[13px] text-gray-400 font-medium">
                  {section.links.map(link => (
                    <li key={link}>
                      <a href="#" className="hover:text-orange-400 transition-colors flex items-center group">
                        <span className="w-0 group-hover:w-4 transition-all duration-300 h-[1px] bg-orange-500 mr-0 group-hover:mr-2"></span>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Newsletter Section */}
            <div className="col-span-2 lg:col-span-2">
              <h4 className="text-white font-black text-xs uppercase tracking-widest mb-8 border-l-4 border-orange-500 pl-4">
                Newsletter
              </h4>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Join our community to receive curated travel guides and exclusive member-only deals.
              </p>
              <div className="flex gap-2 p-2 bg-white/5 border border-white/10 rounded-2xl focus-within:border-orange-500/50 focus-within:bg-white/10 transition-all duration-300">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="bg-transparent border-none outline-none flex-1 px-4 text-sm text-white placeholder:text-gray-600"
                />
                <button className="bg-orange-500 hover:bg-orange-600 text-white p-3.5 rounded-xl transition-all active:scale-95 shadow-lg shadow-orange-500/20">
                  <Send size={18} />
                </button>
              </div>
              
              <div className="mt-8">
                 <p className="text-[10px] font-black uppercase tracking-widest text-gray-600 mb-4">Trending Now</p>
                 <div className="flex flex-wrap gap-2">
                    {destinations.map(d => (
                      <span key={d} className="px-4 py-1.5 bg-white/5 border border-white/5 border-b-white/10 rounded-full text-[11px] font-bold text-gray-400 hover:border-orange-500 hover:text-orange-500 cursor-pointer transition-all duration-300">
                        {d}
                      </span>
                    ))}
                 </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/10">
            <p className="text-[10px] font-bold text-gray-600 uppercase tracking-[0.2em] mb-6 md:mb-0">
              © {new Date().getFullYear()} QCD TRAVELS • DESIGNED FOR EXPLORERS
            </p>
            <div className="flex items-center gap-8 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
               <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
               <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
               <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;