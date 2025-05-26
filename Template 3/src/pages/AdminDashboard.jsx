'use strict';

import React, { useState } from 'react';
import SessionTable from '../components/SessionTable.jsx';
import SummaryCards from '../components/SummaryCards.jsx';

// Mock session data
const MOCK_SESSIONS = [
  {
    mentor: 'Jane Mentor',
    date: '2024-05-01',
    type: 'Live Class',
    duration: 2,
    rate: 30,
    total: 60
  },
  {
    mentor: 'Ahmed Khan',
    date: '2024-05-03',
    type: 'Evaluation',
    duration: 1.5,
    rate: 25,
    total: 37.5
  }
];

export default function AdminDashboard() {
  const [sessions, setSessions] = useState(MOCK_SESSIONS);
  const [form, setForm] = useState({
    mentor: '', date: '', type: '', duration: '', rate: ''
  });
  const [showReceipt, setShowReceipt] = useState(false);

  const handleFormChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  function handleAddSession(e) {
    e.preventDefault();
    if (!form.mentor || !form.date || !form.type || !form.duration || !form.rate) return;
    const duration = parseFloat(form.duration);
    const rate = parseFloat(form.rate);
    const total = Math.round(duration * rate * 100) / 100;
    setSessions(s => [
      ...s, { ...form, duration, rate, total }
    ]);
    setForm({ mentor: '', date: '', type: '', duration: '', rate: '' });
  }

  const summary = {
    totalSessions: sessions.length,
    totalEarnings: sessions.reduce((a, s) => a + s.total, 0),
    paid: 70,
    pending: sessions.reduce((a, s) => a + s.total, 0) - 70
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      <SummaryCards summary={summary} />
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <section className="flex-1">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-lg">Mentor Sessions</h3>
            <button className="bg-blue-100 text-blue-700 px-3 py-1 rounded border border-blue-200">Upload CSV</button>
          </div>
          <SessionTable sessions={sessions} />
        </section>
        <section className="flex-1 max-w-md">
          <h3 className="font-semibold mb-2">Add Session (Mock)</h3>
          <form className="bg-white shadow p-4 rounded space-y-2" onSubmit={handleAddSession}>
            <input name="mentor" placeholder="Mentor name" value={form.mentor} onChange={handleFormChange} className="w-full border px-3 py-2 rounded" required />
            <input name="date" type="date" value={form.date} onChange={handleFormChange} className="w-full border px-3 py-2 rounded" required />
            <input name="type" placeholder="Type (Live Class, Eval...)" value={form.type} onChange={handleFormChange} className="w-full border px-3 py-2 rounded" required />
            <input name="duration" type="number" step="0.1" placeholder="Duration (hours)" value={form.duration} onChange={handleFormChange} className="w-full border px-3 py-2 rounded" required />
            <input name="rate" type="number" step="0.1" placeholder="Rate/hour ($)" value={form.rate} onChange={handleFormChange} className="w-full border px-3 py-2 rounded" required />
            <button className="w-full bg-blue-700 text-white p-2 rounded mt-2">Add Session</button>
          </form>
        </section>
      </div>
      <section className="max-w-xl mx-auto text-center mb-8">
        <h3 className="font-semibold text-lg mb-2">Payout Preview</h3>
        <div className="bg-blue-50 border border-blue-100 rounded p-4 mb-2">
          <div>Total payout (all sessions): <span className="font-bold">${summary.totalEarnings}</span></div>
          <div>Payouts marked PAID: <span className="font-bold text-green-600">${summary.paid}</span></div>
          <div>Payouts PENDING: <span className="font-bold text-orange-600">${summary.pending}</span></div>
        </div>
        <button
          className="bg-blue-700 text-white px-4 py-2 rounded mt-2"
          onClick={() => setShowReceipt(true)}
        >Generate Receipt</button>
        {showReceipt && (
          <div className="mt-4">
            <span className="inline-block bg-green-100 text-green-700 px-2 py-1 rounded">Receipt generated! (see Receipt page)</span>
          </div>
        )}
      </section>
    </div>
  );
}
