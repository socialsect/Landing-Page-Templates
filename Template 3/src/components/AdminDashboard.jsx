import { useState } from 'react';

const mockSessions = [
  {
    id: 1,
    mentor: 'John Doe',
    date: '2025-05-17',
    type: 'One-on-One',
    duration: 60,
    rate: 50,
    status: 'Paid'
  },
  // Add more mock sessions
];

const AdminDashboard = () => {
  const [sessions, setSessions] = useState(mockSessions);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const addSession = (e) => {
    e.preventDefault();
    // Implementation for adding new session
  };

  const calculateTotal = (session) => {
    return session.duration * session.rate;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold">Admin Dashboard</h1>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white rounded-lg shadow">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Sessions</h2>
                <button
                  onClick={() => document.getElementById('addSessionModal').showModal()}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  Add Session
                </button>
              </div>

              <div className="flex space-x-4 mb-6">
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="px-3 py-2 border rounded-md"
                />
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="px-3 py-2 border rounded-md"
                />
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Mentor
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Type
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Duration
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Rate
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Total
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {sessions.map((session) => (
                      <tr key={session.id}>
                        <td className="px-6 py-4 whitespace-nowrap">{session.mentor}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{session.date}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{session.type}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{session.duration} mins</td>
                        <td className="px-6 py-4 whitespace-nowrap">${session.rate}</td>
                        <td className="px-6 py-4 whitespace-nowrap">${calculateTotal(session)}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            session.status === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {session.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>

      <dialog id="addSessionModal" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Add New Session</h3>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Mentor Name</span>
            </label>
            <input type="text" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input type="date" className="input input-bordered" />
          </div>
          <div className="modal-action">
            <button className="btn">Add Session</button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default AdminDashboard;
