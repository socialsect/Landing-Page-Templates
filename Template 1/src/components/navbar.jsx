import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="logo-container">
          <Link 
            to="/"
            onClick={handleScrollToTop}
            className="cursor-pointer"
          >
            <h3 className="brand-name">The Besson Group</h3>
          </Link>
        </div>
      </div>
    </nav>
  );
}