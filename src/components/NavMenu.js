import React, { useState} from 'react';
import { NavLink } from 'react-router-dom';
import { MdClose, MdMenu } from 'react-icons/md';
import '../client/scss/components/NavMenu.scss';

export default function NavMenu() {

  // for desktops
  // Streamline this file require refectoring.
  // const mql = window.matchMedia('screen and (min-width: 992px)');


  var [showNav, setShowNav] = useState(false);

  return (
    <div className="NavMenu" style={{opacity: 1}} data-aos="fade-right">
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
        <div className="navLogo" >
          <div className="stack"
          style={{'--stacks': '3'}}
          data-aos-delay="800" data-aos="zoom-in"
          >
            <span style={{'--index':0}}>DG</span>
            <span style={{'--index':1}}>DG</span>
            <span style={{'--index':2}}>DG</span>
          </div>
        </div>

        <div className={"NavlinkWrapper"} >
          <li>
            <NavLink
              to="/"
              exact
              onClick={() => setShowNav(!showNav)}
              role="button"
              onKeyDown={() => setShowNav(!showNav)}
              tabIndex={0}
              data-aos-delay="800" data-aos="fade-right"
              style={{opacity: 1}}
            > Home </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              onClick={() => setShowNav(!showNav)}
              role="button"
              onKeyDown={() => setShowNav(!showNav)}
              tabIndex={0}
              data-aos-delay="900" data-aos="fade-right"
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
              data-aos-delay="1000" data-aos="fade-right"
            >
              Contact
            </NavLink>
          </li>
        </div>
      </ul>
    </div>
  );
}
