"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube, Award, Send, ChevronRight } from 'lucide-react';
import logo from "../../public/assets/logo1.png";

const Footer = () => {
  const footerSections = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Blog", href: "#" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Contact", href: "/contact" },
        { name: "Privacy", href: "#" }
      ]
    },
    {
      title: "Services",
      links: [
        { name: "Destinations", href: "/destinations" },
        { name: "Tours", href: "/tours" }
      ]
    }
  ];

  const destinations = ["Varanasi", "Ladakh", "Munnar", "Goa"];

  return (
    <footer className="relative font-['Inter_Variable'] w-full overflow-hidden">
      <div 
        className="bg-gray-900 text-white pt-16 pb-10 relative"
        style={{ 
          backgroundImage: `linear-gradient(to bottom, rgba(17, 24, 39, 0.85), rgba(17, 24, 39, 0.98)), url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2070&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          
          {/* Top Bar - Clean & Modern */}
          <div className="flex flex-col md:flex-row justify-between items-center pb-10 border-b border-white/10">
            <div className="mb-6 md:mb-0 text-center md:text-left group">
              <Image
                src={logo}
                alt="Logo"
                width={130}
                height={45}
                className="h-12 w-auto object-contain mb-2 brightness-110 transition-transform duration-300 group-hover:scale-105"
              />
              <p className="text-gray-400 text-xs font-medium flex items-center gap-2 justify-center md:justify-start">
                <span className="bg-orange-500/20 p-1 rounded-full">
                   <Award size={12} className="text-orange-500" />
                </span>
                Ek trip to banta hai! ✨
              </p>
            </div>

            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 hover:-translate-y-1 transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Main Grid - Exact Same Structure */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 py-12">
            {footerSections.map((section, idx) => (
              <div key={idx}>
                <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6 border-l-2 border-orange-500 pl-3">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map(link => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-[13px] text-gray-400 hover:text-orange-400 flex items-center gap-1 transition-colors group">
                        <ChevronRight size={12} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Newsletter - Right Side */}
            <div className="col-span-2">
               {/* Added a subtle glass-morphism input area here for modernity */}
               <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                  <h4 className="text-sm font-bold mb-3">Get Travel Updates</h4>
                  <div className="flex bg-white/10 rounded-lg p-1 border border-white/10 focus-within:border-orange-500 transition-all">
                    <input type="email" placeholder="Email address" className="bg-transparent border-none outline-none px-3 py-2 text-sm w-full" />
                    <button className="bg-orange-500 p-2 rounded-md hover:bg-orange-600 transition-colors">
                      <Send size={16} />
                    </button>
                  </div>

                  <div className="mt-6 flex items-center gap-3">
                      <span className="text-[10px] font-black uppercase text-orange-500 tracking-tighter">Trending:</span>
                      <div className="flex flex-wrap gap-3">
                        {destinations.map(d => (
                          <span key={d} className="text-[11px] text-gray-400 hover:text-white cursor-pointer transition-colors underline decoration-orange-500/30 underline-offset-4">
                            {d}
                          </span>
                        ))}
                      </div>
                  </div>
               </div>
            </div>
          </div>

          {/* Bottom Bar - Exact Same Structure */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4 md:mb-0">
              © {new Date().getFullYear()} QCD TRAVELS • EXPLORE THE UNKNOWN
            </p>
            <div className="flex gap-8 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                <Link href="/privacy" className="hover:text-orange-500 transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-orange-500 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;