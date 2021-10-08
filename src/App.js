import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Particles from "react-tsparticles";
import particlesOptions from "./particles.json";
import NavMenu from './components/NavMenu';
import Home from './pages/home';
import Projects from './pages/projects';
import Game from './pages/game';
import Contact from './pages/contact';
function App() {
    window.enableParticles = true;
    setTimeout(function(){
      var sectionHome = $("[class^='rubberWords']");
      sectionHome.find(".word").removeClass('animated bounceIn');
      sectionHome.find(".word").css('opacity',1);
      sectionHome.find(".word").mouseenter(function (){
          var el = jQuery(this);
          jQuery(this).addClass('animation_rubber');
          setTimeout(function() {
             el.removeClass('animation_rubber');
          }, 1000);
      });
  },3000);

  return (
    <>
      {window.enableParticles && <Particles options={particlesOptions}/>}
      <Router>
        <NavMenu />
        <div className="mainContent">
        <Switch>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/games">
            <Game />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
