import React from 'react';
import PropTypes from 'prop-types';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import "../client/scss/components/Button.scss"

export default function Button({
  btnText = 'test',
  btnLink = 'test'
}) {
  return (
    <div className="button-wrapper">
      <AwesomeButton type="primary" href={"#"+btnLink} >
        {btnText}
      </AwesomeButton>
    </div>
  );
}

Button.propTypes = {
  btnText: PropTypes.string,
  btnLink: PropTypes.string,
}