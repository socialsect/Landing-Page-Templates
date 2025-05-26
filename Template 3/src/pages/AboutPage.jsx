import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6">About EdPayout</h1>
          <p className="text-lg text-gray-700 mb-4">
            EdPayout is a platform designed to simplify mentor payout management for EdTech companies.
            Our mission is to automate payouts, track sessions, and provide seamless management tools for educational platforms.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Founded by a team of EdTech enthusiasts, we aim to empower mentors and platform owners with efficient and transparent payout processes.
          </p>
          <p className="text-lg text-gray-700">
            Join us in revolutionizing the way educational mentorship is managed and compensated.
          </p>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
