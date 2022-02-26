import React from 'react';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import "../style/components/Button.scss"

export default function Button({
  btnText = 'test',
  btnLink = 'test'
}) {
  return (
    <div className="button-wrapper">
      <AwesomeButton type="primary" href={'#'+btnLink} >
        {btnText}
      </AwesomeButton>
    </div>
  );
}
