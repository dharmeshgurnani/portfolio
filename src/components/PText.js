import React from 'react';
import PropTypes from 'prop-types';
import '../client/scss/components/PText.scss'

export default function PText({ children }) {
  return (
    <div className="PText para">
      <p className="anim-typewriter">{children}</p>
    </div>
  );
}

PText.propTypes = {
  children: PropTypes.string,
};