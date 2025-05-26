import React from 'react';
import { Link } from 'react-router-dom';

export default function Header({ user, onLogout }) {
  return (
    <header className="flex items-center justify-between p-4 bg-blue-700 text-white">
      <Link to={user?.role === 'admin' ? '/admin' : '/mentor'} className="font-bold text-lg tracking-wide">
        Payout Automation
      </Link>
      <nav className="flex gap-4 text-base">
        {user ? (
          <>
            <span className="capitalize">{user.role}</span>
            <button onClick={onLogout} className="underline">Logout</button>
          </>
        ) : null}
      </nav>
    </header>
  );
}
