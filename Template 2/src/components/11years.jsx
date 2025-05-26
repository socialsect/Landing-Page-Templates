import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import "./11years.css"

const Years = () => {
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
    <motion.div
      className="years-section"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="years-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
      Trusted system with real numbers to back it up:
      </motion.h2>
      <motion.div
        className="stats-container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <motion.div
          className="stat-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <motion.h3
            className="stat-value"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {leads.toLocaleString()}
          </motion.h3>
          <motion.p
            className="stat-label"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            Leads Generated
          </motion.p>
        </motion.div>
        <motion.div
          className="stat-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <motion.h3
            className="stat-value"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            $100M+
          </motion.h3>
          <motion.p
            className="stat-label"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            Revenue Generated
          </motion.p>
        </motion.div>
        <motion.div
          className="stat-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <motion.h3
            className="stat-value"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {appointments.toLocaleString()}
          </motion.h3>
          <motion.p
            className="stat-label"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            Appointments Booked
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
export default Years;
