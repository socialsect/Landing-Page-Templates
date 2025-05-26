import React from 'react';

export default function ReceiptPreview({ receipt }) {
  return (
    <div className="bg-white rounded-xl shadow p-6 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-2">Payout Receipt</h2>
      {/* Fill with receipt props for breakdown, taxes, total */}
      <div className="my-2">Mentor: <span className="font-medium">{receipt?.mentor}</span></div>
      <div className="my-2">Total Sessions: {receipt?.totalSessions}</div>
      <div className="my-2">Gross Amount: ${receipt?.gross}</div>
      <div className="my-2">Tax/Charges: -${receipt?.taxes}</div>
      <div className="font-semibold text-lg mt-4">Net Payable: ${receipt?.net}</div>
      <button className="mt-6 px-4 py-2 rounded bg-blue-700 text-white">Download PDF</button>
    </div>
  );
}
