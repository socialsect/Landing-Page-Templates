import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Open Calendly in a new tab
    window.open('https://calendly.com/rayansh-gosocialsect/30min?month=2025-05', '_blank', 'noopener,noreferrer');
    setIsSubmitted(true);
  };

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.section
        id="contact"
        className="form-section"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Book Your Free Strategy Call — Let’s Get You 15 Consults This Month
        </motion.h2>
        {isSubmitted ? (
          <motion.div 
            className="submitted-message"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <a 
              href="mailto:rayansh@gosocialsect.com" 
              className="email-link"
              aria-label="Email us at rayansh@gosocialsect.com"
            >
              <FaEnvelope className="mail-icon" />
              <span>Email Us</span>
            </a>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.input
              type="text"
              placeholder="Full Name"
              required
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            />
            <motion.input
              type="email"
              placeholder="Email Address"
              required
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            />
            <motion.input
              type="tel"
              placeholder="Phone Number"
              required
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            />
            <motion.input
              type="text"
              placeholder="City / Market"
              required
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            />
            <motion.select
              required
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <option value="">Team Size</option>
              <option value="1">Solo Agent</option>
              <option value="2-5">2–5 Agents</option>
              <option value="6+">6+ Agents</option>
            </motion.select>
            <motion.button
              type="submit"
              className="submit-button"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              Book My Free Call
            </motion.button>
          </motion.form>
        )}
      </motion.section>

      <motion.div
        className="footer-content"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Built for agents, brokers, and real estate teams who want to grow fast and sustainably.
        </motion.p>
        <motion.a
          href="https://gosocialsect.com"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          About Us
        </motion.a>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
