import React from 'react';
import './index.css';

export function Heading({ level, className, children }) {
  const Tag = `h${level}`;
  return <Tag className={`heading ${className || ''}`}>{children}</Tag>;
}
