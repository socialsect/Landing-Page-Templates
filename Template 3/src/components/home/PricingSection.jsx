import React from 'react';
import PricingCard from './PricingCard';

const PricingSection = () => {
  const pricingPlans = [
    {
      title: "Starter",
      badge: "Most Popular",
      price: "Free",
      description: "Perfect for small platforms just starting out",
      features: [
        { included: true, text: "Up to 50 mentor sessions per month" },
        { included: true, text: "Basic payout automation" },
        { included: true, text: "Email support" },
        { included: false, text: "No priority support" },
        { included: false, text: "No custom payout rules" }
      ],
      ctaText: "Get Started",
      ctaLink: "/signup",
      highlighted: true
    },
    {
      title: "Pro",
      badge: "Professional",
      price: "$49",
      description: "Ideal for growing platforms with multiple mentors",
      features: [
        { included: true, text: "Up to 500 mentor sessions per month" },
        { included: true, text: "Advanced payout automation" },
        { included: true, text: "Priority email support" },
        { included: true, text: "Custom payout rules" },
        { included: true, text: "Monthly reports" }
      ],
      ctaText: "Get Started",
      ctaLink: "/signup"
    },
    {
      title: "Enterprise",
      badge: "Custom",
      price: "Contact us",
      description: "Custom solutions for large platforms",
      features: [
        { included: true, text: "Unlimited mentor sessions" },
        { included: true, text: "Enterprise-grade automation" },
        { included: true, text: "24/7 priority support" },
        { included: true, text: "Custom payout rules" },
        { included: true, text: "Custom reporting" }
      ],
      ctaText: "Contact Sales",
      ctaLink: "/contact"
    }
  ];

  return (
    // <section className="py-24 sm:py-32">
    <section id="pricing" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Flexible Pricing Plans</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Choose the plan that best fits your needs and scale as your platform grows.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <PricingCard 
              key={index}
              title={plan.title}
              badge={plan.badge}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              ctaText={plan.ctaText}
              ctaLink={plan.ctaLink}
              highlighted={plan.highlighted}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
