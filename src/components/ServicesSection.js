import React, { useRef } from 'react';
import { MdDesktopMac, MdCode, MdCloud } from 'react-icons/md';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';
import '../style/components/ServicesSection.scss';

export default function ServicesSection() {
  const SectionContainer = useRef(null);
  return (
    <div id="ServicesSection" className="ServicesSection">
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
