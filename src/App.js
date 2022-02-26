import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import Home from './pages/home';
import Projects from './pages/projects';
import Game from './pages/game';
import Contact from './pages/contact';
import Footer from './components/Footer';
function App() {
  return (
    <>
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
        <Footer />
      </Router>
    </>
  );
}

export default App;
