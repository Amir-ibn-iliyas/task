// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icons for mobile toggle

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-900/80 backdrop-blur-lg border-b border-gray-700 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text"
        >
          AI ImageGen
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link
            to="/"
            className="text-gray-300 hover:text-white transition-colors duration-200"
          >
            Home
          </Link>
          <a
            href="#about"
            className="text-gray-300 hover:text-white transition-colors duration-200"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-gray-300 hover:text-white transition-colors duration-200"
          >
            Contact
          </a>
          <a
            href="#faq"
            className="text-gray-300 hover:text-white transition-colors duration-200"
          >
            FAQ
          </a>

          {/* CTA Button */}
          <Link
            to="/get-started"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-md shadow transition-all duration-200"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-gray-200 hover:text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center bg-gray-900/80 backdrop-blur-md py-4 space-y-3 border-t border-gray-700">
          <Link
            to="/"
            onClick={toggleMenu}
            className="text-gray-300 hover:text-white transition-colors"
          >
            Home
          </Link>
          <a
            href="#about"
            onClick={toggleMenu}
            className="text-gray-300 hover:text-white transition-colors"
          >
            About
          </a>
          <a
            href="#contact"
            onClick={toggleMenu}
            className="text-gray-300 hover:text-white transition-colors"
          >
            Contact
          </a>
          <a
            href="#faq"
            onClick={toggleMenu}
            className="text-gray-300 hover:text-white transition-colors"
          >
            FAQ
          </a>
          <Link
            to="/get-started"
            onClick={toggleMenu}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-md shadow transition-all"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
