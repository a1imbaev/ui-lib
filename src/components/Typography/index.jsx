import React from 'react';
import './index.css';

export function Typography({ textSize = 'md', className, children }) {
  const textClass = `typography typography--${textSize} ${className || ''}`;
  return <p className={textClass}>{children}</p>;
}
