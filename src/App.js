import React from 'react';
import NavMenu from './components/NavMenu';
import Home from './pages/home';
import {BrowserRouter, Routes, Route,Link} from "react-router-dom";
import Projects from './pages/projects';
//import Game from './pages/game';
import Contact from './pages/contact';
import Footer from './components/Footer';
function App() {
  return (
    <BrowserRouter>
    <Link path="/portfolio/:contact/"/>
      <NavMenu />
      <div className="mainContent">
        <Routes>
          <Route path=":portfolio/" element={<Home />} />
          <Route path=":portfolio/projects" element={<Projects />} />
          <Route path=":portfolio/contact" element={<Contact />} />
          <Route path=":portfolio/*" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
