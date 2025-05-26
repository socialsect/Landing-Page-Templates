import React from 'react';

export default function SessionTable({ sessions }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border ">
        <thead className="bg-blue-50">
          <tr>
            <th className="px-3 py-2">Mentor</th>
            <th className="px-3 py-2">Date</th>
            <th className="px-3 py-2">Type</th>
            <th className="px-3 py-2">Duration</th>
            <th className="px-3 py-2">Rate/hour</th>
            <th className="px-3 py-2">Total</th>
          </tr>
        </thead>
        <tbody>
          {sessions?.map((s, i) => (
            <tr key={i} className="even:bg-slate-50">
              <td className="px-3 py-2">{s.mentor}</td>
              <td className="px-3 py-2">{s.date}</td>
              <td className="px-3 py-2">{s.type}</td>
              <td className="px-3 py-2">{s.duration}h</td>
              <td className="px-3 py-2">${s.rate}</td>
              <td className="px-3 py-2 font-semibold">${s.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
