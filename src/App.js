import React, { Component } from 'react';
import './App.css';

import Home from './components/Home';
import About from './components/About';
import ClientsContainer from './containers/ClientsContainer';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
        <div className='container'>
          <Home />
          <ClientsContainer/>
          <About />
          <Footer />
        </div>
    );
  }
};

export default App;
