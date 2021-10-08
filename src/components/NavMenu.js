import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { MdClose, MdMenu } from 'react-icons/md';
import { gsap, Power4} from "gsap";

const NavStyles = styled.nav`
  position: fixed;
  display:flex;
  z-index: 100;
  top: 0;
  left: -15rem;
  width: 15rem;
  height: 100%;
  padding: 1rem 0;
  border-right: solid;
  background: var(--gray-2);
  ul {
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
    text-align: center;
    li {
      display: inline-block;
      border-radius: 8px;
      transition: 0.3s ease background-color;
      &:hover {
        background-color: var(--deep-dark);
      }
    }
    a {
      display: inline-block;
      font-family: 'RobotoMono Regular';
      padding: 1rem 2rem;
      font-size: 2rem;
      color: var(--gray-1);
      outline: none;
    }
    .active {
      color: var(--white);
    }
  }
  .navLogo {
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 12rem;
    font-size: 1rem;
    background: var(--deep-dark);
    border: 1px solid;
    margin-top: 20px;
    margin-bottom: 40px;
  }

  .mobile-navLogo {
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 4rem;
    font-size: 28px;
    position: absolute;
    top: 1rem;
    left: 1rem;
    width: 4rem;
    cursor: pointer;
    display: none;
    outline: none;
    * {
      pointer-events: none;
    }
  }
  .mobile-menu-icon {
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 4rem;
    cursor: pointer;
    display: none;
    outline: none;
    * {
      pointer-events: none;
    }
  }
  .navItems .closeNavIcon {
    display: none;
  }
  @media only screen and (max-width: 768px) {
    height: 60px;
    width: 100%;
    left: 0;
    top: -15rem;
    padding: 0;
    background: var(--deep-dark);
    border-bottom: 1px solid;
    .hide-item {
      transform: translateY(calc(-100% - var(--top)));
    }
    .mobile-menu-icon {
      display: block;
    }
    .navLogo{
      display: none;
    }
    .mobile-navLogo{
      display: block;
    }
    .navItems {
      --top: 1rem;
      transition: 0.3s ease transform;
      background-color: var(--deep-dark);
      border: 1px solid;
      padding: 2rem;
      width: 60%;
      max-width: 300px;
      border-radius: 12px;
      position: absolute;
      right: 1rem;
      top: var(--top);
      .closeNavIcon {
        display: block;
        width: 3rem;
        margin: 0 0 0 auto;
        cursor: pointer;
        * {
          pointer-events: none;
        }
      }
      li {
        display: block;
        margin-bottom: 1rem;
      }
    }
  }

  /* glitch*/
  .stack {
    display: grid;
    grid-template-columns: 1fr;
  }

  .stack span {
    font-weight: bold;
    grid-row-start: 1;
    grid-column-start: 1;
    font-size: inherit;
    --stack-height: calc(100% / var(--stacks) - 1px);
    --inverse-index: calc(calc(var(--stacks) - 1) - var(--index));
    --clip-top: calc(var(--stack-height) * var(--index));
    --clip-bottom: calc(var(--stack-height) * var(--inverse-index));
    clip-path: inset(var(--clip-top) 0 var(--clip-bottom) 0);
    animation: stack 340ms cubic-bezier(.46,.29,0,1.24) 1 backwards calc(var(--index) * 120ms), glitch 2s ease infinite 2s alternate-reverse;
  }

  .stack span:nth-child(odd) { --glitch-translate: 8px; }
  .stack span:nth-child(even) { --glitch-translate: -8px; }

  @keyframes stack {
    0% {
      opacity: 0;
      transform: translateX(-50%);
      text-shadow: -2px 3px 0 red, 2px -3px 0 blue;
    };
    60% {
      opacity: 0.5;
      transform: translateX(50%);
    }
    80% {
      transform: none;
      opacity: 1;
      text-shadow: 2px -3px 0 red, -2px 3px 0 blue;
    }
    100% {
      text-shadow: none;
    }
  }
  @keyframes glitch {
    0% {
      text-shadow: -2px 3px 0 red, 2px -3px 0 blue;
      transform: translate(var(--glitch-translate));
    }
    2% {
      text-shadow: 2px -3px 0 red, -2px 3px 0 blue;
    }
    4%, 100% {  text-shadow: none; transform: none; }
  }
`;

