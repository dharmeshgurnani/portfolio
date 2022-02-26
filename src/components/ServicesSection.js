import React, { useRef } from 'react';
import { MdDesktopMac, MdCode, MdCloud } from 'react-icons/md';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';
import { useIntersection } from 'react-use';
import { gsap, Power4} from "gsap";
import '../style/components/ServicesSection.scss';

export default function ServicesSection() {
  const SectionContainer = useRef(null);
  const intersection = useIntersection( SectionContainer,{
    root: null,
    rootMargin: "0px",
    threshold: 0.2
  });

  // Animation for fading in
  const fadeInUp = element => {
    gsap.to(element, 1, {
      opacity: 1,
      y: 0,
      ease: Power4.easeOut,
      stagger: {
        amount: 1
      }
    });
  };

   // Animation for fading out
   const fadeOut = element => {
    gsap.to(element, 1, {
      opacity: 0,
      y: 60,
      ease: Power4.easeOut
    });
  };
  window.SectionContainer = SectionContainer
  // check to see when viewpoint is visible to user
  intersection && intersection.intersectionRatio < 0.2 ? fadeOut('.services__allItems .fadeInUp') : fadeInUp('.services__allItems .fadeInUp');

  return (
    <div className="ServicesSection">
      <div className="container">
        <SectionTitle subheading="What i can do" heading="Services" />
        <div ref ={SectionContainer} className="services__allItems ">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="web design"
            desc="UI/UX design for the website that helps website to get a unique look."
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="web devlopment"
            desc="Development of high performance websites with blazing fast speed using various Nodejs frameworks."
          />
          <ServicesSectionItem
            icon={<MdCloud />}
            title="Salesforce Commerce Cloud"
            desc="Development and Management of E-Commerce websites On Salesforce Commerce Cloud platform"
          />
        </div>
      </div>
    </div>
  );
}
