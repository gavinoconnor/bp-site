import React, { Component } from 'react';
import './App.css';

import Home from './components/Home';
import About from './components/About';
import Clients from './components/Clients';
import Footer from './components/Footer';

import nikon from './assets/images/nikon-1.jpg';

class App extends Component {

  state = {
    image: nikon,
    hovering: false
  }

  handleHover = (event) => {
    console.log(event.target)
    this.setState({
      hovering: true
    })
  }

  leaveHover = (event) => {
    console.log(this.state.hovering)
    this.setState({
      hovering: false
    })
  }

  render() {
    return (
        <div className='container'>
          <Home />
          <Clients image={this.state.image} hovering={this.state.hovering} handleHover={this.handleHover} leaveHover={this.leaveHover}/>
          <About />
          <Footer />
        </div>
    );
  }
};

export default App;
