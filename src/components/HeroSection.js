import React from 'react';
import styled from 'styled-components';
import HeroImg from '../assets/images/hero.png';
import Button from './Button';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg';
import PText from './PText';

const HeroStyles = styled.div`
  .hero {
    height: 100vh;
    min-height: 568px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .hero__heading {
    font-size: 2rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero__name span{
      width:auto;
    }
    .hero__name {
      font-family: 'Montserrat SemiBold';
      font-size: 7rem;
      color: var(--white);
    }

    .hero__name .word{
      font-family: 'Montserrat SemiBold';
      font-size: 7rem;
      color: var(--white);
      display: inline-block;
      width:auto;
      transition: all .3s ease-out
    }
    .hero__name .word:hover{
      color: var(--hoverAcent);
    }
    .hero__name .onespace{
      width:20px;
    }
  }
  .hero__img {
    max-width: 900px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
  }
  .hero__info {
    
  }
  .hero__social,
  .hero__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;

    bottom: 20px;
    width: 50px;
  }
  .hero__social {
    left: 50px;
  }
  .hero__scrollDown {
    right: 50px;
  }

  .hero__social__indicator,
  .hero__scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero__scrollDown {
    img {
      max-height: 70px;
    }
  }

  .hero__social__text {
    ul {
      li {
        margin-bottom: 1rem;
        a {
          display: inline-block;
          font-size: 1.6rem;
          transform: rotate(-90deg);
          letter-spacing: 5px;
          margin-bottom: 2rem;
        }
      }
    }
  }
  @media only screen and (min-width: 768px) {
    .hero__name .mobile{
      display: none;
    }
  }
  @media only screen and (max-width: 768px) {
    .hero {
    }
    .hero__heading {
      font-size: 1.4rem;
      .hero__name {
        font-size: 4.5rem;
      }
    }
    .hero__name{
      font-size: 4rem;
    }
    .hero__name .mobile{
      font-family: 'Montserrat SemiBold';
      color: var(--white);
      display: inline-block;
      width:auto;
      transition: all .3s ease-out
      display: inline-block;
    }
    .hero__name .word{
      display: none !important;
    }
    .hero__img {
      height: 300px;
      border-radius: 15px;
    }
    .hero__info {
      margin-top: 3rem;
    }
    .hero__social {
      left: 0px;
      bottom: -15%;
      width: 20px;
      .hero__social__indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .hero__social__text {
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .hero__scrollDown {
      right: 0;
      width: 20px;
      bottom: 50px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <h1 className="hero__heading">
            <span>Hello, i am</span>
            <span className="rubberWords hero__name">
            <span className="mobile  animation_rubber">Dharmesh Gurnani</span>
              <span className="word animation_rubber">D</span>
              <span className="word animation_rubber">h</span>
              <span className="word animation_rubber">a</span>
              <span className="word animation_rubber">r</span>
              <span className="word animation_rubber">m</span>
              <span className="word animation_rubber">e</span>
              <span className="word animation_rubber">s</span>
              <span className="word animation_rubber">h</span>
              <span className="onespace"> </span>
              <span className="word animation_rubber">G</span>
              <span className="word animation_rubber">u</span>
              <span className="word animation_rubber">r</span>
              <span className="word animation_rubber">n</span>
              <span className="word animation_rubber">a</span>
              <span className="word animation_rubber">n</span>
              <span className="word animation_rubber">i</span>
            </span>

          </h1>
          <div className="hero__info">
            <PText>
              I'm a Salesforce Commerce Cloud developer & full stack web developer, and i'm passionate about programming and Networking.
            </PText>
            <Button btnText="see my works" btnLink="/projects" />
          </div>
          <div className="hero__social">
            <div className="hero__social__indicator">
              <p>Follow</p>
              <img src={SocialMediaArrow} alt="icon" />
            </div>
            <div className="hero__social__text">
              <ul>
                <li>
                  <a
                    href="http://twitter.com/dharmeshgurnani"
                    target="_blank"
                    rel="noreferrer"
                  >
                    TW
                  </a>
                </li>
                <li>
                  <a
                    href="http://instagram.com/dharmeshgurnani"
                    target="_blank"
                    rel="noreferrer"
                  >
                    IG
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/dharmeshgurnani/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LI
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="hero__scrollDown animation_bounce-1">
            <p>Scroll</p>
            <img src={ScrollDownArrow} alt="ScrollDown Arrow" />
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
