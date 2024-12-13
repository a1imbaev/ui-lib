import React from 'react';
import './index.css';

export function Tooltip({ text, position, children }) {
  return (
    <div className="tooltip-wrapper">
      {children}
      <span className={`tooltip tooltip--${position}`}>{text}</span>
    </div>
  );
}
