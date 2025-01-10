import React, { useState } from "react";
import { motion } from "framer-motion";

function App() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [showCard, setShowCard] = useState(false);

  const handleGenerateCard = () => {
    if (name.trim() && message.trim()) {
      setShowCard(true);
    } else {
      alert("Please enter both name and message.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 to-purple-300 flex flex-col justify-center items-center p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        Achievement Card Generator 🎉
      </h1>

      {!showCard ? (
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Your Name:
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Achievement Message:
            </label>
            <textarea
              placeholder="Write your achievement message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            onClick={handleGenerateCard}
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Generate Achievement Card
          </button>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white p-8 rounded-lg shadow-xl text-center max-w-lg"
        >
          <h2 className="text-3xl font-bold text-blue-600 mb-4 animate-pulse">
            Congratulations, {name}! 🎖️
          </h2>
          <p className="text-gray-700 mb-6">{message}</p>

          <motion.div
            className="w-32 h-32 mx-auto mb-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-md"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, ease: "backOut" }}
          >
            <div className="text-9xl">🎉</div>
          </motion.div>

          <button
            onClick={() => setShowCard(false)}
            className="bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600 transition"
          >
            Generate Another Card
          </button>
        </motion.div>
      )}
    </div>
  );
}

export default App;
