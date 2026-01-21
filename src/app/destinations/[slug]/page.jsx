"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { MapPin, Plane, Info, CheckCircle2, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import GlassNavbar from '@/components/GlassNavbar';
import Footer from '@/components/Footer';
import ToursCard from '@/components/ToursCard';

// Dummy data for example (You can later move this to a central file)
const DESTINATION_DETAILS = {
  indonesia: {
    name: "Indonesia",
    tagline: "The Emerald of the Equator",
    about: "Indonesia is a land of breathtaking contrasts, where ancient traditions meet modern energy. From the mist-covered volcanoes of Java to the pristine shores of Bali and the rugged wilderness of Komodo, it offers a diverse tapestry of experiences.",
    image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1920&q=80",
    highlights: ["Island Hopping in Raja Ampat", "Cultural Immersion in Ubud", "Sunrise at Borobudur Temple"]
  },
    thailand: {
    name: "Thailand",
    tagline: "Land of Smiles and Serenity",
    about: "Thailand is a captivating blend of vibrant culture, stunning landscapes, and warm hospitality. From the bustling streets of Bangkok to the tranquil beaches of Phuket and the mountainous beauty of Chiang Mai, Thailand offers something for every traveler.",
    image: "https://images.unsplash.com/photo-1528181304800-2f140819ad1c?auto=format&fit=crop&w=1920&q=80",
    highlights: ["Exploring the Grand Palace", "Relaxing on Phi Phi Islands", "Trekking in Chiang Mai"]
  },
    india: {
    name: "India",
    tagline: "A Symphony of Colors and Cultures",
    about: "India is a land of incredible diversity, where ancient traditions coexist with modern innovation. From the majestic Taj Mahal to the spiritual ghats of Varanasi and the vibrant markets of Jaipur, India offers a sensory overload of sights, sounds, and flavors.",
    image: "https://images.unsplash.com/photo-1524492707947-2f85a64319bb?auto=format&fit=crop&w=1920&q=80",
    highlights: ["Visiting the Taj Mahal", "Experiencing Ganga Aarti in Varanasi", "Exploring Jaipur's Palaces"]
  },
    london: {
    name: "London",
    tagline: "Where History Meets Modernity",
    about: "London is a city that seamlessly blends its rich history with contemporary culture. From iconic landmarks like the Tower of London and Buckingham Palace to vibrant neighborhoods like Shoreditch and Camden, London offers a dynamic experience for every visitor.",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1920&q=80",
    highlights: ["Exploring the British Museum", "Cruising the Thames", "Visiting the West End Theatres"]
  },
    dubai: {
    name: "Dubai",
    tagline: "The City of Future",
    about: "Dubai is a city of superlatives, where futuristic architecture meets desert mystique. From the towering Burj Khalifa to the luxurious Palm Jumeirah, Dubai offers an unparalleled blend of opulence, adventure, and cultural experiences.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1920&q=80",
    highlights: ["Desert Safari Experience", "Visiting Burj Khalifa", "Shopping at Dubai Mall"]
  },
};

const DestinationDetail = () => {
  const params = useParams();
  const slug = params.slug;
  const data = DESTINATION_DETAILS[slug] || DESTINATION_DETAILS['indonesia'];

  return (
    <main className="min-h-screen bg-white">
      <GlassNavbar />

      {/* --- CREATIVE HERO SECTION (Masked Text Effect) --- */}
      <section className="relative min-h-[60vh] w-full flex items-center justify-center overflow-hidden bg-black">
        {/* Background Layer: Blurred and Darkened */}
        <div className="absolute inset-0 z-0">
          <Image 
            src={data.image} 
            alt={data.name} 
            fill 
            className="object-cover blur-xs brightness-50 scale-105" 
          />
        </div>

        {/* Text Layer: Creative Image Mask */}
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* The "Masked" Heading */}
            <h1 
              className="text-[15vw] md:text-[16vw] font-black uppercase tracking-tighter leading-none select-none"
              style={{
                backgroundImage: `url(${data.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 20px 50px rgba(0,0,0,0.5))'
              }}
            >
              {data.name}
            </h1>
            
            {/* Tagline below the creative name */}
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-white text-lg md:text-2xl font-serif italic tracking-wide"
            >
              {data.tagline}
            </motion.p>
          </motion.div>
        </div>

        {/* Scroll Indicator Icon */}
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        >
          <div className="w-px h-12 bg-gradient-to-t from-orange-500 to-transparent mx-auto" />
        </motion.div>
      </section>

      {/* --- ABOUT DESTINATION SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 rounded-full text-orange-500 font-black text-[10px] uppercase tracking-[0.2em] mb-6">
              <Info className="w-3 h-3" />
              Know the region
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter uppercase mb-8">
              Experience <span className="text-orange-500 font-serif italic font-medium">True</span> {data.name}
            </h2>
            <p className="text-gray-500 text-xl leading-relaxed mb-8">
              {data.about}
            </p>
            
            <div className="space-y-4">
              {data.highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 text-gray-800 font-bold">
                  <CheckCircle2 className="text-orange-500 w-6 h-6" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Side Image with Border Design */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[500px] w-full rounded-[3rem] overflow-hidden border-[16px] border-gray-50 shadow-2xl">
               <Image src={data.image} alt="about" fill className="object-cover" />
            </div>
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-black text-white p-8 rounded-[2rem] shadow-2xl">
               <p className="text-4xl font-black text-orange-500">42+</p>
               <p className="text-[10px] uppercase font-black tracking-widest text-gray-400">Handpicked Tours</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- TOURS IN THIS DESTINATION --- */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <h2 className="text-4xl font-black text-gray-900 uppercase tracking-tighter leading-none">
              Explore <span className="text-orange-500">{data.name}</span> <br /> Tour Packages
            </h2>
            <Link href="/tours" className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-orange-500 border-b-2 border-orange-500 pb-1">
              View All Tours <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* You would filter your actual ALL_TOURS array here by destination */}
            {/* <ToursCard item={exampleTour} index={0} /> */}
            <p className="text-gray-400 italic">No tours available for this specific filter yet.</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default DestinationDetail;