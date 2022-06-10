import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { MdClose, MdMenu } from 'react-icons/md';
import { gsap, Power4} from "gsap";
import '../style/components/NavMenu.scss';

export default function NavMenu() {

  // for desktops
  // Streamline this file require refectoring.
  // const mql = window.matchMedia('screen and (min-width: 992px)');
  // for tablets
  var desktopOnlyMq = window.matchMedia('only screen and (min-width: 992px)');

  var [showNav, setShowNav] = useState(false);

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
  },[]);

  return (
    <div className="NavMenu" ref={el => {NavMenuRef = el}}>
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
    </div>
  );
}
