import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';

import About from './components/About/About';
import Clients from './containers/Clients/Clients';
import Navbar from './containers/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <header className="App-header">
          <p>
            <em>Hello. A creative leader from Brooklyn, Brian has been crafting and sharing the conceptual stories of consumer brands, professional services companies, and nonprofit organizations for over fifteen years. Request a full portfolio <Link to='/'>here.</Link></em>
          </p>
          <About />
          <Clients />
        </header>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
