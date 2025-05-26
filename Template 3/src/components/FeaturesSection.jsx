const FeaturesSection = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to manage mentor payouts
          </p>
        </div>

        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-2xl font-semibold text-blue-600 mb-4">Session Management</div>
            <p className="text-gray-500">
              Track mentor sessions across different formats - live sessions, recorded reviews, and evaluations. Automatic duration tracking and session categorization.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-2xl font-semibold text-blue-600 mb-4">Automated Payouts</div>
            <p className="text-gray-500">
              Smart payout calculation with custom rate breakdowns. Automatic tax handling and charge calculations. Generate structured receipts instantly.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-2xl font-semibold text-blue-600 mb-4">Secure Communication</div>
            <p className="text-gray-500">
              One-to-one encrypted chat between admins and mentors. Real-time communication for payout clarifications and support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
