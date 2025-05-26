import React from 'react';

export default function About() {
  return (
    <section className="py-20 bg-white text-luxury-black px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-4 relative inline-block">
            About
            <span className="absolute bottom-0 left-0 w-full h-px bg-luxury-red opacity-50"></span>
          </h2>
          
          <div className="mt-4">
            <div className="w-20 h-px bg-luxury-gold"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-luxury-gold/10 to-transparent rounded-lg blur-3xl"></div>
            <img 
              src="/naomi.JPG" 
              alt="Naomi" 
              className="w-full max-w-md rounded-lg shadow-2xl"
              style={{
                height: '100%',
                marginTop: '0',
                aspectRatio: '1/1',
                objectFit: 'cover',
                transform: 'translateY(0%)',
              }}
            />
          </div>

          <div className="text-center">
            <p className="text-lg leading-relaxed mb-6 font-light">
              Hi, I'm Naomi, a licensed real estate professional with a passion for helping people find their perfect home in Florida. With years of experience and a commitment to trust and transparency, I look forward to serving you soon!
            </p>
            
            <div className="mt-6 flex justify-start">
              <div className="w-20 h-px bg-luxury-gold" style={{position:"relative",top:"120px"}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
