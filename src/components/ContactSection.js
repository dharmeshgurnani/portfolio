import React from 'react';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import ContactForm from './ContactForm';
import ContactInfoItem from './ContactInfoItem';
import SectionTitle from './SectionTitle';
import '../style/components/ContactSection.scss';

export default function ContactSection() {
  return (
    <div className="ContactSection" data-aos="fade-up">
      <div className="container">
        <SectionTitle heading="contact" subheading="get in touch" />
        <div className="contactSection__wrapper">
          <div className="left">
            <ContactInfoItem icon={<MdLocalPhone />} text="+91 7023355478" />
            <ContactInfoItem icon={<MdEmail />} text="dharmeshgurnani@protonmail.com" />
            <ContactInfoItem text="Ajmer, Rajasthan" />
          </div>
          <div className="right">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
