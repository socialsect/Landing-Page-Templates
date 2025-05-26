import React from 'react';

export default function Logo() {
  return (

    <section id="logo-section" className="py-20 bg-#000000">
      <div className="w-full max-w-md mx-auto p-4 text-center">
        <div className="relative mb-8">
          <div className="absolute -inset-4 bg-gradient-to-r from-luxury-gold/10 to-transparent rounded-full blur-3xl"></div>
          <img 
            src="/logo-navbar.png" 
            alt="The Besson Group" 
            className="w-32 h-32 rounded-full mx-auto shadow-2xl"
          />
        </div>
        
        <div className="w-24 h-px bg-luxury-gold mx-auto"></div>
        <p className="text-gray-300 text-center text-sm mt-6 font-light tracking-[0.2em]">
          LUXURY REAL ESTATE
        </p>
      </div>
    </section>
    

  );
}
