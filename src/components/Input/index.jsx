import React from 'react';
import './index.css';

export function Input({ type = 'text', placeholder, value, onChange, disabled, label, danger }) {
  const className = `input ${danger ? 'input--danger' : 'input--default'}`;
  return (
    <div className="input-wrapper">
      {label && <label className={`input-label ${danger ? 'label--danger' : ''}`}>{label}</label>}
      <input
        className={className}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
}
