import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsOfServicePage = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Terms of Service</h1>
          <p className="text-lg text-gray-700 mb-4">
            Please read these terms of service ("terms", "terms of service") carefully before using the EdPayout platform.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Use of Service</h2>
          <p className="text-gray-700 mb-4">
            By accessing or using the service, you agree to be bound by these terms.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">User Responsibilities</h2>
          <p className="text-gray-700 mb-4">
            Users are responsible for maintaining the confidentiality of their account and password.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Limitation of Liability</h2>
          <p className="text-gray-700 mb-4">
            EdPayout is not liable for any damages arising from the use of the service.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions about these terms, please contact us at contact@edpayout.com.
          </p>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default TermsOfServicePage;
