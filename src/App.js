import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import About from './components/About/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className='container'>
        <Home />
        <About />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
