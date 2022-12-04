import React from 'react';
import NavMenu from './components/NavMenu';
import Home from './pages/home';
import {Routes, Route, HashRouter} from "react-router-dom";

import Projects from './pages/projects';
//import Game from './pages/game';
import Contact from './pages/contact';
import Footer from './components/Footer';
function App() {

  //TODO: don not work on partial load.
  window.addEventListener('load', function () {
    if (window.location.hash.split('#').length>2) {
      document.getElementById(window.location.hash.split('#')[2]).scrollIntoView()
    }
  });

  return (
    <HashRouter>
      <NavMenu />
      <div className="mainContent">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </HashRouter>
  );
}

export default App;
