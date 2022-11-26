import React from 'react';
import NavMenu from './components/NavMenu';
import Home from './pages/home';
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import Projects from './pages/projects';
//import Game from './pages/game';
import Contact from './pages/contact';
import Footer from './components/Footer';
function App() {
  return (
    <BrowserRouter>
      <NavMenu />
      <div className="mainContent">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":projects/*" element={<Projects />} />
          <Route path=":contact/*" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
