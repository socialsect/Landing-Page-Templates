import React from 'react';
import ReceiptPreview from '../components/ReceiptPreview.jsx';

const MOCK_RECEIPT = {
  mentor: 'Jane Mentor',
  totalSessions: 4,
  gross: 220,
  taxes: 22,
  net: 198
};

export default function Receipt() {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Payout Receipt Preview</h2>
      <ReceiptPreview receipt={MOCK_RECEIPT} />
      <div className="mt-8 max-w-md mx-auto bg-white shadow rounded-lg p-6">
        <div className="flex justify-between mb-2">
          <span className="font-medium">Mentor:</span>
          <span>{MOCK_RECEIPT.mentor}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="font-medium">Total Sessions:</span>
          <span>{MOCK_RECEIPT.totalSessions}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="font-medium">Gross Payout:</span>
          <span>${MOCK_RECEIPT.gross.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="font-medium">Taxes Withheld:</span>
          <span>-${MOCK_RECEIPT.taxes.toFixed(2)}</span>
        </div>
        <div className="flex justify-between border-t pt-2 mt-2 font-semibold">
          <span>Final Amount:</span>
          <span>${MOCK_RECEIPT.net.toFixed(2)}</span>
        </div>
        <button
          className="mt-6 w-full bg-gray-200 text-gray-700 py-2 rounded hover:bg-gray-300 transition"
          disabled
        >
          Download PDF (Coming Soon)
        </button>
      </div>
    </div>
  );
}
