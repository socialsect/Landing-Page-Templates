import React, { useState, useEffect } from "react";
import HeroSection from "./components/HeroSection";
// import CaseStudySnapshot from "./components/CaseStudySnapshot";
// import ThreeStepProcess from "./components/ThreeStepProcess";
// import TrustLine from "./components/TrustLine";
// import FinalCallToAction from "./components/FinalCallToAction";
// import SAMPLE from "./components/sample";
import Lenis from "lenis";
import Navbar from "./components/Navbar";
import Years from "./components/11years";
import Marquee from "./components/marquee";
import HowItWorks from "./components/HowItWorks";
import { BrowserRouter } from "react-router-dom";
import AdditionalComponents from "./components/additionalcomponents";
import Footer from "./components/footer/footer";
import PopupForm from "./components/PopupForm";
import { TrackPageView } from "./components/TrackPageView";
import { SpeedInsights } from '@vercel/speed-insights/react';
export default function App() {
  const [showPopup, setShowPopup] = useState(false);
  
  // Check if user has seen the popup in this session
  const hasSeenPopup = sessionStorage.getItem('hasSeenPopup');

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Auto-show popup after 7 seconds if not seen before
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasSeenPopup) {
        setShowPopup(true);
        sessionStorage.setItem('hasSeenPopup', 'true');
      }
    }, 3000); // Reduced to 3 seconds for testing

    return () => {
      clearTimeout(timer);
    };
  }, [hasSeenPopup]);
  
  // Handle body overflow when popup is open
  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showPopup]);

  const handleShowPopup = () => {
    setShowPopup(prev => !prev); // Toggle the popup state
    sessionStorage.setItem('hasSeenPopup', 'true');
  };

  // Function to close the popup
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <BrowserRouter>
        <Navbar onGetStartedClick={handleShowPopup} />
        <HeroSection />
        <Years />
        <Marquee />
        <HowItWorks />
        <AdditionalComponents />
        <PopupForm isOpen={showPopup} onClose={handleShowPopup} />
        {/* <HeroSection /> */}
        {/* <CaseStudySnapshot /> */}
        {/* <ThreeStepProcess /> */}
        {/* <TrustLine /> */}
        {/* <FinalCallToAction /> */}
        {/* <SAMPLE/> */}
        <Footer />
        <SpeedInsights />
      </BrowserRouter>
    </div>
  );
}
