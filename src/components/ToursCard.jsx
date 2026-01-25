"use client";
import React from "react";
import { MapPin, Calendar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ToursCard = ({ item, index }) => {
  const router = useRouter();

  // Generate SEO-friendly slug from the title
  const slug = item?.title.toLowerCase().replace(/ /g, "-");

  // Format the date
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  // Itinerary cities
  const citiesList =
    item?.itinerary?.map((plan) => plan?.city).join(" • ") || "Various Locations";

  // Navigate with tour data
  const handleClick = () => {
  const encodedData = encodeURIComponent(JSON.stringify(item));
  router.push(`/tours/${slug}?data=${encodedData}`);
};


  return (
    <div onClick={handleClick}>
      <motion.div
        className="group relative pb-12 pr-4 md:pr-8 h-full cursor-pointer"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
      >
        {/* IMAGE */}
        <div className="relative h-[280px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl z-0 bg-slate-100">
          <div className="absolute top-2 left-1/2 -translate-x-1/2 z-30 px-3 py-1 rounded-2xl bg-orange-500 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest shadow-lg border border-white/10">
            {item?.duration?.days}Days / {item?.duration?.nights}Nights
          </div>
          <Image
            src={item.imageURL}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>

        {/* CONTENT */}
        <motion.div
          className="relative z-20 -mt-10 ml-6 w-[100%] bg-white/95 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/50"
          whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 1)" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h3 className="font-black text-lg text-gray-900 leading-tight mb-2 line-clamp-2 group-hover:text-orange-500 transition-colors uppercase tracking-tighter">
            {item.title}
          </h3>

          <div className="flex items-start text-gray-500 h-6 overflow-hidden">
            <MapPin size={16} className="text-orange-500 shrink-0" />
            <span className="text-xs font-bold line-clamp-2">{citiesList}</span>
          </div>

          <div className="flex items-center gap-2 text-gray-400 border-b border-gray-100">
            <Calendar size={14} className="text-gray-400" />
            <span className="text-[10px] font-black uppercase tracking-widest">
              {formatDate(item.startDate)} - {formatDate(item.endDate)}
            </span>
          </div>

          {/* ITINERARY ROW */}
          <div className="px-2 my-2 bg-gray-50/50 rounded-2xl border-y border-dashed border-red-200 flex">
            {item.itinerary.map((plan, i) => (
              <React.Fragment key={i}>
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-black text-red-200">{plan.days}</span>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-400 font-bold uppercase leading-none">
                      Days in
                    </span>
                    <span className="text-[10px] text-[#0A2357] font-black">{plan.city}</span>
                  </div>
                </div>
                {i < item.itinerary.length - 1 && (
                  <div className="w-2 h-2 rounded-full bg-red-400 opacity-50 mx-1" />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* PRICE & ACTION */}
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                Starting from
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-orange-500 font-black text-xl">₹{item.startingPrice}</span>
                <span className="text-[9px] font-black text-gray-400 uppercase">/ person</span>
              </div>
            </div>

            <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-900 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
              <ArrowRight size={18} />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ToursCard;
