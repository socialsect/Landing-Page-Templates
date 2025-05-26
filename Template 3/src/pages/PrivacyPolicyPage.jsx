import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicyPage = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Privacy Policy</h1>
          <p className="text-lg text-gray-700 mb-4">
            Your privacy is important to us. This privacy policy explains how we collect, use, and protect your information.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Information We Collect</h2>
          <p className="text-gray-700 mb-4">
            We collect information you provide directly to us, such as your name, email address, and payment information.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
          <p className="text-gray-700 mb-4">
            We use your information to provide and improve our services, process payments, and communicate with you.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Security</h2>
          <p className="text-gray-700 mb-4">
            We take reasonable measures to protect your information from unauthorized access and disclosure.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions about this privacy policy, please contact us at contact@edpayout.com.
          </p>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
