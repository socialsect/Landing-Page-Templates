import React from 'react';
import { motion } from 'framer-motion';
import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Launch Your Funnel",
      description: "We build your lead funnel + ads in 48 hours, branded for you."
    },
    {
      number: 2,
      title: " Leads Get Pre-Qualified",
      description: "Our filters and automations remove time-wasters before they book."
    },
    {
      number: 3,
      title: "You Take the Call. Close the Deal.",
      description: "You only show up for serious buyer/seller consults."
    }
  ];

  return (
    <motion.section id="how-it-works" className="how-it-works-section">
      <div className="how-it-works-container">
        <motion.h2
          className="how-it-works-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
         What Happens After You Say “I’m In”
        </motion.h2>

        {/* Use an ordered list for semantics */}
        <ol className="how-it-works-steps">
          {steps.map((step, index) => (
            <motion.li
              key={index}
              className="step"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="step-number">{step.number}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </motion.section>
  );
};

export default HowItWorks;