import React from 'react';
import '../style/components/PText.scss'

export default function PText({ children }) {
  return (
    <div className="PText para">
      <p className="anim-typewriter">{children}</p>
    </div>
  );
}
