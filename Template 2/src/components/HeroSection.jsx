import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './hero.css';

const HeroSection = () => {
  const [leads, setLeads] = useState(278908);
  const [revenue, setRevenue] = useState(100000000);
  const [appointments, setAppointments] = useState(13689);

  useEffect(() => {
    const interval = setInterval(() => {
      setLeads((prev) => prev + 13);
      setRevenue((prev) => prev + 50);
    }, 2000);
    const interval2 = setInterval(() => {
      setAppointments((prev) => prev + 1);
    }, 2790);

    return () => {
      clearInterval(interval);
      clearInterval(interval2);
    };
  }, []);

  return (
    <motion.section className="hero" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {/* Background Parallax Layer */}
      <motion.div
        className="hero-parallax"
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content Container */}
      <div className="hero-content">
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Get <span>10–15</span> Booked Buyer/Seller Appointments Every Month — Without Cold Calling or Zillow
        </motion.h1>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Your all-in-one growth engine for closing more real estate deals without lifting a finger on marketing.
        </motion.p>

        <motion.a
          href="https://calendly.com/rayansh-gosocialsect/30min?month=2025-05"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Book a Free Strategy Call
        </motion.a>
      </div>
    </motion.section>
  );
};

export default HeroSection;