"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { LogOut, User, Settings, Shield, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);

    try {
      // 1. Call your API to clear the session cookie
      const res = await fetch("/api/auth/logout", { method: "POST" });
      
      // 2. Redirect to the admin login page
      router.push("/login");
      router.refresh(); 
    } catch (error) {
      console.error("Logout failed", error);
      setIsLoggingOut(false);
    }
  };

  return (
    <div className="min-h-screen mt-10 bg-gray-50 text-gray-900 font-sans">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 font-bold text-lg tracking-tight">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <Shield className="text-white w-5 h-5" />
            </div>
            <span>QCD Admin</span>
          </div>
          
          <button
            onClick={handleLogout}
            disabled={isLoggingOut}
            className="text-sm font-medium text-gray-600 hover:text-red-600 flex items-center gap-2 transition-colors"
          >
            <LogOut size={18} />
            {isLoggingOut ? "Logging out..." : "Logout"}
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-full flex items-center justify-center mx-auto py-12 px-6">
        <div className="flex flex-col md:flex-row gap-12">
          
          {/* Sidebar: Profile Summary */}
          <div className="w-full md:w-1/3 text-center md:text-left">
            <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mb-4 mx-auto md:mx-0">
              <User size={32} className="text-gray-500" />
            </div>
            <h1 className="text-2xl font-bold">Admin User</h1>
            <p className="text-gray-500 text-sm">admin@qcdtravels.com</p>
            <div className="mt-4 inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full uppercase">
              Super Admin
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}