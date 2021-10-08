import React from 'react';
import { MdDesktopMac } from 'react-icons/md';
import styled from 'styled-components';
import PText from './PText';

const ItemStyles = styled.div`
  text-align: center;
  border-radius: 12px;
  padding: 3.5rem 10px;
  background-image: linear-gradient(var(--deep-dark),var(--dark-bg));
  border-bottom: 1px solid;
  border-top: 1px solid;
  opacity : 0;
  y: 60;

  &:hover {
    border-color:  var(--hoverAcent);

    .servicesItem__icon svg{
      fill:  var(--hoverAcent);
    }
    .servicesItem__title {
      color: var(--hoverAcent);
    }
  }

  .servicesItem__icon {
    svg {
      width: 3rem;
    }
  }
  .servicesItem__title {
    font-size: 2.5rem;
    font-family: 'Montserrat SemiBold';
  }
  .para {
    margin-top: 2rem;
  }
`;

export default function ServicesSectionItem({
  icon = <MdDesktopMac />,
  title = 'Web Design',
  desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ok",
}) {
  return (
    <ItemStyles className="servicesItem fadeInUp">
      <div className="servicesItem__icon">{icon}</div>
      <div className="servicesItem__title">{title}</div>
      <PText>{desc}</PText>
    </ItemStyles>
  );
}
