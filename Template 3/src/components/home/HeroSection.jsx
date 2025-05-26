import React from 'react';

const HeroSection = () => {
  return (
    <section className="pattern-bg">
      <div className="pattern-overlay">
        <div className="hero-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl pattern-text">
              <span className="block">Simplify Your</span>
              <span className="block">Mentor Payout Process</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Automate mentor payouts, track sessions, and manage your EdTech platform with ease.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow hover:shadow-lg transition-all duration-300">
                <a
                  href="/login"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                >
                  Get Started
                </a>
              </div>
              <div className="mt-3 rounded-md shadow hover:shadow-lg transition-all duration-300 sm:mt-0 sm:ml-3">
                <a
                  href="#features"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
