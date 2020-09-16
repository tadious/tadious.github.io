import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Home from './components/home'
import Services from './components/services'
import Skills from "./components/skills"
import Experience from './components/experience'
import Contact from './components/contact'

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
          <div id="colorlib-main">
            <Home></Home>
            <Skills></Skills>
            <Services></Services>
            <Experience></Experience>
            <Contact></Contact>
          </div>
      	</div>
      </div>
    );
  }
}

export default App;
