import React from 'react';
import PropTypes from 'prop-types';
import { MdDesktopMac } from 'react-icons/md';
import PText from './PText';
import '../style/components/ServicesSectionItem.scss';

export default function ServicesSectionItem({
  icon = <MdDesktopMac />,
  title = 'Web Design',
  desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ok",
}) {
  return (
    <div className="ServicesSectionItem servicesItem">
      <div className="servicesItem__icon">{icon}</div>
      <div className="servicesItem__title">{title}</div>
      <PText>{desc}</PText>
    </div>
  );
}

ServicesSectionItem.propTypes = {
      icon : PropTypes.any,
      title : PropTypes.string,
      desc : PropTypes.string
}
