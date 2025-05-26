import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-luxury-black text-gray-400 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center">
          <div className="relative mb-6">
            <img 
              src="/logo-navbar.png" 
              alt="The Besson Group" 
              className="w-24 h-24 rounded-full mx-auto"
            />
          </div>
          <h3 className="text-2xl font-serif text-white mb-2">THE BESSON GROUP</h3>
          <p className="text-luxury-gold font-light tracking-[0.2em] text-sm">LUXURY REAL ESTATE</p>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-sm font-light">
            &copy; {currentYear} The Besson Group. All rights reserved.
          </p>
          <p className="text-xs text-gray-600 mt-2 font-light">
            Licensed Real Estate Professional | Florida
          </p>
        </div>
      </div>
    </footer>
  );
};
