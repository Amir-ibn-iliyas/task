// src/components/HeroSection.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import bg from "../../assets/image.png";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Subtle parallax glow follows mouse
  const handleMouseMove = (e) => {
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;
    setMousePosition({ x, y });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative flex flex-col items-center justify-center h-screen text-center overflow-hidden bg-gray-900 text-white"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:  `url(${bg})`
        }}
      ></div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-gray-900/30  backdrop-blur-xs"></div>

      {/* Glow following mouse */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-blue-500/15 blur-3xl pointer-events-none"
        animate={{
          x: mousePosition.x * 100,
          y: mousePosition.y * 100,
        }}
        transition={{ type: "spring", stiffness: 30, damping: 20 }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-2xl px-6 md:px-0">
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
        >
          <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 text-transparent bg-clip-text">
            Generate AI Images Effortlessly
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9 }}
          className="text-base md:text-lg text-gray-300 mb-10 leading-relaxed"
        >
          Upload a photo or start from scratch — our AI turns your ideas into
          captivating visuals. Fast, creative, and user-friendly for everyone.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="flex justify-center"
        >
          <button className=" cursor-pointer bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-8 py-3 rounded-lg font-semibold text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/20">
            Start Creating
          </button>
        </motion.div>
      </div>

      {/* Subtle Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-gray-900 to-transparent"></div>
    </section>
  );
};

export default HeroSection;
