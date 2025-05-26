import React, { useState } from 'react';
import Input from '../components/Input.jsx';
import { useNavigate } from 'react-router-dom';

const USERS = [
  { email: 'admin@example.com', password: '123456', role: 'admin' },
  { email: 'mentor@example.com', password: '123456', role: 'mentor' }
];

export default function Login({ onAuth }) {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError('');
    setTimeout(() => {
      const found = USERS.find(
        u =>
          u.email === form.email.trim().toLowerCase() &&
          u.password === form.password
      );
      if (found) {
        onAuth({ email: found.email, role: found.role });
        navigate(found.role === 'admin' ? '/admin' : '/mentor', { replace: true });
      } else {
        setError('Invalid email or password.');
        setLoading(false);
      }
    }, 600);
  }

  return (
    <div className="w-full max-w-md space-y-6 rounded-xl shadow-lg bg-white p-8 mx-auto mt-16">
      <h2 className="text-xl font-semibold mb-4 text-center">Login</h2>
      <form className="space-y-4" autoComplete="off" onSubmit={handleSubmit}>
        <Input
          label="Email"
          name="email"
          type="email"
          autoFocus
          value={form.email}
          onChange={handleChange}
          autoComplete="username"
          required
        />
        <Input
          label="Password"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          autoComplete="current-password"
          required
        />
        {error && <div className="text-red-600 text-sm">{error}</div>}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-700 hover:bg-blue-800 text-white py-2 rounded mt-4 font-semibold transition"
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      <div className="text-xs text-center text-gray-500 pt-2">
        <div>Admin: admin@example.com / 123456</div>
        <div>Mentor: mentor@example.com / 123456</div>
      </div>
    </div>
  );
}
