import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

const ButtonStyle = styled.div`
  margin-top: 2rem;
  .button {
    font-size: 2.2rem;
    background-color: ${(props) =>
      props.outline ? 'transperant' : 'var(--gray-1)'};
    padding: 0.7em 2em;
    border: 2px solid var(--gray-1);
    border-radius: 8px;
    display: inline-block;
    color: ${(props) => (props.outline ? 'var(--gary-1)' : 'black')};
  }
  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.8rem;
    }
  }

  .aws-btn {
    --button-default-height: 48px;
    --button-default-font-size: 2.2rem;
    --button-default-border-radius: 6px;
    --button-horizontal-padding: 20px;
    --button-raise-level: 5px;
    --button-hover-pressure: 2;
    --transform-speed: .185s;
    --button-primary-color: var(--gray-1);
    --button-primary-color-dark:var(--gray-2);
    --button-primary-color-light: var(--gray-2);
    --button-primary-color-hover: #95c9e4;
    --button-primary-border: none;
    --button-secondary-color: #fafafa;
    --button-secondary-color-dark: #67cbc3;
    --button-secondary-color-light: #349890;
    --button-secondary-color-hover: #ecf9f8;
    --button-secondary-border: 2px solid #b3e5e1;
    --button-anchor-color: #95d44a;
    --button-anchor-color-dark: #52a934;
    --button-anchor-color-light: #3f8228;
    --button-anchor-color-hover: #89cf35;
    --button-anchor-border: 2px solid #5bbd3a;
  }

  .aws-btn__content > span{
    color: inherit;
  }
  `;

export default function Button({
  btnText = 'test',
  btnLink = 'test',
  outline = false,
}) {
  return (
    <ButtonStyle outline={outline} className="button-wrapper">
      <AwesomeButton type="primary" href={'#'+btnLink} >
        {btnText}
      </AwesomeButton>
    </ButtonStyle>
  );
}
