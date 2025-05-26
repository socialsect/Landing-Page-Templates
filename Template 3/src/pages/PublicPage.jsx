import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/patterns.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/home/HeroSection';
import FeaturesSection from '../components/home/FeaturesSection';
import PricingSection from '../components/home/PricingSection';
import CTASection from '../components/home/CTASection';

const PublicPage = () => {
  const location = useLocation();

  // Handle hash navigation when page loads
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1); // remove the # character
      const element = document.getElementById(id);
      if (element) {
        // Wait a bit for the page to fully render before scrolling
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      // Scroll to top if no hash
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="pattern-shape pattern-shape-1"></div>
        <div className="pattern-shape pattern-shape-2"></div>
        <div className="pattern-shape pattern-shape-3"></div>

        <main className="relative">
          <HeroSection />
          <FeaturesSection />
          <PricingSection />
          <CTASection />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default PublicPage;
