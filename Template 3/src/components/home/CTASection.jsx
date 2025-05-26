import React from 'react';

const CTASection = () => {
  return (
    <section className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ready to streamline your mentor payouts?
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-300">
          Start your free trial today and experience the power of automated mentor payout management.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/signup"
            className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Get started
          </a>
          <a href="/contact" className="text-sm font-semibold leading-6 text-white">
            Contact sales <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
