import React from 'react'
import './App.css';
import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar/navbar.component';
import CarouselComponent from './components/carousel/carousel.component';
import TitleMessage from './components/title/title';
import About from './pages/about/about';
import Skills from './pages/skills/skills';
import Projects from './pages/projects/projects';
import {Route,Switch} from 'react-router-dom';
import Home from './pages/home/home';
// import Particles from 'react-particles-js';
// import {ParticleProps} from './particleprops';

function App() {
  return (
    <div className="App">
     
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/skills" component={Skills}/>
        <Route exact path="/projects" component={Projects}/>
      </Switch>
      
    </div>
  );
}

export default App;
