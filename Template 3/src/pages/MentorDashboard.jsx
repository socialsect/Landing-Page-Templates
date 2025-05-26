'use strict';

import React, { useState } from 'react';
import SummaryCards from '../components/SummaryCards.jsx';
import SessionTable from '../components/SessionTable.jsx';

const MOCK_SESSIONS = [
  {
    mentor: 'Jane Mentor',
    date: '2024-05-01',
    type: 'Live Class',
    duration: 2,
    rate: 30,
    total: 60,
    status: 'Paid',
  },
  {
    mentor: 'Jane Mentor',
    date: '2024-05-14',
    type: 'Evaluation',
    duration: 1.5,
    rate: 25,
    total: 37.5,
    status: 'Pending',
  }
];

export default function MentorDashboard() {
  const [sessions] = useState(MOCK_SESSIONS);
  const [filter, setFilter] = useState({ from: '', to: '' });

  function filteredSessions() {
    if (!filter.from && !filter.to) return sessions;
    return sessions.filter(s => {
      const d = new Date(s.date);
      const from = filter.from ? new Date(filter.from) : null;
      const to = filter.to ? new Date(filter.to) : null;
      return (!from || d >= from) && (!to || d <= to);
    });
  }

  const summary = {
    totalSessions: filteredSessions().length,
    totalEarnings: filteredSessions().reduce((a, s) => a + s.total, 0),
    paid: filteredSessions().filter(s => s.status === 'Paid').reduce((a, s) => a + s.total, 0),
    pending: filteredSessions().filter(s => s.status === 'Pending').reduce((a, s) => a + s.total, 0)
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Mentor Dashboard</h2>
      <SummaryCards summary={summary} />
      <div className="mb-4 flex flex-wrap gap-3 items-center">
        <label>
          <span className="text-sm">From: </span>
          <input
            type="date"
            value={filter.from}
            onChange={e => setFilter(f => ({ ...f, from: e.target.value }))}
            className="border px-2 py-1 rounded ml-1"
          />
        </label>
        <label>
          <span className="text-sm">To: </span>
          <input
            type="date"
            value={filter.to}
            onChange={e => setFilter(f => ({ ...f, to: e.target.value }))}
            className="border px-2 py-1 rounded ml-1"
          />
        </label>
        <button
          className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 ml-2"
          onClick={() => setFilter({ from: '', to: '' })}
        >Clear Filter</button>
      </div>
      <SessionTable sessions={filteredSessions()} />
      <div className="flex flex-wrap gap-4 my-6">
        {filteredSessions().map((s, i) => (
          <div key={i} className="flex-1 min-w-[200px] rounded shadow p-4 bg-white">
            <div>
              <b>{s.type}</b> - {s.date}
            </div>
            <div>Duration: {s.duration} hrs</div>
            <div>Amount: <span className="font-bold">${s.total}</span></div>
            <div className="mt-2">
              Status: {s.status === 'Paid' ? (
                <span className="text-green-600 font-semibold">Paid</span>
              ) : (
                <span className="text-orange-600 font-semibold">Pending</span>
              )}
            </div>
            <button
              className="mt-2 px-3 py-1 bg-blue-100 text-blue-700 rounded text-sm border border-blue-200"
              onClick={() => alert('Fake receipt would download!')}
            >Download Receipt</button>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-3 items-center mt-6">
        <div className="bg-blue-50 border border-blue-100 px-6 py-3 rounded text-center">
          Payment tracker: <span className="font-bold">{summary.paid > 0 ? 'Some paid' : 'All pending'}</span>
        </div>
        <button
          className="bg-blue-700 text-white px-4 py-2 rounded mt-2"
          onClick={() => alert('Receipt preview (see Receipt page)')}
        >View Full Receipt</button>
      </div>
    </div>
  );
}
