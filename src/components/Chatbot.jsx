"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSend } from "react-icons/fi";
import { Minus, Sparkles, MapPin, CheckCircle2 } from "lucide-react";
import traveldidiImage from "../../public/assets/travelDidi2.png";
import Image from "next/image";

const travelDidiBot = {
  name: "TravelDidi",
  image: traveldidiImage,
  tagline: "Ek trip to banta hai!",
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
        `Namaste! 🙏 I'm TravelDidi, your personal trip architect. How may I help you plan your journey? Kyunki "ek trip to banta hai!"`
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
    "✈️ Best for first-timers?",
    "🏖️ Relaxing & Leisure spots",
    "📝 Step-by-step trip planning",
  ];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const years = ["2026", "2027"];
  const destinationOptions = ["🇮🇳 Within India", "🌏 Abroad"];
  const tripTypeOptions = ["🏖️ Leisure", "💼 Business", "🎒 Solo", "🎓 Student", "👨‍👩‍👧‍👦 Family", "👥 Group"];
  const ageGroupOptions = ["< 18", "18-25", "25-35", "35-45", "45-65", "65+"];

  // --- Handlers ---
  const handleInterestSelect = async (interest) => {
    addUserMessage(interest);
    setCollectedData({ ...collectedData, interest });
    await simulateBotTyping(`Great choice! 📅 Let's find your window. When are you planning to travel?`);
    setConversationStep("travelMonth");
  };

  const handleMonthSelect = async (month) => {
    addUserMessage(month);
    setCollectedData({ ...collectedData, travelMonth: month });
    await simulateBotTyping(`Perfect! 📆 Which year?`, 500);
    setConversationStep("travelYear");
  };

  const handleYearSelect = async (year) => {
    addUserMessage(year);
    setCollectedData({ ...collectedData, travelYear: year });
    await simulateBotTyping(`Wonderful! ✨ Are you looking to travel within India or explore abroad?`);
    setConversationStep("destination");
  };

  const handleDestinationSelect = async (destination) => {
    addUserMessage(destination);
    setCollectedData({ ...collectedData, destination });
    await simulateBotTyping(`Exciting! ✨ What kind of vibe are we going for?`);
    setConversationStep("tripType");
  };

  const handleTripTypeSelect = async (tripType) => {
    addUserMessage(tripType);
    setCollectedData({ ...collectedData, tripType });
    await simulateBotTyping(`Got it! 🎯 What's your age group? This helps me refine your recommendations.`);
    setConversationStep("ageGroup");
  };

  const handleAgeGroupSelect = async (ageGroup) => {
    addUserMessage(ageGroup);
    setCollectedData({ ...collectedData, ageGroup });
    const isAbroad = collectedData.destination.includes("Abroad");
    const recs = isAbroad
      ? "🌟 AI Recommendations:\n• Japan 🇯🇵 (Cherry Blossoms)\n• Turkey 🇹🇷 (History)\n• Greece 🇬🇷 (Islands)\n• Norway 🇳🇴 (Nature)"
      : "🌟 AI Recommendations:\n• Kerala 🏝️ (Backwaters)\n• Goa 🏖️ (Beaches)\n• Telangana 🏛️ (Heritage)\n• Ladakh ⛰️ (Adventure)";
    await simulateBotTyping(recs, 1000);
    await simulateBotTyping(`Do you have a specific city in mind? Or tell me where you'd like to go! 📍`);
    setConversationStep("place");
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;
    const val = inputValue;
    setInputValue("");
    addUserMessage(val);

    if (conversationStep === "place") {
      setCollectedData({ ...collectedData, place: val });
      await simulateBotTyping(`Nice! ${val} is incredible. 😍 Now, to send you the custom itinerary, what's your name?`);
      setConversationStep("name");
    } else if (conversationStep === "name") {
      setCollectedData({ ...collectedData, name: val });
      await simulateBotTyping(`Nice to meet you, ${val}! 🤝 Finally, your 10-digit mobile number?`);
      setConversationStep("phone");
    } else if (conversationStep === "phone") {
      const phoneRegex = /^[6-9]\d{9}$/;
      if (!phoneRegex.test(val)) {
        addBotMessage("❌ Please enter a valid 10-digit mobile number.");
        return;
      }
      setCollectedData({ ...collectedData, phone: val });
      await simulateBotTyping(`Success! ✨ I've passed your request to our travel experts. They'll reach out to you shortly for your ${collectedData.place} trip! 🎉`);
      setConversationStep("confirmation");
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-[1000]">
      <AnimatePresence mode="wait">
        {open ? (
          /* --- CHAT WINDOW --- */
          <motion.div
            key="chat-window"
            initial={{ opacity: 0, scale: 0.9, y: 50, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            className="lg:w-96 w-[320px] bg-transparent backdrop-blur-sm rounded-xl shadow-2xl border border-white/20 overflow-hidden flex flex-col h-[550px] lg:h-[600px]"
          >
            {/* Header */}
            <div className="p-2 bg-gradient-to-r from-red-600 to-blue-600 text-white flex items-center gap-3 shrink-0 shadow-md">
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl overflow-hidden border-2 border-white/20 bg-white">
                  <Image src={travelDidiBot.image} alt="Bot" className="object-cover rounded-xl" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 border-2 border-red-600 rounded-full animate-pulse" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg flex items-center gap-2 tracking-tight">
                  {travelDidiBot.name}
                </h3>
                <p className="text-[10px] uppercase tracking-widest opacity-80 font-semibold">
                  AI Trip Assistant
                </p>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-full transition-all active:scale-90">
                <Minus size={24} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-2 space-y-4 overflow-y-auto bg-transparent">
              {messages.map((msg) => (
                <motion.div
                  initial={{ opacity: 0, x: msg.sender === "user" ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={msg.id}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] p-2 text-sm leading-relaxed shadow-sm ${
                      msg.sender === "user"
                        ? "bg-red-500 text-white rounded-2xl rounded-tr-none shadow-red-200"
                        : "bg-white text-gray-700 rounded-2xl rounded-tl-none border border-gray-100"
                    }`}
                  >
                    {msg.text.split("\n").map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex gap-1.5 p-3 bg-white w-16 rounded-2xl shadow-sm border border-gray-100 ml-2">
                  <span className="w-2 h-2 bg-red-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-2 h-2 bg-red-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-2 h-2 bg-red-400 rounded-full animate-bounce" />
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input / Options Area */}
            <div className="p-2 bg-white/50 border-t border-white/20 backdrop-blur-md">
              <AnimatePresence mode="popLayout">
                {conversationStep === "interest" && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="grid gap-2">
                    {interestOptions.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => handleInterestSelect(opt)}
                        className="w-full text-left px-4 py-3 rounded-xl border border-red-100 bg-red-50/30 text-red-600 hover:bg-red-500 hover:text-white text-xs font-bold transition-all shadow-sm flex items-center gap-2"
                      >
                        <MapPin size={14} /> {opt}
                      </button>
                    ))}
                  </motion.div>
                )}

                {conversationStep === "travelMonth" && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-4 gap-2">
                    {months.map((m) => (
                      <button
                        key={m}
                        onClick={() => handleMonthSelect(m)}
                        className="py-2 text-[11px] font-bold rounded-lg border border-gray-100 hover:border-red-500 hover:text-red-500 transition-all bg-white"
                      >
                        {m}
                      </button>
                    ))}
                  </motion.div>
                )}

                {conversationStep === "travelYear" && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-2">
                    {years.map((y) => (
                      <button
                        key={y}
                        onClick={() => handleYearSelect(y)}
                        className="flex-1 py-3 text-sm font-bold rounded-xl border-2 border-red-50 text-red-500 hover:bg-red-500 hover:text-white transition-all bg-red-50/50"
                      >
                        {y}
                      </button>
                    ))}
                  </motion.div>
                )}

                {conversationStep === "destination" && (
                   <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-2 gap-2">
                    {destinationOptions.map((d) => (
                      <button
                        key={d}
                        onClick={() => handleDestinationSelect(d)}
                        className="p-4 text-xs font-bold rounded-2xl border border-gray-100 bg-white hover:border-red-500 transition-all shadow-sm"
                      >
                        {d}
                      </button>
                    ))}
                  </motion.div>
                )}

                {conversationStep === "tripType" && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-wrap gap-2">
                    {tripTypeOptions.map((t) => (
                      <button
                        key={t}
                        onClick={() => handleTripTypeSelect(t)}
                        className="px-4 py-2 text-[11px] font-bold rounded-full border border-gray-200 bg-gray-50 text-gray-600 hover:bg-red-500 hover:text-white transition-all"
                      >
                        {t}
                      </button>
                    ))}
                  </motion.div>
                )}

                {conversationStep === "ageGroup" && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-3 gap-2">
                    {ageGroupOptions.map((a) => (
                      <button
                        key={a}
                        onClick={() => handleAgeGroupSelect(a)}
                        className="py-2 text-[11px] font-bold rounded-lg bg-gray-50 text-gray-600 hover:bg-red-500 hover:text-white transition-all"
                      >
                        {a}
                      </button>
                    ))}
                  </motion.div>
                )}

                {["place", "name", "phone"].includes(conversationStep) && (
                  <div className="flex gap-2">
                    <input
                      type={conversationStep === "phone" ? "tel" : "text"}
                      autoFocus
                      className="flex-1 px-4 py-3 text-sm bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:border-red-500 focus:ring-4 focus:ring-red-100 transition-all"
                      placeholder="Type your answer..."
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    />
                    <button
                      onClick={handleSendMessage}
                      className="w-12 h-12 bg-red-500 text-white rounded-2xl flex items-center justify-center shadow-lg hover:bg-red-600 transition-all"
                    >
                      <FiSend size={20} />
                    </button>
                  </div>
                )}

                {conversationStep === "confirmation" && (
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-4 px-2 bg-green-50 rounded-2xl border border-green-100 text-green-700 font-bold text-sm flex flex-col items-center gap-2"
                  >
                    <CheckCircle2 size={24} className="text-green-500" />
                    Trip details shared!
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ) : (
          /* --- MODERN FLOATING LAUNCHER --- */
          <motion.div
            key="chat-launcher"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -8, scale: 1.05 }}
            className="relative cursor-pointer group"
            onClick={onOpen}
          >
            {/* Tooltip */}
            <div className="absolute -top-12 right-0 bg-white px-4 py-2 rounded-2xl shadow-xl border border-red-100 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 whitespace-nowrap">
              <p className="text-red-600 font-bold text-xs flex items-center gap-2">
                Ek Trip To Banta Hai!
              </p>
              <div className="absolute -bottom-1 right-6 w-2 h-2 bg-white border-r border-b border-red-100 rotate-45" />
            </div>

            <div className="relative w-24 h-24 lg:w-28 lg:h-28">
              <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-50" />
              <div className="relative h-full w-full shadow-2xl overflow-hidden">
                <Image
                  src={traveldidiImage}
                  alt="TravelDidi"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}