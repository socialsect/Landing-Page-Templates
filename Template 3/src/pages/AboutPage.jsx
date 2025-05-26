import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl mb-8">
              About EdPayout
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Your trusted partner in mentor payout automation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              <p className="text-gray-600">
                At EdPayout, we're dedicated to simplifying the complex world of mentor payouts for EdTech platforms. Our mission is to provide reliable, automated solutions that help educational platforms focus on what they do best - delivering quality education.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-4">
                <li>Automated payout processing</li>
                <li>Real-time session tracking</li>
                <li>Secure payment processing</li>
                <li>Customizable payout rules</li>
                <li>24/7 support</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4"></div>
                <h3 className="font-semibold text-gray-900">John Doe</h3>
                <p className="text-gray-500">CEO & Founder</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4"></div>
                <h3 className="font-semibold text-gray-900">Jane Smith</h3>
                <p className="text-gray-500">CTO</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4"></div>
                <h3 className="font-semibold text-gray-900">Mike Johnson</h3>
                <p className="text-gray-500">Product Manager</p>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
