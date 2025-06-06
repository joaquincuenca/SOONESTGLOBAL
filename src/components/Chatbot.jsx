import React, { useState, useRef, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import {
  FaRobot,
  FaTimes,
  FaMinus,
  FaTruck,
  FaMoneyBillWave,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isMinimized, setIsMinimized] = useState(true);
  const messagesEndRef = useRef(null);

  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI);
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

  // Shipping information
  const shippingInfo = {
    routes: [
      {
        from: "Manila",
        to: "Cebu",
        distance: "572 km",
        price: "₱1,200 - ₱1,500",
        duration: "2-3 days",
        service: "Standard Delivery",
      },
      {
        from: "Manila",
        to: "Davao",
        distance: "1,500 km",
        price: "₱2,000 - ₱2,500",
        duration: "3-4 days",
        service: "Standard Delivery",
      },
      {
        from: "Cebu",
        to: "Davao",
        distance: "450 km",
        price: "₱1,000 - ₱1,300",
        duration: "2-3 days",
        service: "Standard Delivery",
      },
    ],
    services: [
      {
        name: "Express Delivery",
        description: "Next day delivery for urgent shipments",
        price: "Additional ₱500",
      },
      {
        name: "Standard Delivery",
        description: "Regular delivery service",
        price: "Base rate",
      },
      {
        name: "Economy Delivery",
        description: "Most affordable option with longer delivery time",
        price: "20% off base rate",
      },
    ],
    additionalInfo: {
      weightLimit: "50 kg per package",
      insurance: "Available for additional ₱200",
      tracking: "Real-time tracking available",
      packaging: "Free standard packaging",
    },
  };

  const getWelcomeMessage = () => {
    return `Welcome to Soonest Global Shipping! 🚚

I can help you with:
• Shipping rates and routes
• Delivery times
• Service options
• Package tracking
• Insurance and packaging

What would you like to know?`;
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const formatResponse = (text) => {
    // Remove markdown formatting
    return text
      .replace(/\*\*/g, "") // Remove double asterisks
      .replace(/\*/g, "") // Remove single asterisks
      .replace(/\n\s*\n/g, "\n") // Remove extra newlines
      .trim();
  };

  const getConversationHistory = () => {
    return messages
      .map(
        (msg) => `${msg.role === "user" ? "User" : "Assistant"}: ${msg.content}`
      )
      .join("\n");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const conversationHistory = getConversationHistory();

      const context = `You are a shipping assistant for Soonest Global. Here's our shipping information:
      ${JSON.stringify(shippingInfo)}
      
      Previous conversation:
      ${conversationHistory}
      
      Current user question: ${userMessage}
      
      Please provide a helpful response based on our shipping information and the conversation history. Format your response in a clean, easy-to-read way:
      - Use bullet points (•) for lists
      - Don't use markdown formatting
      - Keep paragraphs short
      - Use clear spacing
      - Be concise but informative
      - Maintain context from previous messages
      
      If the question is not related to shipping, politely redirect to shipping-related questions.`;

      const result = await model.generateContent(context);
      const response = await result.response;
      const text = formatResponse(response.text());

      setMessages((prev) => [...prev, { role: "assistant", content: text }]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, I encountered an error. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

      if (isMinimized) {
        return (
          <div
            className="fixed bottom-4 right-4 z-50 cursor-pointer"
            onClick={() => setIsMinimized(false)}
          >
            <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:bg-green-700 transition-colors duration-200">
              <FaTruck className="text-white text-2xl" />
            </div>
          </div>
        );
      }


      return (
        <div className="fixed bottom-4 right-4 z-50 w-[380px] h-[600px] bg-white rounded-lg shadow-xl flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-green-600 text-white p-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <FaTruck className="text-xl" />
          <h3 className="font-semibold">SOONESTChatBOT</h3>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => setIsMinimized(true)}
            className="p-1 hover:bg-green-700 rounded-full transition-colors duration-200"
          >
            <FaMinus className="text-white" />
          </button>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-green-50">
        {messages.length === 0 && (
          <div className="text-center text-gray-500 mt-8">
            <FaTruck className="text-4xl mx-auto mb-2 text-green-600" />
            <div className="whitespace-pre-line text-left">
              {getWelcomeMessage()}
            </div>
          </div>
        )}
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.role === "user"
                  ? "bg-green-600 text-white"
                  : "bg-white text-gray-800 shadow-sm"
              }`}
            >
              <div className="whitespace-pre-line">{message.content}</div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white text-gray-800 rounded-lg p-3 shadow-sm">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="border-t p-4 bg-white">
        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about shipping rates and services..."
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 bg-green-50"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 disabled:opacity-50 transition-colors duration-200"
          >
            Send
          </button>
        </div>
      </form>
    </div>

  );
}

export default Chatbot;
