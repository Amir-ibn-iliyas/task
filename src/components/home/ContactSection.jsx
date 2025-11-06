import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="bg-gray-900 py-20">
      <div className="container mx-auto px-6 max-w-lg text-center">
        <h2 className="text-3xl font-bold text-white mb-8">
          Contact Us
        </h2>
        <p className="text-gray-300 mb-8">
          Have questions about the project? Get in touch!
        </p>
        {/* This is a visual form, it won't send data yet */}
        <form className="space-y-6">
          <input 
            type="text" 
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input 
            type="email" 
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea 
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button 
            type="submit"
            onClick={(e) => e.preventDefault()} // Prevents page refresh on click
            className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;