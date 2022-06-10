import React from 'react';
import PropTypes from 'prop-types';
import ProjectImg from '../assets/images/projectImg.png';
import '../style/components/ProjectItem.scss';

export default function ProjectItem({
  img = ProjectImg,
  title = 'Project Name',
  desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  href = '#'
}) {
  return (
    <div className='ProjectItem'>
      <a href={href} className="projectItem__img">
        <img src={img} alt="project img" />
      </a>
      <div className="projectItem__info">
        <a href={href}>
          <h3 className="projectItem__title">{title}</h3>
        </a>
        <p className="projectItem__desc">{desc}</p>
      </div>
    </div>
  );
}

ProjectItem.propTypes = {
  img : PropTypes.any,
  title : PropTypes.string,
  desc : PropTypes.string,
  href : PropTypes.string
}