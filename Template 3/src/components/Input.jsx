import React from 'react';

export default function Input({ label, ...props }) {
  return (
    <div className="mb-3">
      {label && (
        <label className="block font-medium mb-1 text-sm">{label}</label>
      )}
      <input {...props} className="w-full border px-3 py-2 rounded focus:ring-2 ring-blue-200" />
    </div>
  );
}
