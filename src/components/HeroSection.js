import React, { useEffect } from 'react';
import $ from 'jquery';
//import HeroImg from '../assets/images/hero.png';
import Button from './Button';
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg';
import PText from './PText';
import '../client/scss/components/HeroSection.scss'
import { gsap, Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {

  useEffect(() => {
    gsap.fromTo(
      '.hero__name__superScript', {
      x: window.innerWidth
    }, {
      x: 0,
      ease: Power4.easeOut,
      duration: 1.5
    }
    );

    gsap.fromTo(
      '.hero__name', {
      x: window.innerWidth
    }, {
      x: 0,
      ease: Power4.easeOut,
      duration: 1.7
    }
    );

    gsap.fromTo(
      '.hero__oneliner', {
      x: -(window.innerWidth)
    }, {
      x: 0,
      ease: Power4.easeOut,
      duration: 1.5
    }
    );

    gsap.fromTo(
      '.hero__info .para', {
      x: (window.innerWidth)
    }, {
      x: 0,
      ease: Power4.easeOut,
      duration: 1.7
    }
    );

    gsap.fromTo(
      '.hero__info .button-wrapper', {
      x: -(window.innerWidth)
    }, {
      x: 0,
      ease: Power4.easeOut,
      duration: 1.5
    }
    );
  }, []);
  //word animation
  setTimeout(function () {
    var sectionHome = $("[class^='rubberWords']");
    sectionHome.find(".word").removeClass('animated bounceIn');
    sectionHome.find(".word").css('opacity', 1);
    sectionHome.find(".word").mouseenter(function () {
      var el = $(this);
      $(this).addClass('animation_rubber');
      setTimeout(function () {
        el.removeClass('animation_rubber');
      }, 1000);
    });
  }, 1000);

  return (
    <div className="hero_Wrapper" data-aos="fade-up">
      <div className="hero">
        <div className="container">
          <h1 className="hero__heading">
            <span className='hero__name__superScript'>Hello, I'm</span>
            <span className="rubberWords hero__name">
              <span className="sm-screen-only animation_rubber">Dharmesh Gurnani</span>
              <span className="word animation_rubber">D</span>
              <span className="word animation_rubber">h</span>
              <span className="word animation_rubber">a</span>
              <span className="word animation_rubber">r</span>
              <span className="word animation_rubber">m</span>
              <span className="word animation_rubber">e</span>
              <span className="word animation_rubber">s</span>
              <span className="word animation_rubber">h</span>
              <span className="word onespace"> </span>
              <span className="word animation_rubber">G</span>
              <span className="word animation_rubber">u</span>
              <span className="word animation_rubber">r</span>
              <span className="word animation_rubber">n</span>
              <span className="word animation_rubber">a</span>
              <span className="word animation_rubber">n</span>
              <span className="word animation_rubber">i</span>
              <span className="word animation_rubber">.</span>
            </span>
          </h1>
          <h1 className="hero__oneliner word">
            <span >I build things for the web.</span>
          </h1>
          <div className="hero__info">
            <div className='lg-screen-only'>
              <PText>
                I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently,I'm focused on building accessible, human-centered products on Salesforce Commerce Cloud,I'm passionate about programming and Networking.
              </PText>
            </div>
            <Button className="hero__button" btnText="see my works" btnLink="/projects" />
          </div>
          <div className="hero__scrollDown right animation_bounce-1">
            <p>Scroll</p>
            <img src={ScrollDownArrow} alt="ScrollDown Arrow" />
          </div>
        </div>
      </div>
    </div>
  );
}
