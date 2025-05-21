import React, { useState } from 'react';

export default function FaqItem({ question, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item" onClick={() => setOpen(!open)}>
      <h4 style={{ cursor: 'pointer' }}>{question}</h4>
      {open && <div className="faq-answer">{children}</div>}
    </div>
  );
}
