import React from 'react';
import { FaHandsHelping, FaCheckCircle, FaChartLine } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './additional.css';

const AdditionalComponents = () => {
  return (
    <motion.section
      className="additional-section"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        {/* Why Agents Choose Us Section */}
        <motion.section
          id="why-us"
          className="why-us"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <FaHandsHelping className="section-icon" />
            Built for Agents Who Want Qualified Leads — Not Just Clicks
          </motion.h2>

          <motion.div
            className="features-grid"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.div
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <FaCheckCircle className="feature-icon" />
              <h3 className="feature-title">No Retainers</h3>
              <p className="feature-description">You only pay for results.</p>
            </motion.div>

            <motion.div
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <FaCheckCircle className="feature-icon" />
              <h3 className="feature-title">White-Labeled Assets</h3>
              <p className="feature-description">100% white-labeled marketing assets.</p>
            </motion.div>

            <motion.div
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <FaCheckCircle className="feature-icon" />
              <h3 className="feature-title">Proven System</h3>
              <p className="feature-description">Proven system built around your brand.</p>
            </motion.div>

            <motion.div
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <FaCheckCircle className="feature-icon" />
              <h3 className="feature-title">Transparent Reports</h3>
              <p className="feature-description">Transparent reports. No guesswork.</p>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Metrics Section */}
        <motion.section
          className="metrics"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            style={{marginBottom:"0"}}
          >
            <FaChartLine className="section-icon" /> What You Can Expect (Based on 10+ Years of Data)
          </motion.h2>
          <motion.p style={{ fontSize: "16px" ,fontFamily:"inter",textAlign:"center",marginBottom:"2rem",marginTop:"1rem",color:"#666"}}> These numbers aren’t vanity metrics — they’re the reason agents work with us over retainers or cold lead gen tools.</motion.p>

          <motion.div
            className="metrics-grid"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <motion.div
              className="metric-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="metric-number">82%</h3>
              <p className="metric-description">Conversion rate from lead to call</p>
            </motion.div>

            <motion.div
              className="metric-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h3 className="metric-number">19%+</h3>
              <p className="metric-description">Average appointment show-up rate increase</p>
            </motion.div>

            <motion.div
              className="metric-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <h3 className="metric-number">3x</h3>
              <p className="metric-description">ROI within 45 days for 90% of clients</p>
            </motion.div>
          </motion.div>
        </motion.section>
      </div>
    </motion.section>
  );
};

export default AdditionalComponents;