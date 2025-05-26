import React from 'react';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="pt-6">
      <div className="flow-root bg-blue-50 rounded-lg px-6 pb-8 hover:bg-blue-100 transition-all duration-300">
        <div className="-mt-6">
          <div>
            <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg hover:shadow-xl transition-all duration-300">
              {icon}
            </span>
          </div>
          <h3 className="mt-8 text-lg font-medium text-gray-900">{title}</h3>
          <p className="mt-4 text-base text-gray-500">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
