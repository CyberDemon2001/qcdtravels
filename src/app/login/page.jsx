"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Lock, Mail, ArrowRight, ShieldCheck, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Your existing logic remains the same
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    setLoading(false);

    if (!data.success) {
      alert(data.message);
      return;
    }

    router.push("/admin/dashboard");
  };

  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-[#050505] relative overflow-hidden font-['Inter_Variable']">
      
      {/* --- BACKGROUND AESTHETICS --- */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80" 
          alt="Admin background"
          fill
          className="object-cover opacity-20 grayscale"
        />
        {/* Animated Gradient Orbs for that modern feel */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-500/5 rounded-full blur-[120px]" />
      </div>

      {/* --- LOGIN CARD --- */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-[450px] px-6"
      >
        <div className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-10 md:p-12 rounded-[3rem] shadow-2xl">
          
          {/* Brand Logo / Icon */}
          <div className="flex flex-col items-center mb-10">
            <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-orange-500/20">
              <ShieldCheck className="text-white w-8 h-8" strokeWidth={2.5} />
            </div>
            <h1 className="text-white text-3xl font-black uppercase tracking-tighter">
              QCD <span className="text-orange-500 italic font-serif lowercase">Admin</span>
            </h1>
            <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.3em] mt-2">
              Management Portal
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">
                Identity
              </label>
              <div className="relative">
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-orange-500 w-4 h-4" />
                <input
                  type="email"
                  required
                  placeholder="admin@qcdtravels.com"
                  className="w-full bg-white/[0.05] border border-white/10 px-14 py-4 rounded-2xl text-white outline-none focus:border-orange-500 focus:bg-white/[0.08] transition-all"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">
                Access Key
              </label>
              <div className="relative">
                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-orange-500 w-4 h-4" />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  className="w-full bg-white/[0.05] border border-white/10 px-14 py-4 rounded-2xl text-white outline-none focus:border-orange-500 focus:bg-white/[0.08] transition-all"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-5 bg-orange-500 hover:bg-white hover:text-black text-white rounded-2xl font-black uppercase tracking-[0.2em] text-xs transition-all duration-500 flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed mt-8"
            >
              {loading ? "Authenticating..." : "Authorize Access"}
              {!loading && <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />}
            </button>
          </form>

          {/* Footer link */}
          <div className="mt-10 text-center">
            <Link href="/" className="text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-orange-500 transition-colors flex items-center justify-center gap-2">
              <Globe size={12} /> Return to Public Site
            </Link>
          </div>
        </div>
        
        <p className="text-center text-gray-600 text-[9px] font-bold uppercase tracking-widest mt-8">
          Secured by QCD Travels Internal Systems &copy; 2026
        </p>
      </motion.div>
    </main>
  );
}

