import React , { useRef } from 'react';
import '../style/components/ContactBanner.scss';
import Button from './Button';
import PText from './PText';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function ContactBanner() {
  const contactBannerRef = useRef(null);
  //gsap animation
  const services__allItems = gsap.utils.toArray('.ContactBanner');
  services__allItems.forEach(services__allItem => {
    const componentAnimation = gsap.fromTo(
      services__allItem,
      {
        y: 300,
        opacity:0
      },
      {
        y: 0,
        opacity:1,
        duration: 1.5
      }
    );
    ScrollTrigger.create({
      trigger: services__allItem,
      animation: componentAnimation
    });
  });

  return (
    <div data-aos="fade-up" className="ContactBanner">
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
