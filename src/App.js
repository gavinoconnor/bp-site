import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import About from './components/About';
import Clients from './components/Clients';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className='container'>
        <Home />
        <Clients />
        <About />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
