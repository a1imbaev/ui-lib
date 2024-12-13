import React, { useState } from 'react';
import './index.css';

export function Accordion({ title, defaultOpen, children }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`accordion ${isOpen ? 'accordion--open' : ''}`}>
      <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        {title}
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
}
