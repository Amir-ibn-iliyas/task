import React from 'react';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import ContactSection from '../components/home/ContactSection';
import FAQSection from '../components/home/FAQSection';

// This is your main landing page component
const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ContactSection />
      <FAQSection />
    </div>
  );
};

export default HomePage;