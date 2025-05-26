import React from 'react';

export default function ChatWindow({ messages, onSend }) {
  return (
    <div className="rounded-xl shadow w-full max-w-2xl mx-auto bg-white flex flex-col h-[400px]">
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.map((m, i) => (
          <div
            key={i}
            className={
              'max-w-xs px-4 py-2 rounded-lg ' +
              (m.role === 'admin'
                ? 'ml-auto bg-blue-500 text-white'
                : 'mr-auto bg-slate-200 text-slate-800')
            }
          >
            {m.text}
          </div>
        ))}
      </div>
      <form
        onSubmit={e => {
          e.preventDefault();
          const val = e.target.message.value.trim();
          if (val) onSend(val);
          e.target.reset();
        }}
        className="p-4 flex gap-2 border-t"
      >
        <input name="message" className="flex-1 border rounded px-3 py-2" placeholder="Type a message..." />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Send</button>
      </form>
    </div>
  );
}
