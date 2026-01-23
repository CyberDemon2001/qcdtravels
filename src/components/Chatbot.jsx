"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiSend,
  FiX,
  FiMessageCircle,
  FiCalendar,
  FiGlobe,
  FiMapPin,
  FiUser,
  FiPhone,
} from "react-icons/fi";
import traveldidiImage from "../../public/assets/traveldidi.png";
import Image from "next/image";

const travelDidiBot = {
  name: "TravelDidi",
  image: traveldidiImage,
  tagline: "Ek trip to banta hai! ✈️",
};

export default function ChatBot({ open, onClose, onOpen }) {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [collectedData, setCollectedData] = useState({
    name: "",
    phone: "",
    travelMonth: "",
    travelYear: "",
    destination: "",
    place: "",
    tripType: "",
    ageGroup: "",
    interest: "",
  });
  const [conversationStep, setConversationStep] = useState("greeting");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  // Initialize Chat
  useEffect(() => {
    if (open && messages.length === 0) {
      addBotMessage(
        `Namaste! 🙏 I'm TravelDidi, how may I help you plan your trip? Kyunki "ek trip to banta hai" ✨`,
      );
      setConversationStep("interest");
    }
  }, [open]);

  const addBotMessage = (text) => {
    const message = {
      id: Date.now().toString(),
      sender: "bot",
      text,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, message]);
  };

  const addUserMessage = (text) => {
    const message = {
      id: Date.now().toString(),
      sender: "user",
      text,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, message]);
  };

  const simulateBotTyping = async (text, delay = 800) => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, delay));
    addBotMessage(text);
    setIsLoading(false);
  };

  // --- Options Data ---
  const interestOptions = [
    "🌍 Where should I travel this year?",
    "✈️ Best destination for first time travellers?",
    "🏖️ Which places are best for relaxing or leisure?",
    "📝 How do I plan my trip step by step?",
    "🗺️ Create a custom itinerary for me",
    "📅 What is the best time to visit?",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const years = ["2026", "2027"];
  const destinationOptions = ["🇮🇳 Within India", "🌏 Abroad"];
  const tripTypeOptions = [
    "🏖️ Leisure trip",
    "💼 Business trip",
    "🎒 Solo Trip",
    "👨‍👩‍👧‍👦 Family Vacation",
    "👥 Group Holidays",
    "🏢 Corporate Bookings",
    "🎓 Students Travel Visits",
  ];
  const ageGroupOptions = ["18-25", "25-35", "35-45", "45-65", "Others"];

  // --- Handlers ---
  const handleInterestSelect = async (interest) => {
    addUserMessage(interest);
    setCollectedData({ ...collectedData, interest });
    await simulateBotTyping(
      `Great choice! 📅 Let me help you find the perfect time for your journey. When are you planning to travel?`,
      800,
    );
    setConversationStep("travelMonth");
  };

  const handleMonthSelect = async (month) => {
    addUserMessage(month);
    setCollectedData({ ...collectedData, travelMonth: month });
    await simulateBotTyping(`Perfect! 📆 Which year?`, 600);
    setConversationStep("travelYear");
  };

  const handleYearSelect = async (year) => {
    addUserMessage(year);
    setCollectedData({ ...collectedData, travelYear: year });
    await simulateBotTyping(
      `Wonderful! ${collectedData.travelMonth} ${year} sounds amazing! 🌏 Are you looking to travel within India or abroad?`,
      800,
    );
    setConversationStep("destination");
  };

  const handleDestinationSelect = async (destination) => {
    addUserMessage(destination);
    setCollectedData({ ...collectedData, destination });
    await simulateBotTyping(
      `Exciting! ✨ What kind of trip are you looking for?`,
      800,
    );
    setConversationStep("tripType");
  };

  const handleTripTypeSelect = async (tripType) => {
    addUserMessage(tripType);
    setCollectedData({ ...collectedData, tripType });
    await simulateBotTyping(
      `Great! 🎯 What's your age group? This helps me recommend the best experiences for you.`,
      800,
    );
    setConversationStep("ageGroup");
  };

  const handleAgeGroupSelect = async (ageGroup) => {
    addUserMessage(ageGroup);
    setCollectedData({ ...collectedData, ageGroup });
    const isAbroad = collectedData.destination.includes("Abroad");
    const recs = isAbroad
      ? "🌟 Recommended destinations for you:\n• Japan 🇯🇵\n• Turkey 🇹🇷\n• Greece 🇬🇷\n• Norway 🇳🇴"
      : "🌟 Recommended destinations for you:\n• Kerala 🏝️\n• Goa 🏖️\n• Telangana 🏛️\n• Ladakh ⛰️";
    await simulateBotTyping(recs, 1000);
    await simulateBotTyping(
      `Do you have a specific place in mind? Or tell me where you'd like to go! 📍`,
      800,
    );
    setConversationStep("place");
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;
    const val = inputValue;
    setInputValue("");
    addUserMessage(val);

    if (conversationStep === "place") {
      setCollectedData({ ...collectedData, place: val });
      await simulateBotTyping(
        `Got it! ${val} is a fantastic choice. 😍 Now, let me get your details to create the perfect itinerary! What's your name?`,
        800,
      );
      setConversationStep("name");
    } else if (conversationStep === "name") {
      setCollectedData({ ...collectedData, name: val });
      await simulateBotTyping(
        `Nice to meet you, ${val}! 🤝 What's your contact number? (10-digit mobile number)`,
        800,
      );
      setConversationStep("phone");
    } else if (conversationStep === "phone") {
      const phoneRegex = /^[6-9]\d{9}$/;
      if (!phoneRegex.test(val)) {
        addBotMessage(
          "❌ Please enter a valid 10-digit mobile number starting with 6-9",
        );
        return;
      }
      setCollectedData({ ...collectedData, phone: val });
      await simulateBotTyping(
        `Perfect! ✨ I've received your details for your trip to ${collectedData.place}. Our travel experts will contact you shortly. Happy travels! 🎉`,
        1000,
      );
      setConversationStep("confirmation");
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-1000">
      <AnimatePresence mode="wait">
        {open ? (
          /* --- CHAT WINDOW --- */
          <motion.div
            key="chat-window"
            initial={{
              opacity: 0,
              scale: 0.8,
              y: 100,
              transformOrigin: "bottom right",
            }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 100 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="lg:w-95 w-[320px] backdrop-blur-md rounded-[2.5rem] shadow-2xl border border-white/40 overflow-hidden flex flex-col h-150 lg:h-162.5"
          >
            {/* Header */}
            <div className="p-5 text-white flex items-center gap-3 shrink-0 bg-linear-to-br from-orange-500/50 to-orange-600/50 backdrop-blur-md">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center border border-white/30 shrink-0">
                <Image
                  src={travelDidiBot.image}
                  alt="TravelDidi"
                  className="w-10 h-10 object-cover rounded-xl"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-base truncate">
                  {travelDidiBot.name}
                </h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <p className="text-[11px] opacity-90 truncate">
                    {travelDidiBot.tagline}
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/20 rounded-full transition-all active:scale-90"
              >
                <FiX size={22} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-4 space-y-4 bg-transparent overflow-y-auto">
              {messages.map((msg) => (
                <motion.div
                  initial={{ opacity: 0, x: msg.sender === "user" ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={msg.id}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] p-3.5 text-[13px] leading-relaxed shadow-sm ${
                      msg.sender === "user"
                        ? "bg-orange-500 text-white rounded-2xl rounded-tr-none shadow-orange-200"
                        : "bg-white text-gray-800 rounded-2xl rounded-tl-none border border-gray-100 shadow-gray-200"
                    }`}
                  >
                    {msg.text.split("\n").map((line, i) => (
                      <span key={i}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex items-center gap-2 ml-2">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-bounce" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input / Options Area */}
            <div className="p-4 bg-white/50 border-t border-gray-100">
              {conversationStep === "interest" && (
                <div className="grid gap-2 max-h-55 overflow-y-auto pr-1">
                  {interestOptions.map((opt) => (
                    <motion.button
                      whileHover={{ x: 5 }}
                      key={opt}
                      onClick={() => handleInterestSelect(opt)}
                      className="w-full text-left p-3 rounded-xl border border-orange-100 bg-orange-50/30 text-orange-600 hover:bg-orange-500 hover:text-white text-xs font-semibold transition-all"
                    >
                      {opt}
                    </motion.button>
                  ))}
                </div>
              )}

              {conversationStep === "travelMonth" && (
                <div className="grid grid-cols-3 gap-2">
                  {months.map((m) => (
                    <button
                      key={m}
                      onClick={() => handleMonthSelect(m)}
                      className="py-2.5 text-xs font-bold rounded-xl border border-gray-100 text-gray-600 hover:border-orange-500 hover:text-orange-500 transition-all"
                    >
                      {m.substring(0, 3)}
                    </button>
                  ))}
                </div>
              )}

              {conversationStep === "travelYear" && (
                <div className="flex gap-3">
                  {years.map((y) => (
                    <button
                      key={y}
                      onClick={() => handleYearSelect(y)}
                      className="flex-1 py-3 text-sm font-bold rounded-xl border-2 border-orange-100 text-orange-500 hover:bg-orange-500 hover:text-white transition-all"
                    >
                      {y}
                    </button>
                  ))}
                </div>
              )}

              {conversationStep === "destination" && (
                <div className="grid grid-cols-2 gap-3">
                  {destinationOptions.map((d) => (
                    <button
                      key={d}
                      onClick={() => handleDestinationSelect(d)}
                      className="p-4 text-xs font-bold rounded-2xl border border-gray-100 text-gray-700 hover:border-orange-500 hover:text-orange-500 transition-all shadow-sm"
                    >
                      {d}
                    </button>
                  ))}
                </div>
              )}

              {conversationStep === "tripType" && (
                <div className="flex flex-wrap gap-2 max-h-37.5 overflow-y-auto">
                  {tripTypeOptions.map((t) => (
                    <button
                      key={t}
                      onClick={() => handleTripTypeSelect(t)}
                      className="px-4 py-2 text-[11px] font-bold rounded-full border border-gray-200 bg-gray-50 text-gray-600 hover:bg-orange-500 hover:text-white transition-all"
                    >
                      {t}
                    </button>
                  ))}
                </div>
              )}

              {conversationStep === "ageGroup" && (
                <div className="grid grid-cols-2 gap-2">
                  {ageGroupOptions.map((a) => (
                    <button
                      key={a}
                      onClick={() => handleAgeGroupSelect(a)}
                      className="py-2.5 text-xs font-bold rounded-xl bg-gray-50 text-gray-600 hover:bg-orange-500 hover:text-white transition-all"
                    >
                      {a}
                    </button>
                  ))}
                </div>
              )}

              {["place", "name", "phone"].includes(conversationStep) && (
                <div className="flex gap-2">
                  <input
                    type={conversationStep === "phone" ? "tel" : "text"}
                    autoFocus
                    className="flex-1 px-4 py-3 text-sm bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition-all"
                    placeholder={
                      conversationStep === "place"
                        ? "Specific city or state?"
                        : conversationStep === "name"
                          ? "Your name please?"
                          : "10-digit mobile number"
                    }
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  />
                  <button
                    onClick={handleSendMessage}
                    className="w-12 h-12 bg-linear-to-r from-orange-400 to-orange-600 text-white rounded-2xl flex items-center justify-center shadow-lg active:scale-90 transition-transform"
                  >
                    <FiSend size={20} />
                  </button>
                </div>
              )}

              {conversationStep === "confirmation" && (
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  className="text-center py-4 px-2 bg-green-50 rounded-2xl border border-green-100 text-green-600 font-bold text-sm"
                >
                  ✅ Details shared with our experts!
                </motion.div>
              )}
            </div>
          </motion.div>
        ) : (
          /* --- MODERN LAUNCHER --- */
          <motion.div
            key="chat-launcher"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", damping: 14 }}
            className="relative cursor-pointer group"
            onClick={onOpen}
          >
            {/* Tooltip */}
            <div className="absolute -top-14 right-0 bg-white px-4 py-2 rounded-2xl shadow-xl border border-orange-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <p className="text-orange-600 font-bold text-sm whitespace-nowrap">
                Ek trip to banta hai! ✨
              </p>
            </div>

            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-75 h-112.5 overflow-hidden"
            >
              <Image
                src={traveldidiImage}
                alt="TravelDidi Launcher"
                fill
                priority
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