const NavlinkWrapper = styled.div`
  position: absolute;
`;
export default function NavMenu() {

  // for desktops
  const mql = window.matchMedia('screen and (min-width: 992px)');
  // for tablets
  const desktopOnlyMq = window.matchMedia('only screen and (min-width: 992px)');

  const [showNav, setShowNav] = useState(false);

  //GSAP animations
  let NavMenuRef = useRef(null);
  let navLogoRef = useRef(null);
  let NavLink0 = useRef(null);
  let NavLink1 = useRef(null);
  let NavLink2 = useRef(null);
  var tl = gsap.timeline();
  useEffect(() => {
    tl.add(gsap.fromTo(
      NavMenuRef,null,{
        left: 0,
        top: 0,
        ease: Power4.easeOut,
        duration: 1.5
      }
    ));

    tl.add(gsap.fromTo(
      navLogoRef,null,
      {
        border: "4px solid",
        "font-size": "7rem",
        ease: Power4.easeOut,
        duration: 1.5
      }
    ));

    if(desktopOnlyMq.matches){
      tl.add(gsap.fromTo(
        NavLink0,{
          position: 'relative',
          top: 800,
          opacity: 0
        },
        {
          top: 0,
          ease: Power4.easeOut,
          duration: 1,
          opacity: 1
        }
      ));
  
      tl.add(gsap.fromTo(
        NavLink1,{
          position: 'relative',
          top: 700,
          opacity: 0
        },
        {
          top: 0,
          ease: Power4.easeOut,
          duration: 0.5,
          opacity: 1
        }
      ));
  
      tl.add(gsap.fromTo(
        NavLink2,{
          position: 'relative',
          top: 600,
          opacity: 0
        },
        {
          top: 0,
          ease: Power4.easeOut,
          duration: 1.5,
          opacity: 1
        }
      ));
    }
  });

  return (
    <NavStyles ref={el => {NavMenuRef = el}}>
      <div className="mobile-navLogo">
        <div className="stack" style={{'--stacks': '3'}}>
          <span style={{'--index':0}}>DG</span>
          <span style={{'--index':1}}>DG</span>
          <span style={{'--index':2}}>DG</span>
        </div>
      </div>
      <div
        className="mobile-menu-icon"
        onClick={() => setShowNav(!showNav)}
        role="button"
        onKeyDown={() => setShowNav(!showNav)}
        tabIndex={0}
      >
        <MdMenu />
      </div>

      <ul className={!showNav ? 'navItems hide-item' : 'navItems'}>
        <div
          className="closeNavIcon"
          onClick={() => setShowNav(!showNav)}
          role="button"
          onKeyDown={() => setShowNav(!showNav)}
          tabIndex={0}
        >
          <MdClose />
        </div>
        <div className="navLogo" ref={el => {navLogoRef = el}}>
          <div className="stack" style={{'--stacks': '3'}}>
            <span style={{'--index':0}}>DG</span>
            <span style={{'--index':1}}>DG</span>
            <span style={{'--index':2}}>DG</span>
          </div>
        </div>

        <div className={"NavlinkWrapper"}>
          <li>
            <NavLink
              to="/"
              exact
              onClick={() => setShowNav(!showNav)}
              role="button"
              onKeyDown={() => setShowNav(!showNav)}
              tabIndex={0}
              ref={el => {NavLink0 = el}}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              onClick={() => setShowNav(!showNav)}
              role="button"
              onKeyDown={() => setShowNav(!showNav)}
              tabIndex={0}
              ref={el => {NavLink1 = el}}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={() => setShowNav(!showNav)}
              role="button"
              onKeyDown={() => setShowNav(!showNav)}
              tabIndex={0}
              ref={el => {NavLink2 = el}}
            >
              Contact
            </NavLink>
          </li>
        </div>
      </ul>
    </NavStyles>
  );
}
