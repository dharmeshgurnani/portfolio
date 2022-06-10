import React from 'react';
import PropTypes from 'prop-types';
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

SectionTitle.propTypes = {
  subheading : PropTypes.string,
  heading : PropTypes.string,
}
