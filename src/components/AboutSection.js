import React from 'react';
import Button from './Button';
import PText from './PText';
import SectionTitle from './SectionTitle';
// import AboutImg from '../assets/images/about-sec-img.png';
import '../style/components/AboutSection.scss'
export default function AboutSection() {
  return (
    <div id="AboutSection" className="AboutSection" data-aos="fade-up">
      <div className="container">
        <div className="aboutSection__left">
          <SectionTitle subheading="Let me introduce myself" heading="About Me" />
          <PText>
            I am a Salesforce Developer, website designer and developer from Ajmer,
            Rajasthan. I create professional websites. I love Programing and always
            try to learn new technologies.
          </PText>
          <div className="aboutSection__buttons">
            <Button btnText="Works" btnLink="/projects" />
            <Button btnText="Read More" btnLink="/about" outline />
          </div>
        </div>
        <div className="aboutSection__right">
          {/* <img className="aboutImg" src={AboutImg} alt="Img" /> */}
        </div>
      </div>
    </div>
  );
}
