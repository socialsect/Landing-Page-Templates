// App.jsx (9 rich sections included)
import React, { useEffect, useState } from 'react';
import { FaGears } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
// import './sample.css';
const steps = [
  {
    id: 1,
    title: "Submit Your Property Details",
    description: "Fill out our simple form with your property information and requirements."
  },
  {
    id: 2,
    title: "Get Matched With Top Agents",
    description: "Our algorithm matches you with experienced agents specializing in your property type and location."
  },
  {
    id: 3,
    title: "Close More Deals, Faster",
    description: "Work with qualified leads and leverage our tools to accelerate your sales process."
  }
];
const groupImages = [
  { src: "/groups/bop.webp", alt: "Bop" },
  { src: "/groups/Connells_Group_logo.jpg", alt: "Connells Group Logo" },
  { src: "/groups/Danube-Properties-banner.jpg", alt: "Danube Properties Banner" },
  { src: "/groups/dlf.svg", alt: "DLF" },
  { src: "/groups/emaar.svg", alt: "Emaar" },
  { src: "/groups/exp-reality2081.jpg", alt: "Exp Reality 2081" },
  { src: "/groups/gaur group.png", alt: "Gaur Group" },
  { src: "/groups/Keller_Williams_Realty_logo.svg.png", alt: "Keller Williams Realty Logo" },
  { src: "/groups/Land Securities Group.png", alt: "Land Securities Group" },
  { src: "/groups/Redfin_logo.png", alt: "Redfin Logo" },
  { src: "/groups/Segro.png", alt: "Segro" },
  { src: "/groups/sobha realty.jpg", alt: "Sobha Realty" }
];
import { FaPhoneAlt, FaBolt, FaCalendarCheck, FaVideo, FaStar, FaChartLine, FaHandsHelping } from 'react-icons/fa';
import { IoCloseOutline } from "react-icons/io5";
import HowItWorks from './HowItWorks';
export default function App() {
  const [leads, setLeads] = useState(278908);
  const [revenue, setRevenue] = useState(100000000);
  const [appointments, setAppointments] = useState(13689);
  const [showModal, setShowModal] = useState(true);
  const [showBottomForm, setShowBottomForm] = useState(true);

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

  useEffect(() => {
    const timer = setTimeout(() => setShowModal(false), 10000);
    const bottomFormTimer = setTimeout(() => setShowBottomForm(false), 15000);
    return () => {
      clearTimeout(timer);
      clearTimeout(bottomFormTimer);
    };
  }, []);

  return (
    <div className="container">
      {/* Section 1: Hero */}
      <header className="hero">
        <h1>Say Goodbye to Dead Leads & Empty Calendars</h1>
        <p id='ptags'>Your all-in-one growth engine for closing more real estate deals without lifting a finger on marketing.</p>
        <a 
          href="https://calendly.com/your-username/30min" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="cta-button"
        >
          Get My Growth Plan
        </a>
        {/* <img className="hero-img" src="/logobg1.png" alt="Real Estate Success" /> */}
      </header>

      {/* Section 2: Counters */}
      <section className="counters">
        <h2 id='years'>11 Years of Trust</h2>
        <div className="stat-boxes">
          <div><h3 className="statvalues">{leads.toLocaleString()}</h3><p>Leads Generated</p></div>
          <div><h3 className="statvalues">$100M+</h3><p>Revenue Generated</p></div>
          <div><h3 className="statvalues">{appointments.toLocaleString()}</h3><p>Appointments Booked</p></div>
        </div>
      </section>

      {/* Section 3: Logos */}
      <section className="logos">
        
    <h2 >Trusted by Real Estate Teams</h2>
  <marquee behavior="scroll" direction="left" scrollamount="5" loop="-1">
    <div style={{ display: 'flex', gap: '10px' }}>
      {groupImages.map((image, index) => (
        <img key={index} src={image.src} alt={image.alt} />
      ))}
    </div>
  </marquee>
</section>


     

<HowItWorks/>
      <section className="why-us">
        <h2><FaHandsHelping /> Why Agents Choose Us</h2>
        <ul>
          <li><FaCheckCircle /> No retainers. You only pay for results.</li>
          <li><FaCheckCircle /> 100% white-labeled marketing assets.</li>
          <li><FaCheckCircle /> Proven system built around your brand.</li>
          <li><FaCheckCircle /> Transparent reports. No guesswork.</li>
        </ul>
      </section>

      {/* Section 6: Testimonial */}
      <section className="testimonial">
        <h2>🚀 What Our Clients Say</h2>
        <video controls width="100%">
          <source src="/videos/testimonial.mp4" type="video/mp4" />
        </video>
        <div className="stars">
          {[...Array(5)].map((_, i) => <FaStar key={i} color="#FFD700" />)}
        </div>
        <p>"Within 30 days, I had more booked calls than I got in 3 months on Zillow. Absolute game-changer."</p>
        <span>- Sarah M., Realtor in Texas</span>
      </section>

      {/* Section 7: Success Metrics */}
      <section className="metrics">
        <h2><FaChartLine /> The Numbers Don’t Lie</h2>
        <ul>
          <li><strong>82%</strong> conversion rate from lead to call</li>
          <li><strong>19%+</strong> average appointment show-up rate increase</li>
          <li><strong>3x</strong> ROI within 45 days for 90% of clients</li>
        </ul>
        <img src="/images/stats.png" alt="Performance Metrics" className="metrics-img" />
      </section>

      {/* Section 8: Main Form */}
      <section className="form-section" id="form">
        <h2>Let’s Build Your Closings Machine</h2>
        <form onSubmit={(e) => { e.preventDefault(); alert('Submitted!'); }}>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="tel" placeholder="Phone Number" required />
          <input type="text" placeholder="City / Market" required />
          <select required>
            <option value="">Team Size</option>
            <option value="1">Solo Agent</option>
            <option value="2-5">2–5 Agents</option>
            <option value="6+">6+ Agents</option>
          </select>
          <button type="submit">🔥 Claim My Strategy Session</button>
        </form>
      </section>

      {/* Section 9: Footer */}
      <footer>
        <p>Built for agents, brokers, and real estate teams who want to grow fast and sustainably.</p>
        <a 
          className="secondary-cta" 
          href="https://calendly.com/rayansh-gosocialsect/30min?month=2025-05" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Let's Talk →
        </a>
      </footer>

      {showModal && (
        <div className="popup">
          <div className="popup-content">
            <span onClick={() => setShowModal(false)} className="close">&times;</span>
            <h3>🎁 Free 100 Leads Setup</h3>
            <p>Get a ready-to-go system with 100 leads on us — no commitments. Just results.</p>
            <a 
              href="https://calendly.com/rayansh-gosocialsect/30min?month=2025-05" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cta-button"
            >
              Get My Growth Plan
            </a>
          </div>
        </div>
      )}

      {showBottomForm && (
        <div className="bottom-slide-form">

          <h3>Want to See Real Examples?</h3>
          <p>Drop your email and we’ll send 3 real landing pages + ad campaigns that booked over 150 calls.</p>
          <form onSubmit={(e) => { e.preventDefault(); alert('Sent!'); }}>
            <input type="email" placeholder="Your Work Email" required />
            <button type="submit">📩 Send Me the Examples</button>
          </form>
          <IoCloseOutline onClick={() => setShowBottomForm(false)} className="close" />
        </div>
      )}
    </div>
  );
}