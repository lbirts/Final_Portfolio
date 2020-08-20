import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from './containers/nav'
import Home from './components/home'
import About from './containers/about'
import Skills from './components/skills'
import Portfolio from './containers/portfolio'
import Contact from './containers/contact'
import Parallax from './components/parallax'
import Footer from './containers/footer'

function App() {
  return (
    <div className="App">
    <Router>
      <Parallax/>
      <Nav/>
      <Home/>
      <About/>
      <Portfolio/>
      <Contact/>
      <Footer/>
      <Route exact path='/#' component={Home}/>
      <Route exact path='/#about' component={About}/>
      <Route exact path='/#skills' component={Skills}/>
      <Route exact path='/#portfolio' component={Portfolio}/>
      <Route exact path='/#contact' component={Contact}/>
    </Router>
    </div>
  );
}

export default App;
