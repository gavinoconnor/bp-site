import React, { Component } from 'react';
import './App.css';

import Home from './components/Home';
import About from './components/About';
import Clients from './components/Clients';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
        <div className='container'>
          <Home />
          <Clients/>
          <About />
          <Footer />
        </div>
    );
  }
};

export default App;
