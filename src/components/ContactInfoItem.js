import React from 'react';
import PropTypes from 'prop-types';
import { MdPlace } from 'react-icons/md';
import PText from './PText';
import '../client/scss/components/ContactinfoItem.scss'

export default function ContactInfoItem({
  icon = <MdPlace />,
  text = 'I need text ',
}) {
  return (
    <div className="contactinfoItem" data-aos="flip-left" >
      <div className="icon">{icon}</div>
      <div className="info">
        <PText>{text}</PText>
      </div>
    </div>
  );
}

ContactInfoItem.propTypes = {
  icon : PropTypes.any,
  text : PropTypes.string
}
