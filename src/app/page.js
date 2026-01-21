"use client";
import { useState, useRef } from "react";
import GlassNavbar from "@/components/GlassNavbar";
import TravelCarousel from "@/components/TravelCarousel";
import PopularDestinations from "@/components/PopularDestinations";
import About from "@/components/About";
import Tours from "@/components/Tours";
import Offers from "@/components/Offers";
import TopDestinations from "@/components/TopDestinations";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
// ... Import other components using the @ alias

export default function Home() {
  const [chatOpen, setChatOpen] = useState(true);
  const reopenTimerRef = useRef(null);

  const closeChat = () => {
    setChatOpen(false);
    if (reopenTimerRef.current) clearTimeout(reopenTimerRef.current);
    reopenTimerRef.current = setTimeout(() => setChatOpen(true), 50000);
  };

  const openChat = () => setChatOpen(true);

  return (
    <main className="min-h-screen relative">
      <GlassNavbar />
      <TravelCarousel />
      <PopularDestinations />
      <About />
      <Tours />
      <Offers />
      <TopDestinations />
      <Features />
      
      {/* ChatBot component would go here */}
      {/* <ChatBot open={chatOpen} onClose={closeChat} onOpen={openChat} /> */}
      
      <Footer />
    </main>
  );
}