import React from 'react';
import { Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 bg-black text-white px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-light mb-6">Stay Connected</h2>
        <p className="text-gray-300 mb-10 max-w-xl mx-auto font-light">
          For inquiries about luxury properties and exclusive real estate opportunities, please reach out to us.
        </p>
        
        <a 
          href="mailto:info@thebessongroup.com"
          className="inline-flex items-center px-8 py-4 bg-luxury-red hover:bg-red-800 transition-colors duration-300 group"
        >
          <Mail className="mr-2 group-hover:scale-110 transition-transform duration-300" size={20} />
          <span className="font-light tracking-wider">CONTACT US</span>
        </a>
      </div>
    </section>
  );
};
