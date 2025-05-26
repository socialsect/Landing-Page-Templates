// Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import PopupForm from './PopupForm';
import './navbar-enhancements.css';

const Navbar = ({ onGetStartedClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const handleGetStarted = (e) => {
    e.preventDefault();
    window.open('https://calendly.com/rayansh-gosocialsect/30min?month=2025-05', '_blank', 'noopener,noreferrer');
    onGetStartedClick();
    setIsOpen(false);
  };

  const toggleMenu = () => {
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
    document.body.style.overflow = newIsOpen ? 'hidden' : 'auto';
  };

  const closeMenu = () => {
    if (isOpen) {
      setIsOpen(false);
      document.body.style.overflow = 'auto';
    }
  };

  const scrollToSection = (sectionId) => {
    closeMenu();

    // Use navigate to update URL hash without reloading
    navigate(`#${sectionId}`);

    // Scroll to section after a short delay to allow rendering
    setTimeout(() => {
      const targetSection = document.getElementById(sectionId);
      if (targetSection) {
        const headerOffset = 80; // Adjust based on your fixed navbar height
        const elementPosition = targetSection.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }, 100); // Small delay to make sure URL updates before scrolling
  };

  // Handle scroll styling
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle body overflow when menu is open/closed
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('menu-open');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.classList.remove('menu-open');
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-content">
          {/* Logo */}
          <Link to="/" className="logo-container" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src="/logo.svg" alt="Logo" className="navbar-logo" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={toggleMenu}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Navigation Links */}
          <div className={`nav-links ${isOpen ? 'active' : ''}`}>
            <button
              className="nav-link"
              onClick={() => scrollToSection('how-it-works')}
            >
              How It Works
            </button>
            <button
              className="nav-link"
              onClick={() => scrollToSection('why-us')}
            >
              Why Us
            </button>
            <button
              className="nav-link"
              onClick={() => scrollToSection('contact')}
            >
              Contact Us
            </button>
            <a 
              href="https://calendly.com/rayansh-gosocialsect/30min?month=2025-05" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cta-button"
              onClick={handleGetStarted}
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`nav-overlay ${isOpen ? 'active' : ''}`}
        onClick={closeMenu}
        role="button"
        tabIndex={-1}
        aria-label="Close menu"
        onKeyDown={(e) => e.key === 'Enter' && closeMenu()}
      />
    </>
  );
};

export default Navbar;