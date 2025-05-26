import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Jane Doe',
    role: 'Mentor',
    feedback: 'EdPayout has simplified my payout process tremendously. Highly recommended!',
  },
  {
    id: 2,
    name: 'John Smith',
    role: 'EdTech Platform Owner',
    feedback: 'The automation and tracking features have saved us so much time and effort.',
  },
  {
    id: 3,
    name: 'Alice Johnson',
    role: 'Mentor',
    feedback: 'Easy to use and very reliable. It has improved my mentoring experience.',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(({ id, name, role, feedback }) => (
            <div key={id} className="bg-gray-50 p-6 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4">"{feedback}"</p>
              <p className="font-semibold text-gray-900">{name}</p>
              <p className="text-sm text-gray-500">{role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
