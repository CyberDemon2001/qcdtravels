"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Added AnimatePresence
import { Lock, Mail, ArrowRight, ShieldCheck, Globe, AlertCircle } from "lucide-react"; // Added AlertCircle
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(""); // 1. New error state

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Reset error on new attempt

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      setLoading(false);

      if (!data.success) {
        setError(data.message || "Invalid credentials. Please try again."); // 2. Set error state
        return;
      }

      router.push("/admin/dashboard");
    } catch (err) {
      setLoading(false);
      setError("A connection error occurred.");
    }
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
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-500/5 rounded-full blur-[120px]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-[450px] px-6"
      >
        <div className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-10 md:p-12 rounded-[3rem] shadow-2xl">
          
          {/* Brand Logo */}
          <div className="flex flex-col items-center mb-10">
            <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-orange-500/20">
              <ShieldCheck className="text-white w-8 h-8" strokeWidth={2.5} />
            </div>
            <h1 className="text-white text-3xl font-black uppercase tracking-tighter">
              QCD <span className="text-orange-500 italic font-serif lowercase">Admin</span>
            </h1>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            
            {/* 3. Error Message UI */}
            <AnimatePresence mode="wait">
              {error && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-red-500/10 border border-red-500/20 py-3 px-4 rounded-xl flex items-center gap-3"
                >
                  <AlertCircle className="text-red-500 shrink-0" size={16} />
                  <p className="text-red-500 text-[11px] font-bold uppercase tracking-wider">
                    {error}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">
                Identity
              </label>
              <div className="relative">
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-orange-500 w-4 h-4" />
                <input
                  type="email"
                  required
                  className="w-full bg-white/[0.05] border border-white/10 px-14 py-4 rounded-2xl text-white outline-none focus:border-orange-500 transition-all"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">
                Access Key
              </label>
              <div className="relative">
                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-orange-500 w-4 h-4" />
                <input
                  type="password"
                  required
                  className="w-full bg-white/[0.05] border border-white/10 px-14 py-4 rounded-2xl text-white outline-none focus:border-orange-500 transition-all"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-5 bg-orange-500 hover:bg-white hover:text-black text-white rounded-2xl font-black uppercase tracking-[0.2em] text-xs transition-all duration-500 flex items-center justify-center gap-3 disabled:opacity-50 mt-8"
            >
              {loading ? "Authenticating..." : "Authorize Access"}
              {!loading && <ArrowRight size={16} />}
            </button>
          </form>

          <div className="mt-10 text-center">
            <Link href="/" className="text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-orange-500 transition-colors flex items-center justify-center gap-2">
              <Globe size={12} /> Return to Public Site
            </Link>
          </div>
        </div>
      </motion.div>
    </main>
  );
}