import React from 'react';
import '../style/components/SectionTitle.scss';

export default function SectionTitle({
  subheading = 'Need Subheading',
  heading = 'need heading',
}) {
  return (
    <div className="SectiionTitle section-title">
      <p>{subheading}</p>
      <h2>{heading}</h2>
    </div>
  );
}
