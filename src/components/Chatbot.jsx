"use client"

import { useState, useEffect, useRef } from "react"
import { FiSend, FiX, FiMessageCircle, FiCalendar, FiGlobe, FiMapPin, FiUser, FiPhone } from "react-icons/fi"

const travelDidiBot = {
  name: "TravelDidi",
  image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60",
  tagline: "Ek trip to banta hai! ✈️"
}

export default function ChatBot({open = true, onClose, onOpen}) {
  const [messages, setMessages] = useState([])
  const [inputValue, setInputValue] = useState("")
  const [collectedData, setCollectedData] = useState({
    name: "",
    phone: "",
    travelMonth: "",
    travelYear: "",
    destination: "", // Within India / Abroad
    place: "",       // Specific city/state
    tripType: "",
    ageGroup: "",
    interest: "",
  })
  const [conversationStep, setConversationStep] = useState("greeting")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  useEffect(() => {
    if (open && messages.length === 0) {
      addBotMessage(
        `Namaste! 🙏 I'm TravelDidi, how may I help you plan your trip? Kyunki _"ek trip to banta hai"_ ✨`,
      )
      setConversationStep("interest")
    }
  }, [open])

  const addBotMessage = (text) => {
    const message = { id: Date.now().toString(), sender: "bot", text, timestamp: new Date() }
    setMessages((prev) => [...prev, message])
  }

  const addUserMessage = (text) => {
    const message = { id: Date.now().toString(), sender: "user", text, timestamp: new Date() }
    setMessages((prev) => [...prev, message])
  }

  const simulateBotTyping = async (text, delay = 800) => {
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, delay))
    addBotMessage(text)
    setIsLoading(false)
  }

  // OPTIONS
  const interestOptions = [
    "🌍 Where should I travel this year?",
    "✈️ Best destination for first time travellers?",
    "🏖️ Which places are best for relaxing or leisure?",
    "📝 How do I plan my trip step by step?",
    "🗺️ Create a custom itinerary for me",
    "📅 What is the best time to visit?",
  ]

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const years = ["2026", "2027"]
  const destinationOptions = ["🇮🇳 Within India", "🌏 Abroad"]
  const tripTypeOptions = ["🏖️ Leisure trip", "💼 Business trip", "🎒 Solo Trip", "👨‍👩‍👧‍👦 Family Vacation", "👥 Group Holidays", "🏢 Corporate Bookings", "🎓 Students Travel Visits"]
  const ageGroupOptions = ["18-25", "25-35", "35-45", "45-65", "Others"]

  const handleInterestSelect = async (interest) => {
    addUserMessage(interest)
    setCollectedData({ ...collectedData, interest })
    await simulateBotTyping(`Great choice! 📅 Let me help you find the perfect time for your journey. When are you planning to travel?`, 800)
    setConversationStep("travelMonth")
  }

  const handleMonthSelect = async (month) => {
    addUserMessage(month)
    setCollectedData({ ...collectedData, travelMonth: month })
    await simulateBotTyping(`Perfect! 📆 Which year?`, 600)
    setConversationStep("travelYear")
  }

  const handleYearSelect = async (year) => {
    addUserMessage(year)
    setCollectedData({ ...collectedData, travelYear: year })
    await simulateBotTyping(`Wonderful! ${collectedData.travelMonth} ${year} sounds amazing! 🌏 Are you looking to travel within India or abroad?`, 800)
    setConversationStep("destination")
  }

  const handleDestinationSelect = async (destination) => {
    addUserMessage(destination)
    setCollectedData({ ...collectedData, destination })
    await simulateBotTyping(`Exciting! ✨ What kind of trip are you looking for?`, 800)
    setConversationStep("tripType")
  }

  const handleTripTypeSelect = async (tripType) => {
    addUserMessage(tripType)
    setCollectedData({ ...collectedData, tripType })
    await simulateBotTyping(`Great! 🎯 What's your age group? This helps me recommend the best experiences for you.`, 800)
    setConversationStep("ageGroup")
  }

  const handleAgeGroupSelect = async (ageGroup) => {
    addUserMessage(ageGroup)
    setCollectedData({ ...collectedData, ageGroup })
    const isAbroad = collectedData.destination.includes("Abroad")
    const recs = isAbroad 
      ? "🌟 Recommended destinations for you:\n• Japan 🇯🇵\n• Turkey 🇹🇷\n• Greece 🇬🇷\n• Norway 🇳🇴"
      : "🌟 Recommended destinations for you:\n• Kerala 🏝️\n• Goa 🏖️\n• Telangana 🏛️\n• Ladakh ⛰️"
    await simulateBotTyping(recs, 1000)
    await simulateBotTyping(`Do you have a specific place in mind? Or tell me where you'd like to go! 📍`, 800)
    setConversationStep("place")
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return
    const val = inputValue
    setInputValue("")
    addUserMessage(val)

    if (conversationStep === "place") {
      setCollectedData({ ...collectedData, place: val })
      await simulateBotTyping(`Got it! ${val} is a fantastic choice. 😍 Now, let me get your details to create the perfect itinerary! What's your name?`, 800)
      setConversationStep("name")
    } else if (conversationStep === "name") {
      setCollectedData({ ...collectedData, name: val })
      await simulateBotTyping(`Nice to meet you, ${val}! 🤝 What's your contact number? (10-digit mobile number)`, 800)
      setConversationStep("phone")
    } else if (conversationStep === "phone") {
      const phoneRegex = /^[6-9]\d{9}$/
      if (!phoneRegex.test(val)) {
        addBotMessage("❌ Please enter a valid 10-digit mobile number starting with 6-9")
        return
      }
      setCollectedData({ ...collectedData, phone: val })
      await simulateBotTyping(`Perfect! ✨ I've received your details for your trip to ${collectedData.place}. Our travel experts will contact you shortly. Happy travels! 🎉`, 1000)
      setConversationStep("confirmation")
    }
  }

  return (
    <>
      {open && (
        <div className="fixed bottom-2 right-2 z-[1000] lg:w-[360px] w-[300px]">
          <div className="bg-white rounded-[2rem] shadow-2xl border border-gray-100 overflow-hidden flex flex-col h-[550px] lg:h-[600px]">
            {/* Header */}
            <div className="relative p-4 text-white flex items-center gap-3 shrink-0 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center border border-white/30 shrink-0">
                <img src={travelDidiBot.image} className="w-8 h-8 object-cover rounded-lg" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-sm truncate">{travelDidiBot.name}</h3>
                <p className="text-[10px] opacity-90 truncate">{travelDidiBot.tagline}</p>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-lg transition-all"><FiX size={18} /></button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-4 space-y-3 bg-gray-50/30 overflow-y-auto">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] p-3 text-[13px] shadow-sm ${
                    msg.sender === "user" 
                    ? "bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-white rounded-2xl rounded-tr-none" 
                    : "bg-white text-gray-800 rounded-2xl rounded-tl-none border border-gray-100"
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && <div className="text-[12px] text-gray-400 animate-pulse ml-2">TravelDidi is Typing...</div>}
              <div ref={messagesEndRef} />
            </div>

            {/* Interactive Options */}
            <div className="p-4 bg-white border-t border-gray-100 shrink-0">
              {conversationStep === "interest" && (
                <div className="space-y-1.5 max-h-[220px] overflow-y-auto pr-1">
                  {interestOptions.map((opt) => (
                    <button key={opt} onClick={() => handleInterestSelect(opt)}
                      className="w-full text-left p-2.5 rounded-xl border border-orange-100 bg-orange-50/30 text-orange-500 hover:bg-orange-500 hover:text-white text-[11px] font-bold transition-all">
                      {opt}
                    </button>
                  ))}
                </div>
              )}

              {conversationStep === "travelMonth" && (
                <div className="grid grid-cols-4 gap-1.5">
                  {months.map((m) => (
                    <button key={m} onClick={() => handleMonthSelect(m)}
                      className="py-2 text-[10px] font-bold rounded-lg border border-gray-100 text-gray-600 hover:border-orange-500 hover:text-orange-500 transition-all">
                      {m.substring(0, 3)}
                    </button>
                  ))}
                </div>
              )}

              {conversationStep === "travelYear" && (
                <div className="flex gap-2">
                  {years.map((y) => (
                    <button key={y} onClick={() => handleYearSelect(y)}
                      className="flex-1 py-2.5 text-sm font-bold rounded-xl border-2 border-orange-100 text-orange-500 hover:bg-orange-600 hover:text-white transition-all">{y}</button>
                  ))}
                </div>
              )}

              {conversationStep === "destination" && (
                <div className="grid grid-cols-2 gap-2">
                  {destinationOptions.map((d) => (
                    <button key={d} onClick={() => handleDestinationSelect(d)}
                      className="p-3 text-[11px] font-bold rounded-xl border border-gray-100 text-gray-700 hover:border-orange-500 hover:text-orange-500 transition-all">{d}</button>
                  ))}
                </div>
              )}

              {conversationStep === "tripType" && (
                <div className="flex flex-wrap gap-1.5 max-h-[150px] overflow-y-auto">
                  {tripTypeOptions.map((t) => (
                    <button key={t} onClick={() => handleTripTypeSelect(t)}
                      className="px-3 py-1.5 text-[10px] font-bold rounded-full border border-gray-100 bg-gray-50 text-gray-600 hover:bg-orange-500 hover:text-white transition-all">{t}</button>
                  ))}
                </div>
              )}

              {conversationStep === "ageGroup" && (
                <div className="grid grid-cols-3 gap-1.5">
                  {ageGroupOptions.map((a) => (
                    <button key={a} onClick={() => handleAgeGroupSelect(a)}
                      className="py-2 text-[11px] font-bold rounded-lg bg-gray-50 text-gray-600 hover:bg-orange-500 hover:text-white transition-all">{a}</button>
                  ))}
                </div>
              )}

              {(conversationStep === "place" || conversationStep === "name" || conversationStep === "phone") && (
                <div className="flex gap-2">
                  <input
                    type={conversationStep === "phone" ? "tel" : "text"}
                    className="flex-1 px-4 py-2 text-sm bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-orange-500 transition-all"
                    placeholder={
                      conversationStep === "place" ? "Where would you like to go?" :
                      conversationStep === "name" ? "Enter your name..." : "10-digit phone..."
                    }
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  />
                  <button onClick={handleSendMessage} className="w-10 h-10 bg-gradient-to-r from-orange-400 to-orange-600 text-white rounded-xl flex items-center justify-center shadow-lg active:scale-95 transition-transform">
                    <FiSend size={16} />
                  </button>
                </div>
              )}

              {conversationStep === "confirmation" && (
                <div className="text-center py-2 text-orange-500 font-bold text-sm">✅ Submitted Successfully!</div>
              )}
            </div>
          </div>
        </div>
      )}

      {!open && (
        <button onClick={onOpen} className="fixed cursor-pointer bottom-6 right-6 w-14 h-14 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 rounded-2xl shadow-xl flex items-center justify-center text-white hover:scale-110 transition-all">
          <FiMessageCircle size={26} />
        </button>
      )}
    </>
  )
}