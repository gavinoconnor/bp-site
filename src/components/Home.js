import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home-container'>
      <p className='home-text'>
        Hello. A creative leader from Brooklyn, Brian has been crafting and sharing the conceptual stories of consumer brands, professional services companies, and nonprofit organizations for over fifteen years. Request a full portfolio <Link to='/'>here.</Link>
        {/* TODO: link to form email with subject "Portfolio Request" */}
      </p>
    </div>
  );
};

export default Home;
