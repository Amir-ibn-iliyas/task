// src/components/AboutSection.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import aboutImage from "../../assets/ai.png"; // Replace with your image path

const AboutSection = () => {
  const [offsetY, setOffsetY] = useState(0);

  // Subtle parallax scroll effect
  const handleScroll = () => setOffsetY(window.scrollY * 0.2);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 text-white bg-gray-900"
    >
      {/* Parallax gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-gray-900 via-blue-950/30 to-gray-900"
        style={{
          transform: `translateY(${offsetY * 0.3}px)`,
        }}
      ></motion.div>

      {/* Decorative soft glow behind image */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl opacity-50"></div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 max-w-6xl grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Animated Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative group">
            <img
              src={aboutImage}
              alt="Our Technology"
              className="rounded-xl shadow-2xl border border-gray-700 transition-transform duration-500 group-hover:scale-105  cursor-pointer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
          </div>
        </motion.div>

        {/* Right: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 text-transparent bg-clip-text">
            What is AI ImageGen?
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            <span className="text-gray-200 font-medium">
              AI ImageGen
            </span>{" "}
            is an advanced image generation platform powered by artificial
            intelligence. It allows users to effortlessly transform simple
            inputs into unique, high-quality visual outputs.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Designed with precision and creativity, this system blends powerful
            AI technology with a seamless user experience — built to showcase
            full-stack expertise, scalable architecture, and an artistic touch
            through code.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
