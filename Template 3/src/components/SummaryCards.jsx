import React from 'react';

export default function SummaryCards({ summary }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 my-4">
      {/* Example cards, update with props if needed */}
      <div className="bg-blue-100 rounded-xl p-4 text-blue-900">
        <h4 className="text-sm font-semibold">Total Sessions</h4>
        <div className="text-xl font-bold">{summary?.totalSessions}</div>
      </div>
      <div className="bg-blue-100 rounded-xl p-4 text-blue-900">
        <h4 className="text-sm font-semibold">Total Earnings</h4>
        <div className="text-xl font-bold">${summary?.totalEarnings}</div>
      </div>
      <div className="bg-blue-100 rounded-xl p-4 text-blue-900">
        <h4 className="text-sm font-semibold">Paid</h4>
        <div className="text-xl font-bold">${summary?.paid}</div>
      </div>
      <div className="bg-blue-100 rounded-xl p-4 text-blue-900">
        <h4 className="text-sm font-semibold">Pending</h4>
        <div className="text-xl font-bold">${summary?.pending}</div>
      </div>
    </div>
  );
}
