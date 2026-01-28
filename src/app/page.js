"use client";
import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";

import GlassNavbar from "@/components/GlassNavbar";
import TravelCarousel from "@/components/TravelCarousel";
import PopularDestinations from "@/components/PopularDestinations";
import About from "@/components/About";
import Tours from "@/components/Tours";
import Offers from "@/components/Offers";
import TopDestinations from "@/components/TopDestinations";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import ChatBot from "@/components/Chatbot";
import IndiaSpiritual from "@/components/IndiaSpritual";

export default function Home() {
  // const [isLoading, setIsLoading] = useState(false);
  const [chatOpen, setChatOpen] = useState(true);
  const reopenTimerRef = useRef(null);

  // 🔥 Check if loader already shown in this session
  // useEffect(() => {
  //   const hasLoaded = sessionStorage.getItem("hasLoaded");

  //   if (!hasLoaded) {
  //     setIsLoading(true);
  //     sessionStorage.setItem("hasLoaded", "true");
  //   }
  // }, []);

  const closeChat = () => {
    setChatOpen(false);
    if (reopenTimerRef.current) clearTimeout(reopenTimerRef.current);
    reopenTimerRef.current = setTimeout(() => setChatOpen(true), 100000);
  };

  const openChat = () => setChatOpen(true);

  return (
    <main className="min-h-screen relative bg-white">
      <AnimatePresence mode="wait">
        {/* {isLoading ? (
          <Loader key="loader" finishLoading={() => setIsLoading(false)} />
        ) : ( */}
          <div key="main-content">
            <GlassNavbar />
            <TravelCarousel />
            <PopularDestinations />
            <IndiaSpiritual />
            <About />
            <Tours />
            <Offers />
            <TopDestinations />
            
            <Features />
            <ChatBot open={chatOpen} onClose={closeChat} onOpen={openChat} />
            <Footer />
          </div>
        {/* )} */}
      </AnimatePresence>
    </main>
  );
}


// "use client";
// import React, { useState, useRef } from "react";
// import { AnimatePresence } from "framer-motion";

// // Component Imports
// import GlassNavbar from "@/components/GlassNavbar";
// import TravelCarousel from "@/components/TravelCarousel";
// import PopularDestinations from "@/components/PopularDestinations";
// import About from "@/components/About";
// import Tours from "@/components/Tours";
// import Offers from "@/components/Offers";
// import TopDestinations from "@/components/TopDestinations";
// import Features from "@/components/Features";
// import Footer from "@/components/Footer";
// import Loader from "@/components/Loader"; // Make sure to save the Loader code in this path
// import ChatBot from "@/components/Chatbot";

// export default function Home() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [chatOpen, setChatOpen] = useState(true);
//   const reopenTimerRef = useRef(null);

//   const closeChat = () => {
//     setChatOpen(false);
//     if (reopenTimerRef.current) clearTimeout(reopenTimerRef.current);
//     reopenTimerRef.current = setTimeout(() => setChatOpen(true), 50000);
//   };

//   const openChat = () => setChatOpen(true);

//   return (
//     <main className="min-h-screen relative bg-white">
//       <AnimatePresence mode="wait">
//         {isLoading ? (
//           /* Loader Component */
//           <Loader key="loader" finishLoading={() => setIsLoading(false)} />
//         ) : (
//           /* Main Website Content */
//           <div key="main-content">
//             <GlassNavbar />
//             <TravelCarousel />
            
//             {/* The following sections have the 'whileInView' animations we added */}
//             <PopularDestinations />
//             <About />
//             <Tours />
//             <Offers />
//             <TopDestinations />
//             <Features />
//             <ChatBot open={chatOpen} onClose={closeChat} onOpen={openChat} />
//             <Footer />
//           </div>
//         )}
//       </AnimatePresence>

//       {/* ChatBot (Rendered outside the loading conditional if you want it always available, 
//           or inside if it should wait for the loader) */}
//       {/* {!isLoading && <ChatBot open={chatOpen} onClose={closeChat} onOpen={openChat} />} */}
//     </main>
//   );
// }