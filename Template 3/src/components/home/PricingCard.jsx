import React from 'react';

const PricingCard = ({ 
  title, 
  badge, 
  price, 
  description, 
  features, 
  ctaText, 
  ctaLink,
  highlighted = false
}) => {
  return (
    <div className={`rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-300 ${highlighted ? 'ring-2 ring-blue-500' : ''}`}>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        {badge && (
          <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
            {badge}
          </span>
        )}
      </div>
      <div className="mt-6 flex items-baseline">
        <span className="text-4xl font-bold tracking-tight text-gray-900">{price}</span>
        {price !== 'Contact us' && <span className="ml-1 text-sm font-medium text-gray-500">/month</span>}
      </div>
      <p className="mt-4 text-sm text-gray-500">
        {description}
      </p>
      <ul role="list" className="mt-8 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <div className="flex-shrink-0">
              <svg 
                className={`h-5 w-5 ${feature.included ? 'text-green-500' : 'text-red-500'}`} 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                {feature.included ? (
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                ) : (
                  <path fillRule="evenodd" d="M3.293 19.293a1 1 0 011.414 0L10 15.707V17a1 1 0 01-.293.707l-7 7zM19 4.293a1 1 0 010 1.414l-9 9a1 1 0 01-1.414 0L5 12.293V5a1 1 0 01.293-.707l7-7z" clipRule="evenodd" />
                )}
              </svg>
            </div>
            <p className={`ml-3 text-sm ${feature.included ? 'text-gray-700' : 'text-gray-500'}`}>
              {feature.text}
            </p>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <a 
          href={ctaLink} 
          className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 hover:shadow-lg transition-all duration-300"
        >
          {ctaText}
        </a>
      </div>
    </div>
  );
};

export default PricingCard;
