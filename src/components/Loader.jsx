"use client"
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Loader = ({ finishLoading }) => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(finishLoading, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20); 

    return () => clearInterval(interval);
  }, [finishLoading]);

  return (
    <motion.div 
      className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-white font-['Inter_Variable']"
      exit={{ 
        y: "-100%",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
      }}
    >
      {/* 3D Solid Box with All Sides Labeled */}
      <div className="relative mb-20 scale-125" style={{ perspective: "1000px" }}>
        <motion.div
          animate={{ 
            rotateY: [0, 360],
            rotateX: [0, 360],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="relative w-20 h-20"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* TOP - Quality (Green) */}
          <div className="absolute inset-0 bg-orange-400 border border-orange-800 flex items-center justify-center shadow-inner" 
               style={{ transform: "rotateX(90deg) translateZ(40px)" }}>
            <span className="text-[10px] text-white font-black uppercase tracking-tighter">Quality</span>
          </div>
          
          {/* BOTTOM - Quality (Green) */}
          <div className="absolute inset-0 bg-orange-400 border border-orange-500 flex items-center justify-center shadow-inner" 
               style={{ transform: "rotateX(-90deg) translateZ(40px)" }}>
             <span className="text-[10px] text-white font-black uppercase tracking-tighter">Quality</span>
          </div>

          {/* FRONT - Delivery (Red) */}
          <div className="absolute inset-0 bg-orange-700 border border-orange-800 flex items-center justify-center shadow-inner" 
               style={{ transform: "translateZ(40px)" }}>
            <span className="text-[10px] text-white font-black uppercase tracking-tighter">Delivery</span>
          </div>

          {/* BACK - Delivery (Red) */}
          <div className="absolute inset-0 bg-orange-700 border border-orange-800 flex items-center justify-center shadow-inner" 
               style={{ transform: "rotateY(180deg) translateZ(40px)" }}>
            <span className="text-[10px] text-white font-black uppercase tracking-tighter">Delivery</span>
          </div>

          {/* LEFT - Cost (Blue) */}
          <div className="absolute inset-0 bg-teal-700 border border-teal-800 flex items-center justify-center shadow-inner" 
               style={{ transform: "rotateY(-90deg) translateZ(40px)" }}>
            <span className="text-[10px] text-white font-black uppercase tracking-tighter">Cost</span>
          </div>

          {/* RIGHT - Cost (Blue) */}
          <div className="absolute inset-0 bg-teal-700 border border-teal-800 flex items-center justify-center shadow-inner" 
               style={{ transform: "rotateY(90deg) translateZ(40px)" }}>
            <span className="text-[10px] text-white font-black uppercase tracking-tighter">Cost</span>
          </div>
        </motion.div>
        
        {/* Shadow under the cube */}
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-16 h-3 bg-black/5 blur-xl rounded-full" />
      </div>

      {/* Brand Labeling Section */}
      <div className="text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-4xl font-black tracking-tighter mb-1 flex items-center justify-center gap-1">
            <span className="text-teal-700">Q</span>
            <span className="text-orange-400">C</span>
            <span className="text-orange-600">D</span>
            <span className="ml-2 text-gray-900 font-serif italic font-medium">TRAVELS</span>
          </h2>
          <p className="text-gray-400 font-bold text-[10px] tracking-[0.3em] uppercase mb-8">
            Ek Trip Toh Banta Hai
          </p>
        </motion.div>
        
        {/* Branded Progress Bar */}
        <div className="relative w-64 h-1.5 bg-gray-100 rounded-full overflow-hidden mx-auto mb-4">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-linear-to-r from-teal-700 via-orange-400 to-orange-700"
            initial={{ width: 0 }}
            animate={{ width: `${percent}%` }}
          />
        </div>
        
        {/* Loading Stats */}
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-black text-gray-900">{percent}%</span>
          {/* <div className="px-4 py-1.5 bg-emerald-50 rounded-full border border-emerald-100">
            <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-[0.2em] animate-pulse">
              Ek Trip To Banta Hai
            </span>
          </div> */}
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;

// "use client"
// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import { Plane } from 'lucide-react';

// const Loader = ({ finishLoading }) => {
//   const [percent, setPercent] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setPercent((prev) => {
//         if (prev >= 100) {
//           clearInterval(interval);
//           setTimeout(finishLoading, 500);
//           return 100;
//         }
//         return prev + 1;
//       });
//     }, 25); // Slightly faster to keep user engagement

//     return () => clearInterval(interval);
//   }, [finishLoading]);

//   return (
//     <motion.div 
//       className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white font-['Inter_Variable']"
//       exit={{ 
//         y: "-100%",
//         transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
//       }}
//     >
//       {/* Background Decorative Element - Same as Offers/Features */}
//       <div className="absolute inset-0 bg-gradient-to-br from-orange-500/80 via-white to-orange-500/80 opacity-50 -z-10" />

//       {/* Brand Icon with Pulsing Effect */}
//       <div className="relative mb-12">
//         <motion.div
//           initial={{ scale: 0.8, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.5 }}
//           className="relative z-10 w-24 h-24 bg-gray-900 rounded-[2.5rem] flex items-center justify-center shadow-2xl shadow-emerald-200"
//         >
//           <Plane className="text-emerald-500 w-10 h-10 rotate-45" strokeWidth={2.5} />
//         </motion.div>
        
//         {/* Triple Pulsing Rings - Emerald Brand Color */}
//         {[1, 1.5, 2].map((s, i) => (
//           <motion.div 
//             key={i}
//             className="absolute inset-0 bg-emerald-500/20 rounded-[2.5rem] -z-10"
//             animate={{ scale: [1, s + 0.5], opacity: [0.5, 0] }}
//             transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
//           />
//         ))}
//       </div>

//       {/* Branding - Matched to TopDestinations/Offers Header */}
//       <div className="text-center px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//         >
//           <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tighter mb-2">
//             QCD <span className="text-emerald-500 font-serif italic font-medium">TRAVELS</span>
//           </h2>
//           <p className="text-emerald-600 font-bold text-[10px] uppercase tracking-[0.4em] mb-8">
//             Ek Trip To Banta Hai
//           </p>
//         </motion.div>
        
//         {/* Progress Bar - Minimal & Clean */}
//         <div className="relative w-64 h-1.5 bg-gray-100 rounded-full overflow-hidden mx-auto">
//           <motion.div 
//             className="absolute top-0 left-0 h-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
//             initial={{ width: 0 }}
//             animate={{ width: `${percent}%` }}
//             transition={{ ease: "linear" }}
//           />
//         </div>
        
//         <motion.div 
//           className="mt-6 flex flex-col items-center gap-1"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//         >
//           <span className="text-[11px] font-black text-gray-900 tabular-nums">
//             {percent}%
//           </span>
//           <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest animate-pulse">
//             Curating your journey...
//           </span>
//         </motion.div>
//       </div>

//       {/* Decorative Corner Element */}
//       <div className="absolute bottom-10 text-gray-100 select-none -z-10">
//         <h3 className="text-9xl font-black">QCD</h3>
//       </div>
//     </motion.div>
//   );
// };

// export default Loader;