import React from 'react';

const Home = () => {
  return (
    <div className='home-container'>
      <p className='home-name'>Brian Ponto</p>
      <p className='home-text'>
        Hello. A creative leader from Brooklyn, Brian has been crafting and sharing the conceptual stories of consumer brands, professional services companies, and nonprofit organizations for over fifteen years. Request a full portfolio <a href='mailto:bp@brianponto.com?subject=Portfolio Request'>here.</a>
        {/* TODO: link to form email with subject "Portfolio Request" */}
      </p>
    </div>
  );
};

export default Home;
