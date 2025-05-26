import React, { useState } from 'react';
import ChatWindow from '../components/ChatWindow.jsx';

const START_CHAT = [
  { role: 'mentor', text: 'Hello Admin, I have a question about my last payout.' },
  { role: 'admin', text: 'Hi! Sure, please share your query.' }
];

export default function Chat({ user }) {
  // let them switch "as" for demo/mock
  const [as, setAs] = useState(user?.role || 'mentor');
  const [messages, setMessages] = useState(START_CHAT);

  function handleSend(msg) {
    setMessages(m => [...m, { role: as, text: msg }]);
    // Simulate reply if sending as mentor
    if (as === 'mentor') {
      setTimeout(() => {
        setMessages(m => [...m, { role: 'admin', text: 'Got your message. Will check!' }]);
      }, 1200);
    }
  }

  return (
    <div className="container mx-auto p-6 max-w-2xl">
      <h2 className="text-2xl font-bold mb-4">Mentor/Admin Chat</h2>
      <div className="flex gap-2 mb-3 items-center">
        <span className="text-sm">Talking as:</span>
        <select value={as} onChange={e => setAs(e.target.value)} className="border rounded p-1">
          <option value="admin">Admin</option>
          <option value="mentor">Mentor</option>
        </select>
        <span className="text-xs text-gray-400 ml-2">(for demo)</span>
      </div>
      <ChatWindow messages={messages} onSend={handleSend} />
    </div>
  );
}
