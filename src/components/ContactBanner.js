import React , { useRef } from 'react';
import '../style/components/ContactBanner.scss';
import Button from './Button';
import PText from './PText';

export default function ContactBanner() {
  const contactBannerRef = useRef(null);
  
  return (
    <div className="ContactBanner">
      <div className="container">
        <div ref ={contactBannerRef} className="contactBanner__wrapper">
          <PText>
            Although i'm not currently looking for any new opportunities, my inbox in always open.
            Whether you have a question or just want to say hi, I'll try my  best to get back to you!
          </PText>
          <h3 className="contactBanner__heading">Let me help you</h3>
          <Button btnText="Contact Now" btnLink="/contact" />
        </div>
      </div>
    </div>
  );
}
