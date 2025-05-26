import React, { useState } from 'react';

const faqs = [
  {
    question: 'How does EdPayout simplify mentor payouts?',
    answer: 'EdPayout automates the payout process by tracking sessions and calculating payments automatically, reducing manual work.',
  },
  {
    question: 'Can I track multiple mentors?',
    answer: 'Yes, the platform supports managing multiple mentors and their individual payout schedules.',
  },
  {
    question: 'Is my payment information secure?',
    answer: 'We use industry-standard security measures to protect your payment and personal information.',
  },
  {
    question: 'How do I contact support?',
    answer: 'You can reach out to our support team via the Contact page or email us at contact@edpayout.com.',
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map(({ question, answer }, index) => (
            <div key={index} className="border border-gray-200 rounded-md">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-4 py-3 text-lg font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {question}
              </button>
              {activeIndex === index && (
                <div className="px-4 py-3 text-gray-700 border-t border-gray-200">
                  {answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
